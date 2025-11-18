interface ProgressBarProps {
  currentStep: number
  totalSteps: number
}

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const percentage = (currentStep / totalSteps) * 100

  return (
    <div className="mb-8">
      {/* Header com badges neobrutalism */}
      <div className="flex justify-between items-center mb-4 gap-3">
        <div className="bg-yellow-400 border-4 border-black px-4 py-2 shadow-[4px_4px_0_0_#000]">
          <span className="text-sm font-black text-black uppercase">
            Passo {currentStep} de {totalSteps}
          </span>
        </div>
        <div className="bg-lime-400 border-4 border-black px-4 py-2 shadow-[4px_4px_0_0_#000]">
          <span className="text-sm font-black text-black uppercase">
            {Math.round(percentage)}% ✓
          </span>
        </div>
      </div>

      {/* Barra de progresso neobrutalism */}
      <div className="w-full bg-white border-4 border-black h-8 shadow-[4px_4px_0_0_#000]">
        <div
          className="bg-gradient-to-r from-cyan-400 to-lime-400 border-r-4 border-black h-full transition-all duration-500 ease-out flex items-center justify-end pr-2"
          style={{ width: `${percentage}%` }}
        >
          {percentage > 15 && (
            <span className="text-xs font-black text-black">▶</span>
          )}
        </div>
      </div>
    </div>
  )
}
