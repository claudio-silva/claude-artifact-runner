// @ts-nocheck
import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertTitle } from '@/components/ui/alert';
import { Clock, Save, Copy, Download, Play, Square } from 'lucide-react';

interface ApgarScore {
  timeMinutes: number;
  total: number;
  scores: {
    appearance: number;
    pulse: number;
    grimace: number;
    activity: number;
    respiration: number;
  };
}

const ApgarCalculator = () => {
  const [timer, setTimer] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [scores, setScores] = useState<ApgarScore['scores']>({
    appearance: 0,
    pulse: 0,
    grimace: 0,
    activity: 0,
    respiration: 0
  });
  const [savedScores, setSavedScores] = useState<ApgarScore[]>([]);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>('');

  const criteria = {
    appearance: [
      { score: 0, desc: 'כחול או חיוור' },
      { score: 1, desc: 'גוף ורוד, גפיים כחולות' },
      { score: 2, desc: 'ורוד לחלוטין' }
    ],
    pulse: [
      { score: 0, desc: 'ללא דופק' },
      { score: 1, desc: 'פחות מ-100 פעימות לדקה' },
      { score: 2, desc: 'מעל 100 פעימות לדקה' }
    ],
    grimace: [
      { score: 0, desc: 'אין תגובה לגירוי' },
      { score: 1, desc: 'עיוות פנים' },
      { score: 2, desc: 'שיעול או התעטשות' }
    ],
    activity: [
      { score: 0, desc: 'רפוי' },
      { score: 1, desc: 'כיפוף מועט של גפיים' },
      { score: 2, desc: 'תנועה פעילה' }
    ],
    respiration: [
      { score: 0, desc: 'לא נושם' },
      { score: 1, desc: 'חלשה או לא סדירה' },
      { score: 2, desc: 'טובה, בוכה' }
    ]
  };

  const hebrewNames = {
    appearance: 'צבע',
    pulse: 'דופק',
    grimace: 'רפלקסים',
    activity: 'טונוס שרירים',
    respiration: 'נשימה'
  };

  const playSound = () => {
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/fPgzEGJHfH9OaVQggUXrTp66lwFw1Fn937x3gdBCx8zPTblT4HGWu/8OihUw0PVarp97hxHQY6ldn50YYyBSV6yfbpmEIHFGG16u2tdBgNSKHf+8p7HwQtf873IBg=');
    audio.play();
  };

  const checkTimeAlerts = useCallback((currentTime: number) => {
    const alertTimes = [1, 5, 10, 15, 20];
    if (alertTimes.includes(currentTime)) {
      setAlertMessage(`${currentTime} דקות חלפו - האם ברצונך לשמור את הציון?`);
      setShowAlert(true);
      playSound();
    }
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setTimer(prev => {
          const newTime = prev + 1;
          checkTimeAlerts(Math.floor(newTime / 60));
          return newTime;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, checkTimeAlerts]);

  const calculateTotal = (): number => {
    return Object.values(scores).reduce((a, b) => a + b, 0);
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleScoreChange = (category: keyof typeof scores, value: number) => {
    setScores(prev => ({
      ...prev,
      [category]: value
    }));
  };

  const saveScore = () => {
    const newScore: ApgarScore = {
      timeMinutes: Math.floor(timer / 60),
      total: calculateTotal(),
      scores: { ...scores }
    };
    setSavedScores(prev => [...prev, newScore]);
    setShowAlert(false);
  };

  const copyToClipboard = () => {
    const text = savedScores.map(score => 
      `זמן: ${score.timeMinutes} דקות, ציון כולל: ${score.total}/10`
    ).join('\n');
    navigator.clipboard.writeText(text);
  };

  const downloadPDF = () => {
    const text = savedScores.map(score => 
      `זמן: ${score.timeMinutes} דקות, ציון כולל: ${score.total}/10`
    ).join('\n');
    
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'apgar-summary.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-white">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">מחשבון ציון אפגר</CardTitle>
        <div className="flex justify-center items-center gap-4 mt-4">
          <div className="text-xl font-mono">{formatTime(timer)}</div>
          <Button
            onClick={() => setIsRunning(!isRunning)}
            variant="outline"
            size="icon"
          >
            {isRunning ? <Square className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
          <Button
            onClick={() => {
              setTimer(0);
              setIsRunning(false);
            }}
            variant="outline"
            size="icon"
          >
            <Clock className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {showAlert && (
          <Alert className="mb-4">
            <AlertTitle>{alertMessage}</AlertTitle>
            <Button onClick={saveScore} className="mt-2">
              שמור ציון
            </Button>
          </Alert>
        )}

        <div className="grid gap-4 md:grid-cols-2">
          {Object.entries(criteria).map(([category, options]) => (
            <div key={category} className="space-y-2">
              <h3 className="font-semibold">{hebrewNames[category as keyof typeof hebrewNames]}</h3>
              <div className="flex flex-col gap-2">
                {options.map((option) => (
                  <button
                    key={option.score}
                    onClick={() => handleScoreChange(category as keyof typeof scores, option.score)}
                    className={`p-2 rounded text-sm ${
                      scores[category as keyof typeof scores] === option.score
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    {option.desc}
                    <div className="font-bold mt-1">{option.score}</div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 rounded bg-gray-50 text-center">
          <div className="text-xl font-bold">
            ציון סופי: {calculateTotal()}/10
          </div>
          <div className="flex justify-center gap-2 mt-4">
            <Button onClick={saveScore} className="flex gap-2">
              <Save className="h-4 w-4" />
              שמור ציון
            </Button>
            <Button onClick={copyToClipboard} variant="outline" className="flex gap-2">
              <Copy className="h-4 w-4" />
              העתק סיכום
            </Button>
            <Button onClick={downloadPDF} variant="outline" className="flex gap-2">
              <Download className="h-4 w-4" />
              הורד סיכום
            </Button>
          </div>
        </div>

        {savedScores.length > 0 && (
          <div className="mt-6">
            <h3 className="font-semibold mb-2">היסטוריית ציונים</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-right">זמן</th>
                    <th className="text-right">ציון</th>
                  </tr>
                </thead>
                <tbody>
                  {savedScores.map((score, index) => (
                    <tr key={index} className="border-t">
                      <td className="py-2">{score.timeMinutes} דקות</td>
                      <td className="py-2">{score.total}/10</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ApgarCalculator;