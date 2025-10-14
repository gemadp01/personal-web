import { AlertCircle, CheckCircle, X } from "lucide-react";

type TToastProps = {
  type: boolean | undefined;
  message: string;
  onClose: () => void;
};

export const ToastNotification = ({ type, message, onClose }: TToastProps) => {
  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-in">
      <div
        className={`flex items-center gap-3 min-w-[300px] max-w-md p-4 rounded-lg shadow-lg ${
          type === true
            ? "bg-green-50 border border-green-200 text-green-800"
            : "bg-red-50 border border-red-200 text-red-800"
        }`}
      >
        {type === true ? (
          <CheckCircle className="w-5 h-5 flex-shrink-0" />
        ) : (
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
        )}
        <p className="flex-1 text-sm font-medium">{message}</p>
        <button
          onClick={onClose}
          className="flex-shrink-0 hover:opacity-70 transition"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
