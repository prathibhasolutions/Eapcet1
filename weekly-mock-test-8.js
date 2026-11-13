(function () {
  window.BUNDLED_EXAMS = window.BUNDLED_EXAMS || { exams: [] };

  var SEC_MATH = "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)";
  var SEC_PHY = "Physics (Units & Measurements, Motion in a Straight Line & Plane, Circular Motion, Electric Charges & Fields, Electrostatic Potential & Capacitance, Current Electricity)";
  var SEC_CHEM = "Chemistry (Atomic Structure, Periodicity, Chemical Bonding, Environmental Chemistry, Organic Basics, Hydrocarbons & Aromatic Compounds)";

  var payload = {
  "exams": [
    {
      "id": "weekly-mock-test-08",
      "title": "Weekly Mock Test - 8 (Complex Numbers, De Moivre, Roots of Unity, P&C, Trigonometry, Probability, Limits, Differentiation | Units, Motion, Circular Motion, Electrostatics, Current Electricity | Atomic Structure, Periodicity, Bonding, Environment, Organic, Hydrocarbons)",
      "date": "2026-11-15",
      "durationMinutes": 140,
      "marksPerQuestion": 1,
      "negativeMark": 0,
      "sections": [
        {
          "key": "maths",
          "title": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "count": 60,
          "start": 1,
          "end": 60
        },
        {
          "key": "physics",
          "title": "Physics (Units & Measurements, Motion in a Straight Line & Plane, Circular Motion, Electric Charges & Fields, Electrostatic Potential & Capacitance, Current Electricity)",
          "count": 30,
          "start": 61,
          "end": 90
        },
        {
          "key": "chemistry",
          "title": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding, Environmental Chemistry, Organic Basics, Hydrocarbons & Aromatic Compounds)",
          "count": 30,
          "start": 91,
          "end": 120
        }
      ],
      "questions": [
        {
          "id": "w8-math-1",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "The complex numbers $z_1,z_2,z_3$ are the vertices of an equilateral triangle whose centroid is at the origin. If $z_1=2+i\\sqrt3$, then $|z_2-z_3|$ equals",
          "options": [
            {
              "id": "A",
              "text": "$\\sqrt{21}$"
            },
            {
              "id": "B",
              "text": "$\\sqrt7$"
            },
            {
              "id": "C",
              "text": "$3\\sqrt7$"
            },
            {
              "id": "D",
              "text": "$2\\sqrt7$"
            }
          ],
          "correct": "A",
          "explanation": "For an equilateral triangle with centroid at the origin, the circumradius is $R=|z_1|=\\sqrt{4+3}=\\sqrt7$. The side of the triangle is $\\sqrt3R=\\sqrt{21}$. Hence $|z_2-z_3|=\\sqrt{21}$."
        },
        {
          "id": "w8-math-2",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "The locus of a point $z$ satisfying $|z-3|+|z+3|=10$ encloses an area equal to",
          "options": [
            {
              "id": "A",
              "text": "$16\\pi$"
            },
            {
              "id": "B",
              "text": "$20\\pi$"
            },
            {
              "id": "C",
              "text": "$25\\pi$"
            },
            {
              "id": "D",
              "text": "$15\\pi$"
            }
          ],
          "correct": "B",
          "explanation": "The sum of distances from $(3,0)$ and $(-3,0)$ is constant, so the locus is an ellipse with foci $(\\pm3,0)$ and $2a=10$. Thus $a=5$, $c=3$ and $b^2=a^2-c^2=16$. Its area is $\\pi ab=20\\pi$."
        },
        {
          "id": "w8-math-3",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "The radius of the circle which is the locus of $z$ satisfying $|z-1|=2|z+1|$ is",
          "options": [
            {
              "id": "A",
              "text": "$4$"
            },
            {
              "id": "B",
              "text": "$2$"
            },
            {
              "id": "C",
              "text": "$\\dfrac43$"
            },
            {
              "id": "D",
              "text": "$\\dfrac23$"
            }
          ],
          "correct": "C",
          "explanation": "Put $z=x+iy$. Then $(x-1)^2+y^2=4[(x+1)^2+y^2]$, which simplifies to $x^2+\\dfrac{10}{3}x+1+y^2=0$. Completing the square gives $\\left(x+\\dfrac53\\right)^2+y^2=\\dfrac{16}{9}$, so the radius is $\\dfrac43$."
        },
        {
          "id": "w8-math-4",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "If the amplitude of $\\dfrac{z-1}{z+1}$ is $\\dfrac{\\pi}{2}$, then the locus of $z$ is",
          "options": [
            {
              "id": "A",
              "text": "$x^2+y^2=4$"
            },
            {
              "id": "B",
              "text": "$y=x$, excluding the origin"
            },
            {
              "id": "C",
              "text": "$x=1$"
            },
            {
              "id": "D",
              "text": "$x^2+y^2=1$, excluding $(\\pm1,0)$"
            }
          ],
          "correct": "D",
          "explanation": "The condition means that the angle subtended by the segment joining $-1$ and $1$ at the point $z$ is a right angle. Hence $z$ lies on the circle with diameter joining $-1$ and $1$, that is, $x^2+y^2=1$, excluding the endpoints where the expression is undefined."
        },
        {
          "id": "w8-math-5",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "If $z=\\dfrac{1+2i}{2-i}$, then $z^{2026}+z^{2025}$ equals",
          "options": [
            {
              "id": "A",
              "text": "$-1+i$"
            },
            {
              "id": "B",
              "text": "$1-i$"
            },
            {
              "id": "C",
              "text": "$-1-i$"
            },
            {
              "id": "D",
              "text": "$1+i$"
            }
          ],
          "correct": "A",
          "explanation": "$z=\\dfrac{(1+2i)(2+i)}{5}=\\dfrac{5i}{5}=i$. Hence $z^{2026}=i^{2026}=i^{4(506)+2}=-1$ and $z^{2025}=i^{4(506)+1}=i$. Therefore the sum is $-1+i$."
        },
        {
          "id": "w8-math-6",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "If $z=\\dfrac{3+4i}{4-3i}+\\dfrac{4+3i}{3-4i}$, then $z+\\bar z$ equals",
          "options": [
            {
              "id": "A",
              "text": "$4i$"
            },
            {
              "id": "B",
              "text": "$0$"
            },
            {
              "id": "C",
              "text": "$2i$"
            },
            {
              "id": "D",
              "text": "$-2i$"
            }
          ],
          "correct": "B",
          "explanation": "$\\dfrac{3+4i}{4-3i}=\\dfrac{(3+4i)(4+3i)}{25}=i$ and $\\dfrac{4+3i}{3-4i}=\\dfrac{(4+3i)(3+4i)}{25}=i$. Thus $z=2i$, which is purely imaginary, so $z+\\bar z=0$."
        },
        {
          "id": "w8-math-7",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "The complex number $z$ with $|z|=2$ at which $|z-3-4i|$ is maximum is",
          "options": [
            {
              "id": "A",
              "text": "$-\\dfrac65+\\dfrac85i$"
            },
            {
              "id": "B",
              "text": "$\\dfrac65-\\dfrac85i$"
            },
            {
              "id": "C",
              "text": "$-\\dfrac65-\\dfrac85i$"
            },
            {
              "id": "D",
              "text": "$\\dfrac65+\\dfrac85i$"
            }
          ],
          "correct": "C",
          "explanation": "The distance is maximum when $z$ lies on the circle $|z|=2$ in the direction opposite to $3+4i$. Thus $z=-2\\dfrac{3+4i}{5}=-\\dfrac65-\\dfrac85i$, and the maximum value is $5+2=7$."
        },
        {
          "id": "w8-math-8",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "Let $z_1,z_2,z_3$ be distinct complex numbers such that $|z_1|=|z_2|=|z_3|=1$ and $z_1+z_2+z_3=0$. Then the points $z_1,z_2,z_3$ are the vertices of",
          "options": [
            {
              "id": "A",
              "text": "a right-angled triangle"
            },
            {
              "id": "B",
              "text": "an isosceles right-angled triangle"
            },
            {
              "id": "C",
              "text": "a degenerate triangle"
            },
            {
              "id": "D",
              "text": "an equilateral triangle"
            }
          ],
          "correct": "D",
          "explanation": "The centroid of the three points is the origin and all three lie on the unit circle. Three points on a circle whose centroid is the centre must be equally spaced, so the arcs between consecutive points are equal. Hence they form an equilateral triangle."
        },
        {
          "id": "w8-math-9",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "The square roots of $8-6i$ are",
          "options": [
            {
              "id": "A",
              "text": "$\\pm(3-i)$"
            },
            {
              "id": "B",
              "text": "$\\pm(3+i)$"
            },
            {
              "id": "C",
              "text": "$\\pm(1-3i)$"
            },
            {
              "id": "D",
              "text": "$\\pm(1+3i)$"
            }
          ],
          "correct": "A",
          "explanation": "$(3-i)^2=9-6i+i^2=8-6i$. Hence the two square roots are $\\pm(3-i)$."
        },
        {
          "id": "w8-math-10",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "For $0<\\theta<\\pi$, the argument of $\\dfrac{1+\\cos\\theta+i\\sin\\theta}{1-\\cos\\theta-i\\sin\\theta}$ is",
          "options": [
            {
              "id": "A",
              "text": "$\\pi$"
            },
            {
              "id": "B",
              "text": "$\\dfrac{\\pi}{2}$"
            },
            {
              "id": "C",
              "text": "$0$"
            },
            {
              "id": "D",
              "text": "$\\dfrac{\\theta}{2}$"
            }
          ],
          "correct": "B",
          "explanation": "Write $1+\\cos\\theta+i\\sin\\theta=2\\cos\\dfrac{\\theta}{2}e^{i\\theta/2}$ and $1-\\cos\\theta-i\\sin\\theta=2\\sin\\dfrac{\\theta}{2}e^{i(\\theta/2-\\pi/2)}$. Their quotient is $\\cot\\dfrac{\\theta}{2}e^{i\\pi/2}$, whose argument is $\\dfrac{\\pi}{2}$."
        },
        {
          "id": "w8-math-11",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "If $|z|=1$, then the maximum value of $|z+3+4i|+|z-3-4i|$ is",
          "options": [
            {
              "id": "A",
              "text": "$10$"
            },
            {
              "id": "B",
              "text": "$2\\sqrt{13}$"
            },
            {
              "id": "C",
              "text": "$2\\sqrt{26}$"
            },
            {
              "id": "D",
              "text": "$2\\sqrt{24}$"
            }
          ],
          "correct": "C",
          "explanation": "Let $a=3+4i$, so $|a|=5$. For $|z|=1$, $S=|z+a|+|z-a|$. Squaring and adding, $S^2=2|z|^2+2|a|^2+2|z^2-a^2|=52+2|z^2-a^2|$. Since $|z^2-a^2|\\le |z|^2+|a|^2=26$, we get $S^2\\le104$. Hence $S_{\\max}=2\\sqrt{26}$."
        },
        {
          "id": "w8-math-12",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "Match the following complex numbers with their principal arguments: (a) $-1+i\\sqrt3$; (b) $-\\sqrt3-i$; (c) $1-i$; (d) $-2i$.",
          "options": [
            {
              "id": "A",
              "text": "(a) $\\dfrac{\\pi}{3}$; (b) $-\\dfrac{\\pi}{6}$; (c) $\\dfrac{\\pi}{4}$; (d) $\\dfrac{\\pi}{2}$"
            },
            {
              "id": "B",
              "text": "(a) $\\dfrac{2\\pi}{3}$; (b) $\\dfrac{5\\pi}{6}$; (c) $-\\dfrac{\\pi}{4}$; (d) $\\dfrac{\\pi}{2}$"
            },
            {
              "id": "C",
              "text": "(a) $-\\dfrac{2\\pi}{3}$; (b) $-\\dfrac{5\\pi}{6}$; (c) $\\dfrac{3\\pi}{4}$; (d) $-\\dfrac{\\pi}{2}$"
            },
            {
              "id": "D",
              "text": "(a) $\\dfrac{2\\pi}{3}$; (b) $-\\dfrac{5\\pi}{6}$; (c) $-\\dfrac{\\pi}{4}$; (d) $-\\dfrac{\\pi}{2}$"
            }
          ],
          "correct": "D",
          "explanation": "The points lie in the second, third, fourth and negative imaginary axis respectively. Their principal arguments are $\\dfrac{2\\pi}{3}$, $-\\dfrac{5\\pi}{6}$, $-\\dfrac{\\pi}{4}$ and $-\\dfrac{\\pi}{2}$."
        },
        {
          "id": "w8-math-13",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "The sum of the squares of all the roots of $z^5+32=0$ is",
          "options": [
            {
              "id": "A",
              "text": "$0$"
            },
            {
              "id": "B",
              "text": "$-32$"
            },
            {
              "id": "C",
              "text": "$32$"
            },
            {
              "id": "D",
              "text": "$10$"
            }
          ],
          "correct": "A",
          "explanation": "The roots are $2e^{i(\\pi+2k\\pi)/5}$, $k=0,1,\\ldots,4$. Their squares are $4e^{2\\pi i/5}e^{4\\pi ik/5}$. Since $\\gcd(4,5)=1$, the numbers $e^{4\\pi ik/5}$ run through all fifth roots of unity, whose sum is $0$. Hence the required sum is $0$."
        },
        {
          "id": "w8-math-14",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "If $n$ is the least positive integer for which $\\left(\\dfrac{1+i}{1-i}\\right)^n=1$, then $(1+i)^n$ equals",
          "options": [
            {
              "id": "A",
              "text": "$4i$"
            },
            {
              "id": "B",
              "text": "$-4$"
            },
            {
              "id": "C",
              "text": "$4$"
            },
            {
              "id": "D",
              "text": "$-4i$"
            }
          ],
          "correct": "B",
          "explanation": "$\\dfrac{1+i}{1-i}=i$, so we need the least $n$ with $i^n=1$, namely $n=4$. Then $(1+i)^4=\\left[\\sqrt2e^{i\\pi/4}\\right]^4=4e^{i\\pi}=-4$."
        },
        {
          "id": "w8-math-15",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "Let $\\omega=e^{2\\pi i/n}$ and $n>1$. The value of $\\displaystyle\\sum_{k=1}^{n-1}(1+\\omega^k)$ is",
          "options": [
            {
              "id": "A",
              "text": "$n$"
            },
            {
              "id": "B",
              "text": "$0$"
            },
            {
              "id": "C",
              "text": "$n-2$"
            },
            {
              "id": "D",
              "text": "$n-1$"
            }
          ],
          "correct": "C",
          "explanation": "The sum equals $(n-1)+\\displaystyle\\sum_{k=1}^{n-1}\\omega^k$. Since $\\displaystyle\\sum_{k=0}^{n-1}\\omega^k=0$, we have $\\displaystyle\\sum_{k=1}^{n-1}\\omega^k=-1$. Hence the value is $n-2$."
        },
        {
          "id": "w8-math-16",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "If $\\alpha$ is a primitive seventh root of unity, then $\\displaystyle\\prod_{k=1}^{6}(1-\\alpha^k)$ equals",
          "options": [
            {
              "id": "A",
              "text": "$1$"
            },
            {
              "id": "B",
              "text": "$-7$"
            },
            {
              "id": "C",
              "text": "$0$"
            },
            {
              "id": "D",
              "text": "$7$"
            }
          ],
          "correct": "D",
          "explanation": "The numbers $1,\\alpha,\\ldots,\\alpha^6$ are all the roots of $z^7-1=0$. Using $z^7-1=(z-1)\\prod_{k=1}^{6}(z-\\alpha^k)$ and differentiating at $z=1$, or taking the limit $z\\to1$, gives $\\prod_{k=1}^{6}(1-\\alpha^k)=7$."
        },
        {
          "id": "w8-math-17",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "The sum of all the roots of $z^4-z^3+z^2-z+1=0$ is",
          "options": [
            {
              "id": "A",
              "text": "$1$"
            },
            {
              "id": "B",
              "text": "$-1$"
            },
            {
              "id": "C",
              "text": "$0$"
            },
            {
              "id": "D",
              "text": "$5$"
            }
          ],
          "correct": "A",
          "explanation": "For a monic polynomial, the sum of the roots equals the negative of the coefficient of $z^3$. Here that coefficient is $-1$, so the sum of the roots is $1$."
        },
        {
          "id": "w8-math-18",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "If $\\omega$ is a non-real cube root of unity, then $(1+\\omega-\\omega^2)^7+(1-\\omega+\\omega^2)^7$ equals",
          "options": [
            {
              "id": "A",
              "text": "$256$"
            },
            {
              "id": "B",
              "text": "$128$"
            },
            {
              "id": "C",
              "text": "$-128$"
            },
            {
              "id": "D",
              "text": "$0$"
            }
          ],
          "correct": "B",
          "explanation": "Since $1+\\omega=-\\omega^2$ and $1+\\omega^2=-\\omega$, the first term is $(-2\\omega^2)^7=-128\\omega^{14}=-128\\omega^2$, and the second is $(-2\\omega)^7=-128\\omega^7=-128\\omega$. Their sum is $-128(\\omega+\\omega^2)=128$."
        },
        {
          "id": "w8-math-19",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "The area of the regular polygon formed by the roots of $z^6=-64$ in the Argand plane is",
          "options": [
            {
              "id": "A",
              "text": "$3\\sqrt3$"
            },
            {
              "id": "B",
              "text": "$24\\sqrt3$"
            },
            {
              "id": "C",
              "text": "$6\\sqrt3$"
            },
            {
              "id": "D",
              "text": "$12\\sqrt3$"
            }
          ],
          "correct": "C",
          "explanation": "The roots have modulus $|z|=64^{1/6}=2$ and form a regular hexagon inscribed in a circle of radius $2$. Its area is $\\dfrac{3\\sqrt3}{2}R^2=\\dfrac{3\\sqrt3}{2}\\cdot4=6\\sqrt3$."
        },
        {
          "id": "w8-math-20",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "Match the following: (a) sum of all roots of $z^n=1$; (b) product of all roots of $z^n=1$; (c) product of the two non-real cube roots of unity; (d) sum of the squares of the three cube roots of unity.",
          "options": [
            {
              "id": "A",
              "text": "(a) $1$; (b) $(-1)^n$; (c) $-1$; (d) $0$"
            },
            {
              "id": "B",
              "text": "(a) $0$; (b) $(-1)^n$; (c) $1$; (d) $3$"
            },
            {
              "id": "C",
              "text": "(a) $n$; (b) $(-1)^{n+1}$; (c) $-1$; (d) $0$"
            },
            {
              "id": "D",
              "text": "(a) $0$; (b) $(-1)^{n+1}$; (c) $1$; (d) $0$"
            }
          ],
          "correct": "D",
          "explanation": "The roots of $z^n-1=0$ have sum $0$ and product $(-1)^{n+1}$. The non-real cube roots are $\\omega,\\omega^2$ with product $\\omega^3=1$. Also $1^2+\\omega^2+\\omega^4=1+\\omega^2+\\omega=0$."
        },
        {
          "id": "w8-math-21",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "A five-digit number is formed using the digits $1,2,3,4,5$ without repetition. The number of such numbers divisible by $4$ is",
          "options": [
            {
              "id": "A",
              "text": "$24$"
            },
            {
              "id": "B",
              "text": "$12$"
            },
            {
              "id": "C",
              "text": "$48$"
            },
            {
              "id": "D",
              "text": "$6$"
            }
          ],
          "correct": "A",
          "explanation": "A number is divisible by $4$ if its last two digits form a multiple of $4$. From these digits the possible endings are $12,24,32,52$. For each ending the remaining three digits can be arranged in $3!=6$ ways. Hence the total is $4\\times6=24$."
        },
        {
          "id": "w8-math-22",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "The number of ways of distributing $5$ distinct balls into $3$ distinct boxes so that no box remains empty is",
          "options": [
            {
              "id": "A",
              "text": "$180$"
            },
            {
              "id": "B",
              "text": "$150$"
            },
            {
              "id": "C",
              "text": "$243$"
            },
            {
              "id": "D",
              "text": "$90$"
            }
          ],
          "correct": "B",
          "explanation": "Without restriction there are $3^5$ assignments. Subtract those missing at least one box: $3\\cdot2^5$, and add back the cases missing two boxes, $3\\cdot1^5$. Thus the number is $3^5-3\\cdot2^5+3=243-96+3=150$."
        },
        {
          "id": "w8-math-23",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "The number of arrangements of the letters of the word EXAMINATION in which no two A's are together is",
          "options": [
            {
              "id": "A",
              "text": "$4536000$"
            },
            {
              "id": "B",
              "text": "$3628800$"
            },
            {
              "id": "C",
              "text": "$4082400$"
            },
            {
              "id": "D",
              "text": "$907200$"
            }
          ],
          "correct": "C",
          "explanation": "Arrange the other $9$ letters E,X,M,I,I,N,N,T,O: there are $\\dfrac{9!}{2!2!}=90720$ arrangements. These create $10$ gaps, and the two A's can be placed in ${}^{10}C_2=45$ ways. Hence the required number is $90720\\times45=4082400$."
        },
        {
          "id": "w8-math-24",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "Four men and four women are to be seated around a circular table so that no two men are adjacent. The number of arrangements is",
          "options": [
            {
              "id": "A",
              "text": "$288$"
            },
            {
              "id": "B",
              "text": "$72$"
            },
            {
              "id": "C",
              "text": "$576$"
            },
            {
              "id": "D",
              "text": "$144$"
            }
          ],
          "correct": "D",
          "explanation": "Arrange the four women around the circle in $(4-1)!=6$ ways. This creates four gaps, and the four men can be placed in these gaps in $4!=24$ ways. Hence the total is $6\\times24=144$."
        },
        {
          "id": "w8-math-25",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "The number of ways of choosing $3$ numbers from the set $\\{1,2,\\ldots,20\\}$ such that no two chosen numbers are consecutive is",
          "options": [
            {
              "id": "A",
              "text": "$816$"
            },
            {
              "id": "B",
              "text": "$680$"
            },
            {
              "id": "C",
              "text": "$969$"
            },
            {
              "id": "D",
              "text": "$1140$"
            }
          ],
          "correct": "A",
          "explanation": "Choosing $3$ non-consecutive numbers from $n$ objects is equivalent to choosing $3$ from $n-3+1=18$ positions, giving ${}^{18}C_3=816$."
        },
        {
          "id": "w8-math-26",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "The number of positive integer solutions of $x_1+x_2+x_3+x_4=20$ with $x_1\\ge2$, $x_2\\ge3$, $x_3\\ge1$ and $x_4\\ge0$ is",
          "options": [
            {
              "id": "A",
              "text": "$455$"
            },
            {
              "id": "B",
              "text": "$680$"
            },
            {
              "id": "C",
              "text": "$816$"
            },
            {
              "id": "D",
              "text": "$560$"
            }
          ],
          "correct": "B",
          "explanation": "Put $y_1=x_1-2$, $y_2=x_2-3$, $y_3=x_3-1$ and $y_4=x_4$. Then $y_1+y_2+y_3+y_4=14$ with $y_i\\ge0$. The number of solutions is ${}^{17}C_3=680$."
        },
        {
          "id": "w8-math-27",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "A committee of $4$ is to be selected from $5$ men and $4$ women so that it contains at least one man and at least one woman. The number of such committees is",
          "options": [
            {
              "id": "A",
              "text": "$125$"
            },
            {
              "id": "B",
              "text": "$121$"
            },
            {
              "id": "C",
              "text": "$120$"
            },
            {
              "id": "D",
              "text": "$126$"
            }
          ],
          "correct": "C",
          "explanation": "The total number of committees is ${}^{9}C_4=126$. The all-men committee can be formed in ${}^{5}C_4=5$ ways and the all-women committee in ${}^{4}C_4=1$ way. Hence the required number is $126-5-1=120$."
        },
        {
          "id": "w8-math-28",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "The number of derangements of $5$ distinct objects is",
          "options": [
            {
              "id": "A",
              "text": "$45$"
            },
            {
              "id": "B",
              "text": "$120$"
            },
            {
              "id": "C",
              "text": "$76$"
            },
            {
              "id": "D",
              "text": "$44$"
            }
          ],
          "correct": "D",
          "explanation": "The derangement number is $D_5=5!\\left(1-\\dfrac1{1!}+\\dfrac1{2!}-\\dfrac1{3!}+\\dfrac1{4!}-\\dfrac1{5!}\\right)=44$."
        },
        {
          "id": "w8-math-29",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "The number of arrangements of the letters of the word SUCCESS in which all the S's are together is",
          "options": [
            {
              "id": "A",
              "text": "$60$"
            },
            {
              "id": "B",
              "text": "$120$"
            },
            {
              "id": "C",
              "text": "$30$"
            },
            {
              "id": "D",
              "text": "$20$"
            }
          ],
          "correct": "A",
          "explanation": "Treat the three S's as one block. Then the objects are the block, U, C, C and E, which contain two identical C's. The number of arrangements is $\\dfrac{5!}{2!}=60$."
        },
        {
          "id": "w8-math-30",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "Match the following: (a) number of subsets of a set with $n$ elements; (b) number of diagonals of a polygon with $n$ sides; (c) number of derangements of $n$ objects; (d) number of circular arrangements of $n$ distinct objects.",
          "options": [
            {
              "id": "A",
              "text": "(a) $2^n$; (b) $\\dfrac{n(n-1)}{2}$; (c) $\\dfrac{n!}{2}$; (d) $n!$"
            },
            {
              "id": "B",
              "text": "(a) $2^n$; (b) $\\dfrac{n(n-3)}{2}$; (c) $n!\\displaystyle\\sum_{k=0}^{n}\\dfrac{(-1)^k}{k!}$; (d) $(n-1)!$"
            },
            {
              "id": "C",
              "text": "(a) $2^n-1$; (b) $\\dfrac{n(n-1)}{2}$; (c) $n!$; (d) $n!$"
            },
            {
              "id": "D",
              "text": "(a) $n^2$; (b) $\\dfrac{n(n-3)}{2}$; (c) $n!\\displaystyle\\sum_{k=0}^{n}\\dfrac{(-1)^k}{k!}$; (d) $(n-1)!$"
            }
          ],
          "correct": "B",
          "explanation": "A set with $n$ elements has $2^n$ subsets. The diagonals are ${}^{n}C_2-n=\\dfrac{n(n-3)}{2}$. The derangement formula is $n!\\sum_{k=0}^{n}\\dfrac{(-1)^k}{k!}$, and circular arrangements number $(n-1)!$."
        },
        {
          "id": "w8-math-31",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "If $\\sin\\theta+\\cos\\theta=\\dfrac15$, then the value of $\\sin^3\\theta+\\cos^3\\theta$ is",
          "options": [
            {
              "id": "A",
              "text": "$\\dfrac{43}{125}$"
            },
            {
              "id": "B",
              "text": "$\\dfrac15$"
            },
            {
              "id": "C",
              "text": "$\\dfrac{37}{125}$"
            },
            {
              "id": "D",
              "text": "$\\dfrac{31}{125}$"
            }
          ],
          "correct": "C",
          "explanation": "Squaring $\\sin\\theta+\\cos\\theta=\\dfrac15$ gives $1+2\\sin\\theta\\cos\\theta=\\dfrac1{25}$, so $\\sin\\theta\\cos\\theta=-\\dfrac{12}{25}$. Now $\\sin^3\\theta+\\cos^3\\theta=(\\sin\\theta+\\cos\\theta)(1-\\sin\\theta\\cos\\theta)=\\dfrac15\\left(1+\\dfrac{12}{25}\\right)=\\dfrac15\\cdot\\dfrac{37}{25}=\\dfrac{37}{125}$."
        },
        {
          "id": "w8-math-32",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "If $\\tan(A+B)=\\sqrt3$ and $\\tan(A-B)=\\dfrac1{\\sqrt3}$, where $0<A,B<\\dfrac{\\pi}{2}$ and $A>B$, then",
          "options": [
            {
              "id": "A",
              "text": "$A=60^\\circ,\\ B=30^\\circ$"
            },
            {
              "id": "B",
              "text": "$A=15^\\circ,\\ B=45^\\circ$"
            },
            {
              "id": "C",
              "text": "$A=75^\\circ,\\ B=45^\\circ$"
            },
            {
              "id": "D",
              "text": "$A=45^\\circ,\\ B=15^\\circ$"
            }
          ],
          "correct": "D",
          "explanation": "Since $0<A,B<\\dfrac{\\pi}{2}$, we have $0<A+B<\\pi$, so $\\tan(A+B)=\\sqrt3$ gives $A+B=60^\\circ$. Also $-\\dfrac{\\pi}{2}<A-B<\\dfrac{\\pi}{2}$, so $\\tan(A-B)=\\dfrac1{\\sqrt3}$ gives $A-B=30^\\circ$. Solving, $A=45^\\circ$ and $B=15^\\circ$."
        },
        {
          "id": "w8-math-33",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "The value of $\\cos20^\\circ\\cos40^\\circ\\cos80^\\circ$ is",
          "options": [
            {
              "id": "A",
              "text": "$\\dfrac18$"
            },
            {
              "id": "B",
              "text": "$\\dfrac14$"
            },
            {
              "id": "C",
              "text": "$\\dfrac1{16}$"
            },
            {
              "id": "D",
              "text": "$\\dfrac38$"
            }
          ],
          "correct": "A",
          "explanation": "Multiply and divide by $2\\sin20^\\circ$. Then $2\\sin20^\\circ\\cos20^\\circ=\\sin40^\\circ$, $2\\sin40^\\circ\\cos40^\\circ=\\sin80^\\circ$, and $2\\sin80^\\circ\\cos80^\\circ=\\sin160^\\circ=\\sin20^\\circ$. The product is therefore $\\dfrac{\\sin20^\\circ}{8\\sin20^\\circ}=\\dfrac18$."
        },
        {
          "id": "w8-math-34",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "For every real $\\theta$, the value of $\\cos^2\\theta+\\cos^2\\left(\\theta+\\dfrac{2\\pi}{3}\\right)+\\cos^2\\left(\\theta+\\dfrac{4\\pi}{3}\\right)$ is",
          "options": [
            {
              "id": "A",
              "text": "$2$"
            },
            {
              "id": "B",
              "text": "$\\dfrac32$"
            },
            {
              "id": "C",
              "text": "$1$"
            },
            {
              "id": "D",
              "text": "$\\dfrac12$"
            }
          ],
          "correct": "B",
          "explanation": "Using $\\cos^2x=\\dfrac{1+\\cos2x}{2}$, the sum is $\\dfrac32+\\dfrac12\\left[\\cos2\\theta+\\cos\\left(2\\theta+\\dfrac{4\\pi}{3}\\right)+\\cos\\left(2\\theta+\\dfrac{8\\pi}{3}\\right)\\right]$. The three cosines are equally spaced by $\\dfrac{4\\pi}{3}$ and add to zero, so the value is $\\dfrac32$."
        },
        {
          "id": "w8-math-35",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "The number of solutions of $\\sin3x=\\cos2x$ in the interval $[0,2\\pi]$ is",
          "options": [
            {
              "id": "A",
              "text": "$7$"
            },
            {
              "id": "B",
              "text": "$4$"
            },
            {
              "id": "C",
              "text": "$5$"
            },
            {
              "id": "D",
              "text": "$6$"
            }
          ],
          "correct": "C",
          "explanation": "Write $\\cos2x=\\sin\\left(\\dfrac{\\pi}{2}-2x\\right)$. Then $3x=\\dfrac{\\pi}{2}-2x+2n\\pi$ gives $x=\\dfrac{\\pi}{10}+\\dfrac{2n\\pi}{5}$, producing $x=\\dfrac{\\pi}{10},\\dfrac{\\pi}{2},\\dfrac{9\\pi}{10},\\dfrac{13\\pi}{10},\\dfrac{17\\pi}{10}$ for $n=0,1,2,3,4$. The other family $3x=\\pi-\\left(\\dfrac{\\pi}{2}-2x\\right)+2n\\pi$ gives $x=\\dfrac{\\pi}{2}+2n\\pi$, whose only solution in the interval is $\\dfrac{\\pi}{2}$, already counted. Hence there are $5$ solutions."
        },
        {
          "id": "w8-math-36",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "If $A+B+C=\\pi$, then $\\sin2A+\\sin2B+\\sin2C$ equals",
          "options": [
            {
              "id": "A",
              "text": "$2\\sin A\\sin B\\sin C$"
            },
            {
              "id": "B",
              "text": "$4\\cos A\\cos B\\cos C$"
            },
            {
              "id": "C",
              "text": "$0$"
            },
            {
              "id": "D",
              "text": "$4\\sin A\\sin B\\sin C$"
            }
          ],
          "correct": "D",
          "explanation": "Since $A+B=\\pi-C$, $\\sin2A+\\sin2B=2\\sin(A+B)\\cos(A-B)=2\\sin C\\cos(A-B)$. Adding $\\sin2C=2\\sin C\\cos C$ gives $2\\sin C[\\cos(A-B)+\\cos C]$. As $\\cos C=-\\cos(A+B)$, this is $2\\sin C[\\cos(A-B)-\\cos(A+B)]=2\\sin C\\cdot2\\sin A\\sin B=4\\sin A\\sin B\\sin C$."
        },
        {
          "id": "w8-math-37",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "A bag contains $3$ red, $4$ green and $5$ blue balls. Three balls are drawn at random without replacement. The probability that all three are of different colours is",
          "options": [
            {
              "id": "A",
              "text": "$\\dfrac{3}{11}$"
            },
            {
              "id": "B",
              "text": "$\\dfrac{2}{11}$"
            },
            {
              "id": "C",
              "text": "$\\dfrac{5}{22}$"
            },
            {
              "id": "D",
              "text": "$\\dfrac14$"
            }
          ],
          "correct": "A",
          "explanation": "One ball of each colour can be chosen in $3\\times4\\times5=60$ ways, while any three balls can be chosen in ${}^{12}C_3=220$ ways. The required probability is $\\dfrac{60}{220}=\\dfrac{3}{11}$."
        },
        {
          "id": "w8-math-38",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "Two fair dice are thrown. Given that at least one die shows a $3$, the probability that the sum of the numbers is $8$ is",
          "options": [
            {
              "id": "A",
              "text": "$\\dfrac15$"
            },
            {
              "id": "B",
              "text": "$\\dfrac{2}{11}$"
            },
            {
              "id": "C",
              "text": "$\\dfrac16$"
            },
            {
              "id": "D",
              "text": "$\\dfrac19$"
            }
          ],
          "correct": "B",
          "explanation": "The number of outcomes with at least one $3$ is $6+6-1=11$. Among these, a sum of $8$ occurs only for $(3,5)$ and $(5,3)$, that is, $2$ outcomes. The conditional probability is $\\dfrac{2}{11}$."
        },
        {
          "id": "w8-math-39",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "A and B independently attempt a problem. The probabilities that they solve it are $\\dfrac12$ and $\\dfrac13$ respectively. Given that the problem is solved, the probability that A solved it is",
          "options": [
            {
              "id": "A",
              "text": "$\\dfrac23$"
            },
            {
              "id": "B",
              "text": "$\\dfrac35$"
            },
            {
              "id": "C",
              "text": "$\\dfrac34$"
            },
            {
              "id": "D",
              "text": "$\\dfrac12$"
            }
          ],
          "correct": "C",
          "explanation": "The probability that the problem is solved is $1-\\left(1-\\dfrac12\\right)\\left(1-\\dfrac13\\right)=1-\\dfrac12\\cdot\\dfrac23=\\dfrac23$. The event that A solved it and the problem is solved has probability $\\dfrac12$. Hence the conditional probability is $\\dfrac{1/2}{2/3}=\\dfrac34$."
        },
        {
          "id": "w8-math-40",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "Five letters are placed at random into five addressed envelopes. The probability that exactly one letter goes into its correct envelope is",
          "options": [
            {
              "id": "A",
              "text": "$\\dfrac18$"
            },
            {
              "id": "B",
              "text": "$\\dfrac{9}{40}$"
            },
            {
              "id": "C",
              "text": "$\\dfrac15$"
            },
            {
              "id": "D",
              "text": "$\\dfrac38$"
            }
          ],
          "correct": "D",
          "explanation": "Choose the letter that is correctly placed in $5$ ways. The remaining four letters must all be wrongly placed, which can happen in $D_4=9$ derangements. Thus there are $5\\times9=45$ favourable arrangements out of $5!=120$, giving probability $\\dfrac{45}{120}=\\dfrac38$."
        },
        {
          "id": "w8-math-41",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "A fair coin is tossed repeatedly until the first head appears. The probability that the first head appears on an even-numbered toss is",
          "options": [
            {
              "id": "A",
              "text": "$\\dfrac13$"
            },
            {
              "id": "B",
              "text": "$\\dfrac12$"
            },
            {
              "id": "C",
              "text": "$\\dfrac23$"
            },
            {
              "id": "D",
              "text": "$\\dfrac14$"
            }
          ],
          "correct": "A",
          "explanation": "The first head appears on an even toss in $2,4,6,\\ldots$ tosses, with probabilities $\\left(\\dfrac12\\right)^2,\\left(\\dfrac12\\right)^4,\\left(\\dfrac12\\right)^6,\\ldots$. Their sum is $\\dfrac{1/4}{1-1/4}=\\dfrac13$."
        },
        {
          "id": "w8-math-42",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "Two distinct numbers are chosen at random without replacement from $1,2,\\ldots,20$. The probability that their sum is even is",
          "options": [
            {
              "id": "A",
              "text": "$\\dfrac{8}{19}$"
            },
            {
              "id": "B",
              "text": "$\\dfrac{9}{19}$"
            },
            {
              "id": "C",
              "text": "$\\dfrac{10}{19}$"
            },
            {
              "id": "D",
              "text": "$\\dfrac12$"
            }
          ],
          "correct": "B",
          "explanation": "The sum is even exactly when both numbers have the same parity. There are $10$ even and $10$ odd numbers, so the favourable choices are $2\\,{}^{10}C_2=90$. The total number of choices is ${}^{20}C_2=190$. Hence the probability is $\\dfrac{90}{190}=\\dfrac{9}{19}$."
        },
        {
          "id": "w8-math-43",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "A lot contains $20$ articles, of which $5$ are defective. Three articles are selected at random without replacement. The probability that at least one is defective is",
          "options": [
            {
              "id": "A",
              "text": "$\\dfrac12$"
            },
            {
              "id": "B",
              "text": "$\\dfrac{137}{220}$"
            },
            {
              "id": "C",
              "text": "$\\dfrac{137}{228}$"
            },
            {
              "id": "D",
              "text": "$\\dfrac{91}{228}$"
            }
          ],
          "correct": "C",
          "explanation": "The probability that all three are non-defective is $\\dfrac{{}^{15}C_3}{{}^{20}C_3}=\\dfrac{455}{1140}$. Therefore the required probability is $1-\\dfrac{455}{1140}=\\dfrac{685}{1140}=\\dfrac{137}{228}$."
        },
        {
          "id": "w8-math-44",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "Urn I contains $3$ white and $2$ black balls, while Urn II contains $2$ white and $3$ black balls. An urn is chosen at random and one ball is drawn from it. If the drawn ball is white, the probability that it came from Urn I is",
          "options": [
            {
              "id": "A",
              "text": "$\\dfrac25$"
            },
            {
              "id": "B",
              "text": "$\\dfrac12$"
            },
            {
              "id": "C",
              "text": "$\\dfrac{3}{10}$"
            },
            {
              "id": "D",
              "text": "$\\dfrac35$"
            }
          ],
          "correct": "D",
          "explanation": "By Bayes' theorem, $P(\\text{Urn I}\\mid\\text{white})=\\dfrac{\\frac12\\cdot\\frac35}{\\frac12\\cdot\\frac35+\\frac12\\cdot\\frac25}=\\dfrac{3/10}{5/10}=\\dfrac35$."
        },
        {
          "id": "w8-math-45",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "A random variable $X$ takes the values $-1,0,1$ with probabilities $\\dfrac14,\\dfrac12,\\dfrac14$ respectively. The variance of $X$ is",
          "options": [
            {
              "id": "A",
              "text": "$\\dfrac12$"
            },
            {
              "id": "B",
              "text": "$\\dfrac14$"
            },
            {
              "id": "C",
              "text": "$1$"
            },
            {
              "id": "D",
              "text": "$\\dfrac34$"
            }
          ],
          "correct": "A",
          "explanation": "Here $E(X)=(-1)\\dfrac14+0\\cdot\\dfrac12+1\\cdot\\dfrac14=0$, and $E(X^2)=1\\cdot\\dfrac14+0+1\\cdot\\dfrac14=\\dfrac12$. Hence $\\operatorname{Var}(X)=E(X^2)-[E(X)]^2=\\dfrac12$."
        },
        {
          "id": "w8-math-46",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "The value of $\\displaystyle\\lim_{x\\to0}\\dfrac{\\tan x-\\sin x}{x^3}$ is",
          "options": [
            {
              "id": "A",
              "text": "$1$"
            },
            {
              "id": "B",
              "text": "$\\dfrac12$"
            },
            {
              "id": "C",
              "text": "$\\dfrac13$"
            },
            {
              "id": "D",
              "text": "$\\dfrac16$"
            }
          ],
          "correct": "B",
          "explanation": "$\\tan x-\\sin x=\\sin x\\left(\\dfrac1{\\cos x}-1\\right)=\\sin x\\cdot\\dfrac{1-\\cos x}{\\cos x}$. Using $\\sin x\\sim x$ and $1-\\cos x\\sim\\dfrac{x^2}{2}$, the expression behaves like $x\\cdot\\dfrac{x^2}{2}= \\dfrac{x^3}{2}$, so the limit is $\\dfrac12$."
        },
        {
          "id": "w8-math-47",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "The value of $\\displaystyle\\lim_{x\\to0}\\dfrac{\\sin^{-1}x-\\tan^{-1}x}{x^3}$ is",
          "options": [
            {
              "id": "A",
              "text": "$\\dfrac13$"
            },
            {
              "id": "B",
              "text": "$\\dfrac23$"
            },
            {
              "id": "C",
              "text": "$\\dfrac12$"
            },
            {
              "id": "D",
              "text": "$\\dfrac16$"
            }
          ],
          "correct": "C",
          "explanation": "Using the expansions $\\sin^{-1}x=x+\\dfrac{x^3}{6}+\\cdots$ and $\\tan^{-1}x=x-\\dfrac{x^3}{3}+\\cdots$, the numerator equals $\\left(\\dfrac16+\\dfrac13\\right)x^3+\\cdots=\\dfrac{x^3}{2}+\\cdots$. Dividing by $x^3$ and taking the limit gives $\\dfrac12$."
        },
        {
          "id": "w8-math-48",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "The value of $\\displaystyle\\lim_{x\\to\\infty}\\left(\\sqrt{x^2+x+1}-\\sqrt{x^2-x+1}\\right)$ is",
          "options": [
            {
              "id": "A",
              "text": "$0$"
            },
            {
              "id": "B",
              "text": "$2$"
            },
            {
              "id": "C",
              "text": "$\\dfrac12$"
            },
            {
              "id": "D",
              "text": "$1$"
            }
          ],
          "correct": "D",
          "explanation": "Rationalising the numerator, the expression becomes $\\dfrac{2x}{\\sqrt{x^2+x+1}+\\sqrt{x^2-x+1}}$. Dividing numerator and denominator by $x$ gives $\\dfrac{2}{\\sqrt{1+\\frac1x+\\frac1{x^2}}+\\sqrt{1-\\frac1x+\\frac1{x^2}}}$, which tends to $\\dfrac{2}{1+1}=1$."
        },
        {
          "id": "w8-math-49",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "The value of $\\displaystyle\\lim_{x\\to0}\\dfrac{e^{3x}-1}{\\ln(1+2x)}$ is",
          "options": [
            {
              "id": "A",
              "text": "$\\dfrac32$"
            },
            {
              "id": "B",
              "text": "$\\dfrac23$"
            },
            {
              "id": "C",
              "text": "$3$"
            },
            {
              "id": "D",
              "text": "$1$"
            }
          ],
          "correct": "A",
          "explanation": "Write the expression as $\\dfrac{(e^{3x}-1)/(3x)}{\\ln(1+2x)/(2x)}\\cdot\\dfrac{3}{2}$. Since each quotient in the numerator and denominator tends to $1$, the limit is $\\dfrac32$."
        },
        {
          "id": "w8-math-50",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "The function $f(x)=\\dfrac{1-\\cos4x}{x^2}$ for $x\\ne0$ and $f(0)=k$ is continuous at $x=0$. Then $k$ equals",
          "options": [
            {
              "id": "A",
              "text": "$16$"
            },
            {
              "id": "B",
              "text": "$8$"
            },
            {
              "id": "C",
              "text": "$4$"
            },
            {
              "id": "D",
              "text": "$2$"
            }
          ],
          "correct": "B",
          "explanation": "For continuity, $k=\\displaystyle\\lim_{x\\to0}\\dfrac{1-\\cos4x}{x^2}$. Since $1-\\cos y\\sim\\dfrac{y^2}{2}$ with $y=4x$, this limit is $\\displaystyle\\lim_{x\\to0}\\dfrac{(4x)^2/2}{x^2}=8$."
        },
        {
          "id": "w8-math-51",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "If $y=\\sin^{-1}\\left(\\dfrac{2x}{1+x^2}\\right)$ and $x>1$, then $\\dfrac{dy}{dx}$ equals",
          "options": [
            {
              "id": "A",
              "text": "$\\dfrac{2}{x^2-1}$"
            },
            {
              "id": "B",
              "text": "$-\\dfrac{2}{x^2-1}$"
            },
            {
              "id": "C",
              "text": "$-\\dfrac{2}{1+x^2}$"
            },
            {
              "id": "D",
              "text": "$\\dfrac{2}{1+x^2}$"
            }
          ],
          "correct": "C",
          "explanation": "Put $x=\\tan\\theta$ with $\\theta\\in\\left(\\dfrac{\\pi}{4},\\dfrac{\\pi}{2}\\right)$. Then $\\dfrac{2x}{1+x^2}=\\sin2\\theta$ and $2\\theta\\in\\left(\\dfrac{\\pi}{2},\\pi\\right)$, so $\\sin^{-1}(\\sin2\\theta)=\\pi-2\\theta$. Hence $y=\\pi-2\\tan^{-1}x$ and $\\dfrac{dy}{dx}=-\\dfrac{2}{1+x^2}$."
        },
        {
          "id": "w8-math-52",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "If $y=\\tan^{-1}\\left(\\dfrac{\\sqrt{1+x^2}-1}{x}\\right)$, then $\\dfrac{dy}{dx}$ equals",
          "options": [
            {
              "id": "A",
              "text": "$\\dfrac{1}{1+x^2}$"
            },
            {
              "id": "B",
              "text": "$\\dfrac{x}{1+x^2}$"
            },
            {
              "id": "C",
              "text": "$\\dfrac{2}{1+x^2}$"
            },
            {
              "id": "D",
              "text": "$\\dfrac{1}{2(1+x^2)}$"
            }
          ],
          "correct": "D",
          "explanation": "Put $x=\\tan\\theta$. Then $\\dfrac{\\sqrt{1+x^2}-1}{x}=\\dfrac{\\sec\\theta-1}{\\tan\\theta}=\\dfrac{1-\\cos\\theta}{\\sin\\theta}=\\tan\\dfrac{\\theta}{2}$. Hence $y=\\dfrac{\\theta}{2}=\\dfrac12\\tan^{-1}x$, so $\\dfrac{dy}{dx}=\\dfrac{1}{2(1+x^2)}$."
        },
        {
          "id": "w8-math-53",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "If $x^y=y^x$, then $\\dfrac{dy}{dx}$ equals",
          "options": [
            {
              "id": "A",
              "text": "$\\dfrac{y(x\\ln y-y)}{x(y\\ln x-x)}$"
            },
            {
              "id": "B",
              "text": "$\\dfrac{y(y\\ln x-x)}{x(x\\ln y-y)}$"
            },
            {
              "id": "C",
              "text": "$\\dfrac{x(x\\ln y-y)}{y(y\\ln x-x)}$"
            },
            {
              "id": "D",
              "text": "$\\dfrac{xy\\ln y}{xy\\ln x}$"
            }
          ],
          "correct": "A",
          "explanation": "Taking logarithms, $y\\ln x=x\\ln y$. Differentiating implicitly, $y'\\ln x+\\dfrac{y}{x}=\\ln y+\\dfrac{x y'}{y}$, so $y'\\left(\\ln x-\\dfrac{x}{y}\\right)=\\ln y-\\dfrac{y}{x}$. Solving and simplifying gives $\\dfrac{dy}{dx}=\\dfrac{y(x\\ln y-y)}{x(y\\ln x-x)}$."
        },
        {
          "id": "w8-math-54",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "If $y=x^{x^x}$ for $x>0$, then $\\left.\\dfrac{dy}{dx}\\right|_{x=1}$ equals",
          "options": [
            {
              "id": "A",
              "text": "$e$"
            },
            {
              "id": "B",
              "text": "$1$"
            },
            {
              "id": "C",
              "text": "$0$"
            },
            {
              "id": "D",
              "text": "$2$"
            }
          ],
          "correct": "B",
          "explanation": "Let $u=x^x$, so $y=x^u$ and $\\ln y=u\\ln x$. Differentiating, $\\dfrac{y'}y=u'\\ln x+\\dfrac{u}{x}$. At $x=1$, we have $u=1$, $y=1$, and $u'=x^x(1+\\ln x)=1$. Hence $y'=1\\left(0+\\dfrac11\\right)=1$."
        },
        {
          "id": "w8-math-55",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "If $x^2+y^2=25$, then the value of $\\dfrac{d^2y}{dx^2}$ at the point $(3,4)$ is",
          "options": [
            {
              "id": "A",
              "text": "$\\dfrac{25}{64}$"
            },
            {
              "id": "B",
              "text": "$-\\dfrac{5}{64}$"
            },
            {
              "id": "C",
              "text": "$-\\dfrac{25}{64}$"
            },
            {
              "id": "D",
              "text": "$-\\dfrac{25}{16}$"
            }
          ],
          "correct": "C",
          "explanation": "Differentiating $x^2+y^2=25$ gives $2x+2yy'=0$, so $y'=-\\dfrac{x}{y}$. Then $y''=-\\dfrac{y-xy'}{y^2}=-\\dfrac{y+x^2/y}{y^2}=-\\dfrac{x^2+y^2}{y^3}=-\\dfrac{25}{y^3}$. At $(3,4)$, $y''=-\\dfrac{25}{64}$."
        },
        {
          "id": "w8-math-56",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "If $y=x^{\\sin x}$ for $x>0$, then $\\left.\\dfrac{dy}{dx}\\right|_{x=\\pi/2}$ equals",
          "options": [
            {
              "id": "A",
              "text": "$0$"
            },
            {
              "id": "B",
              "text": "$\\dfrac{\\pi}{2}$"
            },
            {
              "id": "C",
              "text": "$\\dfrac{2}{\\pi}$"
            },
            {
              "id": "D",
              "text": "$1$"
            }
          ],
          "correct": "D",
          "explanation": "Taking logarithms, $\\ln y=\\sin x\\,\\ln x$, so $\\dfrac{y'}y=\\cos x\\,\\ln x+\\dfrac{\\sin x}{x}$. At $x=\\dfrac{\\pi}{2}$, $y=\\left(\\dfrac{\\pi}{2}\\right)^{1}=\\dfrac{\\pi}{2}$, $\\cos\\dfrac{\\pi}{2}=0$ and $\\sin\\dfrac{\\pi}{2}=1$. Thus $y'=\\dfrac{\\pi}{2}\\cdot\\dfrac{2}{\\pi}=1$."
        },
        {
          "id": "w8-math-57",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "For $|x|<\\dfrac12$, the derivative of $\\sin^{-1}(3x-4x^3)$ with respect to $\\sin^{-1}x$ is",
          "options": [
            {
              "id": "A",
              "text": "$3$"
            },
            {
              "id": "B",
              "text": "$1$"
            },
            {
              "id": "C",
              "text": "$\\dfrac32$"
            },
            {
              "id": "D",
              "text": "$\\dfrac13$"
            }
          ],
          "correct": "A",
          "explanation": "Put $x=\\sin\\theta$ with $|\\theta|<\\dfrac{\\pi}{6}$. Then $3x-4x^3=3\\sin\\theta-4\\sin^3\\theta=\\sin3\\theta$, and $\\sin^{-1}(\\sin3\\theta)=3\\theta$ because $|3\\theta|<\\dfrac{\\pi}{2}$. If $u=3\\theta$ and $v=\\theta$, then $\\dfrac{du}{dv}=3$."
        },
        {
          "id": "w8-math-58",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "The number of points at which the function $f(x)=|x^2-4|$ is not differentiable is",
          "options": [
            {
              "id": "A",
              "text": "$3$"
            },
            {
              "id": "B",
              "text": "$2$"
            },
            {
              "id": "C",
              "text": "$1$"
            },
            {
              "id": "D",
              "text": "$0$"
            }
          ],
          "correct": "B",
          "explanation": "The function $|g(x)|$ fails to be differentiable at a zero of $g$ where $g'$ is nonzero. Here $g(x)=x^2-4$ has zeros $x=\\pm2$, and $g'(x)=2x$ is nonzero at both. Hence $f$ is not differentiable at exactly the two points $x=-2$ and $x=2$."
        },
        {
          "id": "w8-math-59",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "The number of solutions of $\\tan\\theta+\\sec\\theta=\\sqrt3$ in $[0,2\\pi)$ is",
          "options": [
            {
              "id": "A",
              "text": "$3$"
            },
            {
              "id": "B",
              "text": "$4$"
            },
            {
              "id": "C",
              "text": "$1$"
            },
            {
              "id": "D",
              "text": "$2$"
            }
          ],
          "correct": "C",
          "explanation": "Since $(\\sec\\theta+\\tan\\theta)(\\sec\\theta-\\tan\\theta)=1$, the given equation implies $\\sec\\theta-\\tan\\theta=\\dfrac1{\\sqrt3}$. Adding, $2\\sec\\theta=\\sqrt3+\\dfrac1{\\sqrt3}=\\dfrac4{\\sqrt3}$, so $\\cos\\theta=\\dfrac{\\sqrt3}{2}$ and $\\theta=\\dfrac{\\pi}{6}$ or $\\dfrac{11\\pi}{6}$. Checking in the original equation, only $\\theta=\\dfrac{\\pi}{6}$ satisfies it. Thus there is exactly one solution."
        },
        {
          "id": "w8-math-60",
          "section": "Mathematics (Complex Numbers, De Moivre's Theorem, Roots of Unity, Permutations & Combinations, Trigonometric Ratios & Transformations, Probability, Limits & Continuity, Differentiation)",
          "text": "If $\\sin A+\\sin B=p$ and $\\cos A+\\cos B=q$, where $p^2+q^2\\ne0$, then $\\sin(A+B)$ equals",
          "options": [
            {
              "id": "A",
              "text": "$\\dfrac{pq}{p^2+q^2}$"
            },
            {
              "id": "B",
              "text": "$\\dfrac{2pq}{p^2-q^2}$"
            },
            {
              "id": "C",
              "text": "$\\dfrac{p^2-q^2}{p^2+q^2}$"
            },
            {
              "id": "D",
              "text": "$\\dfrac{2pq}{p^2+q^2}$"
            }
          ],
          "correct": "D",
          "explanation": "Using sum-to-product formulas, $p=2\\sin\\dfrac{A+B}{2}\\cos\\dfrac{A-B}{2}$ and $q=2\\cos\\dfrac{A+B}{2}\\cos\\dfrac{A-B}{2}$. Dividing gives $\\tan\\dfrac{A+B}{2}=\\dfrac{p}{q}$. Hence $\\sin(A+B)=\\dfrac{2\\tan\\frac{A+B}{2}}{1+\\tan^2\\frac{A+B}{2}}=\\dfrac{2(p/q)}{1+p^2/q^2}=\\dfrac{2pq}{p^2+q^2}$."
        },
        {
          "id": "w8-phy-61",
          "section": "Physics (Units & Measurements, Motion in a Straight Line & Plane, Circular Motion, Electric Charges & Fields, Electrostatic Potential & Capacitance, Current Electricity)",
          "text": "If force $F$ depends on mass $m$, velocity $v$ and time $t$ as $F=m^a v^b t^c$, then the values of $a,b,c$ are",
          "options": [
            {
              "id": "A",
              "text": "$1,1,-1$"
            },
            {
              "id": "B",
              "text": "$1,2,-1$"
            },
            {
              "id": "C",
              "text": "$1,1,1$"
            },
            {
              "id": "D",
              "text": "$1,-1,-1$"
            }
          ],
          "correct": "A",
          "explanation": "Comparing dimensions, $[\\text{MLT}^{-2}]=[\\text{M}]^a[\\text{LT}^{-1}]^b[\\text{T}]^c=\\text{M}^a\\text{L}^{b}\\text{T}^{c-b}$. Thus $a=1$, $b=1$, and $c-b=-2$, which gives $c=-1$. Hence $(a,b,c)=(1,1,-1)$."
        },
        {
          "id": "w8-phy-62",
          "section": "Physics (Units & Measurements, Motion in a Straight Line & Plane, Circular Motion, Electric Charges & Fields, Electrostatic Potential & Capacitance, Current Electricity)",
          "text": "The density of a sphere is calculated from $\\rho=\\dfrac{m}{\\frac43\\pi r^3}$. If the percentage errors in the measurement of mass and radius are $2\\%$ and $1.5\\%$ respectively, the maximum percentage error in density is",
          "options": [
            {
              "id": "A",
              "text": "$8\\%$"
            },
            {
              "id": "B",
              "text": "$6.5\\%$"
            },
            {
              "id": "C",
              "text": "$5.5\\%$"
            },
            {
              "id": "D",
              "text": "$4.5\\%$"
            }
          ],
          "correct": "B",
          "explanation": "Since $\\rho\\propto m\\,r^{-3}$, the maximum percentage error is $\\dfrac{\\Delta m}{m}\\times100+3\\dfrac{\\Delta r}{r}\\times100=2\\%+3(1.5\\%)=6.5\\%$."
        },
        {
          "id": "w8-phy-63",
          "section": "Physics (Units & Measurements, Motion in a Straight Line & Plane, Circular Motion, Electric Charges & Fields, Electrostatic Potential & Capacitance, Current Electricity)",
          "text": "The mass of a cube is $25.0\\ \\text{g}$ and its side is $2.50\\ \\text{cm}$. Its density, expressed to the correct number of significant figures, is",
          "options": [
            {
              "id": "A",
              "text": "$1.600\\ \\text{g cm}^{-3}$"
            },
            {
              "id": "B",
              "text": "$1.5\\ \\text{g cm}^{-3}$"
            },
            {
              "id": "C",
              "text": "$1.60\\ \\text{g cm}^{-3}$"
            },
            {
              "id": "D",
              "text": "$1.6\\ \\text{g cm}^{-3}$"
            }
          ],
          "correct": "C",
          "explanation": "The volume is $(2.50)^3=15.625\\ \\text{cm}^3$. The density is $\\dfrac{25.0}{15.625}=1.60\\ \\text{g cm}^{-3}$. Both the mass and the side are given to three significant figures, so the answer is reported to three significant figures as $1.60\\ \\text{g cm}^{-3}$."
        },
        {
          "id": "w8-phy-64",
          "section": "Physics (Units & Measurements, Motion in a Straight Line & Plane, Circular Motion, Electric Charges & Fields, Electrostatic Potential & Capacitance, Current Electricity)",
          "text": "A body starts from rest and moves with constant acceleration. If it covers a distance $x$ in the first $t$ seconds and a distance $y$ in the next $t$ seconds, then",
          "options": [
            {
              "id": "A",
              "text": "$y=2x$"
            },
            {
              "id": "B",
              "text": "$y=x$"
            },
            {
              "id": "C",
              "text": "$y=4x$"
            },
            {
              "id": "D",
              "text": "$y=3x$"
            }
          ],
          "correct": "D",
          "explanation": "In the first $t$ seconds, $x=\\dfrac12at^2$. In the first $2t$ seconds, the distance is $\\dfrac12a(2t)^2=2at^2$. Hence the distance covered in the next $t$ seconds is $y=2at^2-\\dfrac12at^2=\\dfrac32at^2=3x$."
        },
        {
          "id": "w8-phy-65",
          "section": "Physics (Units & Measurements, Motion in a Straight Line & Plane, Circular Motion, Electric Charges & Fields, Electrostatic Potential & Capacitance, Current Electricity)",
          "text": "A particle moves along a straight line with velocity $v=\\sqrt{2x}$, where $x$ is in metres and $v$ in $\\text{m s}^{-1}$. Its acceleration is",
          "options": [
            {
              "id": "A",
              "text": "$1\\ \\text{m s}^{-2}$, constant"
            },
            {
              "id": "B",
              "text": "$2\\ \\text{m s}^{-2}$, constant"
            },
            {
              "id": "C",
              "text": "$\\dfrac{1}{2x}\\ \\text{m s}^{-2}$"
            },
            {
              "id": "D",
              "text": "$2x\\ \\text{m s}^{-2}$"
            }
          ],
          "correct": "A",
          "explanation": "For motion along a line, $a=v\\dfrac{dv}{dx}$. Here $\\dfrac{dv}{dx}=\\dfrac{1}{\\sqrt{2x}}$, so $a=\\sqrt{2x}\\cdot\\dfrac{1}{\\sqrt{2x}}=1\\ \\text{m s}^{-2}$. The acceleration is constant."
        },
        {
          "id": "w8-phy-66",
          "section": "Physics (Units & Measurements, Motion in a Straight Line & Plane, Circular Motion, Electric Charges & Fields, Electrostatic Potential & Capacitance, Current Electricity)",
          "text": "A driver travelling at $20\\ \\text{m s}^{-1}$ sees an obstacle and applies brakes after a reaction time of $0.5\\ \\text{s}$. The brakes produce a uniform deceleration of $5\\ \\text{m s}^{-2}$. The total stopping distance is",
          "options": [
            {
              "id": "A",
              "text": "$55\\ \\text{m}$"
            },
            {
              "id": "B",
              "text": "$50\\ \\text{m}$"
            },
            {
              "id": "C",
              "text": "$40\\ \\text{m}$"
            },
            {
              "id": "D",
              "text": "$45\\ \\text{m}$"
            }
          ],
          "correct": "B",
          "explanation": "During the reaction time the car travels $20\\times0.5=10\\ \\text{m}$. After braking, the distance is $\\dfrac{v^2}{2a}=\\dfrac{20^2}{2\\times5}=40\\ \\text{m}$. Hence the total stopping distance is $10+40=50\\ \\text{m}$."
        },
        {
          "id": "w8-phy-67",
          "section": "Physics (Units & Measurements, Motion in a Straight Line & Plane, Circular Motion, Electric Charges & Fields, Electrostatic Potential & Capacitance, Current Electricity)",
          "text": "A particle starts from the origin with velocity $4\\ \\text{m s}^{-1}$ and moves with a constant acceleration of $-2\\ \\text{m s}^{-2}$. The total distance travelled in the first $4\\ \\text{s}$ is",
          "options": [
            {
              "id": "A",
              "text": "$0$"
            },
            {
              "id": "B",
              "text": "$16\\ \\text{m}$"
            },
            {
              "id": "C",
              "text": "$8\\ \\text{m}$"
            },
            {
              "id": "D",
              "text": "$4\\ \\text{m}$"
            }
          ],
          "correct": "C",
          "explanation": "The particle comes to rest at $t=2\\ \\text{s}$. The distance travelled in the first $2\\ \\text{s}$ is $4(2)-\\dfrac12(2)(2)^2=8-4=4\\ \\text{m}$. During the next $2\\ \\text{s}$ it travels back the same distance $4\\ \\text{m}$. Therefore the total distance is $4+4=8\\ \\text{m}$, although the displacement is zero."
        },
        {
          "id": "w8-phy-68",
          "section": "Physics (Units & Measurements, Motion in a Straight Line & Plane, Circular Motion, Electric Charges & Fields, Electrostatic Potential & Capacitance, Current Electricity)",
          "text": "A ball is projected from the ground with a speed of $20\\ \\text{m s}^{-1}$ at $30^\\circ$ above the horizontal. Taking $g=10\\ \\text{m s}^{-2}$, its horizontal range is",
          "options": [
            {
              "id": "A",
              "text": "$20\\sqrt2\\ \\text{m}$"
            },
            {
              "id": "B",
              "text": "$10\\sqrt3\\ \\text{m}$"
            },
            {
              "id": "C",
              "text": "$40\\ \\text{m}$"
            },
            {
              "id": "D",
              "text": "$20\\sqrt3\\ \\text{m}$"
            }
          ],
          "correct": "D",
          "explanation": "The range is $R=\\dfrac{u^2\\sin2\\theta}{g}=\\dfrac{(20)^2\\sin60^\\circ}{10}=\\dfrac{400}{10}\\cdot\\dfrac{\\sqrt3}{2}=20\\sqrt3\\ \\text{m}$."
        },
        {
          "id": "w8-phy-69",
          "section": "Physics (Units & Measurements, Motion in a Straight Line & Plane, Circular Motion, Electric Charges & Fields, Electrostatic Potential & Capacitance, Current Electricity)",
          "text": "For a projectile launched from the ground, the maximum height attained is equal to its horizontal range. The angle of projection is",
          "options": [
            {
              "id": "A",
              "text": "$\\tan^{-1}4$"
            },
            {
              "id": "B",
              "text": "$\\tan^{-1}2$"
            },
            {
              "id": "C",
              "text": "$45^\\circ$"
            },
            {
              "id": "D",
              "text": "$\\tan^{-1}\\dfrac14$"
            }
          ],
          "correct": "A",
          "explanation": "Set $H=R$: $\\dfrac{u^2\\sin^2\\theta}{2g}=\\dfrac{u^2\\sin2\\theta}{g}$. This gives $\\sin^2\\theta=4\\sin\\theta\\cos\\theta$, so $\\tan\\theta=4$ and $\\theta=\\tan^{-1}4$."
        },
        {
          "id": "w8-phy-70",
          "section": "Physics (Units & Measurements, Motion in a Straight Line & Plane, Circular Motion, Electric Charges & Fields, Electrostatic Potential & Capacitance, Current Electricity)",
          "text": "A ball is projected horizontally with a speed of $10\\ \\text{m s}^{-1}$ from the top of a tower of height $20\\ \\text{m}$. Taking $g=10\\ \\text{m s}^{-2}$, the horizontal distance from the foot of the tower at which it hits the ground is",
          "options": [
            {
              "id": "A",
              "text": "$15\\ \\text{m}$"
            },
            {
              "id": "B",
              "text": "$20\\ \\text{m}$"
            },
            {
              "id": "C",
              "text": "$10\\ \\text{m}$"
            },
            {
              "id": "D",
              "text": "$40\\ \\text{m}$"
            }
          ],
          "correct": "B",
          "explanation": "The time of fall is $t=\\sqrt{\\dfrac{2h}{g}}=\\sqrt{\\dfrac{2\\times20}{10}}=2\\ \\text{s}$. The horizontal distance is $x=ut=10\\times2=20\\ \\text{m}$."
        },
        {
          "id": "w8-phy-71",
          "section": "Physics (Units & Measurements, Motion in a Straight Line & Plane, Circular Motion, Electric Charges & Fields, Electrostatic Potential & Capacitance, Current Electricity)",
          "text": "A car moves around a circular track of radius $50\\ \\text{m}$ with a constant speed of $20\\ \\text{m s}^{-1}$. The minimum coefficient of static friction required between the tyres and the road so that the car does not skid is",
          "options": [
            {
              "id": "A",
              "text": "$1.0$"
            },
            {
              "id": "B",
              "text": "$0.5$"
            },
            {
              "id": "C",
              "text": "$0.8$"
            },
            {
              "id": "D",
              "text": "$0.4$"
            }
          ],
          "correct": "C",
          "explanation": "The required centripetal force is provided by friction: $\\mu mg=\\dfrac{mv^2}{r}$. Hence $\\mu=\\dfrac{v^2}{rg}=\\dfrac{400}{50\\times10}=0.8$."
        },
        {
          "id": "w8-phy-72",
          "section": "Physics (Units & Measurements, Motion in a Straight Line & Plane, Circular Motion, Electric Charges & Fields, Electrostatic Potential & Capacitance, Current Electricity)",
          "text": "A road is to be banked for a vehicle moving at $20\\ \\text{m s}^{-1}$ on a curve of radius $100\\ \\text{m}$. Taking $g=10\\ \\text{m s}^{-2}$, the angle of banking is",
          "options": [
            {
              "id": "A",
              "text": "$\\tan^{-1}(0.2)$"
            },
            {
              "id": "B",
              "text": "$\\tan^{-1}(0.5)$"
            },
            {
              "id": "C",
              "text": "$\\tan^{-1}4$"
            },
            {
              "id": "D",
              "text": "$\\tan^{-1}(0.4)$"
            }
          ],
          "correct": "D",
          "explanation": "For a banked road without friction, $\\tan\\theta=\\dfrac{v^2}{rg}=\\dfrac{400}{100\\times10}=0.4$, so $\\theta=\\tan^{-1}(0.4)$."
        },
        {
          "id": "w8-phy-73",
          "section": "Physics (Units & Measurements, Motion in a Straight Line & Plane, Circular Motion, Electric Charges & Fields, Electrostatic Potential & Capacitance, Current Electricity)",
          "text": "Rain falls vertically with a speed of $10\\ \\text{m s}^{-1}$. A man walks horizontally with a speed of $5\\ \\text{m s}^{-1}$. To protect himself, the angle at which he should hold his umbrella with the vertical is",
          "options": [
            {
              "id": "A",
              "text": "$\\tan^{-1}\\dfrac12$"
            },
            {
              "id": "B",
              "text": "$\\tan^{-1}2$"
            },
            {
              "id": "C",
              "text": "$30^\\circ$"
            },
            {
              "id": "D",
              "text": "$45^\\circ$"
            }
          ],
          "correct": "A",
          "explanation": "In the man's frame the rain has a horizontal component $5\\ \\text{m s}^{-1}$ and a vertical component $10\\ \\text{m s}^{-1}$. The umbrella must be tilted from the vertical by $\\theta$ where $\\tan\\theta=\\dfrac{5}{10}=\\dfrac12$."
        },
        {
          "id": "w8-phy-74",
          "section": "Physics (Units & Measurements, Motion in a Straight Line & Plane, Circular Motion, Electric Charges & Fields, Electrostatic Potential & Capacitance, Current Electricity)",
          "text": "A boat can move at $5\\ \\text{m s}^{-1}$ in still water. A river of width $400\\ \\text{m}$ flows at $3\\ \\text{m s}^{-1}$. To cross the river straight across, the boat is steered upstream. The time taken to cross is",
          "options": [
            {
              "id": "A",
              "text": "$133\\ \\text{s}$"
            },
            {
              "id": "B",
              "text": "$100\\ \\text{s}$"
            },
            {
              "id": "C",
              "text": "$125\\ \\text{s}$"
            },
            {
              "id": "D",
              "text": "$80\\ \\text{s}$"
            }
          ],
          "correct": "B",
          "explanation": "To move straight across, the upstream component must cancel the current: $5\\sin\\theta=3$, so $\\sin\\theta=\\dfrac35$. The useful crossing speed is $5\\cos\\theta=5\\times\\dfrac45=4\\ \\text{m s}^{-1}$. Hence the time is $\\dfrac{400}{4}=100\\ \\text{s}$."
        },
        {
          "id": "w8-phy-75",
          "section": "Physics (Units & Measurements, Motion in a Straight Line & Plane, Circular Motion, Electric Charges & Fields, Electrostatic Potential & Capacitance, Current Electricity)",
          "text": "Two point charges $+2\\ \\mu\\text{C}$ and $-2\\ \\mu\\text{C}$ are separated by $10\\ \\text{cm}$ in air. The electric field at the midpoint of the line joining them is",
          "options": [
            {
              "id": "A",
              "text": "$7.2\\times10^6\\ \\text{N C}^{-1}$ towards the negative charge"
            },
            {
              "id": "B",
              "text": "$0$"
            },
            {
              "id": "C",
              "text": "$1.44\\times10^7\\ \\text{N C}^{-1}$ towards the negative charge"
            },
            {
              "id": "D",
              "text": "$1.44\\times10^7\\ \\text{N C}^{-1}$ towards the positive charge"
            }
          ],
          "correct": "C",
          "explanation": "At the midpoint, $r=0.05\\ \\text{m}$ from each charge. Each charge produces a field $E=\\dfrac{kq}{r^2}=\\dfrac{9\\times10^9\\times2\\times10^{-6}}{(0.05)^2}=7.2\\times10^6\\ \\text{N C}^{-1}$. Both fields point from the positive charge towards the negative charge, so the resultant is $2\\times7.2\\times10^6=1.44\\times10^7\\ \\text{N C}^{-1}$ towards the negative charge."
        },
        {
          "id": "w8-phy-76",
          "section": "Physics (Units & Measurements, Motion in a Straight Line & Plane, Circular Motion, Electric Charges & Fields, Electrostatic Potential & Capacitance, Current Electricity)",
          "text": "An electric dipole has dipole moment $2\\times10^{-6}\\ \\text{C m}$. The electric field on its axis at a distance of $0.5\\ \\text{m}$ from its centre is",
          "options": [
            {
              "id": "A",
              "text": "$1.44\\times10^5\\ \\text{N C}^{-1}$"
            },
            {
              "id": "B",
              "text": "$5.76\\times10^5\\ \\text{N C}^{-1}$"
            },
            {
              "id": "C",
              "text": "$2.88\\times10^4\\ \\text{N C}^{-1}$"
            },
            {
              "id": "D",
              "text": "$2.88\\times10^5\\ \\text{N C}^{-1}$"
            }
          ],
          "correct": "D",
          "explanation": "For a short dipole, the axial field is $E=\\dfrac{2kp}{r^3}=\\dfrac{2\\times9\\times10^9\\times2\\times10^{-6}}{(0.5)^3}=\\dfrac{3.6\\times10^4}{0.125}=2.88\\times10^5\\ \\text{N C}^{-1}$."
        },
        {
          "id": "w8-phy-77",
          "section": "Physics (Units & Measurements, Motion in a Straight Line & Plane, Circular Motion, Electric Charges & Fields, Electrostatic Potential & Capacitance, Current Electricity)",
          "text": "A charge of $8.85\\times10^{-12}\\ \\text{C}$ is placed at the centre of a cube. The electric flux through one face of the cube is (take $\\varepsilon_0=8.85\\times10^{-12}\\ \\text{C}^2\\text{N}^{-1}\\text{m}^{-2}$)",
          "options": [
            {
              "id": "A",
              "text": "$\\dfrac16\\ \\text{N m}^2\\text{C}^{-1}$"
            },
            {
              "id": "B",
              "text": "$1\\ \\text{N m}^2\\text{C}^{-1}$"
            },
            {
              "id": "C",
              "text": "$\\dfrac13\\ \\text{N m}^2\\text{C}^{-1}$"
            },
            {
              "id": "D",
              "text": "$\\dfrac1{12}\\ \\text{N m}^2\\text{C}^{-1}$"
            }
          ],
          "correct": "A",
          "explanation": "By Gauss's law, the total flux through the cube is $\\dfrac{q}{\\varepsilon_0}=\\dfrac{8.85\\times10^{-12}}{8.85\\times10^{-12}}=1\\ \\text{N m}^2\\text{C}^{-1}$. By symmetry, this flux is equally divided among the six faces, so the flux through one face is $\\dfrac16\\ \\text{N m}^2\\text{C}^{-1}$."
        },
        {
          "id": "w8-phy-78",
          "section": "Physics (Units & Measurements, Motion in a Straight Line & Plane, Circular Motion, Electric Charges & Fields, Electrostatic Potential & Capacitance, Current Electricity)",
          "text": "A uniformly charged thin spherical shell of radius $R$ carries a total charge $Q$. If $E_1$ is the field at $r=\\dfrac{R}{2}$ and $E_2$ is the field at $r=2R$ from the centre, then $\\dfrac{E_1}{E_2}$ is",
          "options": [
            {
              "id": "A",
              "text": "$4$"
            },
            {
              "id": "B",
              "text": "$0$"
            },
            {
              "id": "C",
              "text": "$\\dfrac14$"
            },
            {
              "id": "D",
              "text": "$\\dfrac12$"
            }
          ],
          "correct": "B",
          "explanation": "Inside a uniformly charged thin shell the field is zero, so $E_1=0$. Outside, the shell behaves as a point charge at its centre: $E_2=\\dfrac{kQ}{(2R)^2}=\\dfrac{kQ}{4R^2}$. Hence $\\dfrac{E_1}{E_2}=0$."
        },
        {
          "id": "w8-phy-79",
          "section": "Physics (Units & Measurements, Motion in a Straight Line & Plane, Circular Motion, Electric Charges & Fields, Electrostatic Potential & Capacitance, Current Electricity)",
          "text": "Four equal charges $+q$ are placed at the corners of a square of side $a$. The electric potential at the centre of the square is",
          "options": [
            {
              "id": "A",
              "text": "$\\dfrac{2\\sqrt2 kq}{a}$"
            },
            {
              "id": "B",
              "text": "$\\dfrac{8kq}{a}$"
            },
            {
              "id": "C",
              "text": "$\\dfrac{4\\sqrt2 kq}{a}$"
            },
            {
              "id": "D",
              "text": "$\\dfrac{4kq}{a}$"
            }
          ],
          "correct": "C",
          "explanation": "The distance of the centre from each corner is $\\dfrac{a}{\\sqrt2}$. Each charge contributes $\\dfrac{kq}{a/\\sqrt2}=\\dfrac{\\sqrt2 kq}{a}$. Adding the four equal contributions gives $\\dfrac{4\\sqrt2 kq}{a}$."
        },
        {
          "id": "w8-phy-80",
          "section": "Physics (Units & Measurements, Motion in a Straight Line & Plane, Circular Motion, Electric Charges & Fields, Electrostatic Potential & Capacitance, Current Electricity)",
          "text": "Three equal charges $+q$ are placed at the vertices of an equilateral triangle of side $a$. The work done in assembling this configuration from infinity is",
          "options": [
            {
              "id": "A",
              "text": "$\\dfrac{2kq^2}{a}$"
            },
            {
              "id": "B",
              "text": "$\\dfrac{kq^2}{a}$"
            },
            {
              "id": "C",
              "text": "$\\dfrac{6kq^2}{a}$"
            },
            {
              "id": "D",
              "text": "$\\dfrac{3kq^2}{a}$"
            }
          ],
          "correct": "D",
          "explanation": "There are three pairs of charges, each separated by $a$. The potential energy of each pair is $\\dfrac{kq^2}{a}$, so the total work done is $3\\times\\dfrac{kq^2}{a}=\\dfrac{3kq^2}{a}$."
        },
        {
          "id": "w8-phy-81",
          "section": "Physics (Units & Measurements, Motion in a Straight Line & Plane, Circular Motion, Electric Charges & Fields, Electrostatic Potential & Capacitance, Current Electricity)",
          "text": "A parallel plate capacitor of capacitance $C$ has plate separation $d$. A dielectric slab of thickness $\\dfrac{d}{2}$ and dielectric constant $K$ is inserted between the plates, filling the space over the entire plate area. The new capacitance is",
          "options": [
            {
              "id": "A",
              "text": "$\\dfrac{2KC}{K+1}$"
            },
            {
              "id": "B",
              "text": "$\\dfrac{KC}{K+1}$"
            },
            {
              "id": "C",
              "text": "$\\dfrac{C(K+1)}{2K}$"
            },
            {
              "id": "D",
              "text": "$\\dfrac{C(K+1)}{K}$"
            }
          ],
          "correct": "A",
          "explanation": "The arrangement is equivalent to two capacitors in series: one of thickness $\\dfrac{d}{2}$ with dielectric, $C_1=\\dfrac{2K\\varepsilon_0A}{d}=2KC$, and one of thickness $\\dfrac{d}{2}$ with air, $C_2=\\dfrac{2\\varepsilon_0A}{d}=2C$. Thus $\\dfrac1{C'}=\\dfrac1{2KC}+\\dfrac1{2C}=\\dfrac{K+1}{2KC}$, giving $C'=\\dfrac{2KC}{K+1}$."
        },
        {
          "id": "w8-phy-82",
          "section": "Physics (Units & Measurements, Motion in a Straight Line & Plane, Circular Motion, Electric Charges & Fields, Electrostatic Potential & Capacitance, Current Electricity)",
          "text": "A capacitor is charged to a potential $V$ and then disconnected from the battery. A dielectric of constant $K$ is now inserted so as to fill the space between the plates. If the initial stored energy is $U$, the new stored energy is",
          "options": [
            {
              "id": "A",
              "text": "$\\dfrac{U}{K^2}$"
            },
            {
              "id": "B",
              "text": "$\\dfrac{U}{K}$"
            },
            {
              "id": "C",
              "text": "$KU$"
            },
            {
              "id": "D",
              "text": "$U$"
            }
          ],
          "correct": "B",
          "explanation": "After disconnection the charge $Q$ remains constant, while the capacitance becomes $KC$. The energy is $U'=\\dfrac{Q^2}{2(KC)}=\\dfrac1K\\cdot\\dfrac{Q^2}{2C}=\\dfrac{U}{K}$."
        },
        {
          "id": "w8-phy-83",
          "section": "Physics (Units & Measurements, Motion in a Straight Line & Plane, Circular Motion, Electric Charges & Fields, Electrostatic Potential & Capacitance, Current Electricity)",
          "text": "Capacitors of $3\\ \\mu\\text{F}$ and $6\\ \\mu\\text{F}$ are connected in series across a $12\\ \\text{V}$ battery. The energy stored in the $3\\ \\mu\\text{F}$ capacitor is",
          "options": [
            {
              "id": "A",
              "text": "$192\\ \\mu\\text{J}$"
            },
            {
              "id": "B",
              "text": "$24\\ \\mu\\text{J}$"
            },
            {
              "id": "C",
              "text": "$96\\ \\mu\\text{J}$"
            },
            {
              "id": "D",
              "text": "$48\\ \\mu\\text{J}$"
            }
          ],
          "correct": "C",
          "explanation": "The series capacitance is $\\dfrac{3\\times6}{3+6}=2\\ \\mu\\text{F}$, so the charge on each capacitor is $Q=CV=2\\times12=24\\ \\mu\\text{C}$. The energy in the $3\\ \\mu\\text{F}$ capacitor is $\\dfrac{Q^2}{2C}=\\dfrac{(24\\ \\mu\\text{C})^2}{2(3\\ \\mu\\text{F})}=96\\ \\mu\\text{J}$."
        },
        {
          "id": "w8-phy-84",
          "section": "Physics (Units & Measurements, Motion in a Straight Line & Plane, Circular Motion, Electric Charges & Fields, Electrostatic Potential & Capacitance, Current Electricity)",
          "text": "Resistors of $6\\ \\Omega$ and $3\\ \\Omega$ are connected in parallel across a $6\\ \\text{V}$ battery of negligible internal resistance. The power dissipated in the $3\\ \\Omega$ resistor is",
          "options": [
            {
              "id": "A",
              "text": "$6\\ \\text{W}$"
            },
            {
              "id": "B",
              "text": "$18\\ \\text{W}$"
            },
            {
              "id": "C",
              "text": "$4\\ \\text{W}$"
            },
            {
              "id": "D",
              "text": "$12\\ \\text{W}$"
            }
          ],
          "correct": "D",
          "explanation": "In parallel, the voltage across each resistor is $6\\ \\text{V}$. The power in the $3\\ \\Omega$ resistor is $\\dfrac{V^2}{R}=\\dfrac{36}{3}=12\\ \\text{W}$."
        },
        {
          "id": "w8-phy-85",
          "section": "Physics (Units & Measurements, Motion in a Straight Line & Plane, Circular Motion, Electric Charges & Fields, Electrostatic Potential & Capacitance, Current Electricity)",
          "text": "A wire of resistance $R$ is stretched uniformly until its length becomes double. Its new resistance is",
          "options": [
            {
              "id": "A",
              "text": "$4R$"
            },
            {
              "id": "B",
              "text": "$2R$"
            },
            {
              "id": "C",
              "text": "$\\dfrac{R}{2}$"
            },
            {
              "id": "D",
              "text": "$\\dfrac{R}{4}$"
            }
          ],
          "correct": "A",
          "explanation": "Stretching keeps the volume constant, so when the length doubles the area of cross-section becomes half. Since $R=\\dfrac{\\rho L}{A}$, the new resistance is $\\dfrac{\\rho(2L)}{A/2}=4R$."
        },
        {
          "id": "w8-phy-86",
          "section": "Physics (Units & Measurements, Motion in a Straight Line & Plane, Circular Motion, Electric Charges & Fields, Electrostatic Potential & Capacitance, Current Electricity)",
          "text": "A copper wire of cross-sectional area $2\\times10^{-6}\\ \\text{m}^2$ carries a current of $3.2\\ \\text{A}$. If the free electron density is $8\\times10^{28}\\ \\text{m}^{-3}$ and the electronic charge is $1.6\\times10^{-19}\\ \\text{C}$, the drift speed of the electrons is",
          "options": [
            {
              "id": "A",
              "text": "$1.25\\times10^{-5}\\ \\text{m s}^{-1}$"
            },
            {
              "id": "B",
              "text": "$1.25\\times10^{-4}\\ \\text{m s}^{-1}$"
            },
            {
              "id": "C",
              "text": "$2.5\\times10^{-4}\\ \\text{m s}^{-1}$"
            },
            {
              "id": "D",
              "text": "$1.25\\times10^{-3}\\ \\text{m s}^{-1}$"
            }
          ],
          "correct": "B",
          "explanation": "Using $I=neAv_d$, $v_d=\\dfrac{I}{neA}=\\dfrac{3.2}{(8\\times10^{28})(1.6\\times10^{-19})(2\\times10^{-6})}=\\dfrac{3.2}{2.56\\times10^4}=1.25\\times10^{-4}\\ \\text{m s}^{-1}$."
        },
        {
          "id": "w8-phy-87",
          "section": "Physics (Units & Measurements, Motion in a Straight Line & Plane, Circular Motion, Electric Charges & Fields, Electrostatic Potential & Capacitance, Current Electricity)",
          "text": "A battery of emf $12\\ \\text{V}$ and internal resistance $2\\ \\Omega$ is connected to an external resistance of $4\\ \\Omega$. The power delivered to the external resistor is",
          "options": [
            {
              "id": "A",
              "text": "$12\\ \\text{W}$"
            },
            {
              "id": "B",
              "text": "$8\\ \\text{W}$"
            },
            {
              "id": "C",
              "text": "$16\\ \\text{W}$"
            },
            {
              "id": "D",
              "text": "$24\\ \\text{W}$"
            }
          ],
          "correct": "C",
          "explanation": "The current is $I=\\dfrac{\\varepsilon}{R+r}=\\dfrac{12}{4+2}=2\\ \\text{A}$. The power delivered to the external resistor is $I^2R=(2)^2(4)=16\\ \\text{W}$."
        },
        {
          "id": "w8-phy-88",
          "section": "Physics (Units & Measurements, Motion in a Straight Line & Plane, Circular Motion, Electric Charges & Fields, Electrostatic Potential & Capacitance, Current Electricity)",
          "text": "A physical quantity has the dimensions $\\text{ML}^2\\text{T}^{-2}\\text{A}^{-2}$. The quantity is",
          "options": [
            {
              "id": "A",
              "text": "capacitance"
            },
            {
              "id": "B",
              "text": "resistance"
            },
            {
              "id": "C",
              "text": "magnetic flux"
            },
            {
              "id": "D",
              "text": "inductance"
            }
          ],
          "correct": "D",
          "explanation": "The energy stored in an inductor is $\\dfrac12LI^2$, so $[L]=\\dfrac{[\\text{energy}]}{[\\text{current}]^2}=\\dfrac{\\text{ML}^2\\text{T}^{-2}}{\\text{A}^2}=\\text{ML}^2\\text{T}^{-2}\\text{A}^{-2}$. The quantity is inductance."
        },
        {
          "id": "w8-phy-89",
          "section": "Physics (Units & Measurements, Motion in a Straight Line & Plane, Circular Motion, Electric Charges & Fields, Electrostatic Potential & Capacitance, Current Electricity)",
          "text": "A vernier caliper has main scale divisions of $1\\ \\text{mm}$, and $10$ vernier divisions coincide with $9$ main scale divisions. When the jaws are closed, the zero of the vernier lies to the right of the main scale zero, and the $6$th vernier division coincides with a main scale division. If the main scale reading is $24\\ \\text{mm}$, the measured length is",
          "options": [
            {
              "id": "A",
              "text": "$24.6\\ \\text{mm}$"
            },
            {
              "id": "B",
              "text": "$24.06\\ \\text{mm}$"
            },
            {
              "id": "C",
              "text": "$24.9\\ \\text{mm}$"
            },
            {
              "id": "D",
              "text": "$25.2\\ \\text{mm}$"
            }
          ],
          "correct": "A",
          "explanation": "The least count is $1-\\dfrac{9}{10}=0.1\\ \\text{mm}$. The vernier scale reading is $6\\times0.1=0.6\\ \\text{mm}$. Hence the length is $24+0.6=24.6\\ \\text{mm}$."
        },
        {
          "id": "w8-phy-90",
          "section": "Physics (Units & Measurements, Motion in a Straight Line & Plane, Circular Motion, Electric Charges & Fields, Electrostatic Potential & Capacitance, Current Electricity)",
          "text": "A screw gauge has a pitch of $0.5\\ \\text{mm}$ and $50$ divisions on its circular scale. The main scale reads $3\\ \\text{mm}$ and the $25$th circular division coincides with the reference line. The diameter of the wire is",
          "options": [
            {
              "id": "A",
              "text": "$3.05\\ \\text{mm}$"
            },
            {
              "id": "B",
              "text": "$3.25\\ \\text{mm}$"
            },
            {
              "id": "C",
              "text": "$3.50\\ \\text{mm}$"
            },
            {
              "id": "D",
              "text": "$3.75\\ \\text{mm}$"
            }
          ],
          "correct": "B",
          "explanation": "The least count is $\\dfrac{0.5}{50}=0.01\\ \\text{mm}$. The circular scale contributes $25\\times0.01=0.25\\ \\text{mm}$. Hence the diameter is $3+0.25=3.25\\ \\text{mm}$."
        },
        {
          "id": "w8-chem-91",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding, Environmental Chemistry, Organic Basics, Hydrocarbons & Aromatic Compounds)",
          "text": "In the hydrogen atom, an electron makes a transition from $n=4$ to $n=2$. The wavelength of the emitted photon is (in terms of the Rydberg constant $R$)",
          "options": [
            {
              "id": "A",
              "text": "$\\dfrac{4}{3R}$"
            },
            {
              "id": "B",
              "text": "$\\dfrac{3}{16R}$"
            },
            {
              "id": "C",
              "text": "$\\dfrac{16}{3R}$"
            },
            {
              "id": "D",
              "text": "$\\dfrac{16}{5R}$"
            }
          ],
          "correct": "C",
          "explanation": "For the Balmer transition $4\\to2$, $\\dfrac1\\lambda=R\\left(\\dfrac1{2^2}-\\dfrac1{4^2}\\right)=R\\left(\\dfrac14-\\dfrac1{16}\\right)=\\dfrac{3R}{16}$. Therefore $\\lambda=\\dfrac{16}{3R}$."
        },
        {
          "id": "w8-chem-92",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding, Environmental Chemistry, Organic Basics, Hydrocarbons & Aromatic Compounds)",
          "text": "The number of radial nodes in a $4f$ orbital is",
          "options": [
            {
              "id": "A",
              "text": "$1$"
            },
            {
              "id": "B",
              "text": "$2$"
            },
            {
              "id": "C",
              "text": "$3$"
            },
            {
              "id": "D",
              "text": "$0$"
            }
          ],
          "correct": "D",
          "explanation": "The number of radial nodes is $n-l-1$. For $4f$, $n=4$ and $l=3$, so the number of radial nodes is $4-3-1=0$."
        },
        {
          "id": "w8-chem-93",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding, Environmental Chemistry, Organic Basics, Hydrocarbons & Aromatic Compounds)",
          "text": "Which of the following sets of quantum numbers is not permitted?",
          "options": [
            {
              "id": "A",
              "text": "$n=3,\\ l=2,\\ m_l=+3$"
            },
            {
              "id": "B",
              "text": "$n=2,\\ l=1,\\ m_l=-1$"
            },
            {
              "id": "C",
              "text": "$n=4,\\ l=0,\\ m_l=0$"
            },
            {
              "id": "D",
              "text": "$n=3,\\ l=2,\\ m_l=-2$"
            }
          ],
          "correct": "A",
          "explanation": "For a given $l$, the magnetic quantum number must satisfy $-l\\le m_l\\le+l$. In the first set $l=2$ but $m_l=+3$, which is not allowed. The other sets satisfy all the quantum number restrictions."
        },
        {
          "id": "w8-chem-94",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding, Environmental Chemistry, Organic Basics, Hydrocarbons & Aromatic Compounds)",
          "text": "The de Broglie wavelength of an electron accelerated through a potential difference of $100\\ \\text{V}$ is approximately",
          "options": [
            {
              "id": "A",
              "text": "$2.45\\ \\text{\\AA}$"
            },
            {
              "id": "B",
              "text": "$1.227\\ \\text{\\AA}$"
            },
            {
              "id": "C",
              "text": "$12.27\\ \\text{\\AA}$"
            },
            {
              "id": "D",
              "text": "$0.1227\\ \\text{\\AA}$"
            }
          ],
          "correct": "B",
          "explanation": "For an electron accelerated through $V$ volts, $\\lambda=\\dfrac{12.27}{\\sqrt V}\\ \\text{\\AA}$. Thus $\\lambda=\\dfrac{12.27}{\\sqrt{100}}=1.227\\ \\text{\\AA}$."
        },
        {
          "id": "w8-chem-95",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding, Environmental Chemistry, Organic Basics, Hydrocarbons & Aromatic Compounds)",
          "text": "The energy required to excite the electron of a hydrogen atom from the ground state to $n=3$ is",
          "options": [
            {
              "id": "A",
              "text": "$1.51\\ \\text{eV}$"
            },
            {
              "id": "B",
              "text": "$13.6\\ \\text{eV}$"
            },
            {
              "id": "C",
              "text": "$12.09\\ \\text{eV}$"
            },
            {
              "id": "D",
              "text": "$10.2\\ \\text{eV}$"
            }
          ],
          "correct": "C",
          "explanation": "The energy in the $n$th level is $-\\dfrac{13.6}{n^2}\\ \\text{eV}$. Hence $\\Delta E=13.6\\left(1-\\dfrac1{3^2}\\right)=13.6\\times\\dfrac89=12.09\\ \\text{eV}$."
        },
        {
          "id": "w8-chem-96",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding, Environmental Chemistry, Organic Basics, Hydrocarbons & Aromatic Compounds)",
          "text": "Which of the following is the correct order of ionic radii?",
          "options": [
            {
              "id": "A",
              "text": "$\\text{Al}^{3+}>\\text{Mg}^{2+}>\\text{Na}^+>\\text{F}^->\\text{O}^{2-}>\\text{N}^{3-}$"
            },
            {
              "id": "B",
              "text": "$\\text{O}^{2-}>\\text{N}^{3-}>\\text{F}^->\\text{Na}^+>\\text{Al}^{3+}>\\text{Mg}^{2+}$"
            },
            {
              "id": "C",
              "text": "$\\text{F}^->\\text{O}^{2-}>\\text{N}^{3-}>\\text{Na}^+>\\text{Mg}^{2+}>\\text{Al}^{3+}$"
            },
            {
              "id": "D",
              "text": "$\\text{N}^{3-}>\\text{O}^{2-}>\\text{F}^->\\text{Na}^+>\\text{Mg}^{2+}>\\text{Al}^{3+}$"
            }
          ],
          "correct": "D",
          "explanation": "All the ions are isoelectronic with $10$ electrons. For isoelectronic species, the radius decreases as the nuclear charge increases. The nuclear charges are $7,8,9,11,12,13$ for $\\text{N},\\text{O},\\text{F},\\text{Na},\\text{Mg},\\text{Al}$, so the correct order is $\\text{N}^{3-}>\\text{O}^{2-}>\\text{F}^->\\text{Na}^+>\\text{Mg}^{2+}>\\text{Al}^{3+}$."
        },
        {
          "id": "w8-chem-97",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding, Environmental Chemistry, Organic Basics, Hydrocarbons & Aromatic Compounds)",
          "text": "The first ionisation enthalpy of beryllium is greater than that of boron. The correct explanation is",
          "options": [
            {
              "id": "A",
              "text": "Be has a completely filled $2s$ subshell, giving it extra stability"
            },
            {
              "id": "B",
              "text": "B has a smaller nuclear charge than Be"
            },
            {
              "id": "C",
              "text": "Be has a larger atomic radius than B"
            },
            {
              "id": "D",
              "text": "B has a completely filled $2p$ subshell"
            }
          ],
          "correct": "A",
          "explanation": "The electron configuration of Be is $1s^22s^2$, with a fully filled $2s$ subshell, whereas B is $1s^22s^22p^1$. Removing an electron from the stable filled $2s$ subshell of Be requires more energy, so its first ionisation enthalpy is greater than that of B."
        },
        {
          "id": "w8-chem-98",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding, Environmental Chemistry, Organic Basics, Hydrocarbons & Aromatic Compounds)",
          "text": "Which statement about the electron gain enthalpy of fluorine and chlorine is correct?",
          "options": [
            {
              "id": "A",
              "text": "Cl has a less negative electron gain enthalpy than F because Cl is larger"
            },
            {
              "id": "B",
              "text": "Cl has a more negative electron gain enthalpy than F because F is very small and has strong electron-electron repulsion"
            },
            {
              "id": "C",
              "text": "F has a more negative electron gain enthalpy than Cl because F is more electronegative"
            },
            {
              "id": "D",
              "text": "F and Cl have equal electron gain enthalpies"
            }
          ],
          "correct": "B",
          "explanation": "Although F is more electronegative, its very small $2p$ orbital causes strong electron-electron repulsion when an extra electron is added. Consequently, Cl has a more negative electron gain enthalpy than F."
        },
        {
          "id": "w8-chem-99",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding, Environmental Chemistry, Organic Basics, Hydrocarbons & Aromatic Compounds)",
          "text": "The numbers of sigma and pi bonds in a benzene molecule are respectively",
          "options": [
            {
              "id": "A",
              "text": "$12$ and $6$"
            },
            {
              "id": "B",
              "text": "$9$ and $3$"
            },
            {
              "id": "C",
              "text": "$12$ and $3$"
            },
            {
              "id": "D",
              "text": "$6$ and $3$"
            }
          ],
          "correct": "C",
          "explanation": "Benzene has six $\\text{C}-\\text{C}$ sigma bonds and six $\\text{C}-\\text{H}$ sigma bonds, giving $12$ sigma bonds in all. The three double bonds contribute three pi bonds."
        },
        {
          "id": "w8-chem-100",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding, Environmental Chemistry, Organic Basics, Hydrocarbons & Aromatic Compounds)",
          "text": "According to molecular orbital theory, the bond order of the superoxide ion $\\text{O}_2^-$ is",
          "options": [
            {
              "id": "A",
              "text": "$2.0$"
            },
            {
              "id": "B",
              "text": "$1.0$"
            },
            {
              "id": "C",
              "text": "$2.5$"
            },
            {
              "id": "D",
              "text": "$1.5$"
            }
          ],
          "correct": "D",
          "explanation": "$\\text{O}_2^-$ has $17$ electrons. Its configuration has $8$ bonding electrons and $5$ antibonding electrons, so the bond order is $\\dfrac{8-5}{2}=1.5$."
        },
        {
          "id": "w8-chem-101",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding, Environmental Chemistry, Organic Basics, Hydrocarbons & Aromatic Compounds)",
          "text": "The number of lone pairs of electrons on xenon in $\\text{XeF}_4$ is",
          "options": [
            {
              "id": "A",
              "text": "$2$"
            },
            {
              "id": "B",
              "text": "$1$"
            },
            {
              "id": "C",
              "text": "$0$"
            },
            {
              "id": "D",
              "text": "$3$"
            }
          ],
          "correct": "A",
          "explanation": "Xenon contributes $8$ valence electrons and the four fluorine atoms contribute $4$, giving $12$ electrons or $6$ electron pairs. Four pairs are used in bonding and the remaining two pairs are lone pairs, which occupy axial positions and make the molecule square planar."
        },
        {
          "id": "w8-chem-102",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding, Environmental Chemistry, Organic Basics, Hydrocarbons & Aromatic Compounds)",
          "text": "The hybridisation of sulphur in $\\text{SF}_4$ is",
          "options": [
            {
              "id": "A",
              "text": "$sp^2$"
            },
            {
              "id": "B",
              "text": "$sp^3d$"
            },
            {
              "id": "C",
              "text": "$sp^3d^2$"
            },
            {
              "id": "D",
              "text": "$sp^3$"
            }
          ],
          "correct": "B",
          "explanation": "Sulphur in $\\text{SF}_4$ has $6$ valence electrons, and the four fluorine atoms add $4$, giving $10$ electrons or $5$ electron pairs. With four bond pairs and one lone pair, the hybridisation is $sp^3d$ and the shape is see-saw."
        },
        {
          "id": "w8-chem-103",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding, Environmental Chemistry, Organic Basics, Hydrocarbons & Aromatic Compounds)",
          "text": "In ice, the number of hydrogen bonds formed by each water molecule is",
          "options": [
            {
              "id": "A",
              "text": "$3$"
            },
            {
              "id": "B",
              "text": "$1$"
            },
            {
              "id": "C",
              "text": "$4$"
            },
            {
              "id": "D",
              "text": "$2$"
            }
          ],
          "correct": "C",
          "explanation": "In the tetrahedral structure of ice, each water molecule donates two hydrogen atoms to hydrogen bonds and accepts two hydrogen bonds through its oxygen lone pairs. Thus each molecule is associated with four hydrogen bonds."
        },
        {
          "id": "w8-chem-104",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding, Environmental Chemistry, Organic Basics, Hydrocarbons & Aromatic Compounds)",
          "text": "Which of the following species has the highest bond order?",
          "options": [
            {
              "id": "A",
              "text": "$\\text{O}_2$"
            },
            {
              "id": "B",
              "text": "$\\text{O}_2^-$"
            },
            {
              "id": "C",
              "text": "$\\text{O}_2^{2-}$"
            },
            {
              "id": "D",
              "text": "$\\text{O}_2^+$"
            }
          ],
          "correct": "D",
          "explanation": "The bond orders are $\\text{O}_2^+=2.5$, $\\text{O}_2=2.0$, $\\text{O}_2^-=1.5$ and $\\text{O}_2^{2-}=1.0$. Removing an electron from the antibonding $\\pi^*$ orbital increases the bond order, so $\\text{O}_2^+$ has the highest bond order."
        },
        {
          "id": "w8-chem-105",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding, Environmental Chemistry, Organic Basics, Hydrocarbons & Aromatic Compounds)",
          "text": "The formal charge on the central oxygen atom in ozone, $\\text{O}_3$, is",
          "options": [
            {
              "id": "A",
              "text": "$+1$"
            },
            {
              "id": "B",
              "text": "$0$"
            },
            {
              "id": "C",
              "text": "$-1$"
            },
            {
              "id": "D",
              "text": "$+2$"
            }
          ],
          "correct": "A",
          "explanation": "The central oxygen atom in ozone is bonded to the other two oxygen atoms by one double bond and one single bond, and it carries one lone pair. Its formal charge is $6-(2+3)=+1$, where $6$ is its valence electron count, $2$ the non-bonding electrons and $3$ the number of bonds."
        },
        {
          "id": "w8-chem-106",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding, Environmental Chemistry, Organic Basics, Hydrocarbons & Aromatic Compounds)",
          "text": "Eutrophication of water bodies is mainly caused by an excess of",
          "options": [
            {
              "id": "A",
              "text": "heavy metal ions"
            },
            {
              "id": "B",
              "text": "nitrates and phosphates"
            },
            {
              "id": "C",
              "text": "carbonates and sulphates"
            },
            {
              "id": "D",
              "text": "chlorides and fluorides"
            }
          ],
          "correct": "B",
          "explanation": "Nitrates and phosphates act as nutrients for algae. Their excess causes rapid algal growth, and the subsequent decomposition of the algae depletes dissolved oxygen, leading to eutrophication."
        },
        {
          "id": "w8-chem-107",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding, Environmental Chemistry, Organic Basics, Hydrocarbons & Aromatic Compounds)",
          "text": "Which of the following is not a greenhouse gas?",
          "options": [
            {
              "id": "A",
              "text": "$\\text{CH}_4$"
            },
            {
              "id": "B",
              "text": "$\\text{N}_2\\text{O}$"
            },
            {
              "id": "C",
              "text": "$\\text{N}_2$"
            },
            {
              "id": "D",
              "text": "$\\text{CO}_2$"
            }
          ],
          "correct": "C",
          "explanation": "$\\text{CO}_2$, $\\text{CH}_4$ and $\\text{N}_2\\text{O}$ all absorb infrared radiation and contribute to the greenhouse effect. Molecular nitrogen, $\\text{N}_2$, is essentially transparent to infrared radiation and is not a greenhouse gas."
        },
        {
          "id": "w8-chem-108",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding, Environmental Chemistry, Organic Basics, Hydrocarbons & Aromatic Compounds)",
          "text": "A characteristic pollutant of photochemical smog is",
          "options": [
            {
              "id": "A",
              "text": "sulphur dioxide"
            },
            {
              "id": "B",
              "text": "sulphuric acid mist"
            },
            {
              "id": "C",
              "text": "soot particles"
            },
            {
              "id": "D",
              "text": "peroxyacetyl nitrate (PAN)"
            }
          ],
          "correct": "D",
          "explanation": "Photochemical smog forms when nitrogen oxides and hydrocarbons react in sunlight. Peroxyacetyl nitrate (PAN) is one of its characteristic secondary pollutants, whereas sulphur dioxide, sulphuric acid mist and soot are associated mainly with classical or industrial smog."
        },
        {
          "id": "w8-chem-109",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding, Environmental Chemistry, Organic Basics, Hydrocarbons & Aromatic Compounds)",
          "text": "One chlorine radical produced from CFCs can destroy approximately how many ozone molecules before it is removed?",
          "options": [
            {
              "id": "A",
              "text": "$10^5$"
            },
            {
              "id": "B",
              "text": "$10$"
            },
            {
              "id": "C",
              "text": "$10^2$"
            },
            {
              "id": "D",
              "text": "$10^3$"
            }
          ],
          "correct": "A",
          "explanation": "The chlorine radical participates repeatedly in the chain reaction that converts ozone to oxygen. Each chlorine atom can destroy of the order of $10^5$ ozone molecules before it is finally removed."
        },
        {
          "id": "w8-chem-110",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding, Environmental Chemistry, Organic Basics, Hydrocarbons & Aromatic Compounds)",
          "text": "The IUPAC name of $\\text{CH}_3-\\text{CH}(\\text{CH}_3)-\\text{CH}_2-\\text{CHO}$ is",
          "options": [
            {
              "id": "A",
              "text": "$2$-methylbutanoic acid"
            },
            {
              "id": "B",
              "text": "$3$-methylbutanal"
            },
            {
              "id": "C",
              "text": "$2$-methylbutanal"
            },
            {
              "id": "D",
              "text": "$3$-methylbutan-$1$-ol"
            }
          ],
          "correct": "B",
          "explanation": "The longest carbon chain containing the aldehyde carbon has four carbon atoms, so the parent is butanal. Numbering begins at the aldehyde carbon, which places the methyl substituent on carbon $3$. Hence the name is $3$-methylbutanal."
        },
        {
          "id": "w8-chem-111",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding, Environmental Chemistry, Organic Basics, Hydrocarbons & Aromatic Compounds)",
          "text": "Which of the following carbocations is the most stable?",
          "options": [
            {
              "id": "A",
              "text": "$\\text{CH}_3\\text{CH}_2^+$"
            },
            {
              "id": "B",
              "text": "$\\text{CH}_3^+$"
            },
            {
              "id": "C",
              "text": "$(\\text{CH}_3)_3\\text{C}^+$"
            },
            {
              "id": "D",
              "text": "$(\\text{CH}_3)_2\\text{CH}^+$"
            }
          ],
          "correct": "C",
          "explanation": "The tert-butyl carbocation is stabilised by nine $\\text{C}-\\text{H}$ hyperconjugative interactions and by the $+I$ effect of three methyl groups. It is therefore more stable than the secondary, primary and methyl carbocations."
        },
        {
          "id": "w8-chem-112",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding, Environmental Chemistry, Organic Basics, Hydrocarbons & Aromatic Compounds)",
          "text": "The number of structural isomers of $\\text{C}_5\\text{H}_{12}$ is",
          "options": [
            {
              "id": "A",
              "text": "$2$"
            },
            {
              "id": "B",
              "text": "$4$"
            },
            {
              "id": "C",
              "text": "$5$"
            },
            {
              "id": "D",
              "text": "$3$"
            }
          ],
          "correct": "D",
          "explanation": "The three structural isomers are n-pentane, $\\text{CH}_3\\text{CH}_2\\text{CH}_2\\text{CH}_2\\text{CH}_3$; isopentane (2-methylbutane), $\\text{CH}_3\\text{CH}(\\text{CH}_3)\\text{CH}_2\\text{CH}_3$; and neopentane (2,2-dimethylpropane), $\\text{C}(\\text{CH}_3)_4$."
        },
        {
          "id": "w8-chem-113",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding, Environmental Chemistry, Organic Basics, Hydrocarbons & Aromatic Compounds)",
          "text": "The major product formed when propene reacts with HBr is",
          "options": [
            {
              "id": "A",
              "text": "$2$-bromopropane"
            },
            {
              "id": "B",
              "text": "$1$-bromopropane"
            },
            {
              "id": "C",
              "text": "$1,2$-dibromopropane"
            },
            {
              "id": "D",
              "text": "$2,2$-dibromopropane"
            }
          ],
          "correct": "A",
          "explanation": "The addition follows Markovnikov's rule. The proton adds to the terminal carbon to give the more stable secondary carbocation, which is then attacked by bromide ion. The major product is $2$-bromopropane."
        },
        {
          "id": "w8-chem-114",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding, Environmental Chemistry, Organic Basics, Hydrocarbons & Aromatic Compounds)",
          "text": "The products of the ozonolysis of but-$2$-ene are",
          "options": [
            {
              "id": "A",
              "text": "two molecules of propanal"
            },
            {
              "id": "B",
              "text": "two molecules of ethanal"
            },
            {
              "id": "C",
              "text": "two molecules of ethanoic acid"
            },
            {
              "id": "D",
              "text": "one molecule of ethanal and one molecule of methanal"
            }
          ],
          "correct": "B",
          "explanation": "But-$2$-ene is $\\text{CH}_3\\text{CH}=\\text{CHCH}_3$. Ozonolysis cleaves the double bond and, on reductive work-up, each $\\text{CHCH}_3$ fragment becomes $\\text{CH}_3\\text{CHO}$. Hence two molecules of ethanal are formed."
        },
        {
          "id": "w8-chem-115",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding, Environmental Chemistry, Organic Basics, Hydrocarbons & Aromatic Compounds)",
          "text": "Which of the following undergoes an $S_N1$ reaction most readily?",
          "options": [
            {
              "id": "A",
              "text": "ethyl bromide"
            },
            {
              "id": "B",
              "text": "methyl bromide"
            },
            {
              "id": "C",
              "text": "tert-butyl bromide"
            },
            {
              "id": "D",
              "text": "isopropyl bromide"
            }
          ],
          "correct": "C",
          "explanation": "An $S_N1$ reaction proceeds through a carbocation intermediate. The tert-butyl bromide forms a tertiary carbocation, which is the most stable among the given possibilities, so it undergoes $S_N1$ substitution most readily."
        },
        {
          "id": "w8-chem-116",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding, Environmental Chemistry, Organic Basics, Hydrocarbons & Aromatic Compounds)",
          "text": "Which of the following hydrocarbons is the most acidic?",
          "options": [
            {
              "id": "A",
              "text": "ethene"
            },
            {
              "id": "B",
              "text": "ethane"
            },
            {
              "id": "C",
              "text": "methane"
            },
            {
              "id": "D",
              "text": "ethyne"
            }
          ],
          "correct": "D",
          "explanation": "In ethyne the acidic hydrogen is attached to an $sp$-hybridised carbon. The high $s$-character holds the electron pair closer to the nucleus and stabilises the resulting acetylide ion, so ethyne is much more acidic than ethene, ethane or methane."
        },
        {
          "id": "w8-chem-117",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding, Environmental Chemistry, Organic Basics, Hydrocarbons & Aromatic Compounds)",
          "text": "The number of delocalised pi electrons in naphthalene is",
          "options": [
            {
              "id": "A",
              "text": "$10$"
            },
            {
              "id": "B",
              "text": "$8$"
            },
            {
              "id": "C",
              "text": "$12$"
            },
            {
              "id": "D",
              "text": "$14$"
            }
          ],
          "correct": "A",
          "explanation": "Naphthalene consists of two fused benzene rings sharing two carbon atoms. It has five double bonds in its resonance structure, giving $10$ pi electrons, which satisfies Huckel's rule with $n=2$ ($4n+2=10$)."
        },
        {
          "id": "w8-chem-118",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding, Environmental Chemistry, Organic Basics, Hydrocarbons & Aromatic Compounds)",
          "text": "Which of the following compounds is not aromatic?",
          "options": [
            {
              "id": "A",
              "text": "pyridine"
            },
            {
              "id": "B",
              "text": "cyclooctatetraene"
            },
            {
              "id": "C",
              "text": "benzene"
            },
            {
              "id": "D",
              "text": "naphthalene"
            }
          ],
          "correct": "B",
          "explanation": "Cyclooctatetraene has $8$ pi electrons, which do not satisfy Huckel's $4n+2$ rule. It also adopts a non-planar tub shape to avoid antiaromaticity, so it is not aromatic. Benzene, naphthalene and pyridine are aromatic."
        },
        {
          "id": "w8-chem-119",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding, Environmental Chemistry, Organic Basics, Hydrocarbons & Aromatic Compounds)",
          "text": "The number of distinct monochloro derivatives obtained by free-radical chlorination of $2$-methylbutane is",
          "options": [
            {
              "id": "A",
              "text": "$2$"
            },
            {
              "id": "B",
              "text": "$5$"
            },
            {
              "id": "C",
              "text": "$4$"
            },
            {
              "id": "D",
              "text": "$3$"
            }
          ],
          "correct": "C",
          "explanation": "In $2$-methylbutane, $\\text{CH}_3\\text{CH}(\\text{CH}_3)\\text{CH}_2\\text{CH}_3$, the two methyl groups attached to carbon $2$ are equivalent. The distinct hydrogen environments are those of these two equivalent methyl groups, the tertiary hydrogen on carbon $2$, the methylene hydrogen on carbon $3$, and the terminal methyl group on carbon $4$. Hence four distinct monochloro derivatives are possible."
        },
        {
          "id": "w8-chem-120",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding, Environmental Chemistry, Organic Basics, Hydrocarbons & Aromatic Compounds)",
          "text": "Which of the following does not decolourise cold dilute alkaline potassium permanganate solution (Baeyer's reagent)?",
          "options": [
            {
              "id": "A",
              "text": "ethene"
            },
            {
              "id": "B",
              "text": "propyne"
            },
            {
              "id": "C",
              "text": "but-$2$-ene"
            },
            {
              "id": "D",
              "text": "benzene"
            }
          ],
          "correct": "D",
          "explanation": "Baeyer's reagent oxidises carbon-carbon double and triple bonds, so ethene, propyne and but-$2$-ene decolourise it. Benzene has delocalised pi electrons and is not oxidised under these mild conditions, so it does not decolourise the reagent."
        }
      ]
    }
  ]
};

  var incoming = payload.exams || [];
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
