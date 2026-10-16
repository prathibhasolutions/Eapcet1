(function () {
  window.BUNDLED_EXAMS = window.BUNDLED_EXAMS || { exams: [] };

  var payload = {
    "exams": [
      {
        "id": "practice-test",
        "title": "Practice",
        "date": "2026-10-16",
        "durationMinutes": 60,
        "marksPerQuestion": 1,
        "negativeMark": 0,
        "sections": [
          {
            "key": "maths",
            "title": "Mathematics (Trigonometry & Differentiation)",
            "count": 30,
            "start": 1,
            "end": 30
          },
          {
            "key": "chemistry",
            "title": "Chemistry (General Organic Chemistry)",
            "count": 20,
            "start": 31,
            "end": 50
          }
        ],
        "questions": [
          {
            "id": "practice-math-1",
            "section": "Mathematics (Trigonometry & Differentiation)",
            "text": "If $\\sin\\theta+\\cos\\theta=\\dfrac{1}{5}$ and $0<\\theta<\\pi$, then the value of $\\tan\\theta$ is",
            "options": [
              { "id": "A", "text": "$-\\dfrac{4}{3}$" },
              { "id": "B", "text": "$-\\dfrac{3}{4}$" },
              { "id": "C", "text": "$\\dfrac{3}{4}$" },
              { "id": "D", "text": "$\\dfrac{4}{3}$" }
            ],
            "correct": "A",
            "explanation": "Squaring: $1+\\sin2\\theta=\\dfrac{1}{25}\\Rightarrow\\sin2\\theta=-\\dfrac{24}{25}$. Then $\\dfrac{2\\tan\\theta}{1+\\tan^{2}\\theta}=-\\dfrac{24}{25}\\Rightarrow12\\tan^{2}\\theta+25\\tan\\theta+12=0\\Rightarrow\\tan\\theta=-\\dfrac{4}{3}$ or $-\\dfrac{3}{4}$. Since $\\sin\\theta+\\cos\\theta>0$ while $\\sin2\\theta<0$, we need $\\theta\\in\\left(\\dfrac{\\pi}{2},\\dfrac{3\\pi}{4}\\right)$ where $\\tan\\theta<-1$, hence $\\tan\\theta=-\\dfrac{4}{3}$."
          },
          {
            "id": "practice-math-2",
            "section": "Mathematics (Trigonometry & Differentiation)",
            "text": "If $\\cos(\\theta+\\phi)=\\dfrac{4}{5}$ and $\\sin(\\theta-\\phi)=\\dfrac{5}{13}$, where $0<\\theta,\\phi<\\dfrac{\\pi}{4}$, then $\\tan2\\theta$ equals",
            "options": [
              { "id": "A", "text": "$\\dfrac{33}{56}$" },
              { "id": "B", "text": "$\\dfrac{56}{33}$" },
              { "id": "C", "text": "$\\dfrac{45}{28}$" },
              { "id": "D", "text": "$\\dfrac{28}{45}$" }
            ],
            "correct": "B",
            "explanation": "$\\sin(\\theta+\\phi)=\\dfrac{3}{5}$ and $\\cos(\\theta-\\phi)=\\dfrac{12}{13}$. Then $\\sin2\\theta=\\sin(\\theta+\\phi)\\cos(\\theta-\\phi)+\\cos(\\theta+\\phi)\\sin(\\theta-\\phi)=\\dfrac{36}{65}+\\dfrac{20}{65}=\\dfrac{56}{65}$ and $\\cos2\\theta=\\dfrac{48}{65}-\\dfrac{15}{65}=\\dfrac{33}{65}$. Hence $\\tan2\\theta=\\dfrac{56}{33}$."
          },
          {
            "id": "practice-math-3",
            "section": "Mathematics (Trigonometry & Differentiation)",
            "text": "If $\\cos\\theta=-\\dfrac{3}{5}$ with $\\pi<\\theta<\\dfrac{3\\pi}{2}$, then the value of $\\sin\\!\\left(\\dfrac{\\theta}{2}\\right)+\\cos\\!\\left(\\dfrac{\\theta}{2}\\right)$ is",
            "options": [
              { "id": "A", "text": "$\\dfrac{\\sqrt{5}}{5}$" },
              { "id": "B", "text": "$-\\dfrac{\\sqrt{5}}{5}$" },
              { "id": "C", "text": "$\\dfrac{2\\sqrt{5}}{5}$" },
              { "id": "D", "text": "$\\dfrac{3\\sqrt{5}}{5}$" }
            ],
            "correct": "A",
            "explanation": "$\\dfrac{\\theta}{2}\\in\\left(\\dfrac{\\pi}{2},\\dfrac{3\\pi}{4}\\right)$ (second quadrant), so $\\sin\\dfrac{\\theta}{2}>0$, $\\cos\\dfrac{\\theta}{2}<0$. $\\sin\\dfrac{\\theta}{2}=\\sqrt{\\dfrac{1+3/5}{2}}=\\dfrac{2}{\\sqrt{5}}$, $\\cos\\dfrac{\\theta}{2}=-\\sqrt{\\dfrac{1-3/5}{2}}=-\\dfrac{1}{\\sqrt{5}}$. Sum $=\\dfrac{1}{\\sqrt{5}}=\\dfrac{\\sqrt{5}}{5}$."
          },
          {
            "id": "practice-math-4",
            "section": "Mathematics (Trigonometry & Differentiation)",
            "text": "The value of $\\cos\\!\\left(\\dfrac{\\pi}{15}\\right)\\cos\\!\\left(\\dfrac{2\\pi}{15}\\right)\\cos\\!\\left(\\dfrac{4\\pi}{15}\\right)\\cos\\!\\left(\\dfrac{8\\pi}{15}\\right)$ is",
            "options": [
              { "id": "A", "text": "$\\dfrac{1}{8}$" },
              { "id": "B", "text": "$-\\dfrac{1}{16}$" },
              { "id": "C", "text": "$\\dfrac{1}{16}$" },
              { "id": "D", "text": "$\\dfrac{1}{32}$" }
            ],
            "correct": "B",
            "explanation": "Multiply and divide by $\\sin\\!\\dfrac{\\pi}{15}$ and use $2\\sin A\\cos A=\\sin2A$ repeatedly: $\\sin\\!\\dfrac{\\pi}{15}\\cdot P=\\dfrac{1}{16}\\sin\\!\\dfrac{16\\pi}{15}=-\\dfrac{1}{16}\\sin\\!\\dfrac{\\pi}{15}$. Hence $P=-\\dfrac{1}{16}$."
          },
          {
            "id": "practice-math-5",
            "section": "Mathematics (Trigonometry & Differentiation)",
            "text": "The value of $\\tan\\!\\left(\\dfrac{\\pi}{7}\\right)\\tan\\!\\left(\\dfrac{2\\pi}{7}\\right)\\tan\\!\\left(\\dfrac{3\\pi}{7}\\right)$ is",
            "options": [
              { "id": "A", "text": "$\\sqrt{3}$" },
              { "id": "B", "text": "$\\sqrt{7}$" },
              { "id": "C", "text": "$7$" },
              { "id": "D", "text": "$\\dfrac{1}{\\sqrt{7}}$" }
            ],
            "correct": "B",
            "explanation": "From the expansions of $\\sin7\\theta$ and $\\cos7\\theta$ one obtains $\\sin\\!\\dfrac{\\pi}{7}\\sin\\!\\dfrac{2\\pi}{7}\\sin\\!\\dfrac{3\\pi}{7}=\\dfrac{\\sqrt{7}}{8}$ and $\\cos\\!\\dfrac{\\pi}{7}\\cos\\!\\dfrac{2\\pi}{7}\\cos\\!\\dfrac{3\\pi}{7}=\\dfrac{1}{8}$. Dividing gives $\\tan\\!\\dfrac{\\pi}{7}\\tan\\!\\dfrac{2\\pi}{7}\\tan\\!\\dfrac{3\\pi}{7}=\\sqrt{7}$."
          },
          {
            "id": "practice-math-6",
            "section": "Mathematics (Trigonometry & Differentiation)",
            "text": "The value of $\\cos^{2}\\!\\left(\\dfrac{\\pi}{7}\\right)+\\cos^{2}\\!\\left(\\dfrac{3\\pi}{7}\\right)+\\cos^{2}\\!\\left(\\dfrac{5\\pi}{7}\\right)$ is",
            "options": [
              { "id": "A", "text": "$\\dfrac{5}{4}$" },
              { "id": "B", "text": "$\\dfrac{7}{4}$" },
              { "id": "C", "text": "$\\dfrac{3}{2}$" },
              { "id": "D", "text": "$2$" }
            ],
            "correct": "A",
            "explanation": "$\\cos^{2}\\alpha=\\dfrac{1+\\cos2\\alpha}{2}$, so the sum $=\\dfrac{3}{2}+\\dfrac{1}{2}\\left[\\cos\\dfrac{2\\pi}{7}+\\cos\\dfrac{6\\pi}{7}+\\cos\\dfrac{10\\pi}{7}\\right]$. The bracket is the real part of $\\sum_{k\\,\\text{odd}}e^{i2k\\pi/7}=-\\dfrac{1}{2}$, so the sum $=\\dfrac{3}{2}-\\dfrac{1}{4}=\\dfrac{5}{4}$."
          },
          {
            "id": "practice-math-7",
            "section": "Mathematics (Trigonometry & Differentiation)",
            "text": "The value of $\\tan^{-1}(1)+\\tan^{-1}(2)+\\tan^{-1}(3)$ is",
            "options": [
              { "id": "A", "text": "$\\dfrac{\\pi}{4}$" },
              { "id": "B", "text": "$\\dfrac{\\pi}{2}$" },
              { "id": "C", "text": "$\\pi$" },
              { "id": "D", "text": "$\\dfrac{3\\pi}{4}$" }
            ],
            "correct": "C",
            "explanation": "Since $2\\times3>1$ with both numbers positive, $\\tan^{-1}2+\\tan^{-1}3=\\pi+\\tan^{-1}\\!\\left(\\dfrac{2+3}{1-6}\\right)=\\pi+\\tan^{-1}(-1)=\\pi-\\dfrac{\\pi}{4}=\\dfrac{3\\pi}{4}$. Adding $\\tan^{-1}1=\\dfrac{\\pi}{4}$ gives $\\pi$."
          },
          {
            "id": "practice-math-8",
            "section": "Mathematics (Trigonometry & Differentiation)",
            "text": "The value of $\\cos\\!\\left(\\dfrac{\\pi}{9}\\right)\\cos\\!\\left(\\dfrac{2\\pi}{9}\\right)\\cos\\!\\left(\\dfrac{4\\pi}{9}\\right)$ is",
            "options": [
              { "id": "A", "text": "$\\dfrac{1}{2}$" },
              { "id": "B", "text": "$\\dfrac{1}{4}$" },
              { "id": "C", "text": "$\\dfrac{1}{8}$" },
              { "id": "D", "text": "$\\dfrac{\\sqrt{3}}{8}$" }
            ],
            "correct": "C",
            "explanation": "Multiply and divide by $2\\sin\\!\\dfrac{\\pi}{9}$: $2\\sin A\\cos A=\\sin2A$ successively gives $\\sin\\dfrac{8\\pi}{9}=\\sin\\dfrac{\\pi}{9}$, so the product $=\\dfrac{\\sin\\pi/9}{8\\sin\\pi/9}=\\dfrac{1}{8}$."
          },
          {
            "id": "practice-math-9",
            "section": "Mathematics (Trigonometry & Differentiation)",
            "text": "If $\\sin\\theta=-\\dfrac{12}{13}$ with $\\pi<\\theta<\\dfrac{3\\pi}{2}$ and $\\cos\\phi=-\\dfrac{4}{5}$ with $\\dfrac{\\pi}{2}<\\phi<\\pi$, then $\\sin(\\theta-\\phi)$ equals",
            "options": [
              { "id": "A", "text": "$-\\dfrac{33}{65}$" },
              { "id": "B", "text": "$\\dfrac{33}{65}$" },
              { "id": "C", "text": "$\\dfrac{63}{65}$" },
              { "id": "D", "text": "$-\\dfrac{63}{65}$" }
            ],
            "correct": "C",
            "explanation": "$\\pi<\\theta<\\dfrac{3\\pi}{2}\\Rightarrow\\cos\\theta=-\\dfrac{5}{13}$; $\\dfrac{\\pi}{2}<\\phi<\\pi\\Rightarrow\\sin\\phi=\\dfrac{3}{5}$. $\\sin(\\theta-\\phi)=\\sin\\theta\\cos\\phi-\\cos\\theta\\sin\\phi=\\left(-\\dfrac{12}{13}\\right)\\left(-\\dfrac{4}{5}\\right)-\\left(-\\dfrac{5}{13}\\right)\\left(\\dfrac{3}{5}\\right)=\\dfrac{48}{65}+\\dfrac{15}{65}=\\dfrac{63}{65}$."
          },
          {
            "id": "practice-math-10",
            "section": "Mathematics (Trigonometry & Differentiation)",
            "text": "If $3\\sin\\alpha+4\\cos\\alpha=5$, then the value of $4\\sin\\alpha-3\\cos\\alpha$ is",
            "options": [
              { "id": "A", "text": "$0$" },
              { "id": "B", "text": "$1$" },
              { "id": "C", "text": "$-1$" },
              { "id": "D", "text": "$5$" }
            ],
            "correct": "A",
            "explanation": "The maximum value of $3\\sin\\alpha+4\\cos\\alpha$ is $\\sqrt{3^{2}+4^{2}}=5$, which is attained only when $\\sin\\alpha=\\dfrac{3}{5}$, $\\cos\\alpha=\\dfrac{4}{5}$. Hence $4\\sin\\alpha-3\\cos\\alpha=4\\cdot\\dfrac{3}{5}-3\\cdot\\dfrac{4}{5}=0$."
          },
          {
            "id": "practice-math-11",
            "section": "Mathematics (Trigonometry & Differentiation)",
            "text": "If $\\cos\\theta=-\\dfrac{24}{25}$ with $\\pi<\\theta<\\dfrac{3\\pi}{2}$, then $\\sin\\!\\left(\\dfrac{\\theta}{2}\\right)-\\cos\\!\\left(\\dfrac{\\theta}{2}\\right)$ equals",
            "options": [
              { "id": "A", "text": "$\\dfrac{4\\sqrt{2}}{5}$" },
              { "id": "B", "text": "$-\\dfrac{4\\sqrt{2}}{5}$" },
              { "id": "C", "text": "$\\dfrac{3\\sqrt{2}}{5}$" },
              { "id": "D", "text": "$\\dfrac{\\sqrt{2}}{10}$" }
            ],
            "correct": "A",
            "explanation": "$\\dfrac{\\theta}{2}\\in\\left(\\dfrac{\\pi}{2},\\dfrac{3\\pi}{4}\\right)$, so $\\sin\\dfrac{\\theta}{2}=\\sqrt{\\dfrac{1+24/25}{2}}=\\sqrt{\\dfrac{49}{50}}=\\dfrac{7}{5\\sqrt{2}}$ and $\\cos\\dfrac{\\theta}{2}=-\\sqrt{\\dfrac{1-(-24/25)}{2}}=-\\sqrt{\\dfrac{1}{50}}=-\\dfrac{1}{5\\sqrt{2}}$. Difference $=\\dfrac{8}{5\\sqrt{2}}=\\dfrac{4\\sqrt{2}}{5}$."
          },
          {
            "id": "practice-math-12",
            "section": "Mathematics (Trigonometry & Differentiation)",
            "text": "The value of $\\sin^{2}75^{\\circ}+\\cos^{2}15^{\\circ}-\\sin75^{\\circ}\\cos15^{\\circ}$ is",
            "options": [
              { "id": "A", "text": "$\\dfrac{1}{2}$" },
              { "id": "B", "text": "$\\dfrac{3}{4}$" },
              { "id": "C", "text": "$\\dfrac{\\sqrt{3}}{4}$" },
              { "id": "D", "text": "$1$" }
            ],
            "correct": "B",
            "explanation": "$\\sin75^{\\circ}=\\cos15^{\\circ}$, so the expression $=2\\cos^{2}15^{\\circ}-\\cos^{2}15^{\\circ}=\\cos^{2}15^{\\circ}$. Alternatively $=1-\\sin75^{\\circ}\\cos15^{\\circ}=1-\\dfrac{1}{2}\\sin150^{\\circ}=1-\\dfrac{1}{4}=\\dfrac{3}{4}$."
          },
          {
            "id": "practice-math-13",
            "section": "Mathematics (Trigonometry & Differentiation)",
            "text": "If $\\sqrt{\\dfrac{1+\\sin\\theta}{1-\\sin\\theta}}+\\sqrt{\\dfrac{1-\\sin\\theta}{1+\\sin\\theta}}=-2\\sec\\theta$, then $\\theta$ necessarily lies in the",
            "options": [
              { "id": "A", "text": "first quadrant only" },
              { "id": "B", "text": "second quadrant only" },
              { "id": "C", "text": "second or third quadrant" },
              { "id": "D", "text": "fourth quadrant only" }
            ],
            "correct": "C",
            "explanation": "Each root equals $\\dfrac{1\\pm\\sin\\theta}{|\\cos\\theta|}$, so the sum is $\\dfrac{2}{|\\cos\\theta|}$. The given condition $\\dfrac{2}{|\\cos\\theta|}=-\\dfrac{2}{\\cos\\theta}$ holds only if $\\cos\\theta<0$, i.e. $\\theta$ lies in the second or third quadrant."
          },
          {
            "id": "practice-math-14",
            "section": "Mathematics (Trigonometry & Differentiation)",
            "text": "The sum $\\sin^{2}1^{\\circ}+\\sin^{2}2^{\\circ}+\\sin^{2}3^{\\circ}+\\cdots+\\sin^{2}90^{\\circ}$ equals",
            "options": [
              { "id": "A", "text": "$45$" },
              { "id": "B", "text": "$\\dfrac{91}{2}$" },
              { "id": "C", "text": "$46$" },
              { "id": "D", "text": "$\\dfrac{89}{2}$" }
            ],
            "correct": "B",
            "explanation": "$\\sin^{2}k^{\\circ}=\\dfrac{1-\\cos2k^{\\circ}}{2}$, so the sum $=\\dfrac{90}{2}-\\dfrac{1}{2}\\sum_{k=1}^{90}\\cos2k^{\\circ}$. Since $\\sum_{k=1}^{90}e^{i2k^{\\circ}}=\\dfrac{e^{i91^{\\circ}}}{\\sin1^{\\circ}}$, its real part is $\\dfrac{\\cos91^{\\circ}}{\\sin1^{\\circ}}=-1$. Hence the sum $=45+\\dfrac{1}{2}=\\dfrac{91}{2}$."
          },
          {
            "id": "practice-math-15",
            "section": "Mathematics (Trigonometry & Differentiation)",
            "text": "The value of $\\sin20^{\\circ}\\sin40^{\\circ}\\sin80^{\\circ}$ is",
            "options": [
              { "id": "A", "text": "$\\dfrac{\\sqrt{3}}{4}$" },
              { "id": "B", "text": "$\\dfrac{\\sqrt{3}}{8}$" },
              { "id": "C", "text": "$\\dfrac{3}{8}$" },
              { "id": "D", "text": "$\\dfrac{1}{8}$" }
            ],
            "correct": "B",
            "explanation": "$\\sin20^{\\circ}\\sin40^{\\circ}\\sin80^{\\circ}=\\dfrac{1}{4}\\left[4\\sin20^{\\circ}\\sin(60^{\\circ}-20^{\\circ})\\sin(60^{\\circ}+20^{\\circ})\\right]=\\dfrac{1}{4}\\sin60^{\\circ}=\\dfrac{\\sqrt{3}}{8}$ (using $4\\sin\\theta\\sin(60^{\\circ}-\\theta)\\sin(60^{\\circ}+\\theta)=\\sin3\\theta$)."
          },
          {
            "id": "practice-math-16",
            "section": "Mathematics (Trigonometry & Differentiation)",
            "text": "If $y=x^{\\sin x}$ where $x>0$, then $\\dfrac{dy}{dx}=$",
            "options": [
              { "id": "A", "text": "$x^{\\sin x}\\cos x\\ln x$" },
              { "id": "B", "text": "$x^{\\sin x}\\left(\\cos x\\ln x+\\dfrac{\\sin x}{x}\\right)$" },
              { "id": "C", "text": "$x^{\\sin x}\\left(\\dfrac{\\cos x}{x}+\\sin x\\ln x\\right)$" },
              { "id": "D", "text": "$\\sin x\\cdot x^{\\sin x-1}$" }
            ],
            "correct": "B",
            "explanation": "$\\ln y=\\sin x\\ln x\\Rightarrow\\dfrac{1}{y}\\dfrac{dy}{dx}=\\cos x\\ln x+\\dfrac{\\sin x}{x}\\Rightarrow\\dfrac{dy}{dx}=x^{\\sin x}\\left(\\cos x\\ln x+\\dfrac{\\sin x}{x}\\right)$."
          },
          {
            "id": "practice-math-17",
            "section": "Mathematics (Trigonometry & Differentiation)",
            "text": "If $f(x)=\\sin^{-1}\\!\\left(\\dfrac{2^{x+1}}{1+4^{x}}\\right)$, then $f'(x)$ equals",
            "options": [
              { "id": "A", "text": "$\\dfrac{2^{x}\\ln2}{1+4^{x}}$" },
              { "id": "B", "text": "$\\dfrac{2^{x+1}\\ln2}{1+4^{x}}$" },
              { "id": "C", "text": "$\\dfrac{2^{x+1}}{1+4^{x}}$" },
              { "id": "D", "text": "$\\dfrac{4^{x}\\ln4}{1+4^{x}}$" }
            ],
            "correct": "B",
            "explanation": "Put $t=2^{x}$: $\\dfrac{2t}{1+t^{2}}=\\sin(2\\tan^{-1}t)$, so $f(x)=2\\tan^{-1}(2^{x})$. Hence $f'(x)=\\dfrac{2}{1+4^{x}}\\cdot2^{x}\\ln2=\\dfrac{2^{x+1}\\ln2}{1+4^{x}}$."
          },
          {
            "id": "practice-math-18",
            "section": "Mathematics (Trigonometry & Differentiation)",
            "text": "If $g(x)=\\tan^{-1}\\!\\left(\\dfrac{\\sqrt{1+x^{2}}-1}{x}\\right)$ for $x>0$, then $g'(x)$ equals",
            "options": [
              { "id": "A", "text": "$\\dfrac{1}{1+x^{2}}$" },
              { "id": "B", "text": "$\\dfrac{1}{2(1+x^{2})}$" },
              { "id": "C", "text": "$\\dfrac{x}{2\\sqrt{1+x^{2}}}$" },
              { "id": "D", "text": "$\\dfrac{1}{\\sqrt{1+x^{2}}}$" }
            ],
            "correct": "B",
            "explanation": "Put $x=\\tan\\theta$: $\\sqrt{1+x^{2}}=\\sec\\theta$, so $\\dfrac{\\sec\\theta-1}{\\tan\\theta}=\\tan\\dfrac{\\theta}{2}$. Thus $g(x)=\\dfrac{\\theta}{2}=\\dfrac{1}{2}\\tan^{-1}x$ and $g'(x)=\\dfrac{1}{2(1+x^{2})}$."
          },
          {
            "id": "practice-math-19",
            "section": "Mathematics (Trigonometry & Differentiation)",
            "text": "If $y=\\ln\\!\\left[\\dfrac{(x-1)^{2}\\sqrt{x+1}}{\\sqrt[3]{x-2}}\\right]$ with $x>2$, then $\\dfrac{dy}{dx}=$",
            "options": [
              { "id": "A", "text": "$\\dfrac{2}{x-1}+\\dfrac{1}{2(x+1)}-\\dfrac{1}{3(x-2)}$" },
              { "id": "B", "text": "$\\dfrac{2}{x-1}+\\dfrac{1}{2(x+1)}+\\dfrac{1}{3(x-2)}$" },
              { "id": "C", "text": "$\\dfrac{2}{x-1}-\\dfrac{1}{2(x+1)}-\\dfrac{1}{3(x-2)}$" },
              { "id": "D", "text": "$\\dfrac{(x-1)^{2}\\sqrt{x+1}}{\\sqrt[3]{x-2}}$" }
            ],
            "correct": "A",
            "explanation": "Logarithmic differentiation: $y=2\\ln(x-1)+\\dfrac{1}{2}\\ln(x+1)-\\dfrac{1}{3}\\ln(x-2)$, so $y'=\\dfrac{2}{x-1}+\\dfrac{1}{2(x+1)}-\\dfrac{1}{3(x-2)}$."
          },
          {
            "id": "practice-math-20",
            "section": "Mathematics (Trigonometry & Differentiation)",
            "text": "If $f(x)=\\sin^{-1}\\!\\left(\\dfrac{x}{\\sqrt{1+x^{2}}}\\right)$, then $f'(x)$ equals",
            "options": [
              { "id": "A", "text": "$\\dfrac{1}{1+x^{2}}$" },
              { "id": "B", "text": "$\\dfrac{\\sqrt{1+x^{2}}}{1+x^{2}}$" },
              { "id": "C", "text": "$\\dfrac{1}{1-x^{2}}$" },
              { "id": "D", "text": "$\\dfrac{1}{\\sqrt{1+x^{2}}}$" }
            ],
            "correct": "A",
            "explanation": "Put $x=\\tan\\theta$: $\\dfrac{x}{\\sqrt{1+x^{2}}}=\\sin\\theta$, so $f(x)=\\theta=\\tan^{-1}x$ and $f'(x)=\\dfrac{1}{1+x^{2}}$. (Direct differentiation using the chain and quotient rules gives the same result.)"
          },
          {
            "id": "practice-math-21",
            "section": "Mathematics (Trigonometry & Differentiation)",
            "text": "If $x=a(\\theta-\\sin\\theta)$ and $y=a(1-\\cos\\theta)$, then $\\dfrac{dy}{dx}$ is",
            "options": [
              { "id": "A", "text": "$\\tan\\!\\left(\\dfrac{\\theta}{2}\\right)$" },
              { "id": "B", "text": "$\\cot\\!\\left(\\dfrac{\\theta}{2}\\right)$" },
              { "id": "C", "text": "$-\\cot\\!\\left(\\dfrac{\\theta}{2}\\right)$" },
              { "id": "D", "text": "$\\dfrac{\\sin\\theta}{1-\\cos\\theta}$ is not defined" }
            ],
            "correct": "B",
            "explanation": "$\\dfrac{dx}{d\\theta}=a(1-\\cos\\theta)$, $\\dfrac{dy}{d\\theta}=a\\sin\\theta$, so $\\dfrac{dy}{dx}=\\dfrac{\\sin\\theta}{1-\\cos\\theta}=\\dfrac{2\\sin(\\theta/2)\\cos(\\theta/2)}{2\\sin^{2}(\\theta/2)}=\\cot\\!\\left(\\dfrac{\\theta}{2}\\right)$."
          },
          {
            "id": "practice-math-22",
            "section": "Mathematics (Trigonometry & Differentiation)",
            "text": "If $y=e^{x}\\sin x$, then the second order derivative $\\dfrac{d^{2}y}{dx^{2}}$ equals",
            "options": [
              { "id": "A", "text": "$2e^{x}\\sin x$" },
              { "id": "B", "text": "$2e^{x}\\cos x$" },
              { "id": "C", "text": "$-2e^{x}\\sin x$" },
              { "id": "D", "text": "$e^{x}(\\sin x-\\cos x)$" }
            ],
            "correct": "B",
            "explanation": "$y'=e^{x}(\\sin x+\\cos x)$, $y''=e^{x}(\\sin x+\\cos x)+e^{x}(\\cos x-\\sin x)=2e^{x}\\cos x$."
          },
          {
            "id": "practice-math-23",
            "section": "Mathematics (Trigonometry & Differentiation)",
            "text": "$\\dfrac{d}{dx}\\left[\\tan^{-1}\\!\\left(\\dfrac{\\sin x}{1+\\cos x}\\right)\\right]=$",
            "options": [
              { "id": "A", "text": "$\\dfrac{1}{2}$" },
              { "id": "B", "text": "$\\dfrac{1}{1+\\sin^{2}x}$" },
              { "id": "C", "text": "$\\dfrac{\\cos x}{1+\\cos x}$" },
              { "id": "D", "text": "$\\sec x$" }
            ],
            "correct": "A",
            "explanation": "$\\dfrac{\\sin x}{1+\\cos x}=\\dfrac{2\\sin(x/2)\\cos(x/2)}{2\\cos^{2}(x/2)}=\\tan\\!\\left(\\dfrac{x}{2}\\right)$, so the expression $=\\dfrac{x}{2}$ and its derivative is $\\dfrac{1}{2}$."
          },
          {
            "id": "practice-math-24",
            "section": "Mathematics (Trigonometry & Differentiation)",
            "text": "If $y=\\cosh^{-1}\\!\\left(\\dfrac{x^{2}+1}{2x}\\right)$ for $x>1$, then $\\dfrac{dy}{dx}=$",
            "options": [
              { "id": "A", "text": "$\\dfrac{1}{x}$" },
              { "id": "B", "text": "$\\dfrac{2x}{x^{2}+1}$" },
              { "id": "C", "text": "$\\dfrac{x^{2}-1}{2x^{2}\\sqrt{\\left(\\frac{x^{2}+1}{2x}\\right)^{2}-1}}$" },
              { "id": "D", "text": "$\\dfrac{2}{\\sqrt{4x^{2}-(x^{2}+1)^{2}}}$" }
            ],
            "correct": "A",
            "explanation": "$\\dfrac{x^{2}+1}{2x}=\\dfrac{e^{\\ln x}+e^{-\\ln x}}{2}=\\cosh(\\ln x)$ for $x>0$. Hence $y=\\ln x$ and $y'=\\dfrac{1}{x}$."
          },
          {
            "id": "practice-math-25",
            "section": "Mathematics (Trigonometry & Differentiation)",
            "text": "$\\dfrac{d}{dx}\\left[\\sinh^{-1}(\\ln x)\\right]=$",
            "options": [
              { "id": "A", "text": "$\\dfrac{1}{x\\sqrt{1+\\ln^{2}x}}$" },
              { "id": "B", "text": "$\\dfrac{\\ln x}{x\\sqrt{1+\\ln^{2}x}}$" },
              { "id": "C", "text": "$\\dfrac{1}{\\sqrt{1+\\ln^{2}x}}$" },
              { "id": "D", "text": "$\\dfrac{1}{x(1+\\ln^{2}x)}$" }
            ],
            "correct": "A",
            "explanation": "$\\dfrac{d}{du}\\sinh^{-1}u=\\dfrac{1}{\\sqrt{1+u^{2}}}$ with $u=\\ln x$, so the derivative is $\\dfrac{1}{\\sqrt{1+\\ln^{2}x}}\\cdot\\dfrac{1}{x}$."
          },
          {
            "id": "practice-math-26",
            "section": "Mathematics (Trigonometry & Differentiation)",
            "text": "If $y=x^{x^{x}}$ ($x>0$), then $\\dfrac{dy}{dx}$ equals",
            "options": [
              { "id": "A", "text": "$x^{x^{x}}\\cdot x^{x}\\left[(1+\\ln x)\\ln x+\\dfrac{1}{x}\\right]$" },
              { "id": "B", "text": "$x^{x^{x}}\\cdot x\\left[(1+\\ln x)\\ln x+\\dfrac{1}{x}\\right]$" },
              { "id": "C", "text": "$x^{x^{x}}\\cdot x^{x}(1+\\ln x)$" },
              { "id": "D", "text": "$x^{x}\\left[(1+\\ln x)\\ln x+\\dfrac{1}{x}\\right]$" }
            ],
            "correct": "A",
            "explanation": "$\\ln y=x^{x}\\ln x$. Also $\\dfrac{d}{dx}(x^{x})=x^{x}(1+\\ln x)$, so $\\dfrac{y'}{y}=x^{x}(1+\\ln x)\\ln x+\\dfrac{x^{x}}{x}=x^{x}\\left[(1+\\ln x)\\ln x+\\dfrac{1}{x}\\right]$, giving the result."
          },
          {
            "id": "practice-math-27",
            "section": "Mathematics (Trigonometry & Differentiation)",
            "text": "If $f(x)=x\\sin x+\\cos x$, then $f''(x)+f(x)$ equals",
            "options": [
              { "id": "A", "text": "$0$" },
              { "id": "B", "text": "$2\\cos x$" },
              { "id": "C", "text": "$2\\sin x$" },
              { "id": "D", "text": "$x\\cos x$" }
            ],
            "correct": "B",
            "explanation": "$f'(x)=\\sin x+x\\cos x-\\sin x=x\\cos x$, $f''(x)=\\cos x-x\\sin x$. Adding $f(x)=x\\sin x+\\cos x$ gives $2\\cos x$."
          },
          {
            "id": "practice-math-28",
            "section": "Mathematics (Trigonometry & Differentiation)",
            "text": "If $y=\\left(x+\\sqrt{1+x^{2}}\\right)^{n}$, then the value of $(1+x^{2})y''+xy'-n^{2}y$ is",
            "options": [
              { "id": "A", "text": "$n(n-1)y$" },
              { "id": "B", "text": "$-n^{2}y$" },
              { "id": "C", "text": "$0$" },
              { "id": "D", "text": "$n^{2}y$" }
            ],
            "correct": "C",
            "explanation": "$y'=ny(1+x^{2})^{-1/2}$. Differentiating again: $y''=\\dfrac{n^{2}y}{1+x^{2}}-\\dfrac{nxy}{(1+x^{2})^{3/2}}$. Then $(1+x^{2})y''+xy'-n^{2}y=n^{2}y-\\dfrac{nxy}{\\sqrt{1+x^{2}}}+\\dfrac{nxy}{\\sqrt{1+x^{2}}}-n^{2}y=0$."
          },
          {
            "id": "practice-math-29",
            "section": "Mathematics (Trigonometry & Differentiation)",
            "text": "$\\dfrac{d}{dx}\\left[\\cosh(\\ln x)\\right]=$",
            "options": [
              { "id": "A", "text": "$\\dfrac{x^{2}+1}{2x^{2}}$" },
              { "id": "B", "text": "$\\dfrac{x^{2}-1}{2x^{2}}$" },
              { "id": "C", "text": "$\\sinh(\\ln x)$" },
              { "id": "D", "text": "$\\dfrac{1}{x}\\sinh(\\ln x)$" }
            ],
            "correct": "B",
            "explanation": "$\\cosh(\\ln x)=\\dfrac{x+1/x}{2}=\\dfrac{x^{2}+1}{2x}$. Differentiating: $\\dfrac{1}{2}\\cdot\\dfrac{2x\\cdot x-(x^{2}+1)}{x^{2}}=\\dfrac{x^{2}-1}{2x^{2}}$."
          },
          {
            "id": "practice-math-30",
            "section": "Mathematics (Trigonometry & Differentiation)",
            "text": "If $f(x)=x^{10}+\\dfrac{1}{x^{10}}$, then $f''(1)$ equals",
            "options": [
              { "id": "A", "text": "$90$" },
              { "id": "B", "text": "$110$" },
              { "id": "C", "text": "$200$" },
              { "id": "D", "text": "$100$" }
            ],
            "correct": "C",
            "explanation": "$f'(x)=10x^{9}-10x^{-11}$, $f''(x)=90x^{8}+110x^{-12}$. At $x=1$: $90+110=200$."
          },
          {
            "id": "practice-chem-1",
            "section": "Chemistry (General Organic Chemistry)",
            "text": "Which of the following correctly matches the hybridization, shape and bond angle of the two carbon atoms in acetylene (ethyne, $\\mathrm{H{-}C\\equiv C{-}H}$)?",
            "options": [
              { "id": "A", "text": "$sp^{2}$, trigonal planar, $120^{\\circ}$" },
              { "id": "B", "text": "$sp^{3}$, tetrahedral, $109^{\\circ}28'$" },
              { "id": "C", "text": "$sp$, linear, $180^{\\circ}$" },
              { "id": "D", "text": "$sp^{3}$, pyramidal, $107^{\\circ}$" }
            ],
            "correct": "C",
            "explanation": "Each carbon of ethyne forms two $\\sigma$ bonds (one with H, one with the other C) and has no lone pairs, so it is $sp$ hybridised, giving a linear molecule with a bond angle of $180^{\\circ}$ and the shortest C$-$C bond among hydrocarbons."
          },
          {
            "id": "practice-chem-2",
            "section": "Chemistry (General Organic Chemistry)",
            "text": "Which of the following is the correct condensed structural formula of 2,3-dimethylbutane?",
            "options": [
              { "id": "A", "text": "$\\mathrm{CH_3CH(CH_3)CH_2CH(CH_3)_2}$" },
              { "id": "B", "text": "$\\mathrm{(CH_3)_2CHCH(CH_3)_2}$" },
              { "id": "C", "text": "$\\mathrm{CH_3C(CH_3)_2CH_2CH_3}$" },
              { "id": "D", "text": "$\\mathrm{(CH_3)_4C}$" }
            ],
            "correct": "B",
            "explanation": "2,3-dimethylbutane has a four-carbon chain with methyl branches on C-2 and C-3: $\\mathrm{(CH_3)_2CH{-}CH(CH_3)_2}$. A is 2,4-dimethylpentane, C is 2,2-dimethylbutane and D is 2,2-dimethylpropane (neopentane)."
          },
          {
            "id": "practice-chem-3",
            "section": "Chemistry (General Organic Chemistry)",
            "text": "Which of the following is an alicyclic, saturated and non-aromatic compound?",
            "options": [
              { "id": "A", "text": "benzene" },
              { "id": "B", "text": "cyclohexane" },
              { "id": "C", "text": "pyridine" },
              { "id": "D", "text": "naphthalene" }
            ],
            "correct": "B",
            "explanation": "Cyclohexane is a carbocyclic (alicyclic) ring containing only single bonds, hence saturated and non-aromatic. Benzene and naphthalene are homocyclic aromatic compounds, while pyridine is a heterocyclic aromatic compound."
          },
          {
            "id": "practice-chem-4",
            "section": "Chemistry (General Organic Chemistry)",
            "text": "The correct IUPAC name of the compound $\\mathrm{CH_3CH(CH_2CH_3)CH=CHCH_3}$ is",
            "options": [
              { "id": "A", "text": "4-ethylpent-2-ene" },
              { "id": "B", "text": "3-methylhex-4-ene" },
              { "id": "C", "text": "4-methylhex-2-ene" },
              { "id": "D", "text": "2-ethylpent-2-ene" }
            ],
            "correct": "C",
            "explanation": "The longest chain that contains both carbon atoms of the double bond has six carbons ($\\mathrm{CH_3CH_2{-}CH(CH_3){-}CH=CHCH_3}$), leaving a methyl branch on C-4. Numbering from the end nearer the double bond gives 4-methylhex-2-ene. Option A is a common distractor that ignores the longer chain."
          },
          {
            "id": "practice-chem-5",
            "section": "Chemistry (General Organic Chemistry)",
            "text": "The IUPAC name of $\\mathrm{(CH_3)_2C=CHCOOH}$ is",
            "options": [
              { "id": "A", "text": "2-methylbut-2-enoic acid" },
              { "id": "B", "text": "3-methylbut-2-enoic acid" },
              { "id": "C", "text": "3-methylbut-3-enoic acid" },
              { "id": "D", "text": "2-ethylprop-2-enoic acid" }
            ],
            "correct": "B",
            "explanation": "The principal chain must contain $\\mathrm{-COOH}$: C-1 is the carboxyl carbon, so the double bond starts at C-2 and the methyl branch lies on C-3, giving 3-methylbut-2-enoic acid."
          },
          {
            "id": "practice-chem-6",
            "section": "Chemistry (General Organic Chemistry)",
            "text": "The total number of chain (structural) isomers of hexane, $\\mathrm{C_6H_{14}}$, is",
            "options": [
              { "id": "A", "text": "$3$" },
              { "id": "B", "text": "$4$" },
              { "id": "C", "text": "$5$" },
              { "id": "D", "text": "$6$" }
            ],
            "correct": "C",
            "explanation": "The five isomers are n-hexane, 2-methylpentane, 3-methylpentane, 2,3-dimethylbutane and 2,2-dimethylbutane."
          },
          {
            "id": "practice-chem-7",
            "section": "Chemistry (General Organic Chemistry)",
            "text": "Which of the following pairs of compounds are metamers?",
            "options": [
              { "id": "A", "text": "$\\mathrm{C_2H_5OH}$ and $\\mathrm{CH_3OCH_3}$" },
              { "id": "B", "text": "$\\mathrm{C_2H_5OC_2H_5}$ and $\\mathrm{CH_3OCH_2CH_2CH_3}$" },
              { "id": "C", "text": "n-butane and isobutane" },
              { "id": "D", "text": "propanone and propanal" }
            ],
            "correct": "B",
            "explanation": "Metamerism requires the same molecular formula and the same functional group but different alkyl groups on either side of it: both ethers have $\\mathrm{C_4H_{10}O}$. A are functional isomers, C are chain isomers, D are functional isomers."
          },
          {
            "id": "practice-chem-8",
            "section": "Chemistry (General Organic Chemistry)",
            "text": "Which of the following compounds exhibits optical isomerism (can exist as a pair of enantiomers)?",
            "options": [
              { "id": "A", "text": "$\\mathrm{CH_3CH_2CH_3}$" },
              { "id": "B", "text": "$\\mathrm{CH_3CH(OH)CH_3}$" },
              { "id": "C", "text": "$\\mathrm{CH_3CH(OH)COOH}$" },
              { "id": "D", "text": "$\\mathrm{CH_3CCl_3}$" }
            ],
            "correct": "C",
            "explanation": "Optical isomerism needs a chiral carbon carrying four different groups. In 2-hydroxypropanoic acid the central carbon carries $\\mathrm{-H}$, $\\mathrm{-OH}$, $\\mathrm{-CH_3}$ and $\\mathrm{-COOH}$; the others have at least two identical groups."
          },
          {
            "id": "practice-chem-9",
            "section": "Chemistry (General Organic Chemistry)",
            "text": "Which of the following species is a free radical (an odd-electron, neutral reactive intermediate)?",
            "options": [
              { "id": "A", "text": "$\\mathrm{CH_3^+}$" },
              { "id": "B", "text": "$\\mathrm{CH_3^-}$" },
              { "id": "C", "text": "$\\mathrm{CH_3^{\\bullet}}$" },
              { "id": "D", "text": "$\\mathrm{CH_4}$" }
            ],
            "correct": "C",
            "explanation": "$\\mathrm{CH_3^{\\bullet}}$ carries an unpaired electron and is produced by homolytic fission; $\\mathrm{CH_3^+}$ is a carbocation (electrophile) and $\\mathrm{CH_3^-}$ a carbanion (nucleophile)."
          },
          {
            "id": "practice-chem-10",
            "section": "Chemistry (General Organic Chemistry)",
            "text": "Which of the following alkyl halides undergoes heterolytic cleavage of the C$-$X bond most readily to give a carbocation?",
            "options": [
              { "id": "A", "text": "$\\mathrm{CH_3F}$" },
              { "id": "B", "text": "$\\mathrm{CH_3Cl}$" },
              { "id": "C", "text": "$\\mathrm{CH_3Br}$" },
              { "id": "D", "text": "$\\mathrm{CH_3I}$" }
            ],
            "correct": "D",
            "explanation": "The C$-$I bond has the lowest bond dissociation energy (largest, most polarisable iodine), so it breaks heterolytically most easily. The ease of fission follows $\\mathrm{R{-}I>R{-}Br>R{-}Cl>R{-}F}$."
          },
          {
            "id": "practice-chem-11",
            "section": "Chemistry (General Organic Chemistry)",
            "text": "Which of the following is the strongest nucleophile?",
            "options": [
              { "id": "A", "text": "$\\mathrm{H_2O}$" },
              { "id": "B", "text": "$\\mathrm{NH_3}$" },
              { "id": "C", "text": "$\\mathrm{Cl^-}$" },
              { "id": "D", "text": "$\\mathrm{CN^-}$" }
            ],
            "correct": "D",
            "explanation": "A nucleophile must donate an electron pair; a negative charge strongly enhances donor ability, and on carbon $\\mathrm{CN^-}$ is a very strong (soft) nucleophile, far stronger than the neutral molecules $\\mathrm{H_2O}$ and $\\mathrm{NH_3}$ or $\\mathrm{Cl^-}$."
          },
          {
            "id": "practice-chem-12",
            "section": "Chemistry (General Organic Chemistry)",
            "text": "Which of the following is an electrophile?",
            "options": [
              { "id": "A", "text": "$\\mathrm{Cl^-}$" },
              { "id": "B", "text": "$\\mathrm{OH^-}$" },
              { "id": "C", "text": "$\\mathrm{NH_3}$" },
              { "id": "D", "text": "$\\mathrm{NO_2^+}$" }
            ],
            "correct": "D",
            "explanation": "An electrophile is an electron-pair acceptor (Lewis acid). The nitronium ion $\\mathrm{NO_2^+}$ is electron deficient and attacks the benzene ring in nitration; the others are electron-rich species."
          },
          {
            "id": "practice-chem-13",
            "section": "Chemistry (General Organic Chemistry)",
            "text": "The correct order of the $-I$ (negative inductive) effect of the halogen substituents is",
            "options": [
              { "id": "A", "text": "$\\mathrm{I > Br > Cl > F}$" },
              { "id": "B", "text": "$\\mathrm{F > Cl > Br > I}$" },
              { "id": "C", "text": "$\\mathrm{Cl > F > Br > I}$" },
              { "id": "D", "text": "$\\mathrm{F > Br > Cl > I}$" }
            ],
            "correct": "B",
            "explanation": "The inductive effect is transmitted through $\\sigma$ bonds and depends on electronegativity, which decreases down the group: $\\mathrm{F>Cl>Br>I}$, so the $-I$ effect follows the same order."
          },
          {
            "id": "practice-chem-14",
            "section": "Chemistry (General Organic Chemistry)",
            "text": "The correct order of acidic strength of the following carboxylic acids is",
            "options": [
              { "id": "A", "text": "$\\mathrm{Cl_3CCOOH > Cl_2CHCOOH > ClCH_2COOH > CH_3COOH}$" },
              { "id": "B", "text": "$\\mathrm{CH_3COOH > ClCH_2COOH > Cl_2CHCOOH > Cl_3CCOOH}$" },
              { "id": "C", "text": "$\\mathrm{ClCH_2COOH > Cl_2CHCOOH > Cl_3CCOOH > CH_3COOH}$" },
              { "id": "D", "text": "$\\mathrm{Cl_2CHCOOH > Cl_3CCOOH > CH_3COOH > ClCH_2COOH}$" }
            ],
            "correct": "A",
            "explanation": "Chlorine exerts a $-I$ effect that disperses the negative charge of the carboxylate ion, stabilising it. The more Cl atoms attached, the stronger the effect, so acidity increases in the order $\\mathrm{CH_3COOH<ClCH_2COOH<Cl_2CHCOOH<Cl_3CCOOH}$."
          },
          {
            "id": "practice-chem-15",
            "section": "Chemistry (General Organic Chemistry)",
            "text": "Which of the following pairs of structures represent resonance structures (canonical structures) of the same species?",
            "options": [
              { "id": "A", "text": "$\\mathrm{CH_3{-}CH=CH{-}CH_2^+}$ and $\\mathrm{CH_3{-}CH^+{-}CH=CH_2}$" },
              { "id": "B", "text": "$\\mathrm{CH_3CH=CHOH}$ and $\\mathrm{CH_3CH_2CHO}$" },
              { "id": "C", "text": "$\\mathrm{CH_3CH_2OH}$ and $\\mathrm{CH_3OCH_3}$" },
              { "id": "D", "text": "$\\mathrm{CH_3CH=CH_2}$ and $\\mathrm{CH_2=CHCH_3}$" }
            ],
            "correct": "A",
            "explanation": "Resonance structures differ only in the placement of $\\pi$ electrons/lone pairs, never in the position of atoms. In A only the $\\pi$ bond and the positive charge have shifted. B are tautomers (atoms moved), C and D are constitutional/identical species."
          },
          {
            "id": "practice-chem-16",
            "section": "Chemistry (General Organic Chemistry)",
            "text": "The correct order of acidic strength of the following is",
            "options": [
              { "id": "A", "text": "p-nitrophenol > phenol > p-cresol > ethanol" },
              { "id": "B", "text": "ethanol > p-cresol > phenol > p-nitrophenol" },
              { "id": "C", "text": "phenol > p-nitrophenol > p-cresol > ethanol" },
              { "id": "D", "text": "p-cresol > phenol > p-nitrophenol > ethanol" }
            ],
            "correct": "A",
            "explanation": "The $-R/-I$ effect of $\\mathrm{-NO_2}$ stabilises the phenoxide ion strongly (p-nitrophenol most acidic), the $+I$/hyperconjugative $\\mathrm{-CH_3}$ destabilises it (p-cresol less acidic than phenol), and ethanol, lacking resonance delocalisation of its alkoxide charge, is the weakest acid."
          },
          {
            "id": "practice-chem-17",
            "section": "Chemistry (General Organic Chemistry)",
            "text": "Which statement about the electromeric effect is correct?",
            "options": [
              { "id": "A", "text": "It is a permanent effect that operates even in the absence of an attacking reagent" },
              { "id": "B", "text": "It involves the transfer of a single electron from a $\\pi$ bond" },
              { "id": "C", "text": "It is a temporary effect, induced by an attacking reagent, in which an entire shared $\\pi$ pair is transferred to one of the bonded atoms" },
              { "id": "D", "text": "It operates through $\\sigma$ bonds along the carbon chain and decreases with distance" }
            ],
            "correct": "C",
            "explanation": "The electromeric effect appears only when a reagent attacks, involves complete transfer of the $\\pi$ electron pair (shown by a double-headed curved arrow) and vanishes when the reagent is removed. B describes homolytic single-electron transfer; D describes the inductive effect."
          },
          {
            "id": "practice-chem-18",
            "section": "Chemistry (General Organic Chemistry)",
            "text": "The total number of $\\alpha$-hydrogens (hydrogens on carbons directly attached to the double-bonded carbons) available for hyperconjugation in 2,3-dimethylbut-2-ene, $\\mathrm{(CH_3)_2C=C(CH_3)_2}$, is",
            "options": [
              { "id": "A", "text": "$6$" },
              { "id": "B", "text": "$9$" },
              { "id": "C", "text": "$12$" },
              { "id": "D", "text": "$4$" }
            ],
            "correct": "C",
            "explanation": "All four methyl groups are attached to the two $sp^{2}$ carbons, so there are $4\\times3=12$ $\\alpha$-hydrogens, each capable of hyperconjugative overlap with the $\\pi$ system."
          },
          {
            "id": "practice-chem-19",
            "section": "Chemistry (General Organic Chemistry)",
            "text": "The correct order of stability of the following carbocations is",
            "options": [
              { "id": "A", "text": "$\\mathrm{CH_3^+ > CH_3CH_2^+ > (CH_3)_2CH^+ > (CH_3)_3C^+}$" },
              { "id": "B", "text": "$\\mathrm{(CH_3)_3C^+ > (CH_3)_2CH^+ > CH_3CH_2^+ > CH_3^+}$" },
              { "id": "C", "text": "$\\mathrm{(CH_3)_2CH^+ > (CH_3)_3C^+ > CH_3^+ > CH_3CH_2^+}$" },
              { "id": "D", "text": "$\\mathrm{CH_3CH_2^+ > (CH_3)_3C^+ > (CH_3)_2CH^+ > CH_3^+}$" }
            ],
            "correct": "B",
            "explanation": "Alkyl groups are electron-releasing ($+I$) and stabilise the positive charge through hyperconjugation: the greater the number of $\\alpha$-hydrogens ($3^\\circ$: 9, $2^\\circ$: 6, $1^\\circ$: 3, methyl: 0), the more stable the carbocation."
          },
          {
            "id": "practice-chem-20",
            "section": "Chemistry (General Organic Chemistry)",
            "text": "Identify the types of the following reactions:\n(i) $\\mathrm{CH_2{=}CH_2 + H_2O \\xrightarrow{H^+} CH_3CH_2OH}$\n(ii) $\\mathrm{CH_3CH_2Cl + alc.\\ KOH \\rightarrow CH_2{=}CH_2 + KCl + H_2O}$\n(iii) $\\mathrm{CH_4 + Cl_2 \\xrightarrow{hv} CH_3Cl + HCl}$",
            "options": [
              { "id": "A", "text": "(i) substitution, (ii) addition, (iii) elimination" },
              { "id": "B", "text": "(i) addition, (ii) substitution, (iii) elimination" },
              { "id": "C", "text": "(i) addition, (ii) elimination, (iii) substitution" },
              { "id": "D", "text": "(i) elimination, (ii) addition, (iii) substitution" }
            ],
            "correct": "C",
            "explanation": "(i) Water adds across the double bond — addition. (ii) HCl is removed to form a double bond — $\\beta$-elimination (dehydrohalogenation). (iii) An atom is replaced by another group — free-radical substitution."
          }
        ]
      }
    ]
  };

  var incoming = Array.isArray(payload) ? payload : (Array.isArray(payload.exams) ? payload.exams : [payload]);
  var existing = Array.isArray(window.BUNDLED_EXAMS.exams) ? window.BUNDLED_EXAMS.exams : [];
  var map = {};

  existing.forEach(function (exam) {
    if (exam && exam.id) map[String(exam.id)] = exam;
  });

  incoming.forEach(function (exam) {
    if (exam && exam.id) map[String(exam.id)] = exam;
  });

  window.BUNDLED_EXAMS.exams = Object.keys(map).map(function (id) {
    return map[id];
  });
})();
