import { signOut } from "@/shared/utils/auth";
import { Button } from "@/widgets/ui";

interface GeoAccessMessageProps {
  message: string;
  description?: string;
  showSignout?: boolean;
  showReloadButton?: boolean;
}

export const GeoAccessMessage = ({
  message,
  description,
  showReloadButton = true,
  showSignout = false,
}: GeoAccessMessageProps) => (
  <div className="flex h-screen items-center justify-center">
    <div className="space-y-2 text-center">
      <h1 className="whitespace-pre-line text-2xl font-bold">{message}</h1>
      {description && <p className="text-sm text-gray-500">{description}</p>}
      <div className="flex justify-center gap-2">
        {showReloadButton && (
          <Button
            variant="outline"
            onClick={() => {
              window.location.reload();
            }}
          >
            다시 시도
          </Button>
        )}
        {showSignout && (
          <Button variant="destructive" onClick={signOut}>
            로그아웃
          </Button>
        )}
      </div>
    </div>
  </div>
);
