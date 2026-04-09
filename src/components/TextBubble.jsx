export default function TechTextBubble({ text, bgColor, textColor }) {
  return (
    <div
      className={`rounded-4xl w-fit h-6 flex items-center justify-center ${bgColor} ${textColor}`}
    >
      <p className='p-2 text-sm'>{text}</p>
    </div>
  );
}
