import { useEffect } from 'react';

export default function PerformanceMonitor() {
  useEffect(() => {
    // Web Vitals monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Largest Contentful Paint (LCP)
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
        });
      });

      try {
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch {
        // Fallback for browsers that don't support LCP
        console.log('LCP monitoring not supported');
      }

      // Monitor First Input Delay (FID) and Cumulative Layout Shift (CLS)
      const vitalsObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'first-input') {
            const fidEntry = entry as PerformanceEntry & { processingStart: number };
            console.log('FID:', fidEntry.processingStart - fidEntry.startTime);
          }
          if (entry.entryType === 'layout-shift') {
            const clsEntry = entry as PerformanceEntry & { hadRecentInput: boolean; value: number };
            if (!clsEntry.hadRecentInput) {
              console.log('CLS:', clsEntry.value);
            }
          }
        });
      });

      try {
        vitalsObserver.observe({ entryTypes: ['first-input', 'layout-shift'] });
      } catch {
        console.log('FID/CLS monitoring not supported');
      }

      // Cleanup
      return () => {
        observer.disconnect();
        vitalsObserver.disconnect();
      };
    }
  }, []);

  return null; // This component doesn't render anything
}
