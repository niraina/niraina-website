import {
  Avatar as AvatarShadcn,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function Avatar() {
  return (
    <AvatarShadcn>
      <AvatarImage src="https://avatars.githubusercontent.com/u/77910897?v=4" alt="@niraina" />
      <AvatarFallback>NA</AvatarFallback>
    </AvatarShadcn>
  )
}
