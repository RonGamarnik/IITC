import { AspectRatio } from "./ui/aspect-ratio"

function Imgradio() {
  return (
<div className="w-[250px]">
  <AspectRatio ratio={16 / 9}>
    <img src="src\images\image3.jpg" alt="Image" className="rounded-md object-cover" />
  </AspectRatio>
</div>
  )
}

export default Imgradio