export function FloatingCodeSnippets() {
  const codeSnippets = [
    { code: "const [state, setState] = useState()", top: "10%", left: "5%", delay: 0 },
    { code: "export default function App() {", top: "25%", right: "8%", delay: 2 },
    { code: "return <div className='container'>", top: "45%", left: "10%", delay: 4 },
    { code: "useEffect(() => {", top: "60%", right: "15%", delay: 1 },
    { code: "interface Props {", top: "75%", left: "7%", delay: 3 },
    { code: "const data = await fetch()", top: "15%", right: "20%", delay: 5 },
    { code: "</Component>", top: "85%", right: "10%", delay: 2.5 },
    { code: "import { motion } from 'motion/react'", top: "35%", left: "3%", delay: 4.5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {codeSnippets.map((snippet, index) => (
        <div
          key={index}
          className="absolute opacity-[0.04] text-gray-600 font-mono text-sm animate-float"
          style={{
            top: snippet.top,
            left: snippet.left,
            right: snippet.right,
            animationDelay: `${snippet.delay}s`,
          }}
        >
          {snippet.code}
        </div>
      ))}
    </div>
  );
}
