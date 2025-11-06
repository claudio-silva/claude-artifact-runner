import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, ChevronRight, Calculator, Grid } from 'lucide-react';

const MOD = 123456789;
const N = 6;

// 矩阵乘法
function multMatrix(a, b) {
  const c = Array(N).fill(null).map(() => Array(N).fill(0));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      for (let k = 0; k < N; k++) {
        c[i][j] = (c[i][j] + (a[i][k] * b[k][j]) % MOD) % MOD;
      }
    }
  }
  return c;
}

// 矩阵快速幂
function matrixPow(a, exp) {
  let res = Array(N).fill(null).map(() => Array(N).fill(0));
  for (let i = 0; i < N; i++) {
    res[i][i] = 1;
  }
  
  while (exp > 0) {
    if (exp & 1) {
      res = multMatrix(res, a);
    }
    a = multMatrix(a, a);
    exp >>= 1;
  }
  return res;
}

// 矩阵向量乘法
function matrixVectorMult(m, v) {
  const res = Array(N).fill(0);
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      res[i] = (res[i] + (m[i][j] * v[j]) % MOD) % MOD;
    }
  }
  return res;
}

const CowNumberingVisualizer = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [inputN, setInputN] = useState(6);
  const [animationSpeed, setAnimationSpeed] = useState(1000);
  
  // 状态转移矩阵
  const transitionMatrix = [
    [1, 2, 1, 3, 3, 1],
    [1, 0, 0, 0, 0, 0],
    [0, 0, 1, 3, 3, 1],
    [0, 0, 0, 1, 2, 1],
    [0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 1]
  ];
  
  // 初始状态向量 [F(2), F(1), 2^3, 2^2, 2^1, 2^0]
  const initialState = [2, 1, 8, 4, 2, 1];
  
  const steps = [
    {
      title: "问题理解",
      description: "递推关系：F[n] = F[n-2]*2 + F[n-1] + n³",
      content: "F[1] = 1, F[2] = 2\n当 n ≥ 3 时：F[n] = F[n-2]*2 + F[n-1] + n³"
    },
    {
      title: "矩阵建模",
      description: "将递推关系转换为矩阵形式",
      content: "状态向量：[F(n), F(n-1), n³, n², n¹, n⁰]\n通过状态转移矩阵实现递推"
    },
    {
      title: "状态转移矩阵",
      description: "构造6×6转移矩阵",
      content: "矩阵的每一行定义如何从当前状态计算下一状态"
    },
    {
      title: "矩阵快速幂",
      description: "使用快速幂算法加速计算",
      content: "将O(n)的递推优化为O(log n)的矩阵快速幂"
    },
    {
      title: "计算结果",
      description: "应用矩阵快速幂得到最终答案",
      content: "Matrix^(n-2) × InitialState = FinalState"
    }
  ];

  // 计算具体例子
  const calculateExample = (n) => {
    if (n === 1) return 1;
    if (n === 2) return 2;
    
    const k = n - 2;
    const matPow = matrixPow(transitionMatrix.map(row => [...row]), k);
    const result = matrixVectorMult(matPow, initialState);
    return result[0];
  };

  // 动画控制
  useEffect(() => {
    let interval;
    if (isPlaying && currentStep < steps.length - 1) {
      interval = setInterval(() => {
        setCurrentStep(prev => prev + 1);
      }, animationSpeed);
    } else if (currentStep >= steps.length - 1) {
      setIsPlaying(false);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentStep, animationSpeed]);

  const handlePlay = () => setIsPlaying(!isPlaying);
  const handleReset = () => {
    setCurrentStep(0);
    setIsPlaying(false);
  };

  const MatrixDisplay = ({ matrix, highlight = false }) => (
    <div className={`inline-block p-3 rounded-lg border-2 ${highlight ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}>
      <div className="grid grid-cols-6 gap-1 text-xs">
        {matrix.map((row, i) => 
          row.map((val, j) => (
            <div key={`${i}-${j}`} className="w-8 h-8 flex items-center justify-center bg-white border rounded text-center">
              {val}
            </div>
          ))
        )}
      </div>
    </div>
  );

  const VectorDisplay = ({ vector, label, highlight = false }) => (
    <div className={`inline-block p-2 rounded-lg border ${highlight ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}>
      <div className="text-sm font-semibold mb-1">{label}</div>
      <div className="flex flex-col gap-1">
        {vector.map((val, i) => (
          <div key={i} className="w-12 h-6 flex items-center justify-center bg-white border rounded text-xs">
            {val}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">
          🐄 奶牛编号算法可视化
        </h1>
        <p className="text-center text-gray-600 mb-4">
          递推关系：F[n] = F[n-2]*2 + F[n-1] + n³ 的矩阵快速幂解法
        </p>
        
        {/* 控制面板 */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <button
            onClick={handlePlay}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            {isPlaying ? '暂停' : '播放'}
          </button>
          
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            <RotateCcw size={16} />
            重置
          </button>
          
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">动画速度:</label>
            <select
              value={animationSpeed}
              onChange={(e) => setAnimationSpeed(parseInt(e.target.value))}
              className="px-3 py-1 border rounded-lg"
            >
              <option value={2000}>慢</option>
              <option value={1000}>中</option>
              <option value={500}>快</option>
            </select>
          </div>
          
          <div className="flex items-center gap-2">
            <label className="text-sm font-medium">计算 n =</label>
            <input
              type="number"
              value={inputN}
              onChange={(e) => setInputN(parseInt(e.target.value))}
              className="w-16 px-2 py-1 border rounded-lg text-center"
              min="3"
              max="100"
            />
          </div>
        </div>

        {/* 步骤指示器 */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2">
            {steps.map((_, index) => (
              <React.Fragment key={index}>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold cursor-pointer transition-colors ${
                    index <= currentStep
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-300 text-gray-600'
                  }`}
                  onClick={() => setCurrentStep(index)}
                >
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <ChevronRight
                    size={16}
                    className={index < currentStep ? 'text-blue-500' : 'text-gray-300'}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* 主要内容区域 */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 左侧：当前步骤说明 */}
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-lg">
              <h2 className="text-xl font-bold mb-2">
                步骤 {currentStep + 1}: {steps[currentStep].title}
              </h2>
              <p className="text-blue-100">{steps[currentStep].description}</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">详细说明:</h3>
              <pre className="text-sm whitespace-pre-wrap font-mono">
                {steps[currentStep].content}
              </pre>
            </div>

            {/* 示例计算 */}
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Calculator size={16} />
                示例计算 (n = {inputN}):
              </h3>
              <div className="text-sm space-y-1">
                <div>F[{inputN}] = {calculateExample(inputN)}</div>
                <div className="text-gray-600">
                  模 {MOD} = {calculateExample(inputN) % MOD}
                </div>
              </div>
            </div>
          </div>

          {/* 右侧：可视化区域 */}
          <div className="space-y-4">
            {currentStep >= 2 && (
              <div className="text-center">
                <h3 className="font-semibold mb-3 flex items-center justify-center gap-2">
                  <Grid size={16} />
                  状态转移矩阵
                </h3>
                <MatrixDisplay 
                  matrix={transitionMatrix} 
                  highlight={currentStep === 2} 
                />
              </div>
            )}

            {currentStep >= 1 && (
              <div className="flex justify-center gap-4">
                <VectorDisplay
                  vector={initialState}
                  label="初始状态"
                  highlight={currentStep === 1}
                />
                
                {currentStep >= 4 && (
                  <>
                    <div className="flex items-center text-2xl font-bold text-gray-400">×</div>
                    <VectorDisplay
                      vector={[calculateExample(inputN), 0, 0, 0, 0, 0]}
                      label="结果"
                      highlight={currentStep === 4}
                    />
                  </>
                )}
              </div>
            )}

            {/* 复杂度比较 */}
            {currentStep >= 3 && (
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">算法复杂度:</h3>
                <div className="text-sm space-y-1">
                  <div>朴素递推: O(n) 时间，O(1) 空间</div>
                  <div className="text-green-600 font-semibold">
                    矩阵快速幂: O(log n) 时间，O(1) 空间
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 底部：测试用例验证 */}
        <div className="mt-6 pt-6 border-t">
          <h3 className="font-semibold mb-3">测试用例验证:</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[3, 6, 9, 12, 15].map(n => (
              <div key={n} className="bg-gray-50 p-3 rounded-lg text-center">
                <div className="font-semibold">n = {n}</div>
                <div className="text-sm text-gray-600">
                  F[{n}] = {calculateExample(n)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 代码展示 */}
      <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
        <h2 className="text-xl font-bold mb-4">完整代码实现:</h2>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
{`def solve_cow_numbering(n):
    MOD = 123456789
    
    # 状态转移矩阵
    mat = [
        [1, 2, 1, 3, 3, 1],
        [1, 0, 0, 0, 0, 0],
        [0, 0, 1, 3, 3, 1],
        [0, 0, 0, 1, 2, 1],
        [0, 0, 0, 0, 1, 1],
        [0, 0, 0, 0, 0, 1]
    ]
    
    # 初始状态 [F(2), F(1), 2³, 2², 2¹, 2⁰]
    initial = [2, 1, 8, 4, 2, 1]
    
    # 矩阵快速幂
    result_matrix = matrix_power(mat, n - 2)
    
    # 矩阵向量乘法
    result = matrix_vector_mult(result_matrix, initial)
    
    return result[0] % MOD`}
        </pre>
      </div>
    </div>
  );
};

export default CowNumberingVisualizer;