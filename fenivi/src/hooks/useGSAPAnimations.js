import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Hook for scroll-triggered fade-in animations
 * @param {string} selector - CSS selector for elements to animate
 * @param {number} delay - Stagger delay between elements (default: 0.1)
 */
export const useFadeInOnScroll = (selector, delay = 0.1) => {
  useEffect(() => {
    const elements = gsap.utils.toArray(selector);

    elements.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * delay,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'top 50%',
            scrub: false,
            markers: false,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [selector, delay]);
};

/**
 * Hook for scroll-triggered scale-in animations
 */
export const useScaleInOnScroll = (selector, delay = 0.1) => {
  useEffect(() => {
    const elements = gsap.utils.toArray(selector);

    elements.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          scale: 0.9,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: index * delay,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            end: 'top 50%',
            scrub: false,
            markers: false,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [selector, delay]);
};

/**
 * Hook for scroll-triggered slide animations
 */
export const useSlideInOnScroll = (selector, direction = 'up', delay = 0.1) => {
  useEffect(() => {
    const elements = gsap.utils.toArray(selector);

    const getTransform = (dir) => {
      switch (dir) {
        case 'up':
          return { y: 50 };
        case 'left':
          return { x: -50 };
        case 'right':
          return { x: 50 };
        default:
          return { y: 50 };
      }
    };

    elements.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          ...getTransform(direction),
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.8,
          delay: index * delay,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            end: 'top 50%',
            scrub: false,
            markers: false,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [selector, direction, delay]);
};

/**
 * Hook for entrance animations on page load
 */
export const useEntranceAnimation = (selector, duration = 0.8, delay = 0) => {
  useEffect(() => {
    gsap.fromTo(
      selector,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease: 'power2.out',
      }
    );
  }, [selector, duration, delay]);
};

/**
 * Hook for staggered entrance animations
 */
export const useStaggeredEntrance = (selector, duration = 0.6, staggerDelay = 0.1) => {
  useEffect(() => {
    gsap.fromTo(
      selector,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration,
        stagger: staggerDelay,
        ease: 'power2.out',
      }
    );
  }, [selector, duration, staggerDelay]);
};

/**
 * Hook for hover animations
 */
export const useHoverAnimation = (selector, animationProps = {}) => {
  useEffect(() => {
    const elements = gsap.utils.toArray(selector);

    elements.forEach((el) => {
      // Default hover animation
      const defaultProps = {
        y: -8,
        boxShadow: '0 10px 30px rgba(124, 58, 237, 0.2)',
      };

      const finalProps = { ...defaultProps, ...animationProps };

      el.addEventListener('mouseenter', () => {
        gsap.to(el, {
          ...finalProps,
          duration: 0.3,
          ease: 'power2.out',
        });
      });

      el.addEventListener('mouseleave', () => {
        gsap.to(el, {
          y: 0,
          boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
          duration: 0.3,
          ease: 'power2.out',
        });
      });
    });
  }, [selector, animationProps]);
};

/**
 * Hook for parallax scroll effect
 */
export const useParallax = (selector, speed = 0.5) => {
  useEffect(() => {
    const elements = gsap.utils.toArray(selector);

    elements.forEach((el) => {
      gsap.to(el, {
        y: () => {
          const rect = el.getBoundingClientRect();
          const scrollProgress = (window.innerHeight - rect.top) / window.innerHeight;
          return scrollProgress * 100 * speed * -1;
        },
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
          markers: false,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [selector, speed]);
};

/**
 * Hook for text animation
 */
export const useTextAnimation = (selector, duration = 0.5) => {
  useEffect(() => {
    gsap.fromTo(
      selector,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: selector,
          start: 'top 85%',
          end: 'top 50%',
          scrub: false,
          markers: false,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [selector, duration]);
};

/**
 * Hook for button click animations
 */
export const useClickAnimation = (selector) => {
  useEffect(() => {
    const elements = gsap.utils.toArray(selector);

    elements.forEach((el) => {
      el.addEventListener('click', function (e) {
        gsap.to(this, {
          scale: 0.95,
          duration: 0.1,
          yoyo: true,
          repeat: 1,
        });
      });
    });
  }, [selector]);
};
