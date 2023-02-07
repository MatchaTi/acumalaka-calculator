export default function Button({ children, className = "bg-[#303136]", ...props }) {
  return (
    <button
      {...props}
      className={`${className} font-main text-[#29A8FF] font-bold text-2xl rounded-xl p-4 `}
    >
      {children}
    </button>
  );
}
