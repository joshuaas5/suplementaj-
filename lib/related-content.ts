// Mapeamento de relacionamentos entre artigos e nutrientes
// Usado para exibir conteúdo relacionado automaticamente

export const artigoToNutrientes: Record<string, string[]> = {
  'vitamina-d-deficiencia-brasileiros': ['vitamina-d', 'calcio', 'magnesio'],
  'vitamina-b12-vegetarianos-veganos': ['vitamina-b12', 'ferro', 'zinco'],
  'omega-3-beneficios-comprovados': ['omega-3', 'vitamina-d', 'vitamina-e'],
  'ferro-anemia-deficiencia-tratamento': ['ferro', 'vitamina-c', 'vitamina-b12'],
  'zinco-imunidade-testosterona-pele': ['zinco', 'selenio', 'vitamina-d'],
  'magnesio-ansiedade-sono-tipos': ['magnesio', 'vitamina-b6', 'vitamina-d'],
  'creatina-guia-completo-ganho-muscular': ['creatina', 'proteina', 'vitamina-d'],
  'colageno-hidrolisado-funciona-pele-articulacoes': ['colageno', 'vitamina-c', 'biotina'],
  'vitamina-c-imunidade-gripes-resfriados': ['vitamina-c', 'zinco', 'vitamina-d'],
  'calcio-ossos-osteoporose-qual-tomar': ['calcio', 'vitamina-d', 'vitamina-k2', 'magnesio'],
  'biotina-cabelo-unhas-dose-funciona': ['biotina', 'zinco', 'vitamina-c'],
  'ashwagandha-estresse-ansiedade-cortisol': ['ashwagandha', 'magnesio', 'vitamina-b6'],
  'melatonina-sono-insonia-dose-ideal': ['melatonina', 'magnesio', 'vitamina-b6'],
  'probioticos-intestino-flora-intestinal': ['probioticos', 'vitamina-d', 'zinco'],
  'vitamina-k2-d3-calcio-ossos-coracao': ['vitamina-k2', 'vitamina-d', 'calcio'],
  'iodo-tireoide-hipotireoidismo-dose': ['iodo', 'selenio', 'zinco'],
  'selenio-tireoide-imunidade-antioxidante': ['selenio', 'iodo', 'vitamina-e'],
  'vitamina-e-antioxidante-pele-fertilidade': ['vitamina-e', 'vitamina-c', 'selenio'],
  'curcuma-curcumina-inflamacao-articulacoes': ['curcuma', 'omega-3', 'vitamina-d'],
  'spirulina-superalimento-proteina-vegana': ['spirulina', 'vitamina-b12', 'ferro'],
  'maca-peruana-libido-energia-hormônios': ['maca-peruana', 'zinco', 'vitamina-d'],
  'tribulus-terrestris-testosterona-libido': ['tribulus', 'zinco', 'maca-peruana'],
  'zma-zinco-magnesio-b6-sono-testosterona': ['zinco', 'magnesio', 'vitamina-b6'],
  'bcaa-aminoacidos-massa-muscular-funciona': ['bcaa', 'proteina', 'creatina'],
  'glucosamina-condroitina-articulacoes-artrite': ['glucosamina', 'colageno', 'vitamina-c'],
  'coenzima-q10-coq10-energia-coracao': ['coenzima-q10', 'magnesio', 'omega-3'],
  'acido-folico-b9-gestantes-gravidez': ['acido-folico', 'ferro', 'vitamina-b12'],
  'vitamina-a-retinol-visao-pele-imunidade': ['vitamina-a', 'vitamina-d', 'zinco'],
  'l-carnitina-queima-gordura-performance': ['l-carnitina', 'creatina', 'cafeina'],
  'cafeina-performance-dose-pre-treino': ['cafeina', 'creatina', 'beta-alanina'],
  'guia-completo-creatina-2026': ['creatina', 'proteina', 'vitamina-d'],
  'whey-isolado-vs-concentrado': ['proteina', 'creatina', 'bcaa'],
}

export const nutrienteToArtigos: Record<string, string[]> = {
  'vitamina-d': ['vitamina-d-deficiencia-brasileiros', 'calcio-ossos-osteoporose-qual-tomar', 'vitamina-k2-d3-calcio-ossos-coracao'],
  'vitamina-b12': ['vitamina-b12-vegetarianos-veganos', 'ferro-anemia-deficiencia-tratamento', 'acido-folico-b9-gestantes-gravidez'],
  'omega-3': ['omega-3-beneficios-comprovados', 'curcuma-curcumina-inflamacao-articulacoes', 'coenzima-q10-coq10-energia-coracao'],
  'ferro': ['ferro-anemia-deficiencia-tratamento', 'vitamina-b12-vegetarianos-veganos', 'spirulina-superalimento-proteina-vegana'],
  'zinco': ['zinco-imunidade-testosterona-pele', 'vitamina-c-imunidade-gripes-resfriados', 'zma-zinco-magnesio-b6-sono-testosterona'],
  'magnesio': ['magnesio-ansiedade-sono-tipos', 'zma-zinco-magnesio-b6-sono-testosterona', 'melatonina-sono-insonia-dose-ideal'],
  'creatina': ['creatina-guia-completo-ganho-muscular', 'guia-completo-creatina-2026', 'l-carnitina-queima-gordura-performance'],
  'colageno': ['colageno-hidrolisado-funciona-pele-articulacoes', 'glucosamina-condroitina-articulacoes-artrite', 'biotina-cabelo-unhas-dose-funciona'],
  'vitamina-c': ['vitamina-c-imunidade-gripes-resfriados', 'colageno-hidrolisado-funciona-pele-articulacoes', 'ferro-anemia-deficiencia-tratamento'],
  'calcio': ['calcio-ossos-osteoporose-qual-tomar', 'vitamina-d-deficiencia-brasileiros', 'vitamina-k2-d3-calcio-ossos-coracao'],
  'biotina': ['biotina-cabelo-unhas-dose-funciona', 'colageno-hidrolisado-funciona-pele-articulacoes'],
  'vitamina-k2': ['vitamina-k2-d3-calcio-ossos-coracao', 'calcio-ossos-osteoporose-qual-tomar'],
  'iodo': ['iodo-tireoide-hipotireoidismo-dose', 'selenio-tireoide-imunidade-antioxidante'],
  'selenio': ['selenio-tireoide-imunidade-antioxidante', 'iodo-tireoide-hipotireoidismo-dose', 'vitamina-e-antioxidante-pele-fertilidade'],
  'vitamina-e': ['vitamina-e-antioxidante-pele-fertilidade', 'omega-3-beneficios-comprovados', 'selenio-tireoide-imunidade-antioxidante'],
  'proteina': ['proteina-por-dia-quanto-consumir-guia-completo', 'whey-isolado-vs-concentrado', 'bcaa-aminoacidos-massa-muscular-funciona'],
  'cafeina': ['cafeina-performance-dose-pre-treino', 'l-carnitina-queima-gordura-performance'],
  'vitamina-b6': ['magnesio-ansiedade-sono-tipos', 'zma-zinco-magnesio-b6-sono-testosterona', 'melatonina-sono-insonia-dose-ideal'],
  'acido-folico': ['acido-folico-b9-gestantes-gravidez', 'ferro-anemia-deficiencia-tratamento'],
  'vitamina-a': ['vitamina-a-retinol-visao-pele-imunidade', 'vitamina-d-deficiencia-brasileiros'],
}

// Função helper para buscar nutrientes relacionados a um artigo
export function getNutrientesRelacionados(artigoSlug: string): string[] {
  return artigoToNutrientes[artigoSlug] || []
}

// Função helper para buscar artigos relacionados a um nutriente
export function getArtigosRelacionados(nutrienteSlug: string): string[] {
  return nutrienteToArtigos[nutrienteSlug] || []
}
