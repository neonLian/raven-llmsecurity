import type { TestResult } from "./testResult";

export async function fetchTestResults(selectedLevel: number, objective: string) {
  
  try {
    const response = await fetch(`http://localhost:8000/test_gandalf?gandalf_level=${selectedLevel}&objective=${encodeURIComponent(objective)}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Transform backend data to frontend format
    const transformedResults: TestResult[] = data.map((result: {
      strategy: string;
      status: string;
      adversarial_messages: string[];
      target_messages: string[];
    }) => ({
      testPassed: result.status === 'failure',
      testName: result.strategy.replace('AttackStrategy.', '').replace('_', ' '),
      adversarialPrompt: result.adversarial_messages[0] || '',
      targetResponse: result.target_messages[0] || ''
    }));
    
    return transformedResults;
  } catch (err) {
    console.error('Error fetching test results:', err);
    return undefined;
  }
};