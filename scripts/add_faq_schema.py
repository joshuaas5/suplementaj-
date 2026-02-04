import re

# Adicionar FAQ Schema ao artigo

with open('app/blog/[slug]/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Adicionar FAQ schema apos o breadcrumb schema
faq_schema_code = '''
  // FAQ Schema (se o artigo tiver FAQs)
  const faqSchema = (() => {
    const faqBloco = artigo.conteudo.find(b => b.tipo === 'faq')
    if (!faqBloco || faqBloco.tipo !== 'faq') return null
    
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqBloco.perguntas?.map(faq => ({
        '@type': 'Question',
        name: faq.pergunta,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.resposta
        }
      }))
    }
  })()

'''

# Encontrar onde inserir (apos breadcrumbSchema)
if 'faqSchema' not in content:
    # Inserir apos o breadcrumbSchema
    insert_point = '''  }

  return ('''
    
    new_insert = faq_schema_code + '''  return ('''
    
    if insert_point in content:
        content = content.replace(insert_point, new_insert)
        
        # Adicionar o script do FAQ schema
        old_scripts = '''      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />'''
        
        new_scripts = '''      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}'''
        
        content = content.replace(old_scripts, new_scripts)
        
        with open('app/blog/[slug]/page.tsx', 'w', encoding='utf-8') as f:
            f.write(content)
        
        print("FAQ Schema adicionado com sucesso!")
    else:
        print("Ponto de insercao nao encontrado")
else:
    print("FAQ Schema ja existe!")
