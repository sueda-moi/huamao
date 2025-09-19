import { useLocaleStore } from '@/store/useLocaleStore';
import type { MessageFile } from '@/store/useLocaleStore';
import { useCallback } from 'react'; 

// useMessage.ts
export function useMessage() {
  const { messages } = useLocaleStore();

  // Step 2: Wrap the function you want to stabilize in useCallback.
  // This ensures the getMessage function is not recreated on every render.
  const getMessage = useCallback((file: MessageFile, key: string): any => {
    return messages[file]?.[key] || null;
  }, [messages]); // Step 3: Tell useCallback to only recreate the function if 'messages' changes.

  return getMessage; // Step 4: Return the stable, memoized function.
}