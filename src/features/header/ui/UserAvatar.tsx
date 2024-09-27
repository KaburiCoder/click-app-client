import { useAuth } from "@/shared/hooks/auth";
import { imgPaths, paths } from "@/shared/paths";
import { cn } from "@/shared/utils";
import { removeToken } from "@/shared/utils/cookies";
import { Button, Popover, PopoverContent, PopoverTrigger } from "@/widgets/ui";
import { useState } from "react";
interface UserAvatarProps {}
export function UserAvatar({}: UserAvatarProps) {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger>
          <img
            // onClick={() => setOpen(true)}
            className={cn(
              "m-1 h-11 w-11 rounded",
              "hover:cursor-pointer",
            )}
            src={imgPaths.logo.small}
            alt="user"
          />
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">{`${user?.name}(${user?.csUserId})`}</h4>
              <p className="text-sm text-muted-foreground">
                {`${user?.orgName} (${user?.hsUserId})`}
              </p>
            </div>
            <div className="grid gap-2">
              <Button
                onClick={() => {
                  removeToken();
                  window.location.href = paths.signIn;
                }}
                variant={"destructive"}
              >
                로그아웃
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
}
