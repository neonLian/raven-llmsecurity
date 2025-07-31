import { useEffect, useState } from 'react'
import '@mantine/core/styles.css';
import './App.css';
import styles from './App.module.css'

import { MantineProvider } from '@mantine/core'
import Hero from './Hero'
import { PentestConfigPanel } from './PentestConfigPanel/PentestConfigPanel';
import Footer from './Footer';
import PentestLoading from './PentestLoading/PentestLoading';
import PentestResults from './PentestResults/PentestResults';
import { fetchTestResults } from './utility/fetchTests';
import type { TestResult } from './utility/testResult';

const PentestStatus = {
  NotStarted: 'NotStarted',
  InProgress: 'InProgress',
  Finished: 'Finished'
} as const;

type PentestStatus = typeof PentestStatus[keyof typeof PentestStatus];

function App() {
  const [pentestStatus, setPentestStatus] = useState<PentestStatus>(PentestStatus.NotStarted);
  const [testResults, setTestResults] = useState<TestResult[] | undefined>(undefined);

  const handleStartPentest = async (selectedLevel: number, objective: string) => {
    setPentestStatus(PentestStatus.InProgress);
    const newTestResults = await fetchTestResults(selectedLevel, objective);
    if (newTestResults)
      setTestResults(newTestResults);
    setPentestStatus(PentestStatus.Finished);
  };

  return (
    <MantineProvider>
      <div className={styles.content}>
        <Hero />
        <PentestConfigPanel onStartPentest={handleStartPentest} />
        { (pentestStatus == PentestStatus.NotStarted || pentestStatus == PentestStatus.InProgress) &&
          <PentestLoading isVisible={pentestStatus === PentestStatus.InProgress} />}
        <PentestResults isVisible={pentestStatus === PentestStatus.Finished} testResults={testResults} />
        <Footer />
      </div>
    </MantineProvider>
    
  )
}

export default App
