import { useEffect } from 'react';

export default function useMounted(effect: any): void {
  useEffect(effect, []);
}
