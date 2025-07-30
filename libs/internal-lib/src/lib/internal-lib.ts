import { externalPackage } from '@nx-bugs/external-package'

export function internalLib(): string {
  return 'internal-lib';
}

export function internalLibAndExternalPackage(): string {
  return `${internalLib()} and ${externalPackage()}`
}
