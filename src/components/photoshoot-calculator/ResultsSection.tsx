interface ResultsSectionProps {
  traditional: {
    costs: {
      total: number;
      breakdown: Record<string, number>;
    };
    time: {
      preProduction: number;
      shootTime: number;
      postProduction: number;
      coordination: number;
    };
    totalTime: number;
  };
  ai: {
    costs: {
      total: number;
      breakdown: Record<string, number>;
    };
    time: Record<string, number>;
    totalTime: number;
  };
  photoCount: number;
}

const ResultsSection = ({ traditional, ai, photoCount }: ResultsSectionProps) => {
  const savings = traditional.costs.total - ai.costs.total;
  const savingsPercentage = ((savings / traditional.costs.total) * 100).toFixed(1);
  const timeSaved = traditional.totalTime - ai.totalTime;

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h4 className="font-medium mb-2">Traditional</h4>
              <p className="text-2xl font-bold">${traditional.costs.total}</p>
              <p className="text-sm text-gray-500">
                ${(traditional.costs.total / photoCount).toFixed(0)} per photo
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">AI-Powered</h4>
              <p className="text-2xl font-bold text-green-600">${ai.costs.total}</p>
              <p className="text-sm text-gray-500">
                ${(ai.costs.total / photoCount).toFixed(0)} per photo
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="font-medium">Total Savings</p>
            <p className="text-3xl font-bold text-green-600">${savings}</p>
            <p className="text-sm text-gray-500">Save {savingsPercentage}% on your photoshoot</p>
          </div>

          <div className="border-t pt-4 mt-4">
            <p className="font-medium mb-2">Time Savings</p>
            <p className="text-xl font-bold text-blue-600">
              Save {timeSaved.toFixed(1)} hours
            </p>
            <p className="text-sm text-gray-500">
              Traditional: {traditional.totalTime.toFixed(1)} hours vs 
              AI: {ai.totalTime.toFixed(1)} hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsSection;