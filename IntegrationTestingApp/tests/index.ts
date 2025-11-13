/**
 * Main test entry point
 * Import and run all test suites here
 */

import { testRunner } from './testRunner';
import { runMnemonicTests } from './mnemonic.test';
import { runWalletTests } from './wallet.test';

export async function runAllTests() {
  console.log('\n🧪 Starting BDK Integration Tests...\n');

  try {
    // Run all test suites
    runMnemonicTests();
    runWalletTests();

    // Print summary
    const passed = testRunner.printSummary();

    return {
      passed,
      summary: testRunner.getSummary(),
    };
  } catch (error) {
    console.error('[TEST ERROR]', error);
    return {
      passed: false,
      error: error instanceof Error ? error.message : String(error),
    };
  }
}
