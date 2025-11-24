import {useIntersectionObserver} from "@vueuse/core";

export const LazyDirective = {
  mounted(el: HTMLImageElement,binding:{value: string}) {
    // console.log(el,binding.value);
    const {stop} = useIntersectionObserver(
      el,
      (entries) => {
        const entry = entries[0]
        // console.log(entry?.isIntersecting)
        if(entry && entry.isIntersecting){
          el.src = binding.value
          stop()
        }
      },
      {
        threshold: 0.1,
      }
    )
  }
}
