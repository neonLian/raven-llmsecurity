export interface TestResult {
  testPassed: boolean;
  testName: string;
  adversarialPrompt: string;
  targetResponse: string;
}