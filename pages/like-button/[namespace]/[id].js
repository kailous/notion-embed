import { LikeButton } from "@lyket/react";
import { useRouter } from "next/router";

export default function Button() {
  const router = useRouter();
  const { namespace, id } = router.query;

  return <><h4>给我点个赞吧!</h4><LikeButton namespace={namespace} id={id} />❤️</LikeButton></>;

}
