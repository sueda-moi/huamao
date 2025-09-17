
import { useLocaleStore } from '@/store/useLocaleStore';
import type { MessageFile } from '@/store/useLocaleStore';

// useMessage.ts
export function useMessage() {
  const { messages } = useLocaleStore();

  return (file: MessageFile, key: string): any => { // 返回值类型设为 any 或 string | null | object
    return messages[file]?.[key] || null; // 找不到时返回 null
  };
}
