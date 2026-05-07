# Build the questions array from OCR text analysis
questions = []

# MATHS Q1-Q80
maths_questions = [
    {
        "id": "maths-1",
        "section": "Maths",
        "text": "If $f(x)$ is a quadratic function such that $f\\left(\\frac{1}{x}\\right) = f\\left(\\frac{x}{x^2}\\right)$, then $f\\left(\\frac{2}{3}\\right) + f\\left(\\frac{3}{2}\\right) =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$\\frac{25}{12}$", "image": ""},
            {"id": "B", "text": "$\\frac{x}{x^2}$", "image": ""},
            {"id": "C", "text": "$\\frac{x^2}{3}$", "image": ""},
            {"id": "D", "text": "$\\frac{41}{20}$", "image": ""}
        ],
        "correct": "",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "maths-2",
        "section": "Maths",
        "text": "$f(x) = ax^2 + bx + c$ is an even function and $g(x) = px^3 + qx^2 + rx$ is an odd function. If $h(x) = f(x) + g(x)$ and $h(-2) = 0$, then $8p + 4q + 2r =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$4a + 3b + 2c$", "image": ""},
            {"id": "B", "text": "$a + b + c$", "image": ""},
            {"id": "C", "text": "$4a + 2b + c$", "image": ""},
            {"id": "D", "text": "$8a + 4b + 2c$", "image": ""}
        ],
        "correct": "D",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "maths-3",
        "section": "Maths",
        "text": "If $1 \\cdot 3 \\cdot 5 + 3 \\cdot 5 \\cdot 7 + 5 \\cdot 7 \\cdot 9 + \\ldots$ to $n$ terms $= n(n+1)f(n)$, then $f(2) =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$12$", "image": ""},
            {"id": "B", "text": "$42$", "image": ""},
            {"id": "C", "text": "$18$", "image": ""},
            {"id": "D", "text": "$24$", "image": ""}
        ],
        "correct": "A",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "maths-4",
        "section": "Maths",
        "text": "$A = \\begin{bmatrix} 1 & 2 \\\\ 2 & 1 \\end{bmatrix}$ and $B = \\begin{bmatrix} x & 2 \\\\ y & 1 \\end{bmatrix}$ are two matrices such that $(A+B)(A-B) = A^2 - B^2$. If $C = \\begin{bmatrix} x & 2 \\\\ y & 1 \\end{bmatrix}$, then $\\text{Trace}(C) =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$3$", "image": ""},
            {"id": "B", "text": "$1$", "image": ""},
            {"id": "C", "text": "$-1$", "image": ""},
            {"id": "D", "text": "$-3$", "image": ""}
        ],
        "correct": "A",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "maths-5",
        "section": "Maths",
        "text": "If $x = k$ satisfies the equation $\\begin{vmatrix} x-2 & 3x-3 & 5x-5 \\\\ x-4 & 3x-9 & 5x-25 \\\\ x-8 & 3x-27 & 5x-125 \\end{vmatrix} = 0$, then $x = k$ also satisfies the equation",
        "image": "",
        "options": [
            {"id": "A", "text": "$x^2 + x - 2 = 0$", "image": ""},
            {"id": "B", "text": "$x^2 - x - 6 = 0$", "image": ""},
            {"id": "C", "text": "$x^2 - 2x - 8 = 0$", "image": ""},
            {"id": "D", "text": "$x^2 + 2x - 3 = 0$", "image": ""}
        ],
        "correct": "D",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "maths-6",
        "section": "Maths",
        "text": "If $A$ is a non singular matrix, then $\\text{Adj}(A^{-1}) =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$(\\text{Adj } A)^{-1}$", "image": ""},
            {"id": "B", "text": "$(\\text{Adj } A)^T$", "image": ""},
            {"id": "C", "text": "$|A| A$", "image": ""},
            {"id": "D", "text": "$|A| A^{-1}$", "image": ""}
        ],
        "correct": "A",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "maths-7",
        "section": "Maths",
        "text": "If the homogeneous system of linear equations $x - 2y + 3z = 0$, $2x + 4y - 5z = 0$, $3x + \\lambda y + \\mu z = 0$ has non-trivial solution, then $8\\mu + 11\\lambda =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$2$", "image": ""},
            {"id": "B", "text": "$6$", "image": ""},
            {"id": "C", "text": "$-6$", "image": ""},
            {"id": "D", "text": "$-2$", "image": ""}
        ],
        "correct": "D",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "maths-8",
        "section": "Maths",
        "text": "If $z = \\dfrac{(2-i)(1+i)^2}{g - iy}$, then $\\text{Arg}(z) =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$\\tan^{-1}\\left(\\frac{3}{4}\\right) - \\pi$", "image": ""},
            {"id": "B", "text": "$\\tan^{-1}\\left(3\\right) - \\pi$", "image": ""},
            {"id": "C", "text": "$\\pi - \\tan^{-1}(2)$", "image": ""},
            {"id": "D", "text": "$-\\pi/4$", "image": ""}
        ],
        "correct": "A",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "maths-9",
        "section": "Maths",
        "text": "$z = x + iy$ and the point $P$ represents $z$ in the Argand plane. If the amplitude of $\\dfrac{\\bar{z} - i}{z - i}$ is $\\pi$, then the equation of the locus of $P$ is",
        "image": "",
        "options": [
            {"id": "A", "text": "$2x^2 + 2y^2 - 3x + 3y - 2 = 0$, $(x, y) \\neq (0, -2)$", "image": ""},
            {"id": "B", "text": "$2x^2 + 2y^2 + 5x + 3y - 2 = 0$, $(x, y) \\neq (0, -2)$", "image": ""},
            {"id": "C", "text": "$2x^2 + 2y^2 + 3x + 3y - 2 = 0$, $(x, y) \\neq (0, 2)$", "image": ""},
            {"id": "D", "text": "$2x^2 + 2y^2 - 5x + 3y - 2 = 0$, $(x, y) \\neq (0, 2)$", "image": ""}
        ],
        "correct": "B",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "maths-10",
        "section": "Maths",
        "text": "$\\alpha, \\beta$ are the roots of the equation $x^2 + 2x + 4 = 0$. If the point representing $\\alpha$ in the Argand diagram lies in the 2nd quadrant and $\\alpha^{2n} - \\beta^{2n} = ik$, $(i = \\sqrt{-1})$, then $k =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$2^{2n+1} \\sqrt{3}$", "image": ""},
            {"id": "B", "text": "$2^{2n} \\sqrt{3}$", "image": ""},
            {"id": "C", "text": "$2^{2n} \\sqrt{5}$", "image": ""},
            {"id": "D", "text": "$2^{2n+1} \\sqrt{3}$", "image": ""}
        ],
        "correct": "A",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "maths-11",
        "section": "Maths",
        "text": "If $\\alpha$ is a root of the equation $x^2 - x + 1 = 0$, then $\\left(\\alpha + \\dfrac{1}{\\alpha}\\right)^3 + \\left(\\alpha^2 + \\dfrac{1}{\\alpha^2}\\right)^3 + \\left(\\alpha^3 + \\dfrac{1}{\\alpha^3}\\right)^3 + \\left(\\alpha^4 + \\dfrac{1}{\\alpha^4}\\right)^3 =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$0$", "image": ""},
            {"id": "B", "text": "$-1$", "image": ""},
            {"id": "C", "text": "$1$", "image": ""},
            {"id": "D", "text": "$2$", "image": ""}
        ],
        "correct": "A",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "maths-12",
        "section": "Maths",
        "text": "$\\alpha, \\beta$ are the real roots of the equation $x^2 + ax + b = 0$. If $\\alpha + \\beta = \\dfrac{1}{2}$ and $\\alpha^2 + \\beta^2 = \\dfrac{1}{8}$, then $a - \\dfrac{1}{b} =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$-\\dfrac{1}{6}$", "image": ""},
            {"id": "B", "text": "$\\dfrac{3}{2}$", "image": ""},
            {"id": "C", "text": "$\\dfrac{3}{2}$", "image": ""},
            {"id": "D", "text": "$\\dfrac{15}{6}$", "image": ""}
        ],
        "correct": "A",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "maths-13",
        "section": "Maths",
        "text": "The solution set of the inequation $\\sqrt{x^2 + x - 2} > (1 - x)$ is",
        "image": "",
        "options": [
            {"id": "A", "text": "$(-\\infty, 2)$", "image": ""},
            {"id": "B", "text": "$(1, \\infty)$", "image": ""},
            {"id": "C", "text": "$(-\\infty, -2) \\cup (1, \\infty)$", "image": ""},
            {"id": "D", "text": "$(2, \\infty)$", "image": ""}
        ],
        "correct": "B",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "maths-14",
        "section": "Maths",
        "text": "If $\\alpha, \\beta, \\gamma$ are the roots of the equation $4x^3 - 3x^2 + 2x - 1 = 0$, then $\\alpha^{-2} + \\beta^{-2} + \\gamma^{-2} =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$\\dfrac{1}{16}$", "image": ""},
            {"id": "B", "text": "$\\dfrac{1}{4}$", "image": ""},
            {"id": "C", "text": "$\\dfrac{9}{16}$", "image": ""},
            {"id": "D", "text": "$\\dfrac{1}{8}$", "image": ""}
        ],
        "correct": "C",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "maths-15",
        "section": "Maths",
        "text": "The equation $16x^4 + 16x^3 - 4x - 1 = 0$ has a multiple root. If $\\alpha, \\beta, \\gamma, \\delta$ are the roots of this equation, then $\\alpha^{-1} + \\beta^{-1} + \\gamma^{-1} + \\delta^{-1} =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$\\dfrac{1}{64}$", "image": ""},
            {"id": "B", "text": "$4$", "image": ""},
            {"id": "C", "text": "$-4$", "image": ""},
            {"id": "D", "text": "$-\\dfrac{1}{64}$", "image": ""}
        ],
        "correct": "C",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "maths-16",
        "section": "Maths",
        "text": "The sum of all the 4-digit numbers formed by taking all the digits from 0, 3, 6, 9 without repetition is",
        "image": "",
        "options": [
            {"id": "A", "text": "$119592$", "image": ""},
            {"id": "B", "text": "$211599$", "image": ""},
            {"id": "C", "text": "$211599$", "image": ""},
            {"id": "D", "text": "$119952$", "image": ""}
        ],
        "correct": "D",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "maths-17",
        "section": "Maths",
        "text": "The number of ways in which 6 distinct things can be distributed into 2 boxes so that no box is empty is",
        "image": "",
        "options": [
            {"id": "A", "text": "$36$", "image": ""},
            {"id": "B", "text": "$64$", "image": ""},
            {"id": "C", "text": "$62$", "image": ""},
            {"id": "D", "text": "$32$", "image": ""}
        ],
        "correct": "C",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "maths-18",
        "section": "Maths",
        "text": "Number of ways in which the number 831600 can be split into two factors which are relatively prime is",
        "image": "",
        "options": [
            {"id": "A", "text": "$8$", "image": ""},
            {"id": "B", "text": "$64$", "image": ""},
            {"id": "C", "text": "$32$", "image": ""},
            {"id": "D", "text": "$16$", "image": ""}
        ],
        "correct": "D",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "maths-19",
        "section": "Maths",
        "text": "The coefficient of $xy^2z^4$ in the expansion of $(x - 2y + 3z)^9$ is",
        "image": "",
        "options": [
            {"id": "A", "text": "$6480$", "image": ""},
            {"id": "B", "text": "$3240$", "image": ""},
            {"id": "C", "text": "$1620$", "image": ""},
            {"id": "D", "text": "$810$", "image": ""}
        ],
        "correct": "A",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "maths-20",
        "section": "Maths",
        "text": "The set of all real values of $x$ for which the expansion of $\\left(1 + \\dfrac{2}{x}\\right)^{n/5}$ is valid, is",
        "image": "",
        "options": [
            {"id": "A", "text": "$\\left(-\\dfrac{3}{5}, \\infty\\right)$", "image": ""},
            {"id": "B", "text": "$(-2, 2)$", "image": ""},
            {"id": "C", "text": "$(-\\infty, -2) \\cup (2, \\infty)$", "image": ""},
            {"id": "D", "text": "$|x| > 2$", "image": ""}
        ],
        "correct": "D",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "maths-21",
        "section": "Maths",
        "text": "If $\\dfrac{1}{2x^3 + 7x^2 + 6} = \\dfrac{A}{x + a} + \\dfrac{B}{ax^2 + 3}$, then $A + B + C - 2D =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$2a$", "image": ""},
            {"id": "B", "text": "$-2a$", "image": ""},
            {"id": "C", "text": "$-4a$", "image": ""},
            {"id": "D", "text": "$4a$", "image": ""}
        ],
        "correct": "D",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "maths-22",
        "section": "Maths",
        "text": "If $\\left(\\sin\\theta - \\csc\\theta\\right)^2 + \\left(\\cos\\theta + \\sec\\theta\\right)^2 = 5$ and $\\theta$ lies in the third quadrant, then $(\\sin\\theta + \\cos\\theta)^2 =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$10 - 2\\sqrt{2}$", "image": ""},
            {"id": "B", "text": "$2\\sqrt{2}$", "image": ""},
            {"id": "C", "text": "$10 + 2\\sqrt{2}$", "image": ""},
            {"id": "D", "text": "$-4$", "image": ""}
        ],
        "correct": "A",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "maths-23",
        "section": "Maths",
        "text": "If $0 < B < A < \\dfrac{\\pi}{4}$, $\\cos^2 B - \\sin^2 A = \\dfrac{\\sqrt{2}+1}{2\\sqrt{2}}$ and $2\\cos A \\cos B = \\dfrac{1+\\sqrt{2}+\\sqrt{3}}{2\\sqrt{2}}$, then $\\cos^2\\dfrac{4B}{3} - \\sin^2\\dfrac{4A}{5} =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$1$", "image": ""},
            {"id": "B", "text": "$\\dfrac{1}{2}$", "image": ""},
            {"id": "C", "text": "$0$", "image": ""},
            {"id": "D", "text": "$\\dfrac{1}{2}$", "image": ""}
        ],
        "correct": "A",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "maths-24",
        "section": "Maths",
        "text": "If $\\theta$ is an acute angle and $2\\sin^2\\theta = \\cos^2\\dfrac{4\\pi}{3} + \\sin^2\\dfrac{5\\pi}{4} + \\cos^2\\dfrac{4\\pi}{3} + \\sin^2\\dfrac{41\\pi}{8}$, then $\\theta =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$\\dfrac{\\pi}{36}$", "image": ""},
            {"id": "B", "text": "$\\dfrac{\\pi}{4}$", "image": ""},
            {"id": "C", "text": "$\\dfrac{\\pi}{3}$", "image": ""},
            {"id": "D", "text": "$\\dfrac{\\pi}{8}$", "image": ""}
        ],
        "correct": "C",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "maths-25",
        "section": "Maths",
        "text": "If $2\\tan^2\\theta - 4\\sec\\theta + 3 = 0$, then $2\\sec\\theta =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$3$", "image": ""},
            {"id": "B", "text": "$2 + \\sqrt{2}$ and $2 - \\sqrt{2}$", "image": ""},
            {"id": "C", "text": "$2 - \\sqrt{2}$", "image": ""},
            {"id": "D", "text": "$2 + \\sqrt{2}$", "image": ""}
        ],
        "correct": "A",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "maths-26",
        "section": "Maths",
        "text": "If $\\sin^{-1}x - \\cos^{-1}2x = \\sin^{-1}\\left(\\dfrac{3}{2}\\right) - \\cos^{-1}\\left(\\dfrac{x}{2}\\right)$, then $\\tan^{-1}x + \\tan^{-1}\\left(\\dfrac{x}{x+1}\\right) =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$\\dfrac{\\pi}{6}$", "image": ""},
            {"id": "B", "text": "$\\dfrac{\\pi}{4}$", "image": ""},
            {"id": "C", "text": "$\\dfrac{\\pi}{3}$", "image": ""},
            {"id": "D", "text": "$\\dfrac{\\pi}{2}$", "image": ""}
        ],
        "correct": "B",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "maths-27",
        "section": "Maths",
        "text": "$\\text{Sech}^{-1}\\left(\\dfrac{2}{5}\\right) - \\tanh^{-1}\\left(\\dfrac{2}{5}\\right) =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$\\log_e 6$", "image": ""},
            {"id": "B", "text": "$\\log_e 5$", "image": ""},
            {"id": "C", "text": "$\\log_e\\left(\\dfrac{1}{2}\\right)$", "image": ""},
            {"id": "D", "text": "$\\log_e\\left(\\dfrac{5}{4}\\right)$", "image": ""}
        ],
        "correct": "C",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "maths-28",
        "section": "Maths",
        "text": "In a triangle $ABC$, if $a = 5$, $b = 3$, $c = 7$, then $\\dfrac{\\sin C}{\\sin(A+B)} =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$\\dfrac{4}{7}$", "image": ""},
            {"id": "B", "text": "$\\dfrac{1}{6}$", "image": ""},
            {"id": "C", "text": "$\\dfrac{3}{6}$", "image": ""},
            {"id": "D", "text": "$\\dfrac{5}{4}$", "image": ""}
        ],
        "correct": "A",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "maths-29",
        "section": "Maths",
        "text": "In a triangle $ABC$, if $r_1 = 6$, $r_2 = 9$, $r_3 = 18$, then $\\cos A =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$\\dfrac{2}{13}$", "image": ""},
            {"id": "B", "text": "$\\dfrac{4}{5}$", "image": ""},
            {"id": "C", "text": "$\\dfrac{5}{7}$", "image": ""},
            {"id": "D", "text": "$\\dfrac{7}{25}$", "image": ""}
        ],
        "correct": "B",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "maths-30",
        "section": "Maths",
        "text": "$2\\vec{i} - 3\\vec{j} + \\vec{k}$ and $\\vec{i} + 2\\vec{j} - 3\\vec{k}$ are the position vectors of two points $A$ and $B$ respectively and $C$ divides $AB$ in the ratio $3:2$. If $3\\vec{i} - \\vec{j} + 2\\vec{k}$ is the position vector of a point $D$, then the unit vector in the direction of $\\overrightarrow{CD}$ is",
        "image": "",
        "options": [
            {"id": "A", "text": "$\\dfrac{1}{7\\sqrt{2}}(8\\vec{i} - 5\\vec{j} - 3\\vec{k})$", "image": ""},
            {"id": "B", "text": "$\\dfrac{1}{\\sqrt{266}}(4\\vec{i} - 13\\vec{j} + 9\\vec{k})$", "image": ""},
            {"id": "C", "text": "$\\dfrac{1}{7}(8\\vec{i} + 17\\vec{j})$", "image": ""},
            {"id": "D", "text": "$\\dfrac{1}{7\\sqrt{2}}(-5\\vec{i} + 4\\vec{k})$", "image": ""}
        ],
        "correct": "A",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "maths-31",
        "section": "Maths",
        "text": "A plane $\\pi$ passing through the points $2\\vec{i} - 3\\vec{j}$, $3\\vec{i} + 4\\vec{k}$ is parallel to the vector $2\\vec{i} + 3\\vec{j} - 4\\vec{k}$. If a line joining the points $\\vec{i} + 2\\vec{j}$ and $\\vec{i} - 2\\vec{k}$ intersects the plane $\\pi$ at the point $a\\vec{i} + b\\vec{j} + c\\vec{k}$, then $a + b + 2c =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$31$", "image": ""},
            {"id": "B", "text": "$-31$", "image": ""},
            {"id": "C", "text": "$15$", "image": ""},
            {"id": "D", "text": "$-15$", "image": ""}
        ],
        "correct": "A",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "maths-32",
        "section": "Maths",
        "text": "A unit vector $\\hat{a} = a\\vec{i} + b\\vec{j} + c\\vec{k}$ is coplanar with the vectors $\\vec{i} - 3\\vec{j} + 5\\vec{k}$ and $3\\vec{i} + \\vec{j} - 5\\vec{k}$. If $\\hat{a}$ is perpendicular to the vector $\\vec{i} + \\vec{j} + \\vec{k}$, then $2a^2 + 3b^2 + 4c^2 =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$\\dfrac{1}{2}$", "image": ""},
            {"id": "B", "text": "$\\dfrac{3}{2}$", "image": ""},
            {"id": "C", "text": "$\\dfrac{5}{2}$", "image": ""},
            {"id": "D", "text": "$\\dfrac{7}{2}$", "image": ""}
        ],
        "correct": "C",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "maths-33",
        "section": "Maths",
        "text": "$\\vec{a} = \\vec{i} + \\vec{j} - 2\\vec{k}$, $\\vec{b} = \\vec{i} - 2\\vec{j} + \\vec{k}$ and $\\vec{c} = 2\\vec{i} + \\vec{j} - \\vec{k}$ are three vectors. If $\\vec{d}$ is normal to the plane of $\\vec{a}$ and $\\vec{b}$ and $\\vec{d} \\cdot \\vec{c} = 2$, then $|\\vec{d}| =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$\\sqrt{6}$", "image": ""},
            {"id": "B", "text": "$2\\sqrt{3}$", "image": ""},
            {"id": "C", "text": "$\\sqrt{3}$", "image": ""},
            {"id": "D", "text": "$2\\sqrt{6}$", "image": ""}
        ],
        "correct": "C",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "maths-34",
        "section": "Maths",
        "text": "$\\vec{r} \\cdot (\\vec{i} - \\vec{j} + \\vec{k}) = 5$ and $\\vec{r} \\cdot (2\\vec{i} + \\vec{j} - \\vec{k}) = 3$ are two planes. A plane passing through the line of intersection of these two planes, passes through the point $(0, 1, 2)$. If the equation of $\\pi$ is $\\vec{r} \\cdot (a\\vec{i} + b\\vec{j} + c\\vec{k}) = m$, then $\\dfrac{b}{a} =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$\\dfrac{1}{2}$", "image": ""},
            {"id": "B", "text": "$2$", "image": ""},
            {"id": "C", "text": "$-\\dfrac{1}{2}$", "image": ""},
            {"id": "D", "text": "$-2$", "image": ""}
        ],
        "correct": "A",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "maths-35",
        "section": "Maths",
        "text": "The variance of the data: 1, 2, 3, 5, 8, 13, 17 is approximately",
        "image": "",
        "options": [
            {"id": "A", "text": "$31.14$", "image": ""},
            {"id": "B", "text": "$29.57$", "image": ""},
            {"id": "C", "text": "$30.62$", "image": ""},
            {"id": "D", "text": "$28.00$", "image": ""}
        ],
        "correct": "A",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "maths-36",
        "section": "Maths",
        "text": "The numbers 2, 3, 5, 7, 11, 13 are written on six distinct paper chits. If 3 of them are chosen at random, then the probability that the sum of the numbers on the obtained chits is divisible by 3, is",
        "image": "",
        "options": [
            {"id": "A", "text": "$\\dfrac{7}{20}$", "image": ""},
            {"id": "B", "text": "$\\dfrac{1}{4}$", "image": ""},
            {"id": "C", "text": "$\\dfrac{2}{5}$", "image": ""},
            {"id": "D", "text": "$\\dfrac{1}{5}$", "image": ""}
        ],
        "correct": "A",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "maths-37",
        "section": "Maths",
        "text": "If 4 letters are selected at random from the letters of the word PROBABILITY, then the probability of getting a combination of letters in which at least one letter is repeated is",
        "image": "",
        "options": [
            {"id": "A", "text": "$\\dfrac{1}{170}$", "image": ""},
            {"id": "B", "text": "$\\dfrac{19}{61}$", "image": ""},
            {"id": "C", "text": "$\\dfrac{51}{184}$", "image": ""},
            {"id": "D", "text": "$\\dfrac{29}{155}$", "image": ""}
        ],
        "correct": "B",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "maths-38",
        "section": "Maths",
        "text": "If two dice are rolled, then the probability of getting a multiple of 3 as the sum of the numbers appeared on the top faces of the dice, if it is known that their sum is an odd number, is",
        "image": "",
        "options": [
            {"id": "A", "text": "$\\dfrac{1}{3}$", "image": ""},
            {"id": "B", "text": "$\\dfrac{1}{6}$", "image": ""},
            {"id": "C", "text": "$\\dfrac{1}{2}$", "image": ""},
            {"id": "D", "text": "$\\dfrac{2}{3}$", "image": ""}
        ],
        "correct": "A",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "maths-39",
        "section": "Maths",
        "text": "If a random variable $X$ has the following probability distribution, then its variance is: $P(X = 3) = k$, $P(X = 5) = 2k$, $P(X = 2) = 3k$ (for some $k$)",
        "image": "",
        "options": [
            {"id": "A", "text": "$\\dfrac{5}{6}$", "image": ""},
            {"id": "B", "text": "$\\dfrac{7}{6}$", "image": ""},
            {"id": "C", "text": "$\\dfrac{16}{9}$", "image": ""},
            {"id": "D", "text": "$\\dfrac{4}{3}$", "image": ""}
        ],
        "correct": "C",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "maths-40",
        "section": "Maths",
        "text": "The mean and variance of a binomial variate $X$ are $\\dfrac{3}{4}$ and $\\dfrac{3}{8}$ respectively. If $P(X > 1) = 1 - K\\left(\\dfrac{5}{4}\\right)^n$, then $5K =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$19$", "image": ""},
            {"id": "B", "text": "$3$", "image": ""},
            {"id": "C", "text": "$\\dfrac{3}{2}$", "image": ""},
            {"id": "D", "text": "$11$", "image": ""}
        ],
        "correct": "A",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "maths-41",
        "section": "Maths",
        "text": "$P$ and $Q$ are the points of trisection of the line segment joining the points $(3, -7)$ and $(-5, 3)$. If $PQ$ subtends a right angle at a variable point $R$, then the locus of $R$ is",
        "image": "",
        "options": [
            {"id": "A", "text": "a circle with radius $\\sqrt{50}$", "image": ""},
            {"id": "B", "text": "a circle with radius $\\sqrt{409}$", "image": ""},
            {"id": "C", "text": "a pair of straight lines passing through $(-1, -2)$", "image": ""},
            {"id": "D", "text": "a pair of straight lines passing through $(1, 2)$", "image": ""}
        ],
        "correct": "A",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "maths-42",
        "section": "Maths",
        "text": "$(a, b)$ is the point to which the origin has to be shifted by translation of axes so as to remove the first-degree terms from the equation $2x^2 - 3xy + 4y^2 + 5y - 6 = 0$. If the angle by which the axes are to be rotated in positive direction about the origin to remove the $xy$-term from the equation $ax^2 + 2\\sqrt{ab}\\,xy + by^2 = 0$ is $\\theta$, then $\\tan 2\\theta =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$\\dfrac{4}{3}$", "image": ""},
            {"id": "B", "text": "$\\dfrac{3}{4}$", "image": ""},
            {"id": "C", "text": "$-\\dfrac{4}{3}$", "image": ""},
            {"id": "D", "text": "$-\\dfrac{3}{4}$", "image": ""}
        ],
        "correct": "A",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "maths-43",
        "section": "Maths",
        "text": "$A(1,-2)$, $B(-2,3)$, $C(-1,-3)$ are the vertices of a triangle $ABC$. $L_1$ is the perpendicular drawn from $A$ to $BC$ and $L_2$ is the perpendicular bisector of $AB$. If $(l, m)$ is the point of intersection of $L_1$ and $L_2$, then $26m - 3 =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$26l$", "image": ""},
            {"id": "B", "text": "$89l$", "image": ""},
            {"id": "C", "text": "$13l$", "image": ""},
            {"id": "D", "text": "$43l$", "image": ""}
        ],
        "correct": "C",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "maths-44",
        "section": "Maths",
        "text": "The area of the parallelogram formed by the lines $L_1 = 4x + 4y + 2 = 0$, $L_2 = 3x + 4y - 3 = 0$, $L_3 = 2x + \\mu y + 6 = 0$, $L_4 = 2x + y + 3 = 0$, where $L_1$ is parallel to $L_2$ and $L_3$ is parallel to $L_4$, is",
        "image": "",
        "options": [
            {"id": "A", "text": "$9$", "image": ""},
            {"id": "B", "text": "$7$", "image": ""},
            {"id": "C", "text": "$5$", "image": ""},
            {"id": "D", "text": "$3$", "image": ""}
        ],
        "correct": "B",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "maths-45",
        "section": "Maths",
        "text": "If $A(1,2)$, $B(2,1)$ are two vertices of an acute angled triangle and $S(0,0)$ is its circumcenter, then the angle subtended by $AB$ at the third vertex is",
        "image": "",
        "options": [
            {"id": "A", "text": "$\\dfrac{\\pi}{4}$", "image": ""},
            {"id": "B", "text": "$\\dfrac{\\pi}{3}$", "image": ""},
            {"id": "C", "text": "$\\dfrac{3\\pi}{4}$", "image": ""},
            {"id": "D", "text": "$\\dfrac{\\pi}{6}$", "image": ""}
        ],
        "correct": "C",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "maths-46",
        "section": "Maths",
        "text": "If the angle between the pair of lines given by the equation $ax^2 + 4xy + 2y^2 = 0$ is $45°$, then the possible values of $a$ are",
        "image": "",
        "options": [
            {"id": "A", "text": "$-3$ or $21$", "image": ""},
            {"id": "B", "text": "$6 \\pm 4\\sqrt{3}$", "image": ""},
            {"id": "C", "text": "$-6 \\pm 2\\sqrt{2}$", "image": ""},
            {"id": "D", "text": "do not exist", "image": ""}
        ],
        "correct": "B",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "maths-47",
        "section": "Maths",
        "text": "A circle passing through the points $(1,1)$ and $(2,0)$ touches the line $3x - y - 1 = 0$. If the equation of this circle is $x^2 + y^2 + 2gx + 2fy + c = 0$, then a possible value of $g$ is",
        "image": "",
        "options": [
            {"id": "A", "text": "$-\\dfrac{1}{2}$", "image": ""},
            {"id": "B", "text": "$\\dfrac{1}{2}$", "image": ""},
            {"id": "C", "text": "$6$", "image": ""},
            {"id": "D", "text": "$-5$", "image": ""}
        ],
        "correct": "A",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "maths-48",
        "section": "Maths",
        "text": "A circle passes through the points $(2,0)$ and $(1,2)$. If the power of the point $(0,2)$ with respect to this circle is $4$, then the radius of the circle is",
        "image": "",
        "options": [
            {"id": "A", "text": "$\\sqrt{2}$", "image": ""},
            {"id": "B", "text": "$2$", "image": ""},
            {"id": "C", "text": "$\\sqrt{5}$", "image": ""},
            {"id": "D", "text": "$3$", "image": ""}
        ],
        "correct": "C",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "maths-49",
        "section": "Maths",
        "text": "$x - 2y - 6 = 0$ is a normal to the circle $x^2 + y^2 + 2gx + 2fy - 8 = 0$. If the line $y = 2$ touches this circle, then the radius of the circle can be",
        "image": "",
        "options": [
            {"id": "A", "text": "$\\sqrt{2}$", "image": ""},
            {"id": "B", "text": "$2\\sqrt{2}$", "image": ""},
            {"id": "C", "text": "$3\\sqrt{2}$", "image": ""},
            {"id": "D", "text": "$\\sqrt{18}$", "image": ""}
        ],
        "correct": "D",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "maths-50",
        "section": "Maths",
        "text": "The line $x + y + 1 = 0$ intersects the circle $x^2 + y^2 - 4x + 2y - 4 = 0$ at the points $A$ and $B$. If $M(a, b)$ is the midpoint of $AB$, then $a - b =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$0$", "image": ""},
            {"id": "B", "text": "$1$", "image": ""},
            {"id": "C", "text": "$2$", "image": ""},
            {"id": "D", "text": "$3$", "image": ""}
        ],
        "correct": "B",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "maths-51",
        "section": "Maths",
        "text": "A circle $S$ passes through the points of intersection of the circles $x^2 + y^2 - 2x - 3 = 0$ and $x^2 + y^2 - 2y = 0$. If $x + y + 1 = 0$ is a tangent to the circle $S$, then equation of $S$ is",
        "image": "",
        "options": [
            {"id": "A", "text": "$2x^2 + 2y^2 + 2x + 2y + 3 = 0$", "image": ""},
            {"id": "B", "text": "$2x^2 + 2y^2 - 2x - 2y + 3 = 0$", "image": ""},
            {"id": "C", "text": "$x^2 + y^2 - 2x - 2y + 3 = 0$", "image": ""},
            {"id": "D", "text": "$2x^2 + 2y^2 - 2x - 2y - 3 = 0$", "image": ""}
        ],
        "correct": "D",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "maths-52",
        "section": "Maths",
        "text": "If the common chord of the circles $x^2 + y^2 - 2x + 2y + 1 = 0$ and $x^2 + y^2 - 2x - 2y - 2 = 0$ is the diameter of a circle $S$, then the centre of the circle $S$ is",
        "image": "",
        "options": [
            {"id": "A", "text": "$\\left(\\dfrac{3}{2}, \\dfrac{3}{4}\\right)$", "image": ""},
            {"id": "B", "text": "$\\left(1, -\\dfrac{1}{4}\\right)$", "image": ""},
            {"id": "C", "text": "$\\left(1, -\\dfrac{3}{4}\\right)$", "image": ""},
            {"id": "D", "text": "$\\left(\\dfrac{1}{2}, -1\\right)$", "image": ""}
        ],
        "correct": "A",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "maths-53",
        "section": "Maths",
        "text": "$(1,1)$ is the vertex and $x + y + 1 = 0$ is the directrix of a parabola. If $(a, b)$ is its focus and $(c, d)$ is the point of intersection of the directrix and the axis of the parabola, then $a + b + c + d =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$0$", "image": ""},
            {"id": "B", "text": "$1$", "image": ""},
            {"id": "C", "text": "$-1$", "image": ""},
            {"id": "D", "text": "$2$", "image": ""}
        ],
        "correct": "A",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "maths-54",
        "section": "Maths",
        "text": "The axis of a parabola is parallel to $Y$-axis. If this parabola passes through the points $(1,0)$, $(0,2)$, $(-1,-1)$ and its equation is $ax^2 + bx + cy + d = 0$, then $\\dfrac{ad}{bc} =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$1$", "image": ""},
            {"id": "B", "text": "$-1$", "image": ""},
            {"id": "C", "text": "$\\dfrac{1}{2}$", "image": ""},
            {"id": "D", "text": "$-\\dfrac{1}{2}$", "image": ""}
        ],
        "correct": "B",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "maths-55",
        "section": "Maths",
        "text": "If the focus of an ellipse is $(-1,-1)$, equation of its directrix corresponding to this focus is $x + y + 1 = 0$ and its eccentricity is $\\dfrac{1}{\\sqrt{2}}$, then the length of its major axis is",
        "image": "",
        "options": [
            {"id": "A", "text": "$2$", "image": ""},
            {"id": "B", "text": "$1$", "image": ""},
            {"id": "C", "text": "$4$", "image": ""},
            {"id": "D", "text": "$3$", "image": ""}
        ],
        "correct": "C",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "maths-56",
        "section": "Maths",
        "text": "If the normal drawn at the point $(2,-1)$ to the ellipse $x^2 + 4y^2 = 8$ meets the ellipse again at $(a, b)$, then $17a =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$23$", "image": ""},
            {"id": "B", "text": "$14$", "image": ""},
            {"id": "C", "text": "$-14$", "image": ""},
            {"id": "D", "text": "$-23$", "image": ""}
        ],
        "correct": "D",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "maths-57",
        "section": "Maths",
        "text": "$P(\\theta)$ is a point on the hyperbola $\\dfrac{x^2}{a^2} - \\dfrac{y^2}{b^2} = 1$. $S$ is its focus lying on the positive $X$-axis and $Q = (0, b)$. If $SQ = \\sqrt{26}$ and $SP = 6$, then $\\theta =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$\\dfrac{\\pi}{6}$", "image": ""},
            {"id": "B", "text": "$\\dfrac{\\pi}{3}$", "image": ""},
            {"id": "C", "text": "$\\dfrac{\\pi}{4}$", "image": ""},
            {"id": "D", "text": "$\\cos^{-1}\\left(\\dfrac{2}{3}\\right)$", "image": ""}
        ],
        "correct": "A",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "maths-58",
        "section": "Maths",
        "text": "If $A(-2, 4, a)$, $B(1, b, 3)$, $C(c, 0, 4)$ and $D(-5, 6, 1)$ are collinear points, then $a + b + c =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$4$", "image": ""},
            {"id": "B", "text": "$8$", "image": ""},
            {"id": "C", "text": "$12$", "image": ""},
            {"id": "D", "text": "$16$", "image": ""}
        ],
        "correct": "C",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "maths-59",
        "section": "Maths",
        "text": "$A(1,-2,1)$ and $B(2,-1,2)$ are the end points of a line segment. If $D(\\alpha, \\beta, \\gamma)$ is the foot of the perpendicular drawn from $C(1,2,3)$ to $AB$, then $\\alpha^2 + \\beta^2 + \\gamma^2 =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$18$", "image": ""},
            {"id": "B", "text": "$14$", "image": ""},
            {"id": "C", "text": "$29$", "image": ""},
            {"id": "D", "text": "$21$", "image": ""}
        ],
        "correct": "C",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "maths-60",
        "section": "Maths",
        "text": "The foot of the perpendicular drawn from the point $(-2,-1,3)$ to a plane $\\pi$ is $(1,0,-2)$. If $a$, $b$, $c$ are the intercepts made by the plane $\\pi$ on $X$, $Y$, $Z$-axes respectively, then $3a + b + 5c =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$39$", "image": ""},
            {"id": "B", "text": "$26$", "image": ""},
            {"id": "C", "text": "$13$", "image": ""},
            {"id": "D", "text": "$52$", "image": ""}
        ],
        "correct": "C",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "maths-61",
        "section": "Maths",
        "text": "$\\displaystyle\\lim_{x \\to 0} \\dfrac{(4x^2 - 6x)(4x^2 + 6x + 9)}{ax}$",
        "image": "",
        "options": [
            {"id": "A", "text": "$0$", "image": ""},
            {"id": "B", "text": "$9$", "image": ""},
            {"id": "C", "text": "$-9$", "image": ""},
            {"id": "D", "text": "$6$", "image": ""}
        ],
        "correct": "C",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "maths-62",
        "section": "Maths",
        "text": "If the real valued function $f(x) = \\begin{cases} \\dfrac{(4^x - 1)\\cot(x\\log 4)}{\\sin(x\\log 4)\\log(1+x^2\\log 4)}, & x \\neq 0 \\\\ k, & x = 0 \\end{cases}$ is continuous at $x = 0$, then $e^k =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$e^{(\\log 4)^2}$", "image": ""},
            {"id": "B", "text": "$e^4$", "image": ""},
            {"id": "C", "text": "$4$", "image": ""},
            {"id": "D", "text": "$e^2$", "image": ""}
        ],
        "correct": "A",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "maths-63",
        "section": "Maths",
        "text": "A function $f: \\mathbb{R} \\to \\mathbb{R}$ is such that $yf(x+y) + \\cos(mxy) = 1 + yf(x)$. If $m = 2$, then $f'(2) =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$-2\\sin 2xy$", "image": ""},
            {"id": "B", "text": "$4x$", "image": ""},
            {"id": "C", "text": "$2\\sin 2xy$", "image": ""},
            {"id": "D", "text": "$-4x$", "image": ""}
        ],
        "correct": "A",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "maths-64",
        "section": "Maths",
        "text": "If $y = \\sqrt{\\sin(\\log 2x) + \\sqrt{\\sin(\\log 2x) + \\sqrt{\\sin(\\log 2x) + \\cdots}}}$, then $\\dfrac{dy}{dx} =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$\\dfrac{\\cos(\\log 2x)}{2x(2y-1)}$", "image": ""},
            {"id": "B", "text": "$\\dfrac{\\cos(\\log 2x)}{(2y-1)}$", "image": ""},
            {"id": "C", "text": "$\\dfrac{\\cos(\\log 2x)}{x(2y-1)}$", "image": ""},
            {"id": "D", "text": "$\\dfrac{\\sin(\\log 2x)}{x(2y-1)}$", "image": ""}
        ],
        "correct": "C",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "maths-65",
        "section": "Maths",
        "text": "If $y = \\tan^{-1}\\left(\\dfrac{\\sin^3(2x) - 3x^2\\sin(2x)}{3x\\sin^2(2x) - x^3}\\right)$, then $\\dfrac{dy}{dx} =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$\\dfrac{6x\\cos(2x) - 3\\sin(2x)}{x^2 - \\sin^2(2x)}$", "image": ""},
            {"id": "B", "text": "$\\dfrac{6x\\sin(2x) - 3\\cos(2x)}{x^2 + \\sin^2(2x)}$", "image": ""},
            {"id": "C", "text": "$\\dfrac{2x\\cos(2x) - \\sin(2x)}{x^2 + \\sin^2(2x)}$", "image": ""},
            {"id": "D", "text": "$\\dfrac{6x\\cos(2x) - 3\\sin(2x)}{x^2 + \\sin^2(2x)}$", "image": ""}
        ],
        "correct": "D",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "maths-66",
        "section": "Maths",
        "text": "Derivative of $(\\sin x)^x$ with respect to $x^{\\sin x}$ is",
        "image": "",
        "options": [
            {"id": "A", "text": "$\\dfrac{(\\sin x)^x[(\\sin x)\\log(\\sin x) + x\\cos x]}{x^{\\sin x}[\\cos x(\\log x) + \\sin x]}$", "image": ""},
            {"id": "B", "text": "$\\dfrac{(\\sin x)^x[(\\sin x)(\\log(\\sin x) + x\\cos x)]}{x^{\\sin x}[x\\cos x(\\log x) + \\sin x]}$", "image": ""},
            {"id": "C", "text": "$\\dfrac{x^{\\sin x}[x\\cos x(\\log x) + \\sin x]}{(\\sin x)^x[(\\sin x)\\log(\\sin x) + x\\cos x]}$", "image": ""},
            {"id": "D", "text": "$\\dfrac{x^{\\sin x}[x\\cos x(\\log x) + \\sin x]}{(\\sin x)^x[(\\sin x)\\log(\\sin x) + x\\cos x]}$", "image": ""}
        ],
        "correct": "A",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "maths-67",
        "section": "Maths",
        "text": "For a given function $y = f(x)$, $dy$ denotes the actual error in $y$ corresponding to actual error $dx$ in $x$ and $\\delta y$ denotes the approximate value of $dy$. If $y = f(x) = 2x^3 - 3x + 4$ and $\\delta x = 0.02$, then the value of $dy - \\delta y$ when $x = 5$ is",
        "image": "",
        "options": [
            {"id": "A", "text": "$0.0008$", "image": ""},
            {"id": "B", "text": "$0.008$", "image": ""},
            {"id": "C", "text": "$0.0004$", "image": ""},
            {"id": "D", "text": "$0.004$", "image": ""}
        ],
        "correct": "A",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "maths-68",
        "section": "Maths",
        "text": "The length of the normal drawn at $t = \\dfrac{\\pi}{4}$ on the curve $x = 2(\\cos 2t + t\\sin 2t)$, $y = 4(\\sin 2t + t\\cos 2t)$ is",
        "image": "",
        "options": [
            {"id": "A", "text": "$4\\pi$", "image": ""},
            {"id": "B", "text": "$4\\pi\\sqrt{1 + 2\\pi^2}$", "image": ""},
            {"id": "C", "text": "$4\\sqrt{\\pi}$", "image": ""},
            {"id": "D", "text": "$2\\pi\\sqrt{5}$", "image": ""}
        ],
        "correct": "B",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "maths-69",
        "section": "Maths",
        "text": "If water is poured into a cylindrical tank of radius $3.5$ ft at the rate of $1$ cu ft/min, then the rate at which the level of the water in the tank increases (in ft/min) is",
        "image": "",
        "options": [
            {"id": "A", "text": "$\\dfrac{4}{49\\pi}$", "image": ""},
            {"id": "B", "text": "$\\dfrac{2}{49\\pi}$", "image": ""},
            {"id": "C", "text": "$\\dfrac{1}{49\\pi}$", "image": ""},
            {"id": "D", "text": "$\\dfrac{8}{49\\pi}$", "image": ""}
        ],
        "correct": "A",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "maths-70",
        "section": "Maths",
        "text": "$y = 2x^3 - 8x^2 + 10x - 4$ is a function defined on $[1, 2]$. If the tangent drawn at a point $(a, b)$ on the graph of this function is parallel to $X$-axis and $a \\in (1, 2)$, then $a =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$0$", "image": ""},
            {"id": "B", "text": "$\\dfrac{5}{3}$", "image": ""},
            {"id": "C", "text": "$1$", "image": ""},
            {"id": "D", "text": "$2$", "image": ""}
        ],
        "correct": "B",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "maths-71",
        "section": "Maths",
        "text": "If $m$ and $M$ are respectively the absolute minimum and absolute maximum values of a function $f(x) = 2x^3 + 9x^2 + 12x + 1$ defined on $[-3, 0]$, then $m + M =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$-7$", "image": ""},
            {"id": "B", "text": "$0$", "image": ""},
            {"id": "C", "text": "$7$", "image": ""},
            {"id": "D", "text": "$-2$", "image": ""}
        ],
        "correct": "B",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "maths-72",
        "section": "Maths",
        "text": "$\\displaystyle\\int \\dfrac{\\sec x}{3(\\sec x + \\tan x) + 2} dx =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$\\log\\left|\\dfrac{\\tan\\frac{x}{2} + 1}{\\tan\\frac{x}{2} + 5}\\right| + c$", "image": ""},
            {"id": "B", "text": "$\\log\\left|\\tan\\frac{x}{2} + 1\\right| + c$", "image": ""},
            {"id": "C", "text": "$\\dfrac{1}{2}\\log\\left|\\tan\\frac{x}{2}\\right| + c$", "image": ""},
            {"id": "D", "text": "$\\dfrac{1}{3}\\log\\left|\\sec x + \\tan x\\right| + c$", "image": ""}
        ],
        "correct": "A",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "maths-73",
        "section": "Maths",
        "text": "$\\displaystyle\\int \\dfrac{dx}{4 + 3\\cot x} =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$\\dfrac{3}{25}\\log|4 + 3\\cot x| + \\dfrac{1}{25}x + c$", "image": ""},
            {"id": "B", "text": "$\\dfrac{4}{25}\\log|4\\sin x + 3\\cos x| + \\dfrac{3}{25}x + c$", "image": ""},
            {"id": "C", "text": "$\\dfrac{4}{25}\\log|4\\sin x + 3\\cos x| - \\dfrac{3}{25}x + c$", "image": ""},
            {"id": "D", "text": "$\\dfrac{4}{25}\\log|4 + 3\\cot x| - \\dfrac{3}{25}x + c$", "image": ""}
        ],
        "correct": "C",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "maths-74",
        "section": "Maths",
        "text": "$\\displaystyle\\int \\dfrac{dx}{(x+1)\\sqrt{x^2+4}} =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$\\dfrac{1}{2\\sqrt{x+2}}\\log\\left|\\dfrac{x+1}{x+2}\\right| + c$", "image": ""},
            {"id": "B", "text": "$\\dfrac{1}{\\sqrt{5}}\\log\\left|\\dfrac{x+1}{x+2}\\right| + c$", "image": ""},
            {"id": "C", "text": "$\\dfrac{1}{\\sqrt{5}}\\sinh^{-1}\\left(\\dfrac{4-x}{\\sqrt{5}}\\right) + c$", "image": ""},
            {"id": "D", "text": "$\\dfrac{1}{\\sqrt{5}}\\cosh^{-1}\\left(\\dfrac{4+x}{x-1}\\right) + c$", "image": ""}
        ],
        "correct": "B",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "maths-75",
        "section": "Maths",
        "text": "If $\\displaystyle\\int e^x(x^3 + x^2 - x + 4)dx = e^x f(x) + c$, then $f(1) =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$5$", "image": ""},
            {"id": "B", "text": "$4$", "image": ""},
            {"id": "C", "text": "$3$", "image": ""},
            {"id": "D", "text": "$6$", "image": ""}
        ],
        "correct": "A",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "maths-76",
        "section": "Maths",
        "text": "$\\displaystyle\\int_0^{3\\pi/2} \\dfrac{dx}{\\sec^2 x + (\\tan^{2n+1} x - 1)(\\sec^2 x - 1)} =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$\\dfrac{\\pi}{20}$", "image": ""},
            {"id": "B", "text": "$\\dfrac{\\pi}{10}$", "image": ""},
            {"id": "C", "text": "$\\dfrac{3\\pi}{20}$", "image": ""},
            {"id": "D", "text": "$\\dfrac{\\pi}{5}$", "image": ""}
        ],
        "correct": "A",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "maths-77",
        "section": "Maths",
        "text": "$\\displaystyle\\int_{-\\sqrt{15}}^{\\sqrt{15}} \\dfrac{\\cos 5x}{1 + e^x} dx =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$0$", "image": ""},
            {"id": "B", "text": "$1$", "image": ""},
            {"id": "C", "text": "$\\dfrac{1}{5}\\sin 5\\sqrt{15}$", "image": ""},
            {"id": "D", "text": "$-1$", "image": ""}
        ],
        "correct": "C",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "maths-78",
        "section": "Maths",
        "text": "The area of the region (in sq. units) enclosed by the curves $y = 8x^3 - 1$, $y = 0$, $x = -1$ and $x = 1$ is",
        "image": "",
        "options": [
            {"id": "A", "text": "$\\dfrac{15}{4}$", "image": ""},
            {"id": "B", "text": "$\\dfrac{18}{4}$", "image": ""},
            {"id": "C", "text": "$\\dfrac{7}{2}$", "image": ""},
            {"id": "D", "text": "$\\dfrac{11}{4}$", "image": ""}
        ],
        "correct": "A",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "maths-79",
        "section": "Maths",
        "text": "If the equation of the curve which passes through the point $(1,1)$ satisfies the differential equation $\\dfrac{dy}{dx} = \\dfrac{2y}{5x + 2y - 3}$, then the equation of that curve is",
        "image": "",
        "options": [
            {"id": "A", "text": "$x^2 + 5xy - y^2 + 3x - 3y - 5 = 0$", "image": ""},
            {"id": "B", "text": "$x^2 + 5xy - y^2 + 3x + 3y - 11 = 0$", "image": ""},
            {"id": "C", "text": "$x^2 - 5xy - y^2 - 3x - 3y + 11 = 0$", "image": ""},
            {"id": "D", "text": "$x^2 - 5xy - y^2 + 3x + 3y - 1 = 0$", "image": ""}
        ],
        "correct": "D",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "maths-80",
        "section": "Maths",
        "text": "The general solution of the differential equation $(6x^2 - 2xy - 18x + 3y)dx - (x^2 - 3x)dy = 0$ is",
        "image": "",
        "options": [
            {"id": "A", "text": "$2x^3 - x^2y - 9x^2 + 3xy + c = 0$", "image": ""},
            {"id": "B", "text": "$4x^3 - 2x^2y - 6x^2 + 6xy + c = 0$", "image": ""},
            {"id": "C", "text": "$2x^3 - 4xy - y^2 - x + 3y + c = 0$", "image": ""},
            {"id": "D", "text": "$3x^3 + 5xy - 2y^2 - 4x - 2y + c = 0$", "image": ""}
        ],
        "correct": "A",
        "needsReview": False,
        "issue": ""
    },
]

# PHYSICS Q81-Q120
physics_questions = [
    {
        "id": "physics-81",
        "section": "Physics",
        "text": "The range of gravitational forces is",
        "image": "",
        "options": [
            {"id": "A", "text": "$10^{-15}$ m", "image": ""},
            {"id": "B", "text": "$10^{-10}$ m", "image": ""},
            {"id": "C", "text": "infinity", "image": ""},
            {"id": "D", "text": "$10^{-2}$ m", "image": ""}
        ],
        "correct": "C",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "physics-82",
        "section": "Physics",
        "text": "In a simple pendulum experiment for the determination of acceleration due to gravity, the error in the measurement of the length of the pendulum is 1% and the error in the measurement of the time period is 2%. The error in the estimation of acceleration due to gravity is",
        "image": "",
        "options": [
            {"id": "A", "text": "$1\\%$", "image": ""},
            {"id": "B", "text": "$3\\%$", "image": ""},
            {"id": "C", "text": "$4\\%$", "image": ""},
            {"id": "D", "text": "$5\\%$", "image": ""}
        ],
        "correct": "D",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "physics-83",
        "section": "Physics",
        "text": "The position $x$ (in metre) of a particle moving along a straight line is given by $x = t^3 - 12t + 3$, where $t$ is time (in second). The acceleration of the particle when its velocity becomes $15\\,\\text{ms}^{-1}$ is",
        "image": "",
        "options": [
            {"id": "A", "text": "$15\\,\\text{ms}^{-2}$", "image": ""},
            {"id": "B", "text": "$18\\,\\text{ms}^{-2}$", "image": ""},
            {"id": "C", "text": "$12\\,\\text{ms}^{-2}$", "image": ""},
            {"id": "D", "text": "$6\\,\\text{ms}^{-2}$", "image": ""}
        ],
        "correct": "B",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "physics-84",
        "section": "Physics",
        "text": "The maximum horizontal range of a ball projected from the ground is 32 m. If the ball is thrown with the same speed horizontally from the top of a tower of height 25 m, the maximum horizontal distance covered by the ball is (Acceleration due to gravity $= 10\\,\\text{ms}^{-2}$)",
        "image": "",
        "options": [
            {"id": "A", "text": "$40$ m", "image": ""},
            {"id": "B", "text": "$57$ m", "image": ""},
            {"id": "C", "text": "$60$ m", "image": ""},
            {"id": "D", "text": "$75$ m", "image": ""}
        ],
        "correct": "A",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "physics-85",
        "section": "Physics",
        "text": "A block of mass 5 kg is kept on a smooth horizontal surface. A horizontal stream of water coming out of a pipe of area of cross-section $5\\,\\text{cm}^2$ hits the block with a velocity of $5\\,\\text{ms}^{-1}$ and rebounds back with the same velocity. The initial acceleration of the block is (Density of water is $1\\,\\text{g/cc}$)",
        "image": "",
        "options": [
            {"id": "A", "text": "$10\\,\\text{ms}^{-2}$", "image": ""},
            {"id": "B", "text": "$2.5\\,\\text{ms}^{-2}$", "image": ""},
            {"id": "C", "text": "$12.5\\,\\text{ms}^{-2}$", "image": ""},
            {"id": "D", "text": "$5\\,\\text{ms}^{-2}$", "image": ""}
        ],
        "correct": "D",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "physics-86",
        "section": "Physics",
        "text": "A constant force of $(8\\vec{i} - 2\\vec{j} + 6\\vec{k})$ N acting on a body of mass 2 kg displaces the body from $(2\\vec{i} + 3\\vec{j} - 4\\vec{k})$ m to $(4\\vec{i} - 3\\vec{j} + 6\\vec{k})$ m. The work done in the process is",
        "image": "",
        "options": [
            {"id": "A", "text": "$72$ J", "image": ""},
            {"id": "B", "text": "$88$ J", "image": ""},
            {"id": "C", "text": "$44$ J", "image": ""},
            {"id": "D", "text": "$36$ J", "image": ""}
        ],
        "correct": "B",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "physics-87",
        "section": "Physics",
        "text": "A ball 'A' of mass 1.2 kg moving with a velocity of $8.4\\,\\text{ms}^{-1}$ makes one dimensional elastic collision with a ball 'B' of mass 3.6 kg at rest. The percentage of kinetic energy transferred by ball 'A' to ball 'B' is",
        "image": "",
        "options": [
            {"id": "A", "text": "$25\\%$", "image": ""},
            {"id": "B", "text": "$50\\%$", "image": ""},
            {"id": "C", "text": "$75\\%$", "image": ""},
            {"id": "D", "text": "$60\\%$", "image": ""}
        ],
        "correct": "C",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "physics-88",
        "section": "Physics",
        "text": "A metre scale is balanced on a knife edge at its centre. When two coins, each of mass 9 g, are kept one above the other at the 10 cm mark, the scale is found to be balanced at 35 cm. The mass of the metre scale is",
        "image": "",
        "options": [
            {"id": "A", "text": "$15$ g", "image": ""},
            {"id": "B", "text": "$30$ g", "image": ""},
            {"id": "C", "text": "$45$ g", "image": ""},
            {"id": "D", "text": "$60$ g", "image": ""}
        ],
        "correct": "B",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "physics-89",
        "section": "Physics",
        "text": "A body of mass $m$ and radius $r$ rolling horizontally with a velocity $V$, rolls up an inclined plane to a vertical height $\\dfrac{3V^2}{4g}$. The body is",
        "image": "",
        "options": [
            {"id": "A", "text": "a sphere", "image": ""},
            {"id": "B", "text": "a circular disc", "image": ""},
            {"id": "C", "text": "a circular ring", "image": ""},
            {"id": "D", "text": "a solid cylinder", "image": ""}
        ],
        "correct": "C",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "physics-90",
        "section": "Physics",
        "text": "A massless spring of length $l$ and spring constant $k$ oscillates with a time period $T$ when loaded with a mass $m$. The spring is now cut into three equal parts and are connected in parallel. The frequency of oscillation of the combination when it is loaded with a mass $4m$ is",
        "image": "",
        "options": [
            {"id": "A", "text": "$\\dfrac{3}{T}$", "image": ""},
            {"id": "B", "text": "$\\dfrac{1}{T}$", "image": ""},
            {"id": "C", "text": "$\\dfrac{3}{2T}$", "image": ""},
            {"id": "D", "text": "$\\dfrac{9}{2T}$", "image": ""}
        ],
        "correct": "A",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "physics-91",
        "section": "Physics",
        "text": "An object of mass $m$ at a distance of $20R$ from the centre of a planet of mass $M$ and radius $R$ has an initial velocity $u$. The velocity with which the object hits the surface of the planet is ($G$ = Universal gravitational constant)",
        "image": "",
        "options": [
            {"id": "A", "text": "$\\sqrt{u^2 + \\dfrac{19GM}{10R}}$", "image": ""},
            {"id": "B", "text": "$\\sqrt{u^2 - \\dfrac{19GM}{10R}}$", "image": ""},
            {"id": "C", "text": "$\\sqrt{u^2 + \\dfrac{19GM}{10R}}$", "image": ""},
            {"id": "D", "text": "$u - \\sqrt{\\dfrac{19GM}{10R}}$", "image": ""}
        ],
        "correct": "A",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "physics-92",
        "section": "Physics",
        "text": "A simple pendulum is made of a metal wire of length $L$, area of cross-section $A$, material of Young's modulus $Y$ and a bob of mass $m$. This pendulum is hung in a bus moving with a uniform speed $V$ on a horizontal circular road of radius $R$. The elongation in the wire is",
        "image": "",
        "options": [
            {"id": "A", "text": "$\\dfrac{mL}{AY}\\sqrt{g^2 + \\dfrac{V^4}{R^2}}$", "image": ""},
            {"id": "B", "text": "$\\dfrac{mgL}{AY}$", "image": ""},
            {"id": "C", "text": "$\\dfrac{mLV^2}{RAY}$", "image": ""},
            {"id": "D", "text": "$\\dfrac{L}{AY}\\sqrt{g^2 + m^2V^4}$", "image": ""}
        ],
        "correct": "A",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "physics-93",
        "section": "Physics",
        "text": "If the excess pressures inside two soap bubbles are in the ratio $2:3$, then the ratio of the volumes of the soap bubbles is",
        "image": "",
        "options": [
            {"id": "A", "text": "$3:2$", "image": ""},
            {"id": "B", "text": "$9:4$", "image": ""},
            {"id": "C", "text": "$27:8$", "image": ""},
            {"id": "D", "text": "$81:16$", "image": ""}
        ],
        "correct": "C",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "physics-94",
        "section": "Physics",
        "text": "The velocities of air above and below the surfaces of a flying aeroplane wing are $50\\,\\text{ms}^{-1}$ and $40\\,\\text{ms}^{-1}$ respectively. If the area of the wing is $10\\,\\text{m}^2$ and the mass of the aeroplane is 500 kg, then as time passes by (density of air $= 1.3\\,\\text{kg m}^{-3}$)",
        "image": "",
        "options": [
            {"id": "A", "text": "the aeroplane will gain altitude", "image": ""},
            {"id": "B", "text": "the aeroplane will experience weightlessness", "image": ""},
            {"id": "C", "text": "the aeroplane will fly horizontally", "image": ""},
            {"id": "D", "text": "the aeroplane will lose altitude", "image": ""}
        ],
        "correct": "A",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "physics-95",
        "section": "Physics",
        "text": "A pendulum clock loses 10.8 seconds a day when the temperature is 38°C and gains 10.8 seconds a day when the temperature is 18°C. The coefficient of linear expansion of the metal of the pendulum clock is",
        "image": "",
        "options": [
            {"id": "A", "text": "$7 \\times 10^{-6}$ °C$^{-1}$", "image": ""},
            {"id": "B", "text": "$1.25 \\times 10^{-5}$ °C$^{-1}$", "image": ""},
            {"id": "C", "text": "$1.08 \\times 10^{-5}$ °C$^{-1}$", "image": ""},
            {"id": "D", "text": "$2 \\times 10^{-5}$ °C$^{-1}$", "image": ""}
        ],
        "correct": "C",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "physics-96",
        "section": "Physics",
        "text": "A liquid cools from a temperature of 368 K to 358 K in 22 minutes. In the same room, the same liquid takes 12.5 minutes to cool from 358 K to 353 K. The room temperature is",
        "image": "",
        "options": [
            {"id": "A", "text": "$8°C$", "image": ""},
            {"id": "B", "text": "$0°C$", "image": ""},
            {"id": "C", "text": "$25°C$", "image": ""},
            {"id": "D", "text": "$55°C$", "image": ""}
        ],
        "correct": "A",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "physics-97",
        "section": "Physics",
        "text": "For a gas in a thermodynamic process, the relation between internal energy ($U$), the pressure ($P$) and the volume ($V$) is $U = 3 + 1.5PV$. The ratio of the specific heat capacities of the gas at constant volume and constant pressure is",
        "image": "",
        "options": [
            {"id": "A", "text": "$\\dfrac{2}{5}$", "image": ""},
            {"id": "B", "text": "$\\dfrac{3}{5}$", "image": ""},
            {"id": "C", "text": "$\\dfrac{5}{7}$", "image": ""},
            {"id": "D", "text": "$\\dfrac{5}{3}$", "image": ""}
        ],
        "correct": "B",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "physics-98",
        "section": "Physics",
        "text": "At a pressure $P$ and temperature 127°C, a vessel contains 21 g of a gas. A small hole is made into the vessel so that the gas in it leaks out. At a pressure of $\\dfrac{2P}{3}$ and a temperature of $t°C$, the mass of the gas leaked out is 5 g. Then $t =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$27°C$", "image": ""},
            {"id": "B", "text": "$17°C$", "image": ""},
            {"id": "C", "text": "$350°C$", "image": ""},
            {"id": "D", "text": "$57°C$", "image": ""}
        ],
        "correct": "A",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "physics-99",
        "section": "Physics",
        "text": "The tension applied to a metal wire of one metre length produces an elastic strain of 1%. The density of the metal is $8000\\,\\text{kg m}^{-3}$ and Young's modulus of the metal is $2 \\times 10^{11}\\,\\text{N m}^{-2}$. The fundamental frequency of the transverse waves in the metal wire is",
        "image": "",
        "options": [
            {"id": "A", "text": "$500$ Hz", "image": ""},
            {"id": "B", "text": "$375$ Hz", "image": ""},
            {"id": "C", "text": "$250$ Hz", "image": ""},
            {"id": "D", "text": "$125$ Hz", "image": ""}
        ],
        "correct": "C",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "physics-100",
        "section": "Physics",
        "text": "Two closed pipes when sounded simultaneously in their fundamental modes produce 6 beats per second. If the length of the shorter pipe is 150 cm, then the length of the longer pipe is (Speed of sound in air $= 336\\,\\text{ms}^{-1}$)",
        "image": "",
        "options": [
            {"id": "A", "text": "$168$ cm", "image": ""},
            {"id": "B", "text": "$162$ cm", "image": ""},
            {"id": "C", "text": "$158$ cm", "image": ""},
            {"id": "D", "text": "$175$ cm", "image": ""}
        ],
        "correct": "A",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "physics-101",
        "section": "Physics",
        "text": "An object placed at a distance of 24 cm from a concave mirror forms an image at a distance of 12 cm from the mirror. If the object is moved with a speed of $12\\,\\text{ms}^{-1}$, then the speed of the image is",
        "image": "",
        "options": [
            {"id": "A", "text": "$24\\,\\text{ms}^{-1}$", "image": ""},
            {"id": "B", "text": "$3\\,\\text{ms}^{-1}$", "image": ""},
            {"id": "C", "text": "$6\\,\\text{ms}^{-1}$", "image": ""},
            {"id": "D", "text": "$12\\,\\text{ms}^{-1}$", "image": ""}
        ],
        "correct": "B",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "physics-102",
        "section": "Physics",
        "text": "When the object and the screen are 90 cm apart, it is observed that a clear image is formed on the screen when a convex lens is placed at two positions separated by 30 cm between the object and the screen. The focal length of the lens is",
        "image": "",
        "options": [
            {"id": "A", "text": "$21.4$ cm", "image": ""},
            {"id": "B", "text": "$20$ cm", "image": ""},
            {"id": "C", "text": "$30$ cm", "image": ""},
            {"id": "D", "text": "$30.8$ cm", "image": ""}
        ],
        "correct": "B",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "physics-103",
        "section": "Physics",
        "text": "When a monochromatic light is incident on a surface separating two media, both the reflected and refracted lights have the same",
        "image": "",
        "options": [
            {"id": "A", "text": "frequency", "image": ""},
            {"id": "B", "text": "wavelength", "image": ""},
            {"id": "C", "text": "velocity", "image": ""},
            {"id": "D", "text": "amplitude", "image": ""}
        ],
        "correct": "A",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "physics-104",
        "section": "Physics",
        "text": "The electric flux due to an electric field $\\vec{E} = (8\\vec{i} + 13\\vec{j})\\,\\text{NC}^{-1}$ through an area $3\\,\\text{m}^2$ lying in the $XZ$ plane is",
        "image": "",
        "options": [
            {"id": "A", "text": "$39$ Wb", "image": ""},
            {"id": "B", "text": "$24$ Wb", "image": ""},
            {"id": "C", "text": "$63$ Wb", "image": ""},
            {"id": "D", "text": "$15$ Wb", "image": ""}
        ],
        "correct": "A",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "physics-105",
        "section": "Physics",
        "text": "A capacitor of capacitance $C$ is charged to a potential $V$ and disconnected from the battery. Now if the space between the plates is completely filled with a substance of dielectric constant $K$, the final charge and the final potential on the capacitor are respectively",
        "image": "",
        "options": [
            {"id": "A", "text": "$KCV$ and $\\dfrac{V}{K}$", "image": ""},
            {"id": "B", "text": "$CV$ and $\\dfrac{V}{K}$", "image": ""},
            {"id": "C", "text": "$CV$ and $KV$", "image": ""},
            {"id": "D", "text": "$KCV$ and $KV$", "image": ""}
        ],
        "correct": "B",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "physics-106",
        "section": "Physics",
        "text": "A voltmeter of resistance 400 $\\Omega$ is used to measure the emf of a cell with an internal resistance of 4 $\\Omega$. The error in the measurement of emf of the cell is",
        "image": "",
        "options": [
            {"id": "A", "text": "$1.01\\%$", "image": ""},
            {"id": "B", "text": "$2.01\\%$", "image": ""},
            {"id": "C", "text": "$1.99\\%$", "image": ""},
            {"id": "D", "text": "$0.99\\%$", "image": ""}
        ],
        "correct": "D",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "physics-107",
        "section": "Physics",
        "text": "When two wires are connected in the two gaps of a meter bridge, the balancing length is 50 cm. When the wire in the right gap is stretched to double its length and again connected in the same gap, then the new balancing length from the left end of the bridge wire is",
        "image": "",
        "options": [
            {"id": "A", "text": "$80$ cm", "image": ""},
            {"id": "B", "text": "$20$ cm", "image": ""},
            {"id": "C", "text": "$33.3$ cm", "image": ""},
            {"id": "D", "text": "$66.6$ cm", "image": ""}
        ],
        "correct": "B",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "physics-108",
        "section": "Physics",
        "text": "A magnetic field is applied in $y$-direction on an $\\alpha$-particle travelling along $x$-direction. The motion of the $\\alpha$-particle will be",
        "image": "",
        "options": [
            {"id": "A", "text": "along $x$-axis", "image": ""},
            {"id": "B", "text": "a circle in $xz$ plane", "image": ""},
            {"id": "C", "text": "a circle in $yz$ plane", "image": ""},
            {"id": "D", "text": "a circle in $xy$ plane", "image": ""}
        ],
        "correct": "B",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "physics-109",
        "section": "Physics",
        "text": "A straight wire carrying a current of $2\\sqrt{2}$ A is making an angle of 45° with the direction of uniform magnetic field of 3 T. The force per unit length on the wire due to the magnetic field is",
        "image": "",
        "options": [
            {"id": "A", "text": "$3\\sqrt{2}\\,\\text{Nm}^{-1}$", "image": ""},
            {"id": "B", "text": "$6\\sqrt{2}\\,\\text{Nm}^{-1}$", "image": ""},
            {"id": "C", "text": "$6\\,\\text{Nm}^{-1}$", "image": ""},
            {"id": "D", "text": "$3\\,\\text{Nm}^{-1}$", "image": ""}
        ],
        "correct": "C",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "physics-110",
        "section": "Physics",
        "text": "The magnetizing field which produces a magnetic flux of $22 \\times 10^{-5}$ Wb in a metal bar of area of cross-section $2 \\times 10^{-4}$ m$^2$ is (susceptibility of the metal $= 699$)",
        "image": "",
        "options": [
            {"id": "A", "text": "$2500\\,\\text{Am}^{-1}$", "image": ""},
            {"id": "B", "text": "$1250\\,\\text{Am}^{-1}$", "image": ""},
            {"id": "C", "text": "$3750\\,\\text{Am}^{-1}$", "image": ""},
            {"id": "D", "text": "$5000\\,\\text{Am}^{-1}$", "image": ""}
        ],
        "correct": "B",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "physics-111",
        "section": "Physics",
        "text": "The energy stored in a coil of inductance 80 mH carrying a current of 2.5 A is",
        "image": "",
        "options": [
            {"id": "A", "text": "$1.25$ J", "image": ""},
            {"id": "B", "text": "$0.75$ J", "image": ""},
            {"id": "C", "text": "$0.25$ J", "image": ""},
            {"id": "D", "text": "$0.50$ J", "image": ""}
        ],
        "correct": "C",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "physics-112",
        "section": "Physics",
        "text": "A capacitor and a resistor are connected in series to an ac source. If the ratio of the capacitive reactance of the capacitor and the resistance of the resistor is 4:3, then the power factor of the circuit is",
        "image": "",
        "options": [
            {"id": "A", "text": "$0.3$", "image": ""},
            {"id": "B", "text": "$0.8$", "image": ""},
            {"id": "C", "text": "$0.6$", "image": ""},
            {"id": "D", "text": "$0.4$", "image": ""}
        ],
        "correct": "C",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "physics-113",
        "section": "Physics",
        "text": "For the displacement current through the plates of a parallel plate capacitor of capacitance 30 $\\mu$F to be 150 $\\mu$A, the potential difference across the plates of the capacitor has to vary at the rate of",
        "image": "",
        "options": [
            {"id": "A", "text": "$10\\,\\text{Vs}^{-1}$", "image": ""},
            {"id": "B", "text": "$5\\,\\text{Vs}^{-1}$", "image": ""},
            {"id": "C", "text": "$15\\,\\text{Vs}^{-1}$", "image": ""},
            {"id": "D", "text": "$20\\,\\text{Vs}^{-1}$", "image": ""}
        ],
        "correct": "B",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "physics-114",
        "section": "Physics",
        "text": "The work functions of two photosensitive metal surfaces A and B are in the ratio 2:3. If $x$ and $y$ are the slopes of the graphs drawn between the stopping potential and frequency of incident light for the surfaces A and B respectively, then $x:y =$",
        "image": "",
        "options": [
            {"id": "A", "text": "$1:1$", "image": ""},
            {"id": "B", "text": "$2:3$", "image": ""},
            {"id": "C", "text": "$4:9$", "image": ""},
            {"id": "D", "text": "$9:4$", "image": ""}
        ],
        "correct": "A",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "physics-115",
        "section": "Physics",
        "text": "In hydrogen atom, the frequency of the photon emitted when an electron jumps from second orbit to first orbit is $f$. The frequency of the photon emitted when an electron jumps from third excited state to first excited state is",
        "image": "",
        "options": [
            {"id": "A", "text": "$\\dfrac{20}{27}f$", "image": ""},
            {"id": "B", "text": "$\\dfrac{16}{27}f$", "image": ""},
            {"id": "C", "text": "$\\dfrac{32}{27}f$", "image": ""},
            {"id": "D", "text": "$\\dfrac{27}{20}f$", "image": ""}
        ],
        "correct": "A",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "physics-116",
        "section": "Physics",
        "text": "If the ratio of the radii of nuclei $_{Z}X^A$ and $_{13}\\text{Al}^{27}$ is 5:3, then the number of neutrons in the nucleus $X$ is",
        "image": "",
        "options": [
            {"id": "A", "text": "$125$", "image": ""},
            {"id": "B", "text": "$75$", "image": ""},
            {"id": "C", "text": "$100$", "image": ""},
            {"id": "D", "text": "$50$", "image": ""}
        ],
        "correct": "A",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "physics-117",
        "section": "Physics",
        "text": "Half-life periods of two nuclei A and B are $T$ and $2T$ respectively. Initially A and B have same number of nuclei. After a time of $4T$, the ratio of the remaining number of nuclei of A and B is",
        "image": "",
        "options": [
            {"id": "A", "text": "$1:16$", "image": ""},
            {"id": "B", "text": "$1:4$", "image": ""},
            {"id": "C", "text": "$1:8$", "image": ""},
            {"id": "D", "text": "$1:2$", "image": ""}
        ],
        "correct": "B",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "physics-118",
        "section": "Physics",
        "text": "Match the devices given in List-I with their uses given in List-II: (a) Transistor, (b) Diode, (c) Zener diode, (d) Capacitor; (e) Filter circuit, (f) Voltage regulator, (g) Rectifier, (h) Amplifier. The correct answer is",
        "image": "",
        "options": [
            {"id": "A", "text": "$a-h, b-g, c-e, d-f$", "image": ""},
            {"id": "B", "text": "$a-h, b-f, c-e, d-g$", "image": ""},
            {"id": "C", "text": "$a-h, b-g, c-f, d-e$", "image": ""},
            {"id": "D", "text": "$a-e, b-h, c-g, d-f$", "image": ""}
        ],
        "correct": "C",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "physics-119",
        "section": "Physics",
        "text": "To get output 1 for the following logic circuit (with inputs A, B, C), the correct choice of the inputs is",
        "image": "",
        "options": [
            {"id": "A", "text": "$A=1, B=1, C=0$", "image": ""},
            {"id": "B", "text": "$A=0, B=1, C=0$", "image": ""},
            {"id": "C", "text": "$A=1, B=0, C=1$", "image": ""},
            {"id": "D", "text": "$A=0, B=0, C=1$", "image": ""}
        ],
        "correct": "C",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "physics-120",
        "section": "Physics",
        "text": "The maximum distance between the transmitting and receiving antennas is $D$. If the heights of both transmitting and receiving antennas are doubled, then the maximum distance between the two antennas is",
        "image": "",
        "options": [
            {"id": "A", "text": "$2D$", "image": ""},
            {"id": "B", "text": "$D\\sqrt{2}$", "image": ""},
            {"id": "C", "text": "$4D$", "image": ""},
            {"id": "D", "text": "$\\dfrac{D}{\\sqrt{2}}$", "image": ""}
        ],
        "correct": "B",
        "needsReview": False,
        "issue": ""
    },
]

# CHEMISTRY Q121-Q160
chemistry_questions = [
    {
        "id": "chemistry-121",
        "section": "Chemistry",
        "text": "If $n$, $l$ represent the principal and azimuthal quantum numbers respectively, the formula used to know the number of radial nodes possible for a given orbital is",
        "image": "",
        "options": [
            {"id": "A", "text": "$(n - l)$", "image": ""},
            {"id": "B", "text": "$(n - l + 1)$", "image": ""},
            {"id": "C", "text": "$(n - l - 1)$", "image": ""},
            {"id": "D", "text": "$(n - 2)$", "image": ""}
        ],
        "correct": "C",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "chemistry-122",
        "section": "Chemistry",
        "text": "If the radius of first orbit of hydrogen like ion is $1.763 \\times 10^{-2}$ nm, the energy associated with that orbit (in J) is",
        "image": "",
        "options": [
            {"id": "A", "text": "$+1.962 \\times 10^{-17}$", "image": ""},
            {"id": "B", "text": "$-1.962 \\times 10^{-17}$", "image": ""},
            {"id": "C", "text": "$-0.872 \\times 10^{-17}$", "image": ""},
            {"id": "D", "text": "$+0.872 \\times 10^{-17}$", "image": ""}
        ],
        "correct": "B",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "chemistry-123",
        "section": "Chemistry",
        "text": "If first ionization enthalpy ($\\Delta_i H$) values of Na, Mg and Si are respectively 496, 737 and 786 kJ mol$^{-1}$, the first ionization enthalpy value of Al (in kJ mol$^{-1}$) will be",
        "image": "",
        "options": [
            {"id": "A", "text": "$575$", "image": ""},
            {"id": "B", "text": "$760$", "image": ""},
            {"id": "C", "text": "$400$", "image": ""},
            {"id": "D", "text": "$790$", "image": ""}
        ],
        "correct": "A",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "chemistry-124",
        "section": "Chemistry",
        "text": "Among the oxides $\\text{SiO}_2$, $\\text{SO}_3$, $\\text{Al}_2\\text{O}_3$ and $\\text{P}_4\\text{O}_{10}$, the correct order of acidic strength is",
        "image": "",
        "options": [
            {"id": "A", "text": "$\\text{SiO}_2 < \\text{SO}_3 < \\text{Al}_2\\text{O}_3 < \\text{P}_4\\text{O}_{10}$", "image": ""},
            {"id": "B", "text": "$\\text{SO}_3 < \\text{P}_4\\text{O}_{10} < \\text{Al}_2\\text{O}_3 < \\text{SiO}_2$", "image": ""},
            {"id": "C", "text": "$\\text{Al}_2\\text{O}_3 < \\text{SiO}_2 < \\text{P}_4\\text{O}_{10} < \\text{SO}_3$", "image": ""},
            {"id": "D", "text": "$\\text{Al}_2\\text{O}_3 < \\text{P}_4\\text{O}_{10} < \\text{SiO}_2 < \\text{SO}_3$", "image": ""}
        ],
        "correct": "C",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "chemistry-125",
        "section": "Chemistry",
        "text": "According to molecular orbital theory, which of the following statements is not correct?",
        "image": "",
        "options": [
            {"id": "A", "text": "$\\text{C}_2$ molecule is diamagnetic in nature", "image": ""},
            {"id": "B", "text": "Bond order of $\\text{C}_2$ molecule is 2", "image": ""},
            {"id": "C", "text": "$\\text{C}_2^-$ ion is paramagnetic in nature", "image": ""},
            {"id": "D", "text": "$\\text{C}_2$ consists of $1\\sigma$ and $1\\pi$ bond", "image": ""}
        ],
        "correct": "D",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "chemistry-126",
        "section": "Chemistry",
        "text": "The melting point of $o$-hydroxybenzaldehyde (A) is lower than that of $p$-hydroxybenzaldehyde (B). This is because",
        "image": "",
        "options": [
            {"id": "A", "text": "(A) has intermolecular H-bonding and (B) has intramolecular H-bonding", "image": ""},
            {"id": "B", "text": "Both (A) and (B) have intermolecular H-bonding", "image": ""},
            {"id": "C", "text": "Both (A) and (B) have intramolecular H-bonding", "image": ""},
            {"id": "D", "text": "(A) has intramolecular H-bonding and (B) has intermolecular H-bonding", "image": ""}
        ],
        "correct": "D",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "chemistry-127",
        "section": "Chemistry",
        "text": "At what temperature will the RMS velocity of sulphur dioxide molecules at 400 K be the same as the most probable velocity of oxygen molecules?",
        "image": "",
        "options": [
            {"id": "A", "text": "$100$ K", "image": ""},
            {"id": "B", "text": "$200$ K", "image": ""},
            {"id": "C", "text": "$400$ K", "image": ""},
            {"id": "D", "text": "$300$ K", "image": ""}
        ],
        "correct": "D",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "chemistry-128",
        "section": "Chemistry",
        "text": "0.43 g of a metal of valence 2 was dissolved in 50 mL of 0.5M $\\text{H}_2\\text{SO}_4$ solution. The unreacted acid required 14.2 mL of 1M NaOH solution for neutralization. The atomic weight of the metal is",
        "image": "",
        "options": [
            {"id": "A", "text": "$56$ u", "image": ""},
            {"id": "B", "text": "$40$ u", "image": ""},
            {"id": "C", "text": "$27$ u", "image": ""},
            {"id": "D", "text": "$24$ u", "image": ""}
        ],
        "correct": "C",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "chemistry-129",
        "section": "Chemistry",
        "text": "At 300 K, 3.0 moles of an ideal gas at 3.0 atm pressure is compressed isothermally to one half of its volume by an external pressure of 6.0 atm. The work done (in kJ) is (Given, $R = 0.082$ L atm K$^{-1}$mol$^{-1}$) (1 L atm = 101.3 J)",
        "image": "",
        "options": [
            {"id": "A", "text": "$7.476$", "image": ""},
            {"id": "B", "text": "$11.214$", "image": ""},
            {"id": "C", "text": "$3.738$", "image": ""},
            {"id": "D", "text": "$14.952$", "image": ""}
        ],
        "correct": "B",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "chemistry-130",
        "section": "Chemistry",
        "text": "At $T$(K) the equilibrium constants for the two reactions are: $2A(g) \\rightleftharpoons B(g) + C(g)$; $K_1 = 16$ and $2B(g) + C(g) \\rightleftharpoons 2D(g)$; $K_2 = 25$. What is the value of equilibrium constant $K$ for $A(g) + B(g) \\rightleftharpoons D(g)$ at $T$(K)?",
        "image": "",
        "options": [
            {"id": "A", "text": "$100$", "image": ""},
            {"id": "B", "text": "$50$", "image": ""},
            {"id": "C", "text": "$20$", "image": ""},
            {"id": "D", "text": "$75$", "image": ""}
        ],
        "correct": "C",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "chemistry-131",
        "section": "Chemistry",
        "text": "Identify the pair of hydrides which have polymeric structure",
        "image": "",
        "options": [
            {"id": "A", "text": "LiH, NaH", "image": ""},
            {"id": "B", "text": "BeH$_2$, MgH$_2$", "image": ""},
            {"id": "C", "text": "NaH, KH", "image": ""},
            {"id": "D", "text": "BeH$_2$, AlH$_3$", "image": ""}
        ],
        "correct": "B",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "chemistry-132",
        "section": "Chemistry",
        "text": "Match the following: List-I (Alloy): A. Li-Pb, B. Be-Cu, C. Mg-Al, D. Na-Pb; List-II (Use): I. To make bearings for motor engines, II. In aircraft construction, III. To make tetraethyl lead, IV. To make high strength springs. The correct answer is",
        "image": "",
        "options": [
            {"id": "A", "text": "A-II; B-IV; C-III; D-I", "image": ""},
            {"id": "B", "text": "A-III; B-I; C-II; D-IV", "image": ""},
            {"id": "C", "text": "A-IV; B-I; C-II; D-III", "image": ""},
            {"id": "D", "text": "A-I; B-IV; C-III; D-II", "image": ""}
        ],
        "correct": "C",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "chemistry-133",
        "section": "Chemistry",
        "text": "The hydroxide of which of the following metals reacts with both acid and alkali?",
        "image": "",
        "options": [
            {"id": "A", "text": "Mg", "image": ""},
            {"id": "B", "text": "Na", "image": ""},
            {"id": "C", "text": "Be", "image": ""},
            {"id": "D", "text": "Ca", "image": ""}
        ],
        "correct": "C",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "chemistry-134",
        "section": "Chemistry",
        "text": "The correct formula of borax is $\\text{Na}_2[\\text{B}_4\\text{O}_5(\\text{OH})_4] \\cdot x\\text{H}_2\\text{O}$. The sum of $x$ and $y$ (number of boron atoms in the formula) is",
        "image": "",
        "options": [
            {"id": "A", "text": "$14$", "image": ""},
            {"id": "B", "text": "$9$", "image": ""},
            {"id": "C", "text": "$12$", "image": ""},
            {"id": "D", "text": "$11$", "image": ""}
        ],
        "correct": "B",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "chemistry-135",
        "section": "Chemistry",
        "text": "Formic acid on heating with concentrated $\\text{H}_2\\text{SO}_4$ at 373 K gives $X$, a colourless substance and $Y$, a good reducing agent. The number of $\\sigma$ and $\\pi$ bonds in $X$, $Y$ are respectively",
        "image": "",
        "options": [
            {"id": "A", "text": "$X = 2, 0$; $Y = 1, 2$", "image": ""},
            {"id": "B", "text": "$X = 1, 2$; $Y = 2, 0$", "image": ""},
            {"id": "C", "text": "$X = 2, 1$; $Y = 0, 2$", "image": ""},
            {"id": "D", "text": "$X = 0, 2$; $Y = 1, 2$", "image": ""}
        ],
        "correct": "A",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "chemistry-136",
        "section": "Chemistry",
        "text": "Eutrophication can lead to",
        "image": "",
        "options": [
            {"id": "A", "text": "Decrease in nutrients", "image": ""},
            {"id": "B", "text": "Increase in dissolved salts", "image": ""},
            {"id": "C", "text": "Decrease in dissolved oxygen", "image": ""},
            {"id": "D", "text": "Decrease in water pollution", "image": ""}
        ],
        "correct": "C",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "chemistry-137",
        "section": "Chemistry",
        "text": "In which of the following options, the IUPAC name is not correctly matched with the structure of the compound?",
        "image": "",
        "options": [
            {"id": "A", "text": "3,4-Dimethylphenol (structure shown)", "image": ""},
            {"id": "B", "text": "4-Chloro-1,3-dinitrobenzene (structure shown)", "image": ""},
            {"id": "C", "text": "2-Chloro-1-methyl-4-nitrobenzene (structure shown)", "image": ""},
            {"id": "D", "text": "4-Ethyl-2-methylaniline (structure shown)", "image": ""}
        ],
        "correct": "B",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "chemistry-138",
        "section": "Chemistry",
        "text": "Consider the following carbocations (I, II, III, IV, V). Arrange the above carbocations in the order of decreasing stability.",
        "image": "",
        "options": [
            {"id": "A", "text": "III > II > IV > I > V", "image": ""},
            {"id": "B", "text": "V > II > IV > III > I", "image": ""},
            {"id": "C", "text": "I > III > V > II > IV", "image": ""},
            {"id": "D", "text": "II > IV > III > I > V", "image": ""}
        ],
        "correct": "A",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "chemistry-139",
        "section": "Chemistry",
        "text": "Consider the following reaction sequence: 2-Methylpropane $\\xrightarrow{\\text{RO}^\\bullet, X_2, h\\nu}$ A + B. What are A and B?",
        "image": "",
        "options": [
            {"id": "A", "text": "$\\text{CH}_3\\text{CH=O}$, $\\text{CH}_3\\text{CH=O}$", "image": ""},
            {"id": "B", "text": "$(\\text{CH}_3)_2\\text{C=O}$, $\\text{CH}_2\\text{=O}$", "image": ""},
            {"id": "C", "text": "$(\\text{CH}_3)_2\\text{C=O}$, $\\text{CH}_3\\text{CH=O}$", "image": ""},
            {"id": "D", "text": "$\\text{CH}_3\\text{CH=O}$, $\\text{CH}_2\\text{=O}$", "image": ""}
        ],
        "correct": "B",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "chemistry-140",
        "section": "Chemistry",
        "text": "Identify the end product (Z) in the sequence: $\\text{C}_6\\text{H}_5\\text{Br} \\xrightarrow{(i)\\,\\text{aq. KOH}\\,(ii)\\,\\text{NaNH}_2} X \\xrightarrow{\\text{Red hot Fe tube, 873 K}} Y \\xrightarrow{\\text{Anhy. AlCl}_3, \\Delta} Z$",
        "image": "",
        "options": [
            {"id": "A", "text": "$\\text{C}_6\\text{H}_5\\text{Cl}$ (chlorobenzene)", "image": ""},
            {"id": "B", "text": "$\\text{C}_6\\text{H}_5\\text{COCH}_3$ (acetophenone)", "image": ""},
            {"id": "C", "text": "$\\text{C}_6\\text{H}_5\\text{CH}_2\\text{CH}_3$ (ethylbenzene)", "image": ""},
            {"id": "D", "text": "$\\text{C}_6\\text{H}_5\\text{NH}_2$ (aniline)", "image": ""}
        ],
        "correct": "B",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "chemistry-141",
        "section": "Chemistry",
        "text": "In bcc lattice containing X and Y type of atoms, X type of atoms are present at the corners and Y type of atoms are present at the centres. In its unit cell, if three atoms are missing in the corners, the formula of the compound is",
        "image": "",
        "options": [
            {"id": "A", "text": "$X_5Y_8$", "image": ""},
            {"id": "B", "text": "$X_3Y_8$", "image": ""},
            {"id": "C", "text": "$X_5Y_3$", "image": ""},
            {"id": "D", "text": "$XY_8$", "image": ""}
        ],
        "correct": "A",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "chemistry-142",
        "section": "Chemistry",
        "text": "At 300 K, the vapour pressure of toluene and benzene are 3.63 kPa and 9.7 kPa respectively. What is the composition of vapour in equilibrium with the solution containing 0.4 mole fraction of toluene? (Assume the solution is ideal)",
        "image": "",
        "options": [
            {"id": "A", "text": "$0.40$", "image": ""},
            {"id": "B", "text": "$0.20$", "image": ""},
            {"id": "C", "text": "$0.25$", "image": ""},
            {"id": "D", "text": "$0.30$", "image": ""}
        ],
        "correct": "B",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "chemistry-143",
        "section": "Chemistry",
        "text": "0.592 g of copper is deposited in 60 minutes by passing 0.5 amperes current through a solution of copper (II) sulphate. The electrochemical equivalent of copper (II) (in g C$^{-1}$) is ($F = 96500$ C mol$^{-1}$)",
        "image": "",
        "options": [
            {"id": "A", "text": "$3.3 \\times 10^{-4}$", "image": ""},
            {"id": "B", "text": "$3.3 \\times 10^{-3}$", "image": ""},
            {"id": "C", "text": "$6.6 \\times 10^{-3}$", "image": ""},
            {"id": "D", "text": "$6.6 \\times 10^{-4}$", "image": ""}
        ],
        "correct": "A",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "chemistry-144",
        "section": "Chemistry",
        "text": "For the gaseous reaction $\\text{N}_2\\text{O}_5 \\rightarrow 2\\text{NO}_2 + \\dfrac{1}{2}\\text{O}_2$, the rate can be expressed as: $-\\dfrac{d[\\text{N}_2\\text{O}_5]}{dt} = K_1[\\text{N}_2\\text{O}_5]$, $\\dfrac{d[\\text{NO}_2]}{dt} = K_2[\\text{N}_2\\text{O}_5]$, $\\dfrac{d[\\text{O}_2]}{dt} = K_3[\\text{N}_2\\text{O}_5]$. The correct relation between $K_1$, $K_2$ and $K_3$ is",
        "image": "",
        "options": [
            {"id": "A", "text": "$K_1 = 2K_2 = 4K_3$", "image": ""},
            {"id": "B", "text": "$2K_1 = K_2 = 4K_3$", "image": ""},
            {"id": "C", "text": "$2K_1 = 3K_2 = 4K_3$", "image": ""},
            {"id": "D", "text": "$4K_1 = 2K_2 = K_3$", "image": ""}
        ],
        "correct": "B",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "chemistry-145",
        "section": "Chemistry",
        "text": "Match the following: List-I (Industrial process): A. Ostwald's process, B. Haber's process, C. Deacon's process, D. Cracking of hydrocarbons; List-II (Catalyst used): I. $\\text{CuCl}_2$, II. Zeolites, III. Pt gauge, IV. Fe. The correct answer is",
        "image": "",
        "options": [
            {"id": "A", "text": "A-II, B-I, C-IV, D-III", "image": ""},
            {"id": "B", "text": "A-III, B-IV, C-I, D-II", "image": ""},
            {"id": "C", "text": "A-I, B-IV, C-III, D-II", "image": ""},
            {"id": "D", "text": "A-III, B-II, C-I, D-IV", "image": ""}
        ],
        "correct": "B",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "chemistry-146",
        "section": "Chemistry",
        "text": "Copper matte is a mixture of",
        "image": "",
        "options": [
            {"id": "A", "text": "Oxides of Cu and Fe", "image": ""},
            {"id": "B", "text": "Carbonates of Cu and Fe", "image": ""},
            {"id": "C", "text": "Sulphides of Cu and Fe", "image": ""},
            {"id": "D", "text": "Silicates of Cu and Fe", "image": ""}
        ],
        "correct": "C",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "chemistry-147",
        "section": "Chemistry",
        "text": "$\\text{C} + \\text{Conc. H}_2\\text{SO}_4 \\xrightarrow{\\Delta} X + Y + \\text{H}_2\\text{O}$. X and Y in the above reaction are",
        "image": "",
        "options": [
            {"id": "A", "text": "$\\text{CO}$, $\\text{SO}_3$", "image": ""},
            {"id": "B", "text": "$\\text{CO}_2$, $\\text{SO}_2$", "image": ""},
            {"id": "C", "text": "$\\text{CO}$, $\\text{SO}_2$", "image": ""},
            {"id": "D", "text": "$\\text{C}_3\\text{O}_2$, $\\text{SO}_2$", "image": ""}
        ],
        "correct": "B",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "chemistry-148",
        "section": "Chemistry",
        "text": "Which among the following oxoacids of phosphorous will have P-O-P bonds? I. $\\text{H}_2\\text{P}_2\\text{O}_5$, II. $\\text{H}_4\\text{P}_2\\text{O}_6$, III. $\\text{H}_5\\text{P}_2\\text{O}_7$, IV. $(\\text{HPO}_3)_3$. Note: Full marks awarded to all candidates due to discrepancy.",
        "image": "",
        "options": [
            {"id": "A", "text": "III & IV", "image": ""},
            {"id": "B", "text": "I & II", "image": ""},
            {"id": "C", "text": "I & III", "image": ""},
            {"id": "D", "text": "I & IV", "image": ""}
        ],
        "correct": "",
        "needsReview": True,
        "issue": "Full marks awarded to all; discrepancy noted in question/answer"
    },
    {
        "id": "chemistry-149",
        "section": "Chemistry",
        "text": "The bond angles H-O-N and O-N-O in the planar structure of nitric acid molecule are respectively",
        "image": "",
        "options": [
            {"id": "A", "text": "$130°$, $102°$", "image": ""},
            {"id": "B", "text": "$102°$, $130°$", "image": ""},
            {"id": "C", "text": "$134°$, $100°$", "image": ""},
            {"id": "D", "text": "$100°$, $134°$", "image": ""}
        ],
        "correct": "B",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "chemistry-150",
        "section": "Chemistry",
        "text": "Observe the following f-block elements: Eu (Z=63); Pu (Z=94); Cf (Z=98); Sm (Z=62); Gd (Z=64); Cm (Z=96). How many of the above have half-filled f-orbitals in their ground state?",
        "image": "",
        "options": [
            {"id": "A", "text": "$3$", "image": ""},
            {"id": "B", "text": "$4$", "image": ""},
            {"id": "C", "text": "$2$", "image": ""},
            {"id": "D", "text": "$5$", "image": ""}
        ],
        "correct": "A",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "chemistry-151",
        "section": "Chemistry",
        "text": "Which one of the following complex ions has geometrical isomers?",
        "image": "",
        "options": [
            {"id": "A", "text": "$[\\text{Co(Cl)}_2\\text{(en)}_2]^+$", "image": ""},
            {"id": "B", "text": "$[\\text{Cr(NH}_3)_4\\text{(en)}]^{3+}$", "image": ""},
            {"id": "C", "text": "$[\\text{Co(en)}_3]^{3+}$", "image": ""},
            {"id": "D", "text": "$[\\text{Ni(NH}_3)_5\\text{Br}]^+$", "image": ""}
        ],
        "correct": "A",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "chemistry-152",
        "section": "Chemistry",
        "text": "Which one of the following is not an example of condensation polymer?",
        "image": "",
        "options": [
            {"id": "A", "text": "Terylene", "image": ""},
            {"id": "B", "text": "Nylon 6,6", "image": ""},
            {"id": "C", "text": "Bakelite", "image": ""},
            {"id": "D", "text": "Polystyrene", "image": ""}
        ],
        "correct": "D",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "chemistry-153",
        "section": "Chemistry",
        "text": "What is the IUPAC name of the product Y in the given reaction sequence? $\\text{CHO}-(\\text{CHOH})_4-\\text{CH}_2\\text{OH} \\xrightarrow{\\text{HNO}_3} X \\xrightarrow{H_2, \\text{Raney Ni}} Y$",
        "image": "",
        "options": [
            {"id": "A", "text": "2,3,4,5,6,7-hexahydroxyheptanoic acid", "image": ""},
            {"id": "B", "text": "2,3,4,5,6-pentahydroxyhexanoic acid", "image": ""},
            {"id": "C", "text": "3,4,5-trihydroxyheptanoic acid", "image": ""},
            {"id": "D", "text": "3,4,5-trihydroxyhexanoic acid", "image": ""}
        ],
        "correct": "A",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "chemistry-154",
        "section": "Chemistry",
        "text": "What is the value of $n$ in $Z$ of the following sequence? Lauryl alcohol $\\xrightarrow{\\text{H}_2\\text{SO}_4}$ Lauryl hydrogen sulphate $\\xrightarrow{\\text{NaOH}}$ $\\text{CH}_3-(\\text{CH}_2)_n-\\text{CH}_2\\text{OSO}_3\\text{Na}$ (sodium lauryl sulphate)",
        "image": "",
        "options": [
            {"id": "A", "text": "$10$", "image": ""},
            {"id": "B", "text": "$12$", "image": ""},
            {"id": "C", "text": "$16$", "image": ""},
            {"id": "D", "text": "$14$", "image": ""}
        ],
        "correct": "A",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "chemistry-155",
        "section": "Chemistry",
        "text": "The organic halide, which does not undergo hydrolysis by S$_N$1 mechanism is",
        "image": "",
        "options": [
            {"id": "A", "text": "$\\text{C}_6\\text{H}_5\\text{CH}_2\\text{Cl}$", "image": ""},
            {"id": "B", "text": "$\\text{CH}_2\\text{=CH-CH}_2\\text{Cl}$", "image": ""},
            {"id": "C", "text": "$(\\text{CH}_3)_3\\text{C-Cl}$", "image": ""},
            {"id": "D", "text": "$\\text{CH}_3\\text{-CH=CH-Cl}$", "image": ""}
        ],
        "correct": "D",
        "needsReview": False,
        "issue": ""
    },
    {
        "id": "chemistry-156",
        "section": "Chemistry",
        "text": "What is $Z$ in the given sequence of reactions? $\\text{CHO} \\xrightarrow{(1)\\,\\text{KMnO}_4/\\text{H}^+} X \\xrightarrow{(2)\\,\\text{SOCl}_2} Y \\xrightarrow{\\text{H}_2,\\,\\text{Pd/BaSO}_4,\\,\\text{Conc. HCl}} Z$",
        "image": "",
        "options": [
            {"id": "A", "text": "Benzoic acid", "image": ""},
            {"id": "B", "text": "Benzaldehyde", "image": ""},
            {"id": "C", "text": "Benzyl chloride", "image": ""},
            {"id": "D", "text": "Benzoyl chloride", "image": ""}
        ],
        "correct": "B",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "chemistry-157",
        "section": "Chemistry",
        "text": "What is the % of carbon in the product $Z$ formed in the reaction? Phenol $\\xrightarrow{(i)\\,\\text{NaOH},\\,(ii)\\,\\text{CO}_2,\\,\\text{H}^+,\\,(iii)\\,\\text{H}^+} X \\xrightarrow{(\\text{CH}_3\\text{CO})_2\\text{O}} Z + \\text{CH}_3\\text{COOH}$",
        "image": "",
        "options": [
            {"id": "A", "text": "$40$", "image": ""},
            {"id": "B", "text": "$50$", "image": ""},
            {"id": "C", "text": "$70$", "image": ""},
            {"id": "D", "text": "$60$", "image": ""}
        ],
        "correct": "D",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "chemistry-158",
        "section": "Chemistry",
        "text": "Match the following: List-I (Reactants): A. Phenol + $Z$ $\\rightarrow$, B. Phenol + $\\text{Na}_2\\text{Cr}_2\\text{O}_7/\\text{H}_2\\text{SO}_4$ $\\rightarrow$, C. Phenol + (i) $\\text{CHCl}_3$/NaOH (ii) $\\text{H}^+$ $\\rightarrow$, D. Phenol + (i) NaOH (ii) $\\text{CO}_2$ (iii) $\\text{H}^+$ $\\rightarrow$; List-II (Product): I. Benzoquinone, II. Benzene, III. Salicylic acid, IV. Salicylaldehyde. The correct answer is",
        "image": "",
        "options": [
            {"id": "A", "text": "A-I; B-II; C-IV; D-III", "image": ""},
            {"id": "B", "text": "A-I; B-II; C-III; D-IV", "image": ""},
            {"id": "C", "text": "A-II; B-I; C-IV; D-III", "image": ""},
            {"id": "D", "text": "A-II; B-IV; C-I; D-III", "image": ""}
        ],
        "correct": "A",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "chemistry-159",
        "section": "Chemistry",
        "text": "What are Y and Z respectively in the given reaction sequence? $\\text{C}_6\\text{H}_5\\text{CHO} \\xrightarrow{(1)\\,\\text{Cu(OAc)}_2\\,(2)\\,\\text{H}_2\\text{O}_2/\\text{NaOH(aq)}} X \\xrightarrow{\\text{dil. NaOH},\\,573\\,K\\,(2\\,\\text{mols})} Y \\xrightarrow{(ii)\\,\\Delta} Z$",
        "image": "",
        "options": [
            {"id": "A", "text": "$Y = \\text{C}_6\\text{H}_5\\text{CH}_2\\text{OH}$ and $Z = \\text{C}_6\\text{H}_5\\text{CHO}$", "image": ""},
            {"id": "B", "text": "$Y = \\text{C}_6\\text{H}_5\\text{CHO}$ and $Z = \\text{C}_6\\text{H}_5\\text{CH}_2\\text{OH}$", "image": ""},
            {"id": "C", "text": "$Y = \\text{C}_6\\text{H}_5\\text{COOH}$ and $Z = \\text{C}_6\\text{H}_6$", "image": ""},
            {"id": "D", "text": "$Y = \\text{C}_6\\text{H}_5\\text{COO}^-$ and $Z = \\text{C}_6\\text{H}_5\\text{CHO}$", "image": ""}
        ],
        "correct": "A",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
    {
        "id": "chemistry-160",
        "section": "Chemistry",
        "text": "What is $C$ in the given sequence of reactions? $\\text{C}_2\\text{H}_5\\text{Br} \\xrightarrow{\\text{Br}_2/h\\nu,\\,273\\,\\text{K}} A \\xrightarrow{\\text{H}_3\\text{PO}_4} B \\xrightarrow{(1)\\,\\text{KMnO}_4/\\text{OH}^-\\,(2)\\,\\text{H}_3\\text{O}^+} C$",
        "image": "",
        "options": [
            {"id": "A", "text": "$\\text{CH}_3\\text{CHBrCOOH}$", "image": ""},
            {"id": "B", "text": "$\\text{CH}_3\\text{CH(OH)COOH}$", "image": ""},
            {"id": "C", "text": "$\\text{HOOCCOOH}$", "image": ""},
            {"id": "D", "text": "$\\text{CH}_3\\text{COOH}$", "image": ""}
        ],
        "correct": "C",
        "needsReview": True,
        "issue": "image-based text, verify"
    },
]

all_questions = maths_questions + physics_questions + chemistry_questions

exam_data = {
    "exams": [
        {
            "id": "eapcet-engineering-11-may-2024-shift-1",
            "title": "EAPCET Engineering 11th May 2024 Shift 1",
            "date": "2026-05-06",
            "durationMinutes": 180,
            "marksPerQuestion": 1,
            "negativeMark": 0,
            "sections": [
                {"key": "maths", "title": "Maths", "count": 80, "start": 1, "end": 80},
                {"key": "physics", "title": "Physics", "count": 40, "start": 81, "end": 120},
                {"key": "chemistry", "title": "Chemistry", "count": 40, "start": 121, "end": 160}
            ],
            "questions": all_questions
        }
    ]
}
