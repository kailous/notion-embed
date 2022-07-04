import { ClapButton } from "@lyket/react";
import { useRouter } from "next/router";

export default function Button() {
  const router = useRouter();
  const { namespace, id } = router.query;
  const defaultTheme = {
    colors: {
      primary: '#38ff00',
      secondary: '#38ff00',
      background: 'transparent',
      text: '#292929',
      highlight: '#e095ed',
      icon: '#292929',
    },
    fonts: {
      body: 'inherit',
    },
  };
  return <ClapButton namespace={namespace} id={id} />;
}
