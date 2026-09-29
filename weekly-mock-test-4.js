(function () {
  window.BUNDLED_EXAMS = window.BUNDLED_EXAMS || { exams: [] };

  var payload = {
  "exams": [
    {
      "id": "weekly-mock-test-04",
      "title": "Weekly Mock Test - 4 (Probability Distributions | Bonding, Periodicity | Units, Motion)",
      "date": "2026-09-27",
      "durationMinutes": 90,
      "marksPerQuestion": 1,
      "negativeMark": 0,
      "sections": [
        {
          "key": "maths",
          "title": "Mathematics (Permutations, Combinations, Probability, Dispersion & Probability Distributions)",
          "count": 40,
          "start": 1,
          "end": 40
        },
        {
          "key": "chemistry",
          "title": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding & Organic Basics)",
          "count": 20,
          "start": 41,
          "end": 60
        },
        {
          "key": "physics",
          "title": "Physics (Physical World, Measurements & Motion in a Straight Line)",
          "count": 20,
          "start": 61,
          "end": 80
        }
      ],
      "questions": [
        {
          "id": "w4-math-1",
          "section": "Mathematics (Permutations, Combinations, Probability, Dispersion & Probability Distributions)",
          "text": "A fair coin is tossed and a fair die is thrown simultaneously. The number of elements in the sample space associated with this random experiment is:",
          "options": [
            {
              "id": "A",
              "text": "$36$"
            },
            {
              "id": "B",
              "text": "$24$"
            },
            {
              "id": "C",
              "text": "8"
            },
            {
              "id": "D",
              "text": "$12$"
            }
          ],
          "correct": "D",
          "explanation": "By the fundamental principle of counting, the total number of outcomes $=$ (number of outcomes of the coin) $\\times$ (number of outcomes of the die) $= 2 \\times 6 = 12$."
        },
        {
          "id": "w4-math-2",
          "section": "Mathematics (Permutations, Combinations, Probability, Dispersion & Probability Distributions)",
          "text": "In how many ways can $3$ boys and $2$ girls be seated in a row so that no two girls sit together?",
          "options": [
            {
              "id": "A",
              "text": "$120$"
            },
            {
              "id": "B",
              "text": "$144$"
            },
            {
              "id": "C",
              "text": "$240$"
            },
            {
              "id": "D",
              "text": "$72$"
            }
          ],
          "correct": "D",
          "explanation": "First arrange the $3$ boys in a row, which can be done in $3! = 6$ ways. Three boys create $4$ gaps $(\\_B\\_B\\_B\\_)$. Place the two girls in two of these gaps in ${{}^4C_2} = 6$ ways, and the two girls can be interchanged in $2! = 2$ ways. Total $= 6 \\times 6 \\times 2 = 72$."
        },
        {
          "id": "w4-math-3",
          "section": "Mathematics (Permutations, Combinations, Probability, Dispersion & Probability Distributions)",
          "text": "The number of arrangements of the letters of the word $EDUCATION$ in which all the vowels always occur together is:",
          "options": [
            {
              "id": "A",
              "text": "$1440$"
            },
            {
              "id": "B",
              "text": "$14400$"
            },
            {
              "id": "C",
              "text": "$4320$"
            },
            {
              "id": "D",
              "text": "$2880$"
            }
          ],
          "correct": "B",
          "explanation": "$EDUCATION$ has $9$ letters with $5$ vowels $(E, U, A, I, O)$ and $4$ consonants $(D, C, T, N)$. The five vowels together form one block, which can be arranged in $5! = 120$ ways. The block along with $4$ consonants gives $5$ units, arrangable in $5! = 120$ ways. Total $= 5! \\times 5! = 120 \\times 120 = 14400$."
        },
        {
          "id": "w4-math-4",
          "section": "Mathematics (Permutations, Combinations, Probability, Dispersion & Probability Distributions)",
          "text": "In how many ways can $3$ distinct prizes be distributed among $5$ students if a student may receive more than one prize?",
          "options": [
            {
              "id": "A",
              "text": "$10$"
            },
            {
              "id": "B",
              "text": "$60$"
            },
            {
              "id": "C",
              "text": "$210$"
            },
            {
              "id": "D",
              "text": "$125$"
            }
          ],
          "correct": "D",
          "explanation": "When repetition is allowed, each prize has $5$ independent choices. By the fundamental principle of counting, ways $= 5 \\times 5 \\times 5 = 5^3 = 125$. (If a student could get at most one prize it would be ${}^5P_3 = 60$.)"
        },
        {
          "id": "w4-math-5",
          "section": "Mathematics (Permutations, Combinations, Probability, Dispersion & Probability Distributions)",
          "text": "The number of $4$-letter words (meaningful or meaningless) that can be formed from $7$ different letters when repetition is allowed is:",
          "options": [
            {
              "id": "A",
              "text": "$1680$"
            },
            {
              "id": "B",
              "text": "$840$"
            },
            {
              "id": "C",
              "text": "$2401$"
            },
            {
              "id": "D",
              "text": "$343$"
            }
          ],
          "correct": "C",
          "explanation": "Each of the four positions can be filled by any one of the $7$ letters, and repetition is allowed. Ways $= 7 \\times 7 \\times 7 \\times 7 = 7^4 = 2401$."
        },
        {
          "id": "w4-math-6",
          "section": "Mathematics (Permutations, Combinations, Probability, Dispersion & Probability Distributions)",
          "text": "In how many ways can $8$ different persons be seated around a circular table?",
          "options": [
            {
              "id": "A",
              "text": "$720$"
            },
            {
              "id": "B",
              "text": "$5040$"
            },
            {
              "id": "C",
              "text": "$4032$"
            },
            {
              "id": "D",
              "text": "$40320$"
            }
          ],
          "correct": "B",
          "explanation": "Since the positions around a circular table are fixed, the permutations that differ only by rotation are identical. Fix one particular person and arrange the remaining $7$ around him: ways $= (8-1)! = 7! = 5040$."
        },
        {
          "id": "w4-math-7",
          "section": "Mathematics (Permutations, Combinations, Probability, Dispersion & Probability Distributions)",
          "text": "In how many ways can $5$ boys and $3$ girls be seated around a round table such that all the girls sit together?",
          "options": [
            {
              "id": "A",
              "text": "$17280$"
            },
            {
              "id": "B",
              "text": "$14400$"
            },
            {
              "id": "C",
              "text": "$34560$"
            },
            {
              "id": "D",
              "text": "$2880$"
            }
          ],
          "correct": "A",
          "explanation": "Treat the three girls as one single unit. Arrange the $5$ boys in a circle in $(5-1)! = 24$ ways. There are then $6$ units around the circle, giving $(6-1)! = 120$ ways, and the girls within their block can be arranged in $3! = 6$ ways. Total $= 24 \\times 120 \\times 6 = 17280$."
        },
        {
          "id": "w4-math-8",
          "section": "Mathematics (Permutations, Combinations, Probability, Dispersion & Probability Distributions)",
          "text": "In how many ways can $6$ different coloured beads be arranged to form a necklace?",
          "options": [
            {
              "id": "A",
              "text": "$120$"
            },
            {
              "id": "B",
              "text": "$60$"
            },
            {
              "id": "C",
              "text": "$720$"
            },
            {
              "id": "D",
              "text": "$360$"
            }
          ],
          "correct": "B",
          "explanation": "For a necklace, arrangements differing by rotation as well as by reflection look identical. Hence ways $= \\frac{(6-1)!}{2} = \\frac{5!}{2} = \\frac{120}{2} = 60$."
        },
        {
          "id": "w4-math-9",
          "section": "Mathematics (Permutations, Combinations, Probability, Dispersion & Probability Distributions)",
          "text": "The number of distinct arrangements of the letters of the word $BALLOON$ is:",
          "options": [
            {
              "id": "A",
              "text": "$2520$"
            },
            {
              "id": "B",
              "text": "$1260$"
            },
            {
              "id": "C",
              "text": "$5040$"
            },
            {
              "id": "D",
              "text": "$630$"
            }
          ],
          "correct": "B",
          "explanation": "$BALLOON$ has $7$ letters in which $L$ repeats twice and $O$ repeats twice. Number of distinct arrangements $= \\frac{7!}{2!\\;2!} = \\frac{5040}{4} = 1260$."
        },
        {
          "id": "w4-math-10",
          "section": "Mathematics (Permutations, Combinations, Probability, Dispersion & Probability Distributions)",
          "text": "Match List-I with List-II and select the correct answer.\n$$\\begin{array}{ll} \\text{List-I} & \\text{List-II} \\\\ \\hline\\text{(a) Arranging } n \\text{ distinct things in a row} & \\text{(1) } \\dfrac{(n-1)!}{2} \\\\[6pt]\\text{(b) Circular arrangements of } n \\text{ distinct things} & \\text{(2) } n! \\\\[6pt]\\text{(c) Arranging } n \\text{ beads on a necklace} & \\text{(3) } \\dfrac{n!}{r!(n-r)!} \\\\[6pt]\\text{(d) Committees of } r \\text{ out of } n \\text{ persons} & \\text{(4) } (n-1)! \\\\ \\end{array}$$",
          "options": [
            {
              "id": "A",
              "text": "$(a)\\to 2,\\ (b)\\to 4,\\ (c)\\to 3,\\ (d)\\to 1$"
            },
            {
              "id": "B",
              "text": "$(a)\\to 2,\\ (b)\\to 3,\\ (c)\\to 4,\\ (d)\\to 1$"
            },
            {
              "id": "C",
              "text": "$(a)\\to 2,\\ (b)\\to 4,\\ (c)\\to 1,\\ (d)\\to 3$"
            },
            {
              "id": "D",
              "text": "$(a)\\to 1,\\ (b)\\to 4,\\ (c)\\to 2,\\ (d)\\to 3$"
            }
          ],
          "correct": "C",
          "explanation": "Linear arrangement gives $n!$ $\\rightarrow (a)\\to 2$; circular arrangement gives $(n-1)!$ $\\rightarrow (b)\\to 4$; a necklace is a circular arrangement identified under rotation and reflection, $\\frac{(n-1)!}{2}$ $\\rightarrow (c)\\to 1$; committees are unordered selections, ${}^nC_r = \\frac{n!}{r!(n-r)!}$ $\\rightarrow (d)\\to 3$."
        },
        {
          "id": "w4-math-11",
          "section": "Mathematics (Permutations, Combinations, Probability, Dispersion & Probability Distributions)",
          "text": "A committee of $4$ members is to be chosen from $6$ men and $5$ women. The number of committees containing at least one woman is:",
          "options": [
            {
              "id": "A",
              "text": "$300$"
            },
            {
              "id": "B",
              "text": "$360$"
            },
            {
              "id": "C",
              "text": "$330$"
            },
            {
              "id": "D",
              "text": "$315$"
            }
          ],
          "correct": "D",
          "explanation": "Total ways to choose $4$ from $11$ persons $=\\ {{}^{11}C_4} = 330$. Committees containing no woman $=\\ {{}^6C_4} = 15$. Hence required number $= 330 - 15 = 315$."
        },
        {
          "id": "w4-math-12",
          "section": "Mathematics (Permutations, Combinations, Probability, Dispersion & Probability Distributions)",
          "text": "The number of ways of selecting $10$ members to form a committee from $6$ men and $9$ women, in which there are at least $3$ men and at least $2$ women, is:",
          "options": [
            {
              "id": "A",
              "text": "$2862$"
            },
            {
              "id": "B",
              "text": "$2700$"
            },
            {
              "id": "C",
              "text": "$2916$"
            },
            {
              "id": "D",
              "text": "$2860$"
            }
          ],
          "correct": "A",
          "explanation": "The possible (men, women) splits are $(3,7), (4,6), (5,5)$ and $(6,4)$.\n$${{}^6C_3}{}^9C_7 + {}^6C_4}{}^9C_6 + {}^6C_5}{}^9C_5 + {}^6C_6}{}^9C_4$$$$= (20)(36) + (15)(84) + (6)(126) + (1)(126) = 720 + 1260 + 756 + 126 = 2862$$"
        },
        {
          "id": "w4-math-13",
          "section": "Mathematics (Permutations, Combinations, Probability, Dispersion & Probability Distributions)",
          "text": "For the data $4,\\, 6,\\, 8,\\, 9,\\, 12,\\, 15$, the range and the mean deviation about the mean are respectively:",
          "options": [
            {
              "id": "A",
              "text": "$10$ and $3$"
            },
            {
              "id": "B",
              "text": "$11$ and $2$"
            },
            {
              "id": "C",
              "text": "$11$ and $3$"
            },
            {
              "id": "D",
              "text": "$12$ and $3$"
            }
          ],
          "correct": "C",
          "explanation": "Range $= x_{max} - x_{min} = 15 - 4 = 11$. Mean $= \\frac{4+6+8+9+12+15}{6} = 9$.\n$$\\text{M.D.} = \\frac{5+3+1+0+3+6}{6} = \\frac{18}{6} = 3$$"
        },
        {
          "id": "w4-math-14",
          "section": "Mathematics (Permutations, Combinations, Probability, Dispersion & Probability Distributions)",
          "text": "The variance of the data $2,\\, 4,\\, 6,\\, 8,\\, 10$ is:",
          "options": [
            {
              "id": "A",
              "text": "$4$"
            },
            {
              "id": "B",
              "text": "$10$"
            },
            {
              "id": "C",
              "text": "$8$"
            },
            {
              "id": "D",
              "text": "$6$"
            }
          ],
          "correct": "C",
          "explanation": "Mean $= \\frac{30}{5} = 6$. Variance $=\\frac{1}{5}\\sum(x_i-\\bar{x})^2 = \\frac{16+4+0+4+16}{5} = \\frac{40}{5} = 8$."
        },
        {
          "id": "w4-math-15",
          "section": "Mathematics (Permutations, Combinations, Probability, Dispersion & Probability Distributions)",
          "text": "The following is the frequency distribution of marks obtained by $10$ students.\n\n$$\\begin{array}{c|cccc} \\text{Class} & 0-10 & 10-20 & 20-30 & 30-40 \\\\ \\hline \\text{Frequency} & 1 & 2 & 3 & 4 \\end{array}$$\nThe mean and standard deviation of this distribution are respectively:",
          "options": [
            {
              "id": "A",
              "text": "$25$ and $5$"
            },
            {
              "id": "B",
              "text": "$25$ and $10$"
            },
            {
              "id": "C",
              "text": "$30$ and $10$"
            },
            {
              "id": "D",
              "text": "$20$ and $10$"
            }
          ],
          "correct": "B",
          "explanation": "Mid-points are $x_i = 5, 15, 25, 35$; $h = 10$, $a = 5$, $u_i = 0, 1, 2, 3$ and $N = 10$.\n$\\sum fx = 5 + 30 + 75 + 140 = 250 \\Rightarrow \\bar{x} = 25$.\n$\\sum fu = 0 + 2 + 6 + 12 = 20$, $\\sum fu^2 = 0 + 2 + 12 + 36 = 50$.\n$\\sigma^2 = h^2\\left(\\frac{\\sum fu^2}{N} - \\left(\\frac{\\sum fu}{N}\\right)^2\\right) = 100(5 - 4) = 100 \\Rightarrow \\sigma = 10$."
        },
        {
          "id": "w4-math-16",
          "section": "Mathematics (Permutations, Combinations, Probability, Dispersion & Probability Distributions)",
          "text": "Two series $A$ and $B$ have the same mean $60$ but their standard deviations are $15$ and $10$ respectively. Their coefficients of variation are:",
          "options": [
            {
              "id": "A",
              "text": "$25\\%$ and $16.67\\%$"
            },
            {
              "id": "B",
              "text": "$40\\%$ and $25\\%$"
            },
            {
              "id": "C",
              "text": "$16.67\\%$ and $25\\%$"
            },
            {
              "id": "D",
              "text": "$25\\%$ and $25\\%$"
            }
          ],
          "correct": "A",
          "explanation": "C.V. $=\\frac{\\sigma}{\\bar{x}}\\times 100$. For $A$: $\\frac{15}{60}\\times100 = 25\\%$. For $B$: $\\frac{10}{60}\\times100 = 16.67\\%$. Series $B$ has the smaller C.V. and is therefore more consistent."
        },
        {
          "id": "w4-math-17",
          "section": "Mathematics (Permutations, Combinations, Probability, Dispersion & Probability Distributions)",
          "text": "Match List-I with List-II and select the correct answer.\n$$\\begin{array}{ll} \\text{List-I} & \\text{List-II} \\\\ \\hline\\text{(a) Range} & \\text{(1) } \\dfrac{\\sigma}{\\bar{x}} \\times 100 \\\\[6pt]\\text{(b) Mean deviation about the mean} & \\text{(2) } \\dfrac{1}{N}\\sum |x_i - \\bar{x}| \\\\[6pt]\\text{(c) Variance} & \\text{(3) } \\dfrac{1}{N}\\sum (x_i - \\bar{x})^2 \\\\[6pt]\\text{(d) Coefficient of variation} & \\text{(4) } x_{max} - x_{min} \\\\ \\end{array}$$",
          "options": [
            {
              "id": "A",
              "text": "$(a)\\to 4,\\ (b)\\to 3,\\ (c)\\to 2,\\ (d)\\to 1$"
            },
            {
              "id": "B",
              "text": "$(a)\\to 2,\\ (b)\\to 4,\\ (c)\\to 1,\\ (d)\\to 3$"
            },
            {
              "id": "C",
              "text": "$(a)\\to 4,\\ (b)\\to 2,\\ (c)\\to 3,\\ (d)\\to 1$"
            },
            {
              "id": "D",
              "text": "$(a)\\to 3,\\ (b)\\to 2,\\ (c)\\to 4,\\ (d)\\to 1$"
            }
          ],
          "correct": "C",
          "explanation": "Range $= x_{max}-x_{min}$ $\\rightarrow (a)\\to 4$; mean deviation $=\\frac{1}{N}\\sum|x_i-\\bar{x}|$ $\\rightarrow (b)\\to 2$; variance $=\\frac{1}{N}\\sum(x_i-\\bar{x})^2$ $\\rightarrow (c)\\to 3$; C.V. $=\\frac{\\sigma}{\\bar{x}}\\times100$ $\\rightarrow (d)\\to 1$."
        },
        {
          "id": "w4-math-18",
          "section": "Mathematics (Permutations, Combinations, Probability, Dispersion & Probability Distributions)",
          "text": "For the data $2,\\, 4,\\, 8,\\, 10,\\, 11$, the mean deviation about the mean and about the median are:",
          "options": [
            {
              "id": "A",
              "text": "$3$ and $3$"
            },
            {
              "id": "B",
              "text": "$3.2$ and $3$"
            },
            {
              "id": "C",
              "text": "$3.2$ and $3.2$"
            },
            {
              "id": "D",
              "text": "$3$ and $3.2$"
            }
          ],
          "correct": "B",
          "explanation": "Mean $= \\frac{35}{5} = 7$, median $= 8$.\\nM.D. about mean $=\\frac{|2-7|+|4-7|+|8-7|+|10-7|+|11-7|}{5} = \\frac{5+3+1+3+4}{5} = \\frac{16}{5} = 3.2$.\\nM.D. about median $=\\frac{6+4+0+2+3}{5} = \\frac{15}{5} = 3$.\\nThis illustrates that M.D. about the mean is always greater than or equal to M.D. about the median."
        },
        {
          "id": "w4-math-19",
          "section": "Mathematics (Permutations, Combinations, Probability, Dispersion & Probability Distributions)",
          "text": "The variance of a data set is $36$ and its coefficient of variation is $60\\%$. The mean of the data is:",
          "options": [
            {
              "id": "A",
              "text": "$10$"
            },
            {
              "id": "B",
              "text": "$6$"
            },
            {
              "id": "C",
              "text": "$60$"
            },
            {
              "id": "D",
              "text": "$0.6$"
            }
          ],
          "correct": "A",
          "explanation": "$\\sigma = \\sqrt{36} = 6$. C.V. $=\\frac{\\sigma}{\\bar{x}}\\times100 = 60 \\Rightarrow \\frac{6}{\\bar{x}} = 0.6 \\Rightarrow \\bar{x} = 10$."
        },
        {
          "id": "w4-math-20",
          "section": "Mathematics (Permutations, Combinations, Probability, Dispersion & Probability Distributions)",
          "text": "Two frequency distributions have equal means but different variances. The distribution with the smaller variance:",
          "options": [
            {
              "id": "A",
              "text": "cannot be compared with the other"
            },
            {
              "id": "B",
              "text": "is more scattered and highly dispersed"
            },
            {
              "id": "C",
              "text": "is more consistent and less scattered about the mean"
            },
            {
              "id": "D",
              "text": "and the other distribution are equally consistent"
            }
          ],
          "correct": "C",
          "explanation": "Variance measures the scatter of the data about the mean. A smaller variance means the values cluster more tightly around the mean, so the distribution is relatively more stable, i.e. more consistent."
        },
        {
          "id": "w4-math-21",
          "section": "Mathematics (Permutations, Combinations, Probability, Dispersion & Probability Distributions)",
          "text": "Series $A$ has mean $50$ and standard deviation $10$, while series $B$ has the same mean $50$ and standard deviation $20$. The ratio of their coefficients of variation is:",
          "options": [
            {
              "id": "A",
              "text": "$4:1$"
            },
            {
              "id": "B",
              "text": "$1:1$"
            },
            {
              "id": "C",
              "text": "$2:1$"
            },
            {
              "id": "D",
              "text": "$1:2$"
            }
          ],
          "correct": "D",
          "explanation": "C.V.$_A = \\frac{10}{50}\\times100 = 20\\%$ and C.V.$_B = \\frac{20}{50}\\times100 = 40\\%$. Hence C.V.$_A$ : C.V.$_B = 1:2$, and series $A$ is the more consistent of the two."
        },
        {
          "id": "w4-math-22",
          "section": "Mathematics (Permutations, Combinations, Probability, Dispersion & Probability Distributions)",
          "text": "A fair die is thrown once. The probability of getting a number greater than $4$ is:",
          "options": [
            {
              "id": "A",
              "text": "$\\dfrac{2}{3}$"
            },
            {
              "id": "B",
              "text": "$\\dfrac{1}{3}$"
            },
            {
              "id": "C",
              "text": "$\\dfrac{1}{2}$"
            },
            {
              "id": "D",
              "text": "$\\dfrac{1}{6}$"
            }
          ],
          "correct": "B",
          "explanation": "Favourable outcomes $= \\{5, 6\\} = 2$. Total equally likely outcomes $= 6$.\n$$P(A) = \\frac{2}{6} = \\frac{1}{3}$$"
        },
        {
          "id": "w4-math-23",
          "section": "Mathematics (Permutations, Combinations, Probability, Dispersion & Probability Distributions)",
          "text": "Match List-I with List-II and select the correct answer.\n$$\\begin{array}{ll} \\text{List-I} & \\text{List-II} \\\\ \\hline\\text{(a) Mutually exclusive events} & \\text{(1) } 1 - P(A) \\\\[6pt]\\text{(b) Independent events} & \\text{(2) } P(A \\cap B) = P(A)\\,P(B) \\\\[6pt]\\text{(c) Complement of the event } A & \\text{(3) } P(A \\cup B) = P(A) + P(B) \\\\[6pt]\\text{(d) Equally likely outcomes} & \\text{(4) } \\text{each has probability } \\dfrac{1}{n} \\\\ \\end{array}$$",
          "options": [
            {
              "id": "A",
              "text": "$(a)\\to 2,\\ (b)\\to 1,\\ (c)\\to 3,\\ (d)\\to 4$"
            },
            {
              "id": "B",
              "text": "$(a)\\to 4,\\ (b)\\to 2,\\ (c)\\to 1,\\ (d)\\to 3$"
            },
            {
              "id": "C",
              "text": "$(a)\\to 3,\\ (b)\\to 1,\\ (c)\\to 2,\\ (d)\\to 4$"
            },
            {
              "id": "D",
              "text": "$(a)\\to 3,\\ (b)\\to 2,\\ (c)\\to 1,\\ (d)\\to 4$"
            }
          ],
          "correct": "D",
          "explanation": "For mutually exclusive events $A$ and $B$, $P(A\\cup B) = P(A)+P(B)$ $\\rightarrow (a)\\to 3$; independence means $P(A\\cap B)=P(A)P(B)$ $\\rightarrow (b)\\to 2$; the complement satisfies $P(\\bar{A}) = 1-P(A)$ $\\rightarrow (c)\\to 1$; and $n$ equally likely outcomes each carry probability $1/n$ $\\rightarrow (d)\\to 4$."
        },
        {
          "id": "w4-math-24",
          "section": "Mathematics (Permutations, Combinations, Probability, Dispersion & Probability Distributions)",
          "text": "If $P(A) = 0.4$ and $P(B) = 0.5$, the maximum possible value of $P(A \\cap B)$ is:",
          "options": [
            {
              "id": "A",
              "text": "$0.4$"
            },
            {
              "id": "B",
              "text": "$0.1$"
            },
            {
              "id": "C",
              "text": "$0.2$"
            },
            {
              "id": "D",
              "text": "$0.9$"
            }
          ],
          "correct": "A",
          "explanation": "Since $A \\cap B \\subseteq A$ and $A \\cap B \\subseteq B$, we have $P(A\\cap B) \\le \\min\\{P(A), P(B)\\}$. The maximum value is $\\min(0.4, 0.5) = 0.4$, obtained when $B \\subseteq A$."
        },
        {
          "id": "w4-math-25",
          "section": "Mathematics (Permutations, Combinations, Probability, Dispersion & Probability Distributions)",
          "text": "For two events $A$ and $B$, if $P(A) = \\frac{1}{3}$, $P(B) = \\frac{1}{4}$ and $P(A \\cup B) = \\frac{1}{2}$, then $P(A \\cap B)$ is:",
          "options": [
            {
              "id": "A",
              "text": "$\\dfrac{1}{6}$"
            },
            {
              "id": "B",
              "text": "$\\dfrac{1}{2}$"
            },
            {
              "id": "C",
              "text": "$\\dfrac{1}{12}$"
            },
            {
              "id": "D",
              "text": "$\\dfrac{1}{3}$"
            }
          ],
          "correct": "C",
          "explanation": "By the addition theorem, $P(A\\cup B) = P(A) + P(B) - P(A\\cap B)$.\n$$P(A \\cap B) = \\frac{1}{3} + \\frac{1}{4} - \\frac{1}{2} = \\frac{4+3-6}{12} = \\frac{1}{12}$$"
        },
        {
          "id": "w4-math-26",
          "section": "Mathematics (Permutations, Combinations, Probability, Dispersion & Probability Distributions)",
          "text": "A fair die is thrown twice. The probability that the sum of the two numbers obtained is $8$ is:",
          "options": [
            {
              "id": "A",
              "text": "$\\dfrac{1}{6}$"
            },
            {
              "id": "B",
              "text": "$\\dfrac{5}{36}$"
            },
            {
              "id": "C",
              "text": "$\\dfrac{5}{18}$"
            },
            {
              "id": "D",
              "text": "$\\dfrac{1}{9}$"
            }
          ],
          "correct": "B",
          "explanation": "Total number of ordered outcomes $= 6 \\times 6 = 36$. Favourable outcomes: $(2,6), (3,5), (4,4), (5,3), (6,2)$  -  there are $5$ of them.\n$$P = \\frac{5}{36}$$"
        },
        {
          "id": "w4-math-27",
          "section": "Mathematics (Permutations, Combinations, Probability, Dispersion & Probability Distributions)",
          "text": "Two events $A$ and $B$ are such that $P(A) = \\frac{1}{2}$, $P(B) = \\frac{1}{3}$ and $P(A \\cap B) = \\frac{1}{6}$. Then the events $A$ and $B$ are:",
          "options": [
            {
              "id": "A",
              "text": "mutually exclusive"
            },
            {
              "id": "B",
              "text": "dependent"
            },
            {
              "id": "C",
              "text": "independent but not mutually exclusive"
            },
            {
              "id": "D",
              "text": "equally likely"
            }
          ],
          "correct": "C",
          "explanation": "$P(A)P(B) = \\frac{1}{2}\\times\\frac{1}{3} = \\frac{1}{6} = P(A\\cap B)$, which is the defining condition for $A$ and $B$ to be independent. They are not mutually exclusive, since for mutually exclusive events $P(A\\cap B)$ would be $0$."
        },
        {
          "id": "w4-math-28",
          "section": "Mathematics (Permutations, Combinations, Probability, Dispersion & Probability Distributions)",
          "text": "If $P(A) = 0.6$, $P(B) = 0.5$ and the events $A$ and $B$ are independent, then $P(A \\mid B)$ is:",
          "options": [
            {
              "id": "A",
              "text": "$0.3$"
            },
            {
              "id": "B",
              "text": "$0.6$"
            },
            {
              "id": "C",
              "text": "$0.5$"
            },
            {
              "id": "D",
              "text": "$0.8$"
            }
          ],
          "correct": "B",
          "explanation": "By the multiplication theorem, $P(A\\cap B) = P(A)P(B)$, so the conditional probability is\n$$P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{P(A)P(B)}{P(B)} = P(A) = 0.6$$"
        },
        {
          "id": "w4-math-29",
          "section": "Mathematics (Permutations, Combinations, Probability, Dispersion & Probability Distributions)",
          "text": "Two fair coins are tossed. Given that at least one head appears, the probability of getting exactly one head is:",
          "options": [
            {
              "id": "A",
              "text": "$\\dfrac{1}{2}$"
            },
            {
              "id": "B",
              "text": "$\\dfrac{3}{4}$"
            },
            {
              "id": "C",
              "text": "$\\dfrac{1}{3}$"
            },
            {
              "id": "D",
              "text": "$\\dfrac{2}{3}$"
            }
          ],
          "correct": "D",
          "explanation": "The sample space is $\\{HH, HT, TH, TT\\}$. The event 'exactly one head' contains $HT, TH$ (2 outcomes) and the conditioning event 'at least one head' contains $HH, HT, TH$ (3 outcomes).\n$$P(\\text{one head} \\mid \\text{at least one head}) = \\frac{2}{3}$$"
        },
        {
          "id": "w4-math-30",
          "section": "Mathematics (Permutations, Combinations, Probability, Dispersion & Probability Distributions)",
          "text": "Three cards are drawn at random without replacement from a well-shuffled pack of $52$ cards. The probability that all three are aces is:",
          "options": [
            {
              "id": "A",
              "text": "$\\dfrac{1}{2704}$"
            },
            {
              "id": "B",
              "text": "$\\dfrac{1}{1326}$"
            },
            {
              "id": "C",
              "text": "$\\dfrac{1}{5525}$"
            },
            {
              "id": "D",
              "text": "$\\dfrac{1}{22100}$"
            }
          ],
          "correct": "C",
          "explanation": "$P = \\dfrac{{}^4C_3}{{}^{52}C_3} = \\dfrac{4}{22100} = \\dfrac{1}{5525}$."
        },
        {
          "id": "w4-math-31",
          "section": "Mathematics (Permutations, Combinations, Probability, Dispersion & Probability Distributions)",
          "text": "A bag contains $4$ red and $6$ black balls. Two balls are drawn at random without replacement. The probability that both are red is:",
          "options": [
            {
              "id": "A",
              "text": "$\\dfrac{2}{15}$"
            },
            {
              "id": "B",
              "text": "$\\dfrac{1}{5}$"
            },
            {
              "id": "C",
              "text": "$\\dfrac{2}{9}$"
            },
            {
              "id": "D",
              "text": "$\\dfrac{4}{25}$"
            }
          ],
          "correct": "A",
          "explanation": "$P = \\dfrac{{}^4C_2}{{}^{10}C_2} = \\dfrac{6}{45} = \\dfrac{2}{15}$."
        },
        {
          "id": "w4-math-32",
          "section": "Mathematics (Permutations, Combinations, Probability, Dispersion & Probability Distributions)",
          "text": "A factory produces $60\\%$ of its bulbs on line $A$ and the remaining on line $B$. The defective rates are $5\\%$ on line $A$ and $10\\%$ on line $B$. If a bulb picked at random is found defective, the probability that it came from line $A$ is:",
          "options": [
            {
              "id": "A",
              "text": "$\\dfrac{1}{7}$"
            },
            {
              "id": "B",
              "text": "$\\dfrac{3}{4}$"
            },
            {
              "id": "C",
              "text": "$\\dfrac{2}{7}$"
            },
            {
              "id": "D",
              "text": "$\\dfrac{3}{7}$"
            }
          ],
          "correct": "D",
          "explanation": "Let $D$ denote a defective bulb. $P(A) = 0.6,\\ P(B) = 0.4,\\ P(D \\mid A) = 0.05,\\ P(D \\mid B) = 0.10$.\n$P(D) = (0.6)(0.05) + (0.4)(0.10) = 0.03 + 0.04 = 0.07$.\n$$P(A \\mid D) = \\frac{P(D\\mid A)\\,P(A)}{P(D)} = \\frac{0.03}{0.07} = \\frac{3}{7}$$"
        },
        {
          "id": "w4-math-33",
          "section": "Mathematics (Permutations, Combinations, Probability, Dispersion & Probability Distributions)",
          "text": "A random variable $X$ is defined as:",
          "options": [
            {
              "id": "A",
              "text": "a function whose values are the probabilities of the outcomes"
            },
            {
              "id": "B",
              "text": "a function that assigns a real number to every outcome of a random experiment"
            },
            {
              "id": "C",
              "text": "the sum of all the outcomes of a random experiment"
            },
            {
              "id": "D",
              "text": "the largest possible value in a sample space"
            }
          ],
          "correct": "B",
          "explanation": "A random variable is a real-valued function defined on the sample space: $\\Omega \\rightarrow \\mathbb{R}$. Every outcome $\\omega_i$ is mapped to a number $x_i$, and the probabilities $p_i$ together with the values $x_i$ form the probability distribution of $X$."
        },
        {
          "id": "w4-math-34",
          "section": "Mathematics (Permutations, Combinations, Probability, Dispersion & Probability Distributions)",
          "text": "Match List-I with List-II and select the correct answer.\n$$\\begin{array}{ll} \\text{List-I} & \\text{List-II} \\\\ \\hline\\text{(a) Binomial distribution} & \\text{(1) } \\lambda \\\\[6pt]\\text{(b) Poisson distribution} & \\text{(2) } n p \\\\[6pt]\\text{(c) Mean of the binomial distribution} & \\text{(3) } \\text{number of successes in } n \\text{ independent Bernoulli trials} \\\\[6pt]\\text{(d) Variance of the Poisson distribution} & \\text{(4) } \\text{number of occurrences of an event in a fixed interval with mean } \\lambda \\\\ \\end{array}$$",
          "options": [
            {
              "id": "A",
              "text": "$(a)\\to 3,\\ (b)\\to 4,\\ (c)\\to 2,\\ (d)\\to 1$"
            },
            {
              "id": "B",
              "text": "$(a)\\to 4,\\ (b)\\to 3,\\ (c)\\to 1,\\ (d)\\to 2$"
            },
            {
              "id": "C",
              "text": "$(a)\\to 3,\\ (b)\\to 2,\\ (c)\\to 4,\\ (d)\\to 1$"
            },
            {
              "id": "D",
              "text": "$(a)\\to 2,\\ (b)\\to 4,\\ (c)\\to 3,\\ (d)\\to 1$"
            }
          ],
          "correct": "A",
          "explanation": "The binomial distribution gives the number of successes in $n$ independent Bernoulli trials $\\rightarrow (a)\\to 3$; the Poisson distribution gives the number of occurrences of an event in a fixed interval with constant mean $\\lambda$ $\\rightarrow (b)\\to 4$; the mean of the binomial is $np$ $\\rightarrow (c)\\to 2$; and for the Poisson distribution the variance always equals the mean, $\\lambda$ $\\rightarrow (d)\\to 1$."
        },
        {
          "id": "w4-math-35",
          "section": "Mathematics (Permutations, Combinations, Probability, Dispersion & Probability Distributions)",
          "text": "In a binomial distribution with $n = 10$ and $p = 0.2$, the mean and the variance are:",
          "options": [
            {
              "id": "A",
              "text": "$2$ and $1.6$"
            },
            {
              "id": "B",
              "text": "$2$ and $0.8$"
            },
            {
              "id": "C",
              "text": "$2$ and $2$"
            },
            {
              "id": "D",
              "text": "$0.2$ and $1.6$"
            }
          ],
          "correct": "A",
          "explanation": "For a binomial distribution, $\\mu = np = 10(0.2) = 2$ and $\\sigma^2 = npq = 10(0.2)(0.8) = 1.6$, where $q = 1 - p = 0.8$."
        },
        {
          "id": "w4-math-36",
          "section": "Mathematics (Permutations, Combinations, Probability, Dispersion & Probability Distributions)",
          "text": "If $n = 20$ and $p = 0.3$ in a binomial distribution, its standard deviation is approximately:",
          "options": [
            {
              "id": "A",
              "text": "$6.0$"
            },
            {
              "id": "B",
              "text": "$4.2$"
            },
            {
              "id": "C",
              "text": "$2.05$"
            },
            {
              "id": "D",
              "text": "$0.42$"
            }
          ],
          "correct": "C",
          "explanation": "$\\sigma^2 = npq = 20(0.3)(0.7) = 4.2$, so $\\sigma = \\sqrt{4.2} \\approx 2.05$."
        },
        {
          "id": "w4-math-37",
          "section": "Mathematics (Permutations, Combinations, Probability, Dispersion & Probability Distributions)",
          "text": "A fair coin is tossed $6$ times. The probability of getting exactly $3$ heads is:",
          "options": [
            {
              "id": "A",
              "text": "$\\dfrac{20}{64}$"
            },
            {
              "id": "B",
              "text": "$\\dfrac{15}{64}$"
            },
            {
              "id": "C",
              "text": "$\\dfrac{5}{16}$"
            },
            {
              "id": "D",
              "text": "$\\dfrac{5}{32}$"
            }
          ],
          "correct": "C",
          "explanation": "$P(X = 3) = {}^6C_3 \\left(\\frac{1}{2}\\right)^3\\left(\\frac{1}{2}\\right)^3 = \\frac{20}{64} = \\frac{5}{16}$."
        },
        {
          "id": "w4-math-38",
          "section": "Mathematics (Permutations, Combinations, Probability, Dispersion & Probability Distributions)",
          "text": "In a Poisson distribution with $\\lambda = 3$, the variance and standard deviation are:",
          "options": [
            {
              "id": "A",
              "text": "$3$ and $3$"
            },
            {
              "id": "B",
              "text": "$3$ and $\\sqrt{3} \u0007pprox 1.732$"
            },
            {
              "id": "C",
              "text": "$9$ and $3$"
            },
            {
              "id": "D",
              "text": "$1.732$ and $3$"
            }
          ],
          "correct": "B",
          "explanation": "For a Poisson distribution, $\\sigma^2 = \\mu = \\lambda$. Hence variance $= 3$ and standard deviation $= \\sqrt{3} \\approx 1.732$."
        },
        {
          "id": "w4-math-39",
          "section": "Mathematics (Permutations, Combinations, Probability, Dispersion & Probability Distributions)",
          "text": "The number of telephone calls received at a switchboard in a day follows a Poisson distribution with mean $5$. The probability that no call is received on a particular day is:",
          "options": [
            {
              "id": "A",
              "text": "$e^{-25}$"
            },
            {
              "id": "B",
              "text": "$5e^{-5}$"
            },
            {
              "id": "C",
              "text": "$e^{-5}$"
            },
            {
              "id": "D",
              "text": "$\\dfrac{e^{-5}}{5}$"
            }
          ],
          "correct": "C",
          "explanation": "$$P(X = 0) = \\frac{e^{-\\lambda}\\lambda^0}{0!} = e^{-\\lambda} = e^{-5}$$"
        },
        {
          "id": "w4-math-40",
          "section": "Mathematics (Permutations, Combinations, Probability, Dispersion & Probability Distributions)",
          "text": "For a Poisson distribution with $\\lambda = 2$, the value of $P(X = 0) + P(X = 1)$ is:",
          "options": [
            {
              "id": "A",
              "text": "$3e^{-1}$"
            },
            {
              "id": "B",
              "text": "$3e^{-2}$"
            },
            {
              "id": "C",
              "text": "$e^{-2}$"
            },
            {
              "id": "D",
              "text": "$2e^{-2}$"
            }
          ],
          "correct": "B",
          "explanation": "$P(X=0) = e^{-2}$ and $P(X=1) = \\frac{e^{-2}\\cdot 2^1}{1!} = 2e^{-2}$.\n$$P(X=0) + P(X=1) = e^{-2} + 2e^{-2} = 3e^{-2}$$"
        },
        {
          "id": "w4-chem-1",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding & Organic Basics)",
          "text": "Match List-I with List-II and select the correct answer.\n$$\\begin{array}{ll} \\text{List-I} & \\text{List-II} \\\\ \\hline\\text{(a) Electron} & \\text{(1) Discovered by Chadwick and electrically neutral} \\\\[6pt]\\text{(b) Proton} & \\text{(2) Discovered by } J.J.\\text{ Thomson, charge } -e \\\\[6pt]\\text{(c) Neutron} & \\text{(3) Charge } +e \\\\[6pt]\\text{(d) Nucleus} & \\text{(4) Discovered by Rutherford from the gold-foil experiment} \\\\ \\end{array}$$",
          "options": [
            {
              "id": "A",
              "text": "$(a)\\to 4,\\ (b)\\to 2,\\ (c)\\to 1,\\ (d)\\to 3$"
            },
            {
              "id": "B",
              "text": "$(a)\\to 2,\\ (b)\\to 3,\\ (c)\\to 1,\\ (d)\\to 4$"
            },
            {
              "id": "C",
              "text": "$(a)\\to 1,\\ (b)\\to 2,\\ (c)\\to 4,\\ (d)\\to 3$"
            },
            {
              "id": "D",
              "text": "$(a)\\to 2,\\ (b)\\to 4,\\ (c)\\to 1,\\ (d)\\to 3$"
            }
          ],
          "correct": "D",
          "explanation": "The electron was discovered by $J.J.$ Thomson in the cathode ray experiment and carries a charge $-e$ $\\rightarrow (a)\\to 2$; the proton is the positively charged nucleus ($+e$) identified by Rutherford in the $\\alpha$-scattering (gold foil) experiment $\\rightarrow (b)\\to 4$; the neutron is neutral and was discovered by Chadwick $\\rightarrow (c)\\to 1$; the nucleus therefore carries a charge of $+e$ $\\rightarrow (d)\\to 3$."
        },
        {
          "id": "w4-chem-2",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding & Organic Basics)",
          "text": "Match List-I with List-II and select the correct answer.\n$$\\begin{array}{ll} \\text{List-I} & \\text{List-II} \\\\ \\hline\\text{(a) Thomson's model} & \\text{(1) Electrons revolve only in certain permitted orbits with quantised energy} \\\\[6pt]\\text{(b) Rutherford's model} & \\text{(2) The atom is a 'plum pudding'  -  a sphere of positive charge with electrons embedded} \\\\[6pt]\\text{(c) Bohr's model} & \\text{(3) The atom is mostly empty space containing a small, dense, positively charged nucleus} \\\\ \\end{array}$$",
          "options": [
            {
              "id": "A",
              "text": "$(a)\\to 1,\\ (b)\\to 2,\\ (c)\\to 3$"
            },
            {
              "id": "B",
              "text": "$(a)\\to 2,\\ (b)\\to 1,\\ (c)\\to 3$"
            },
            {
              "id": "C",
              "text": "$(a)\\to 3,\\ (b)\\to 2,\\ (c)\\to 1$"
            },
            {
              "id": "D",
              "text": "$(a)\\to 2,\\ (b)\\to 3,\\ (c)\\to 1$"
            }
          ],
          "correct": "D",
          "explanation": "Thomson proposed the 'plum pudding' model of a sphere of positive charge $\\rightarrow (a)\\to 2$; Rutherford concluded from $\\alpha$-scattering that the atom is mostly empty space with a tiny positive nucleus $\\rightarrow (b)\\to 3$; Bohr postulated stationary states in which the energy of the electron is quantised $\\rightarrow (c)\\to 1$."
        },
        {
          "id": "w4-chem-3",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding & Organic Basics)",
          "text": "According to Rutherford's model of the atom, an electron revolving around the nucleus:",
          "options": [
            {
              "id": "A",
              "text": "radiates energy continuously and finally spirals into the nucleus"
            },
            {
              "id": "B",
              "text": "is stationary and does not move at all"
            },
            {
              "id": "C",
              "text": "jumps randomly from orbit to orbit"
            },
            {
              "id": "D",
              "text": "has constant energy and therefore does not radiate"
            }
          ],
          "correct": "A",
          "explanation": "According to classical electrodynamics an accelerating charged particle radiates energy. Since the electron in Rutherford's model is accelerating continuously, it should lose energy, shrink its orbit and finally fall into the nucleus in about $10^{-11}$ s. This contradicts the observed stability of atoms, and the model also fails to explain the line spectrum of hydrogen. These were the developments leading to Bohr's model."
        },
        {
          "id": "w4-chem-4",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding & Organic Basics)",
          "text": "The energy of a photon of wavelength $600\\ \\text{nm}$ is approximately:\n\n$$[\\,h = 6.6 \\times 10^{-34}\\ \\text{J s},\\quad c = 3 \\times 10^{8}\\ \\text{m s}^{-1}\\,]$$",
          "options": [
            {
              "id": "A",
              "text": "$3.3 \\times 10^{-16}\\ \\text{J}$"
            },
            {
              "id": "B",
              "text": "$1.98 \\times 10^{-25}\\ \\text{J}$"
            },
            {
              "id": "C",
              "text": "$1.1 \\times 10^{-19}\\ \\text{J}$"
            },
            {
              "id": "D",
              "text": "$3.3 \\times 10^{-19}\\ \\text{J}$"
            }
          ],
          "correct": "D",
          "explanation": "$E = h\\nu = \\dfrac{hc}{\\lambda}$. Converting the wavelength: $\\lambda = 600\\ \\text{nm} = 6 \\times 10^{-7}\\ \\text{m}$.\n$$E = \\frac{6.6 \\times 10^{-34} \\times 3 \\times 10^{8}}{6 \\times 10^{-7}} = \\frac{1.98 \\times 10^{-25}}{6 \\times 10^{-7}} = 3.3 \\times 10^{-19}\\ \\text{J}$$"
        },
        {
          "id": "w4-chem-5",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding & Organic Basics)",
          "text": "The minimum energy that must be supplied to excite the electron of a hydrogen atom from the ground state $(n = 1)$ to $n = 3$ is:\n\n$$[\\,E_n = -13.6 \\times \\dfrac{1}{n^2}\\ \\text{eV}\\,]$$",
          "options": [
            {
              "id": "A",
              "text": "$1.51\\ \\text{eV}$"
            },
            {
              "id": "B",
              "text": "$10.2\\ \\text{eV}$"
            },
            {
              "id": "C",
              "text": "$13.6\\ \\text{eV}$"
            },
            {
              "id": "D",
              "text": "$12.09\\ \\text{eV}$"
            }
          ],
          "correct": "D",
          "explanation": "$E_1 = -13.6\\ \\text{eV}$ and $E_3 = -\\dfrac{13.6}{9} = -1.511\\ \\text{eV}$.\n$$\\Delta E = E_3 - E_1 = (-1.511) - (-13.6) = 12.09\\ \\text{eV}$$"
        },
        {
          "id": "w4-chem-6",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding & Organic Basics)",
          "text": "Match List-I with List-II and select the correct answer.\n$$\\begin{array}{ll} \\text{List-I} & \\text{List-II} \\\\ \\hline\\text{(a) Principal quantum number } n & \\text{(1) Gives the orientation of the orbital in space} \\\\[6pt]\\text{(b) Azimuthal quantum number } l & \\text{(2) Gives the shape of the orbital} \\\\[6pt]\\text{(c) Magnetic quantum number } m_l & \\text{(3) Number of orbitals present in a shell} \\\\[6pt]\\text{(d) Spin quantum number } s & \\text{(4) Gives the direction of spin of the electron} \\\\ \\end{array}$$",
          "options": [
            {
              "id": "A",
              "text": "$(a)\\to 1,\\ (b)\\to 3,\\ (c)\\to 2,\\ (d)\\to 4$"
            },
            {
              "id": "B",
              "text": "$(a)\\to 3,\\ (b)\\to 1,\\ (c)\\to 2,\\ (d)\\to 4$"
            },
            {
              "id": "C",
              "text": "$(a)\\to 2,\\ (b)\\to 3,\\ (c)\\to 4,\\ (d)\\to 1$"
            },
            {
              "id": "D",
              "text": "$(a)\\to 3,\\ (b)\\to 2,\\ (c)\\to 1,\\ (d)\\to 4$"
            }
          ],
          "correct": "D",
          "explanation": "$n$ identifies the shell and the number of orbitals in it, $n^2$ $\\rightarrow (a)\\to 3$; $l = 0,1,2,\\ldots,(n-1)$ fixes the shape of the orbital $\\rightarrow (b)\\to 2$; $m_l$ fixes the orientation of the orbital $\\rightarrow (c)\\to 1$; and $s = +\\frac{1}{2}$ or $-\\frac{1}{2}$ gives the spin $\\rightarrow (d)\\to 4$."
        },
        {
          "id": "w4-chem-7",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding & Organic Basics)",
          "text": "Match List-I with List-II and select the correct answer.\n$$\\begin{array}{ll} \\text{List-I} & \\text{List-II} \\\\ \\hline\\text{(a) Aufbau principle} & \\text{(1) No two electrons in an atom can have the same set of four quantum numbers} \\\\[6pt]\\text{(b) Pauli exclusion principle} & \\text{(2) Orbitals are filled in the order of increasing energy} \\\\[6pt]\\text{(c) Hund's rule of maximum multiplicity} & \\text{(3) Degenerate orbitals are filled singly with parallel spins before pairing begins} \\\\[6pt]\\text{(d) Half-filled and fully-filled stability} & \\text{(4) An atom is more stable with half-filled or completely filled subshells} \\\\ \\end{array}$$",
          "options": [
            {
              "id": "A",
              "text": "$(a)\\to 1,\\ (b)\\to 2,\\ (c)\\to 4,\\ (d)\\to 3$"
            },
            {
              "id": "B",
              "text": "$(a)\\to 2,\\ (b)\\to 3,\\ (c)\\to 4,\\ (d)\\to 1$"
            },
            {
              "id": "C",
              "text": "$(a)\\to 2,\\ (b)\\to 1,\\ (c)\\to 3,\\ (d)\\to 4$"
            },
            {
              "id": "D",
              "text": "$(a)\\to 3,\\ (b)\\to 2,\\ (c)\\to 1,\\ (d)\\to 4$"
            }
          ],
          "correct": "C",
          "explanation": "Aufbau principle fills orbitals in increasing energy order $\\rightarrow (a)\\to 2$; Pauli's principle says no two electrons in an atom have the same four quantum numbers $\\rightarrow (b)\\to 1$; Hund's rule fills degenerate orbitals singly with parallel spins $\\rightarrow (c)\\to 3$; and half-filled $(p^3, d^5, f^7)$ and completely filled subshells give extra stability $\\rightarrow (d)\\to 4$."
        },
        {
          "id": "w4-chem-8",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding & Organic Basics)",
          "text": "The number of unpaired electrons in the ground state atom of the element with atomic number $24$ (Cr) is:",
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
              "text": "$6$"
            },
            {
              "id": "D",
              "text": "$4$"
            }
          ],
          "correct": "C",
          "explanation": "Chromium has the electronic configuration $[\\text{Ar}]\\,3d^{5}\\,4s^{1}$ (instead of $3d^4 4s^2$) because the half-filled $3d^5$ subshell is extra stable. All five $3d$ electrons and the single $4s$ electron are unpaired, giving $6$ unpaired electrons."
        },
        {
          "id": "w4-chem-9",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding & Organic Basics)",
          "text": "Match List-I with List-II and select the correct answer.\n$$\\begin{array}{ll} \\text{List-I} & \\text{List-II} \\\\ \\hline\\text{(a) Mg } (Z = 12) & \\text{(1) Period 4, group 8, d-block} \\\\[6pt]\\text{(b) Cl } (Z = 17) & \\text{(2) Period 6, f-block (lanthanide)} \\\\[6pt]\\text{(c) Fe } (Z = 26) & \\text{(3) Period 3, group 2, s-block} \\\\[6pt]\\text{(d) Ce } (Z = 58) & \\text{(4) Period 3, group 17, p-block} \\\\ \\end{array}$$",
          "options": [
            {
              "id": "A",
              "text": "$(a)\\to 3,\\ (b)\\to 4,\\ (c)\\to 1,\\ (d)\\to 2$"
            },
            {
              "id": "B",
              "text": "$(a)\\to 3,\\ (b)\\to 1,\\ (c)\\to 4,\\ (d)\\to 2$"
            },
            {
              "id": "C",
              "text": "$(a)\\to 4,\\ (b)\\to 3,\\ (c)\\to 1,\\ (d)\\to 2$"
            },
            {
              "id": "D",
              "text": "$(a)\\to 1,\\ (b)\\to 4,\\ (c)\\to 3,\\ (d)\\to 2$"
            }
          ],
          "correct": "A",
          "explanation": "Mg: $[\\text{Ne}]3s^2$  -  period $3$, group $2$, s-block $\\rightarrow (a)\\to 3$. Cl: $[\\text{Ne}]3s^23p^5$  -  period $3$, group $17$, p-block $\\rightarrow (b)\\to 4$. Fe: $[\\text{Ar}]3d^64s^2$  -  period $4$, group $8$, d-block $\\rightarrow (c)\\to 1$. Ce: $[\\text{Xe}]4f^15d^16s^2$  -  period $6$, f-block $\\rightarrow (d)\\to 2$."
        },
        {
          "id": "w4-chem-10",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding & Organic Basics)",
          "text": "The elements of the f-block are characterised by the filling of:",
          "options": [
            {
              "id": "A",
              "text": "the last shell s and p orbitals"
            },
            {
              "id": "B",
              "text": "the antepenultimate $(n-2)$ shell f orbitals"
            },
            {
              "id": "C",
              "text": "the outermost p orbitals"
            },
            {
              "id": "D",
              "text": "the penultimate shell d orbitals"
            }
          ],
          "correct": "B",
          "explanation": "In f-block elements the differentiating electron enters the $(n-2)f$ orbitals, that is, the antepenultimate shell, while $n$ increases. These are the lanthanides and actinides, also called inner transition elements. In d-block elements the entering electron goes into the penultimate $(n-1)$ shell d orbitals."
        },
        {
          "id": "w4-chem-11",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding & Organic Basics)",
          "text": "Moving from left to right across a period of the periodic table, one generally observes that:",
          "options": [
            {
              "id": "A",
              "text": "the atomic radius decreases, the ionisation enthalpy increases and the electronegativity increases"
            },
            {
              "id": "B",
              "text": "the atomic radius increases while ionisation enthalpy and electronegativity decrease"
            },
            {
              "id": "C",
              "text": "the atomic radius, ionisation enthalpy and electronegativity all increase"
            },
            {
              "id": "D",
              "text": "all three decrease"
            }
          ],
          "correct": "A",
          "explanation": "Across a period the number of electrons added to the same shell is only partly screened by inner electrons, so the effective nuclear charge $\\left(Z_{\\text{eff}}\\right)$ increases. The electrons are pulled more strongly, so the atomic radius decreases, the ionisation enthalpy increases and the electronegativity increases."
        },
        {
          "id": "w4-chem-12",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding & Organic Basics)",
          "text": "The correct increasing order of the first ionisation enthalpies of the elements Na, Mg, Al and Si is:",
          "options": [
            {
              "id": "A",
              "text": "$\\text{Na} < \\text{Al} < \\text{Mg} < \\text{Si}$"
            },
            {
              "id": "B",
              "text": "$\\text{Mg} < \\text{Na} < \\text{Al} < \\text{Si}$"
            },
            {
              "id": "C",
              "text": "$\\text{Na} < \\text{Mg} < \\text{Al} < \\text{Si}$"
            },
            {
              "id": "D",
              "text": "$\\text{Al} < \\text{Na} < \\text{Mg} < \\text{Si}$"
            }
          ],
          "correct": "A",
          "explanation": "Na $=\\,3s^1$, Mg $=\\,3s^2$, Al $=\\,3p^1$, Si $=\\,3p^2$. The $3s$ electrons are more deeply held than the $3p$ electrons, so the $3p^1$ electron of Al is removed more easily than the $3s^2$ electrons of Mg  -  an anomaly. In general $Z_{\\text{eff}}$ increases from left to right, hence the order is $\\text{Na} < \\text{Al} < \\text{Mg} < \\text{Si}$."
        },
        {
          "id": "w4-chem-13",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding & Organic Basics)",
          "text": "The elements of the second period show a diagonal relationship with certain elements of the third period. The pair that does NOT show such a diagonal relationship is:",
          "options": [
            {
              "id": "A",
              "text": "$\\text{Be and Al}$"
            },
            {
              "id": "B",
              "text": "$\\text{Na and Ne}$"
            },
            {
              "id": "C",
              "text": "$\\text{Li and Mg}$"
            },
            {
              "id": "D",
              "text": "$\\text{B and Si}$"
            }
          ],
          "correct": "B",
          "explanation": "The classic diagonal relationships are Li-Mg, Be-Al and B-Si, arising because of the close similarity in atomic radii, polarising power and charge density of these diagonal pairs (e.g. both $\\text{Li}_2\\text{O}$ and $\\text{MgO}$ are normal oxides). $\\text{Na}$ and $\\text{Ne}$ have comparable radii but belong to the same period type and show no comparable diagonal similarity."
        },
        {
          "id": "w4-chem-14",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding & Organic Basics)",
          "text": "Match List-I with List-II and select the correct answer.\n$$\\begin{array}{ll} \\text{List-I} & \\text{List-II} \\\\ \\hline\\text{(a) Coordinate bond} & \\text{(1) One of the bonded atoms donates both electrons of the shared pair} \\\\[6pt]\\text{(b) Formal charge} & \\text{(2) } V - \\left[\\, N + \\dfrac{1}{2}B \\,\\right] \\\\[6pt]\\text{(c) Resonance} & \\text{(3) Two or more canonical structures can be written for the same molecule} \\\\[6pt]\\text{(d) Dipole moment} & \\text{(4) Zero for symmetrical molecules such as } \\text{CO}_2 \\text{ and } \\text{BF}_3 \\\\ \\end{array}$$",
          "options": [
            {
              "id": "A",
              "text": "$(a)\\to 2,\\ (b)\\to 1,\\ (c)\\to 3,\\ (d)\\to 4$"
            },
            {
              "id": "B",
              "text": "$(a)\\to 1,\\ (b)\\to 2,\\ (c)\\to 3,\\ (d)\\to 4$"
            },
            {
              "id": "C",
              "text": "$(a)\\to 1,\\ (b)\\to 2,\\ (c)\\to 4,\\ (d)\\to 3$"
            },
            {
              "id": "D",
              "text": "$(a)\\to 1,\\ (b)\\to 3,\\ (c)\\to 2,\\ (d)\\to 4$"
            }
          ],
          "correct": "B",
          "explanation": "A coordinate (dative) bond is formed when one atom supplies both shared electrons $\\rightarrow (a)\\to 1$; formal charge $= V - (N + \\frac{1}{2}B)$ where $V$ is the number of valence electrons, $N$ the non-bonding electrons and $B$ the bonding electrons $\\rightarrow (b)\\to 2$; resonance arises when more than one canonical structure can be drawn for the same molecule, e.g. benzene or $\\text{NO}_3^-$ $\\rightarrow (c)\\to 3$; and symmetrical molecules have zero net dipole moment $\\rightarrow (d)\\to 4$."
        },
        {
          "id": "w4-chem-15",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding & Organic Basics)",
          "text": "According to the molecular orbital theory, the molecular orbital configuration of $O_2$ gives a bond order of $2$ and the molecule is paramagnetic. If one electron is removed from the highest-energy antibonding orbital to form $O_2^{+}$, the resulting bond order and magnetic character are:",
          "options": [
            {
              "id": "A",
              "text": "$2.5$ and paramagnetic"
            },
            {
              "id": "B",
              "text": "$2.5$ and diamagnetic"
            },
            {
              "id": "C",
              "text": "$3$ and paramagnetic"
            },
            {
              "id": "D",
              "text": "$1.5$ and paramagnetic"
            }
          ],
          "correct": "A",
          "explanation": "$$\\text{B.O.} = \\frac{N_b - N_a}{2}$$In $\\text{O}_2$, two electrons occupy the degenerate $\\pi^{*}$ antibonding orbitals, so $N_b = 10$, $N_a = 2$ and bond order $= \\frac{10-2}{2} = 2$. Forming $\\text{O}_2^{+}$ removes one electron from a $\\pi^{*}$ orbital: $N_a = 1$, $N_b = 10$.\n$$\\text{B.O.}(\\text{O}_2^{+}) = \\frac{10 - 1}{2} = 2.5$$One unpaired electron remains, so $\\text{O}_2^{+}$ is paramagnetic (it is far more stable than $\\text{O}_2^{+}$, which is why oxygen is paramagnetic in the gaseous state)."
        },
        {
          "id": "w4-chem-16",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding & Organic Basics)",
          "text": "Match List-I with List-II and select the correct answer.\n$$\\begin{array}{ll} \\text{List-I} & \\text{List-II} \\\\ \\hline\\text{(a) } \\text{BeCl}_2 & \\text{(1) Square planar, } sp^3d^2 \\\\[6pt]\\text{(b) } \\text{BF}_3 & \\text{(2) Tetrahedral, } sp^3 \\\\[6pt]\\text{(c) } \\text{CH}_4 & \\text{(3) Linear, } sp \\\\[6pt]\\text{(d) } \\text{NH}_3 & \\text{(4) Bent, } sp^3 \\\\[6pt]\\text{(e) } \\text{H}_2\\text{O} & \\text{(5) Trigonal planar, } sp^2 \\\\[6pt]\\text{(f) } \\text{XeF}_4 & \\text{(6) Trigonal pyramidal, } sp^3 \\\\ \\end{array}$$",
          "options": [
            {
              "id": "A",
              "text": "$(a)\\to 5,\\ (b)\\to 3,\\ (c)\\to 2,\\ (d)\\to 6,\\ (e)\\to 4,\\ (f)\\to 1$"
            },
            {
              "id": "B",
              "text": "$(a)\\to 3,\\ (b)\\to 5,\\ (c)\\to 2,\\ (d)\\to 6,\\ (e)\\to 4,\\ (f)\\to 1$"
            },
            {
              "id": "C",
              "text": "$(a)\\to 3,\\ (b)\\to 5,\\ (c)\\to 4,\\ (d)\\to 6,\\ (e)\\to 2,\\ (f)\\to 1$"
            },
            {
              "id": "D",
              "text": "$(a)\\to 3,\\ (b)\\to 5,\\ (c)\\to 2,\\ (d)\\to 4,\\ (e)\\to 6,\\ (f)\\to 1$"
            }
          ],
          "correct": "B",
          "explanation": "Using VSEPR theory: BeCl$_2$ is linear, $sp$ $\\rightarrow (a)\\to 3$; BF$_3$ is trigonal planar, $sp^2$ $\\rightarrow (b)\\to 5$; CH$_4$ is tetrahedral, $sp^3$ $\\rightarrow (c)\\to 2$; NH$_3$ has one lone pair giving a trigonal pyramidal shape, $sp^3$ $\\rightarrow (d)\\to 6$; H$_2$O has two lone pairs, so it is bent, $sp^3$ $\\rightarrow (e)\\to 4$; XeF$_4$ has two lone pairs on Xe giving a square planar shape, $sp^3d^2$ $\\rightarrow (f)\\to 1$."
        },
        {
          "id": "w4-chem-17",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding & Organic Basics)",
          "text": "Ionic compounds crystallise in different lattice structures depending on the relative sizes of the cation and the anion. The range of the radius ratio $\\dfrac{r^+}{r^-}$ for which an 8:8 coordination (CsCl type) structure is stable is:",
          "options": [
            {
              "id": "A",
              "text": "$0.414$ to $0.732$"
            },
            {
              "id": "B",
              "text": "$0.732$ to $1$"
            },
            {
              "id": "C",
              "text": "$0.225$ to $0.414$"
            },
            {
              "id": "D",
              "text": "$0.155$ to $0.225$"
            }
          ],
          "correct": "B",
          "explanation": "The cation sits in a hole formed by the anions. For coordination number $8$ the cation must be large enough to touch $8$ anions, which requires $\\frac{r^{+}}{r^{-}} \\ge 0.732$. Thus the ranges are: $0.732 - 1.0$  -  coordination $8$ (CsCl type); $0.414 - 0.732$  -  coordination $6$ (NaCl type, rock-salt structure); $0.225 - 0.414$  -  coordination $4$ (ZnS type)."
        },
        {
          "id": "w4-chem-18",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding & Organic Basics)",
          "text": "Match List-I with List-II and select the correct answer.\n$$\\begin{array}{ll} \\text{List-I} & \\text{List-II} \\\\ \\hline\\text{(a) Intermolecular hydrogen bonding} & \\text{(1) } \\text{HF} > \\text{HCl} > \\text{HBr} > \\text{HI} \\\\[6pt]\\text{(b) Intramolecular hydrogen bonding} & \\text{(2) Occurs within the same molecule, e.g. in } o\\text{-nitrophenol} \\\\[6pt]\\text{(c) Strength among the hydrogen halides} & \\text{(3) Explains the unusually high boiling point of water} \\\\[6pt]\\text{(d) Effect of hydrogen bonding on water} & \\text{(4) Occurs between the H of one molecule and an electronegative atom of another molecule \\\\ \\end{array}$$",
          "options": [
            {
              "id": "A",
              "text": "$(a)\\to 4,\\ (b)\\to 2,\\ (c)\\to 1,\\ (d)\\to 3$"
            },
            {
              "id": "B",
              "text": "$(a)\\to 3,\\ (b)\\to 2,\\ (c)\\to 1,\\ (d)\\to 4$"
            },
            {
              "id": "C",
              "text": "$(a)\\to 4,\\ (b)\\to 1,\\ (c)\\to 2,\\ (d)\\to 3$"
            },
            {
              "id": "D",
              "text": "$(a)\\to 2,\\ (b)\\to 4,\\ (c)\\to 1,\\ (d)\\to 3$"
            }
          ],
          "correct": "A",
          "explanation": "Intermolecular hydrogen bonding forms between molecules $\\rightarrow (a)\\to 4$; intramolecular (chelate) hydrogen bonding forms within the same molecule as in ortho-substituted nitrophenols and salicylaldehyde $\\rightarrow (b)\\to 2$; among the hydrogen halides the H-F bond is the most polar, so HF has the strongest hydrogen bonding $\\rightarrow (c)\\to 1$; and hydrogen bonding raises the boiling point of water well above that of $H_2S$ and $PH_3$ $\\rightarrow (d)\\to 3$."
        },
        {
          "id": "w4-chem-19",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding & Organic Basics)",
          "text": "The IUPAC name of the compound $\\text{CH}_3 - \\text{CH}(\\text{CH}_3) - \\text{CH}_2 - \\text{CH}_2 - \\text{OH}$ is:",
          "options": [
            {
              "id": "A",
              "text": "$3$-methylbutan-$1$-ol"
            },
            {
              "id": "B",
              "text": "$2$-methylbutan-$4$-ol"
            },
            {
              "id": "C",
              "text": "$3$-methylbutan-$2$-ol"
            },
            {
              "id": "D",
              "text": "$2$-methylbutan-$1$-ol"
            }
          ],
          "correct": "A",
          "explanation": "Choose the longest chain containing the $-\\text{OH}$ group: it has $4$ carbons, so the parent is butan-1-ol. Numbering must give the hydroxyl the lowest locant (C1); the methyl group then lies on C3. Hence the name is $3$-methylbutan-$1$-ol. (Because carbon is tetravalent, the compound has the same molecular formula as pentan-$1$-ol and pentan-$2$-ol  -  $C_5H_{12}O$  -  illustrating structural isomerism.)"
        },
        {
          "id": "w4-chem-20",
          "section": "Chemistry (Atomic Structure, Periodicity, Chemical Bonding & Organic Basics)",
          "text": "Match List-I with List-II and select the correct answer.\n$$\\begin{array}{ll} \\text{List-I} & \\text{List-II} \\\\ \\hline\\text{(a) Inductive effect} & \\text{(1) Shift of } \\pi\\text{-electrons of a multiple bond in the presence of an attacking reagent} \\\\[6pt]\\text{(b) Resonance} & \\text{(2) Polarisation of a } \\sigma\\text{-bond caused by the electronegativity of a bonded group} \\\\[6pt]\\text{(c) Hyperconjugation} & \\text{(3) Delocalisation of electrons over more than one bond} \\\\[6pt]\\text{(d) Electromeric effect} & \\text{(4) Stabilisation of a carbocation by the number of } \\alpha\\text{-hydrogens on adjacent carbons} \\\\ \\end{array}$$",
          "options": [
            {
              "id": "A",
              "text": "$(a)\\to 4,\\ (b)\\to 2,\\ (c)\\to 3,\\ (d)\\to 1$"
            },
            {
              "id": "B",
              "text": "$(a)\\to 2,\\ (b)\\to 1,\\ (c)\\to 3,\\ (d)\\to 4$"
            },
            {
              "id": "C",
              "text": "$(a)\\to 2,\\ (b)\\to 3,\\ (c)\\to 4,\\ (d)\\to 1$"
            },
            {
              "id": "D",
              "text": "$(a)\\to 1,\\ (b)\\to 3,\\ (c)\\to 4,\\ (d)\\to 2$"
            }
          ],
          "correct": "C",
          "explanation": "The inductive effect is the polarisation of a $\\sigma$-bond due to the electronegativity of a substituent, transmitted along the chain $\\rightarrow (a)\\to 2$; resonance is the delocalisation of electrons over more than one bond $\\rightarrow (b)\\to 3$; hyperconjugation is the stabilisation of a carbocation (or of an alkene) by the $\\alpha$-hydrogens on adjacent carbons, so stability is $3^\\circ > 2^\\circ > 1^\\circ$ $\\rightarrow (c)\\to 4$; the electromeric effect is the displacement of $\\pi$-electrons of a multiple bond when an electrophile attacks it $\\rightarrow (d)\\to 1$."
        },
        {
          "id": "w4-phy-1",
          "section": "Physics (Physical World, Measurements & Motion in a Straight Line)",
          "text": "Physics deals with the study of nature and natural phenomena. Which of the following studies does NOT come under the scope of physics?",
          "options": [
            {
              "id": "A",
              "text": "the working of the human heart"
            },
            {
              "id": "B",
              "text": "the motion of the planets around the sun"
            },
            {
              "id": "C",
              "text": "the properties of matter"
            },
            {
              "id": "D",
              "text": "the structure of the atom"
            }
          ],
          "correct": "A",
          "explanation": "The scope of physics covers mechanics, optics, thermodynamics, electricity, magnetism, atomic and nuclear physics and quantum physics  -  for example planetary motion, atomic structure and the properties of matter. The working of the human heart belongs to biology and medicine; the study of its mechanical and electrical aspects belongs to bio-physics, an applied branch of physics. Modern physics has transformed society through areas such as communication technology, lasers, semiconductors and nuclear energy."
        },
        {
          "id": "w4-phy-2",
          "section": "Physics (Physical World, Measurements & Motion in a Straight Line)",
          "text": "Match List-I with List-II and select the correct answer.\n$$\\begin{array}{ll} \\text{List-I} & \\text{List-II} \\\\ \\hline\\text{(a) Gravitational force} & \\text{(1) The strongest force; binds the nucleons inside the nucleus} \\\\[6pt]\\text{(b) Electromagnetic force} & \\text{(2) Responsible for radioactive } \\beta\\text{-decay} \\\\[6pt]\\text{(c) Strong nuclear force} & \\text{(3) Weakest but most universal; always attractive} \\\\[6pt]\\text{(d) Weak nuclear force} & \\text{(4) Holds the electrons in atoms; drives every chemical reaction} \\\\ \\end{array}$$",
          "options": [
            {
              "id": "A",
              "text": "$(a)\\to 1,\\ (b)\\to 2,\\ (c)\\to 3,\\ (d)\\to 4$"
            },
            {
              "id": "B",
              "text": "$(a)\\to 3,\\ (b)\\to 2,\\ (c)\\to 4,\\ (d)\\to 1$"
            },
            {
              "id": "C",
              "text": "$(a)\\to 3,\\ (b)\\to 4,\\ (c)\\to 1,\\ (d)\\to 2$"
            },
            {
              "id": "D",
              "text": "$(a)\\to 4,\\ (b)\\to 1,\\ (c)\\to 2,\\ (d)\\to 3$"
            }
          ],
          "correct": "C",
          "explanation": "The gravitational force is the weakest of the four but is always attractive and acts between all bodies possessing mass $\\rightarrow (a)\\to 3$; the electromagnetic force binds the electrons to the nucleus and is responsible for all chemical reactions $\\rightarrow (b)\\to 4$; the strong nuclear force is the strongest and operates only over a range of about $10^{-15}$ m, holding the nucleons together $\\rightarrow (c)\\to 1$; and the weak nuclear force accounts for $\\beta$-decay $\\rightarrow (d)\\to 2$."
        },
        {
          "id": "w4-phy-3",
          "section": "Physics (Physical World, Measurements & Motion in a Straight Line)",
          "text": "The Grand Unified Theory is an attempt to unify the following three fundamental interactions:",
          "options": [
            {
              "id": "A",
              "text": "electromagnetic, weak nuclear and strong nuclear"
            },
            {
              "id": "B",
              "text": "gravitational, strong nuclear and weak nuclear"
            },
            {
              "id": "C",
              "text": "all the four fundamental interactions"
            },
            {
              "id": "D",
              "text": "gravitational, electromagnetic and weak nuclear"
            }
          ],
          "correct": "A",
          "explanation": "The Grand Unified Theory aims to describe the electromagnetic, weak and strong interactions by a single unified gauge interaction. Gravitational and electromagnetic forces are both very much weaker than the strong force inside the nucleus, so gravity is not part of this unification. Electroweak unification of the electromagnetic and weak interactions was achieved in 1967 by Weinberg, Salam and Glashow. Unifying all four forces, including gravity, is still an open problem."
        },
        {
          "id": "w4-phy-4",
          "section": "Physics (Physical World, Measurements & Motion in a Straight Line)",
          "text": "Match List-I with List-II and select the correct answer.\n$$\\begin{array}{ll} \\text{List-I} & \\text{List-II} \\\\ \\hline\\text{(a) Length} & \\text{(1) second} \\\\[6pt]\\text{(b) Mass} & \\text{(2) mole} \\\\[6pt]\\text{(c) Time} & \\text{(3) kilogram} \\\\[6pt]\\text{(d) Amount of substance} & \\text{(4) metre} \\\\ \\end{array}$$",
          "options": [
            {
              "id": "A",
              "text": "$(a)\\to 4,\\ (b)\\to 3,\\ (c)\\to 1,\\ (d)\\to 2$"
            },
            {
              "id": "B",
              "text": "$(a)\\to 4,\\ (b)\\to 3,\\ (c)\\to 2,\\ (d)\\to 1$"
            },
            {
              "id": "C",
              "text": "$(a)\\to 3,\\ (b)\\to 4,\\ (c)\\to 1,\\ (d)\\to 2$"
            },
            {
              "id": "D",
              "text": "$(a)\\to 1,\\ (b)\\to 3,\\ (c)\\to 4,\\ (d)\\to 2$"
            }
          ],
          "correct": "A",
          "explanation": "SI base units are: length  -  metre $(a)\\to 4$; mass  -  kilogram, defined by the International Prototype Kilogram kept at Sevres near Paris $(b)\\to 3$; time  -  second, defined by $9192631770$ periods of radiation from the $Cs$-133 atom $(c)\\to 1$; amount of substance  -  mole, equal to the number of entities in $0.012$ kg of $C^{12}$ $(d)\\to 2$."
        },
        {
          "id": "w4-phy-5",
          "section": "Physics (Physical World, Measurements & Motion in a Straight Line)",
          "text": "The distance of the star Proxima Centauri from the Earth is about $4.0 \\times 10^{16}\\ \\text{m}$. Expressing this in light years, given $1\\ \\text{ly} = 9.46 \\times 10^{15}\\ \\text{m}$, the distance is:",
          "options": [
            {
              "id": "A",
              "text": "$4.2\\ \text{ly}$"
            },
            {
              "id": "B",
              "text": "$4.2 \times 10^{1}\\ \text{ly}$"
            },
            {
              "id": "C",
              "text": "$42\\ \text{ly}$"
            },
            {
              "id": "D",
              "text": "$0.42\\ \text{ly}$"
            }
          ],
          "correct": "A",
          "explanation": "$$d = \\frac{4.0 \\times 10^{16}}{9.46 \\times 10^{15}} = 4.23\\ \\text{ly} \\approx 4.2\\ \\text{ly}$$For very large astronomical distances light years and parsecs $(1\\ \\text{pc} = 3.08 \\times 10^{16}\\ \\text{m} = 3.26\\ \\text{ly})$ are used as units; for very large masses, units of solar masses and light years are convenient."
        },
        {
          "id": "w4-phy-6",
          "section": "Physics (Physical World, Measurements & Motion in a Straight Line)",
          "text": "Match List-I with List-II and select the correct answer.\n$$\\begin{array}{ll} \\text{List-I} & \\text{List-II} \\\\ \\hline\\text{(a) Size of a water molecule} & \\text{(1) } 9.1 \\times 10^{-31}\\ \\text{kg} \\\\[6pt]\\text{(b) Mass of an electron} & \\text{(2) } 10^{-15}\\ \\text{s}\\text{, measured using an atomic clock} \\\\[6pt]\\text{(c) Mass of a proton} & \\text{(3) } 1.67 \\times 10^{-27}\\ \\text{kg} \\\\[6pt]\\text{(d) Smallest time interval measured} & \\text{(4) } 2.8 \\times 10^{-10}\\ \\text{m} = 0.28\\ \\text{nm} \\\\ \\end{array}$$",
          "options": [
            {
              "id": "A",
              "text": "$(a)\\to 4,\\ (b)\\to 3,\\ (c)\\to 1,\\ (d)\\to 2$"
            },
            {
              "id": "B",
              "text": "$(a)\\to 4,\\ (b)\\to 1,\\ (c)\\to 3,\\ (d)\\to 2$"
            },
            {
              "id": "C",
              "text": "$(a)\\to 1,\\ (b)\\to 4,\\ (c)\\to 3,\\ (d)\\to 2$"
            },
            {
              "id": "D",
              "text": "$(a)\\to 2,\\ (b)\\to 1,\\ (c)\\to 3,\\ (d)\\to 4$"
            }
          ],
          "correct": "B",
          "explanation": "A molecule has a diameter of the order of $10^{-10}$ m, i.e. $0.28$ nm, and is measured with an electron microscope $\\rightarrow (a)\\to 4$; the mass of an electron is $9.1 \\times 10^{-31}$ kg, measured with a mass spectrograph $\\rightarrow (b)\\to 1$; the mass of a proton is $1.67 \\times 10^{-27}$ kg $\\rightarrow (c)\\to 3$; and atomic clocks are used to measure time intervals as small as $10^{-15}$ s, the second being defined as $9192631770$ periods of $Cs$-133 radiation $\\rightarrow (d)\\to 2$."
        },
        {
          "id": "w4-phy-7",
          "section": "Physics (Physical World, Measurements & Motion in a Straight Line)",
          "text": "A screw gauge has a least count of $0.01\\ \\text{mm}$ and a positive zero error of $0.02\\ \\text{mm}$. If the observed reading for a wire is $5.46\\ \\text{mm}$, the correct reading is:",
          "options": [
            {
              "id": "A",
              "text": "$5.45\\ \text{mm}$"
            },
            {
              "id": "B",
              "text": "$5.43\\ \text{mm}$"
            },
            {
              "id": "C",
              "text": "$5.48\\ \text{mm}$"
            },
            {
              "id": "D",
              "text": "$5.44\\ \text{mm}$"
            }
          ],
          "correct": "D",
          "explanation": "A positive zero error means the instrument reads a non-zero value when the jaws are in contact, so the correction has to be subtracted.\n$$\\text{Correct reading} = 5.46 - 0.02 = 5.44\\ \\text{mm}$$The maximum absolute error equals half the least count, so the result must be written as $5.440 \\pm 0.005\\ \\text{mm}$, and the relative error is $\\frac{0.005}{5.44} \\times 100 \\approx 0.09\\%$."
        },
        {
          "id": "w4-phy-8",
          "section": "Physics (Physical World, Measurements & Motion in a Straight Line)",
          "text": "Match List-I with List-II and select the correct answer.\n$$\\begin{array}{ll} \\text{List-I} & \\text{List-II} \\\\ \\hline\\text{(a) Systematic error} & \\text{(1) Consistent error in one direction caused by a faulty instrument or method} \\\\[6pt]\\text{(b) Random error} & \\text{(2) Irregular and unpredictable fluctuation of successive readings} \\\\[6pt]\\text{(c) Least count error} & \\text{(3) Maximum possible error equals half the least count of the instrument} \\\\[6pt]\\text{(d) Relative error} & \\text{(4) Absolute error expressed as a fraction of the measured value} \\\\ \\end{array}$$",
          "options": [
            {
              "id": "A",
              "text": "$(a)\\to 4,\\ (b)\\to 2,\\ (c)\\to 3,\\ (d)\\to 1$"
            },
            {
              "id": "B",
              "text": "$(a)\\to 1,\\ (b)\\to 3,\\ (c)\\to 2,\\ (d)\\to 4$"
            },
            {
              "id": "C",
              "text": "$(a)\\to 2,\\ (b)\\to 1,\\ (c)\\to 3,\\ (d)\\to 4$"
            },
            {
              "id": "D",
              "text": "$(a)\\to 1,\\ (b)\\to 2,\\ (c)\\to 3,\\ (d)\\to 4$"
            }
          ],
          "correct": "D",
          "explanation": "A systematic error is a consistent bias, e.g. the zero error of a screw gauge, and it can be eliminated by a correction $\\rightarrow (a)\\to 1$; a random error fluctuates irregularly and can only be reduced by taking many readings $\\rightarrow (b)\\to 2$; the least count error is at most half the least count $\\rightarrow (c)\\to 3$; the relative error $=\\frac{\\text{absolute error}}{\\text{measured value}}$, usually reported as a percentage, is independent of the unit chosen $\\rightarrow (d)\\to 4$."
        },
        {
          "id": "w4-phy-9",
          "section": "Physics (Physical World, Measurements & Motion in a Straight Line)",
          "text": "The diameter of a wire measured with an instrument of least count $0.001\\ \\text{cm}$ is $2.315\\ \\text{cm}$. The maximum possible absolute error and the corresponding percentage error are:",
          "options": [
            {
              "id": "A",
              "text": "$0.001\\ \text{cm}$ and $0.022\\%$"
            },
            {
              "id": "B",
              "text": "$0.0005\\ \text{cm}$ and $0.043\\%$"
            },
            {
              "id": "C",
              "text": "$0.0005\\ \text{cm}$ and $0.022\\%$"
            },
            {
              "id": "D",
              "text": "$0.001\\ \text{cm}$ and $0.043\\%$"
            }
          ],
          "correct": "C",
          "explanation": "Maximum absolute error $=\\frac{1}{2}\\times 0.001 = 0.0005\\ \\text{cm}$, so the reading is $2.315 \\pm 0.0005\\ \\text{cm}$.\n$$\\%\\text{ error} = \\frac{0.0005}{2.315} \\times 100 = 0.0216\\% \\approx 0.022\\%$$"
        },
        {
          "id": "w4-phy-10",
          "section": "Physics (Physical World, Measurements & Motion in a Straight Line)",
          "text": "Four repeated measurements of the same length by an instrument give $9.7\\ \\text{m},\\ 9.8\\ \\text{m},\\ 9.9\\ \\text{m}$ and $9.8\\ \\text{m}$, while the true value is $10.0\\ \\text{m}$. The instrument is:",
          "options": [
            {
              "id": "A",
              "text": "neither accurate nor precise"
            },
            {
              "id": "B",
              "text": "accurate but not precise"
            },
            {
              "id": "C",
              "text": "both accurate and precise"
            },
            {
              "id": "D",
              "text": "precise but not accurate"
            }
          ],
          "correct": "D",
          "explanation": "The four readings lie very close to one another, so the instrument is precise. Their mean is $9.8\\ \\text{m}$, which is far from the true value $10.0\\ \\text{m}$, so the instrument is not accurate. Accuracy is judged by the trueness of the mean of the readings, while precision is judged by how close the individual readings are to one another. The instrument therefore has a systematic error of $-0.2\\ \\text{m}$."
        },
        {
          "id": "w4-phy-11",
          "section": "Physics (Physical World, Measurements & Motion in a Straight Line)",
          "text": "In an experiment the quantity $y$ is calculated from $y = \\dfrac{x^2}{t}$. If the percentage errors in $x$ and $t$ are $2\\%$ and $3\\%$ respectively, the maximum percentage error in $y$ is:",
          "options": [
            {
              "id": "A",
              "text": "$5\\%$"
            },
            {
              "id": "B",
              "text": "$7\\%$"
            },
            {
              "id": "C",
              "text": "$1\\%$"
            },
            {
              "id": "D",
              "text": "$12\\%$"
            }
          ],
          "correct": "B",
          "explanation": "For $y = \\frac{x^2}{t}$, the maximum relative error is $2\\left(\\frac{\\Delta x}{x}\\right) + 1\\left(\\frac{\\Delta t}{t}\\right)$.\n$$\\%\\text{ error in } y = 2(2) + 3 = 7\\%$$Note that powers are multiplied by their exponents and the relative errors of the quantities in the denominator are added."
        },
        {
          "id": "w4-phy-12",
          "section": "Physics (Physical World, Measurements & Motion in a Straight Line)",
          "text": "The measured value of a length is $8.46\\ \\text{m}$ with an uncertainty of $0.05\\ \\text{m}$. Also, the result of the calculation $\\dfrac{0.0091 \\times 2.5}{4.4}$ is to be reported with the correct number of significant figures. These two values are:",
          "options": [
            {
              "id": "A",
              "text": "$8.46\\ \\text{m}$ and $0.0052$"
            },
            {
              "id": "B",
              "text": "$8.5\\ \\text{m}$ and $0.00517$"
            },
            {
              "id": "C",
              "text": "$8.5\\ \\text{m}$ and $0.0052$"
            },
            {
              "id": "D",
              "text": "$8.4\\ \\text{m}$ and $0.005$"
            }
          ],
          "correct": "C",
          "explanation": "The uncertainty $0.05\\ \\text{m}$ is significant only in the tenths place, so the first uncertain digit is the tenths digit and $8.46$ is rounded off to $8.5\\ \\text{m}$ (the dropped digit being $6 \\ge 5$).\\nFor multiplication and division the result is rounded off to the least number of significant figures among the factors. Here $2.5$ has two significant figures, so\n$$\\frac{0.0091 \\times 2.5}{4.4} = \\frac{0.02275}{4.4} = 0.005170\\ldots \\approx 0.0052$$"
        },
        {
          "id": "w4-phy-13",
          "section": "Physics (Physical World, Measurements & Motion in a Straight Line)",
          "text": "Which of the following equations is dimensionally consistent?",
          "options": [
            {
              "id": "A",
              "text": "$s = ut + \\dfrac{1}{2}at^2$"
            },
            {
              "id": "B",
              "text": "$s = ut^2$"
            },
            {
              "id": "C",
              "text": "$F = ma^2$"
            },
            {
              "id": "D",
              "text": "$v = u + at$"
            }
          ],
          "correct": "D",
          "explanation": "$[v] = LT^{-1}$, $[u] = LT^{-1}$ and $[at] = LT^{-2}\\times T = LT^{-1}$, so in $v = u + at$ all three terms have the same dimensions and the equation is consistent. In $s = ut^2$ the right-hand side has dimensions $LT$ instead of $L$; in $F = ma^2$ the right-hand side has dimensions $ML^2T^{-4}$ instead of $MLT^{-2}$; and although $s = ut + \\frac{1}{2}at^2$ is also consistent, it is not among the options given."
        },
        {
          "id": "w4-phy-14",
          "section": "Physics (Physical World, Measurements & Motion in a Straight Line)",
          "text": "The pressure exerted by a liquid on the walls of a moving tank is found to vary as $P = \\alpha v^{2}$, where $v$ is the velocity of the tank. The dimensional formula of the constant $\\alpha$ is:",
          "options": [
            {
              "id": "A",
              "text": "$[\\text{M L}^{-1}\\text{T}^{-2}]$"
            },
            {
              "id": "B",
              "text": "$[\\text{M L}^{2}\\text{T}^{-2}]$"
            },
            {
              "id": "C",
              "text": "$[\\text{L}^{-2}]$"
            },
            {
              "id": "D",
              "text": "$[\\text{M L}^{-3}]$"
            }
          ],
          "correct": "D",
          "explanation": "$$\\alpha = \\frac{P}{v^2} = \\frac{[ML^{-1}T^{-2}]}{[L^2T^{-2}]} = [ML^{-3}]$$Dimensional analysis of this kind is used to deduce relations among physical quantities when the relation cannot be derived directly; the constants obtained are then found experimentally."
        },
        {
          "id": "w4-phy-15",
          "section": "Physics (Physical World, Measurements & Motion in a Straight Line)",
          "text": "A person walks $4\\ \\text{km}$ due east, then $3\\ \\text{km}$ due north and then $4\\ \\text{km}$ due west. The path length covered and the displacement of the person are:",
          "options": [
            {
              "id": "A",
              "text": "path length $= 11\\ \\text{km}$, displacement $= 5\\ \\text{km}$ due north"
            },
            {
              "id": "B",
              "text": "path length $= 5\\ \\text{km}$, displacement $= 11\\ \\text{km}$ due north"
            },
            {
              "id": "C",
              "text": "path length $= 11\\ \\text{km}$, displacement $= 3\\ \\text{km}$ due south"
            },
            {
              "id": "D",
              "text": "path length $= 11\\ \\text{km}$, displacement $= 3\\ \\text{km}$ due north"
            }
          ],
          "correct": "D",
          "explanation": "Path length is the total distance actually travelled $= 4 + 3 + 4 = 11\\ \\text{km}$. Displacement is the straight-line change in position: the $4\\ \\text{km}$ east and the $4\\ \\text{km}$ west cancel, leaving $3\\ \\text{km}$ due north. Path length is always greater than or equal to the magnitude of the displacement, with equality only for motion along a straight line without reversal."
        },
        {
          "id": "w4-phy-16",
          "section": "Physics (Physical World, Measurements & Motion in a Straight Line)",
          "text": "A car covers the first half of a journey at $40\\ \\text{km h}^{-1}$ and the second half at $60\\ \\text{km h}^{-1}$. The average speed of the car for the whole journey is:",
          "options": [
            {
              "id": "A",
              "text": "$50\\ \text{km h}^{-1}$"
            },
            {
              "id": "B",
              "text": "$48\\ \text{km h}^{-1}$"
            },
            {
              "id": "C",
              "text": "$45\\ \text{km h}^{-1}$"
            },
            {
              "id": "D",
              "text": "$52\\ \text{km h}^{-1}$"
            }
          ],
          "correct": "B",
          "explanation": "The two halves are equal in length but not in time, so the average speed is the harmonic mean of the two speeds:\n$$v_{av} = \\frac{2}{\\frac{1}{40} + \\frac{1}{60}} = \\frac{2}{\\frac{3+2}{120}} = \\frac{240}{5} = 48\\ \\text{km h}^{-1}$$The simple mean $50\\ \\text{km h}^{-1}$ would be correct only if the two speeds were maintained for equal times. Had the car returned along the same route, the average velocity would have been zero."
        },
        {
          "id": "w4-phy-17",
          "section": "Physics (Physical World, Measurements & Motion in a Straight Line)",
          "text": "The position of a particle at time $t$ is given by $x = 3t^{2} - 2t\\ \\text{m}$. The instantaneous velocity of the particle at $t = 2\\ \\text{s}$ is:",
          "options": [
            {
              "id": "A",
              "text": "$6\\ \text{m s}^{-1}$"
            },
            {
              "id": "B",
              "text": "$12\\ \text{m s}^{-1}$"
            },
            {
              "id": "C",
              "text": "$8\\ \text{m s}^{-1}$"
            },
            {
              "id": "D",
              "text": "$10\\ \text{m s}^{-1}$"
            }
          ],
          "correct": "D",
          "explanation": "The instantaneous velocity is the derivative of the position function with respect to time:\n$$v = \\frac{dx}{dt} = 6t - 2$$$$v(2) = 6(2) - 2 = 10\\ \\text{m s}^{-1}$$"
        },
        {
          "id": "w4-phy-18",
          "section": "Physics (Physical World, Measurements & Motion in a Straight Line)",
          "text": "A body moves with a constant speed $v$ in a circle of radius $r$. The acceleration of the body is:",
          "options": [
            {
              "id": "A",
              "text": "of constant magnitude $\\dfrac{v^2}{r}$ directed towards the centre"
            },
            {
              "id": "B",
              "text": "zero, since the speed is constant"
            },
            {
              "id": "C",
              "text": "of constant magnitude but directed along the tangent"
            },
            {
              "id": "D",
              "text": "of constant magnitude $\\dfrac{v}{r}$ directed tangentially"
            }
          ],
          "correct": "A",
          "explanation": "Even though the speed is constant, the direction of the velocity changes continuously, so the body is accelerated. The acceleration is centripetal: $a = \\frac{v^2}{r}$, always directed towards the centre of the circle. Its magnitude is constant but its direction keeps changing, which is why uniform circular motion is accelerated motion."
        },
        {
          "id": "w4-phy-19",
          "section": "Physics (Physical World, Measurements & Motion in a Straight Line)",
          "text": "A stone is dropped from rest from a height of $45\\ \\text{m}$. Taking $g = 10\\ \\text{m s}^{-2}$, the time taken to reach the ground and the speed on striking the ground are:",
          "options": [
            {
              "id": "A",
              "text": "$3\\ \text{s}$ and $20\\ \text{m s}^{-1}$"
            },
            {
              "id": "B",
              "text": "$1.5\\ \text{s}$ and $15\\ \text{m s}^{-1}$"
            },
            {
              "id": "C",
              "text": "$3\\ \text{s}$ and $30\\ \text{m s}^{-1}$"
            },
            {
              "id": "D",
              "text": "$6\\ \text{s}$ and $60\\ \text{m s}^{-1}$"
            }
          ],
          "correct": "C",
          "explanation": "Using $s = ut + \\frac{1}{2}gt^{2}$ with $u = 0$ and $s = 45\\ \\text{m}$:\n$$45 = \\tfrac{1}{2}(10)t^{2} \\Rightarrow t^{2} = 9 \\Rightarrow t = 3\\ \\text{s}$$From $v = u + gt$: $v = 0 + 10(3) = 30\\ \\text{m s}^{-1}$, which agrees with $v^2 = 2gh = 2(10)(45) = 900$."
        },
        {
          "id": "w4-phy-20",
          "section": "Physics (Physical World, Measurements & Motion in a Straight Line)",
          "text": "A train $150\\ \\text{m}$ long moving at $30\\ \\text{km h}^{-1}$ overtakes a train $100\\ \\text{m}$ long moving at $20\\ \\text{km h}^{-1}$ in the same direction. The time taken for the complete overtaking is:",
          "options": [
            {
              "id": "A",
              "text": "$45\\ \text{s}$"
            },
            {
              "id": "B",
              "text": "$60\\ \text{s}$"
            },
            {
              "id": "C",
              "text": "$90\\ \text{s}$"
            },
            {
              "id": "D",
              "text": "$36\\ \text{s}$"
            }
          ],
          "correct": "C",
          "explanation": "The relative speed of the two trains is $30 - 20 = 10\\ \\text{km h}^{-1} = \\frac{10\\times5}{18} = \\frac{25}{9}\\ \\text{m s}^{-1}$. To overtake completely, the first train must cover a relative distance equal to the sum of the two lengths, $150 + 100 = 250\\ \\text{m}$.\n$$t = \\frac{250}{\\frac{25}{9}} = \\frac{250 \\times 9}{25} = 90\\ \\text{s}$$"
        }
      ]
    }
  ]
}

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
