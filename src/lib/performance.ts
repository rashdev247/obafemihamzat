// Performance utilities for web vitals monitoring
export interface WebVitalsMetric {
  name: string;
  value: number;
  delta: number;
  id: string;
}

// Simplified performance monitoring without TypeScript errors
export function initPerformanceMonitoring() {
  if (typeof window === 'undefined') return;

  // Monitor Core Web Vitals
  const observer = new PerformanceObserver((list) => {
    list.getEntries().forEach((entry) => {
      // Log performance metrics for debugging (dev only)
      if (process.env.NODE_ENV === 'development') {
        console.log(`Performance: ${entry.entryType}`, {
          name: entry.name,
          startTime: entry.startTime,
          duration: entry.duration
        });
      }
    });
  });

  // Observe different performance entry types
  const entryTypes = ['navigation', 'resource', 'measure', 'mark'];
  
  entryTypes.forEach(type => {
    try {
      observer.observe({ entryTypes: [type] });
    } catch {
      if (process.env.NODE_ENV === 'development') {
        console.log(`Performance monitoring for ${type} not supported`);
      }
    }
  });

  return observer;
}

// Preload critical resources
export function preloadCriticalResources() {
  if (typeof window === 'undefined') return;

  const criticalImages: string[] = [];

  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
}

// Optimize images on the client side
export function optimizeImages() {
  if (typeof window === 'undefined') return;

  const images = document.querySelectorAll('img[data-optimize]');
  
  images.forEach((img: Element) => {
    const imageElement = img as HTMLImageElement;
    
    // Add loading="lazy" if not present
    if (!imageElement.loading) {
      imageElement.loading = 'lazy';
    }
    
    // Add decoding="async" for better performance
    imageElement.decoding = 'async';
  });
}
