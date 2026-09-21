(function () {
  window.BUNDLED_EXAMS = window.BUNDLED_EXAMS || { exams: [] };

  var payload = {
  "exams": [
    {
      "id": "weekly-mock-test-03",
      "title": "Weekly Mock Test - 3 (P&C, Probability, Dispersion | Bonding, Periodicity | Units)",
      "date": "2026-09-20",
      "durationMinutes": 90,
      "marksPerQuestion": 1,
      "negativeMark": 0,
      "sections": [
        {
          "key": "maths",
          "title": "Mathematics (Permutations, Combinations, Probability & Measures of Dispersion)",
          "count": 30,
          "start": 1,
          "end": 30
        },
        {
          "key": "chemistry",
          "title": "Chemistry (Atomic Structure, Periodic Properties & Chemical Bonding)",
          "count": 20,
          "start": 31,
          "end": 50
        },
        {
          "key": "physics",
          "title": "Physics (Physical World, Units & Dimensions)",
          "count": 10,
          "start": 51,
          "end": 60
        }
      ],
      "questions": [
        {
          "id": "w3-math-1",
          "section": "Mathematics (Permutations, Combinations, Probability & Measures of Dispersion)",
          "text": "In how many ways can a committee of 5 members be selected from a group of 6 men and 4 women such that the committee contains exactly 2 women?",
          "options": [
            {
              "id": "A",
              "text": "$120$"
            },
            {
              "id": "B",
              "text": "$240$"
            },
            {
              "id": "C",
              "text": "$60$"
            },
            {
              "id": "D",
              "text": "$180$"
            }
          ],
          "correct": "A",
          "explanation": "Choose 2 women out of 4 in ${{^4C_2} = 6}$ ways and 3 men out of 6 in ${{^6C_3} = 20}$ ways. Total committees $= 6 \\times 20 = 120$."
        },
        {
          "id": "w3-math-2",
          "section": "Mathematics (Permutations, Combinations, Probability & Measures of Dispersion)",
          "text": "Seven boys and three girls sit on a long bench. In how many ways can they be seated if all the three girls always sit together?",
          "options": [
            {
              "id": "A",
              "text": "$483840$"
            },
            {
              "id": "B",
              "text": "$241920$"
            },
            {
              "id": "C",
              "text": "$604800$"
            },
            {
              "id": "D",
              "text": "$120960$"
            }
          ],
          "correct": "B",
          "explanation": "Treat the 3 girls as a single block, giving $7 + 1 = 8$ units that can be arranged in $8! = 40320$ ways. The girls can arrange among themselves in $3! = 6$ ways. Total $= 40320 \\times 6 = 241920$."
        },
        {
          "id": "w3-math-3",
          "section": "Mathematics (Permutations, Combinations, Probability & Measures of Dispersion)",
          "text": "How many numbers greater than $1,00,000$ can be formed by using all the digits $2, 3, 0, 3, 4, 2$ (both $2$'s and both $3$'s are used)?",
          "options": [
            {
              "id": "A",
              "text": "$120$"
            },
            {
              "id": "B",
              "text": "$160$"
            },
            {
              "id": "C",
              "text": "$150$"
            },
            {
              "id": "D",
              "text": "$180$"
            }
          ],
          "correct": "C",
          "explanation": "Total arrangements of the 6 digits $= \\frac{6!}{2! \\, 2!} = 180$. Numbers starting with 0 (which are only 5-digit) $= \\frac{5!}{2! \\, 2!} = 30$. Numbers greater than $1,00,000 = 180 - 30 = 150$."
        },
        {
          "id": "w3-math-4",
          "section": "Mathematics (Permutations, Combinations, Probability & Measures of Dispersion)",
          "text": "A polygon has 35 diagonals. Find the number of its sides.",
          "options": [
            {
              "id": "A",
              "text": "$9$"
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
              "text": "$10$"
            }
          ],
          "correct": "D",
          "explanation": "Number of diagonals of an $n$-sided polygon is $\\frac{n(n-3)}{2} = 35$, i.e. $n^2 - 3n - 70 = 0$. Solving gives $n = 10$."
        },
        {
          "id": "w3-math-5",
          "section": "Mathematics (Permutations, Combinations, Probability & Measures of Dispersion)",
          "text": "In how many ways can 8 different books be arranged on a shelf such that two particular books are always together in a fixed order (the first immediately followed by the second)?",
          "options": [
            {
              "id": "A",
              "text": "$5040$"
            },
            {
              "id": "B",
              "text": "$10080$"
            },
            {
              "id": "C",
              "text": "$2520$"
            },
            {
              "id": "D",
              "text": "$720$"
            }
          ],
          "correct": "A",
          "explanation": "Treat the two books as one fixed unit (order fixed, so 1 internal arrangement). There are 7 units to arrange: $7! = 5040$."
        },
        {
          "id": "w3-math-6",
          "section": "Mathematics (Permutations, Combinations, Probability & Measures of Dispersion)",
          "text": "In how many ways can 8 distinct prizes be awarded to 3 boys if each boy may receive any number of prizes (including zero)?",
          "options": [
            {
              "id": "A",
              "text": "$2187$"
            },
            {
              "id": "B",
              "text": "$6561$"
            },
            {
              "id": "C",
              "text": "$243$"
            },
            {
              "id": "D",
              "text": "$512$"
            }
          ],
          "correct": "B",
          "explanation": "Each of the 8 distinct prizes can be given to any one of the 3 boys independently: $3^8 = 6561$ ways."
        },
        {
          "id": "w3-math-7",
          "section": "Mathematics (Permutations, Combinations, Probability & Measures of Dispersion)",
          "text": "A number lock opens with a 3-digit code using digits $0$ to $9$. How many different codes are possible if no digit is repeated?",
          "options": [
            {
              "id": "A",
              "text": "$5040$"
            },
            {
              "id": "B",
              "text": "$900$"
            },
            {
              "id": "C",
              "text": "$720$"
            },
            {
              "id": "D",
              "text": "$1000$"
            }
          ],
          "correct": "C",
          "explanation": "First digit 10 choices, second 9, third 8: $10 \\times 9 \\times 8 = 720$ codes."
        },
        {
          "id": "w3-math-8",
          "section": "Mathematics (Permutations, Combinations, Probability & Measures of Dispersion)",
          "text": "In how many ways can the letters of the word $\\text{EBENEZER}$ be arranged if the three E's are never all together as a single block?",
          "options": [
            {
              "id": "A",
              "text": "$6720$"
            },
            {
              "id": "B",
              "text": "$5280$"
            },
            {
              "id": "C",
              "text": "$7200$"
            },
            {
              "id": "D",
              "text": "$6000$"
            }
          ],
          "correct": "D",
          "explanation": "Total arrangements $= \\frac{8!}{3!} = 6720$. Arrangements with all three E's together $= 6! = 720$ (E's among themselves are identical). Never all together $= 6720 - 720 = 6000$."
        },
        {
          "id": "w3-math-9",
          "section": "Mathematics (Permutations, Combinations, Probability & Measures of Dispersion)",
          "text": "In how many ways can 4 different books be distributed between 2 students so that each student receives at least one book?",
          "options": [
            {
              "id": "A",
              "text": "$14$"
            },
            {
              "id": "B",
              "text": "$16$"
            },
            {
              "id": "C",
              "text": "$12$"
            },
            {
              "id": "D",
              "text": "$8$"
            }
          ],
          "correct": "A",
          "explanation": "Total distributions $= 2^4 = 16$. Exclude the 2 cases where all books go to a single student: $16 - 2 = 14$."
        },
        {
          "id": "w3-math-10",
          "section": "Mathematics (Permutations, Combinations, Probability & Measures of Dispersion)",
          "text": "How many 4-digit numbers divisible by 5 can be formed using the digits $\\{1, 2, 3, 4, 5, 6\\}$ if repetition of digits is allowed?",
          "options": [
            {
              "id": "A",
              "text": "$72$"
            },
            {
              "id": "B",
              "text": "$216$"
            },
            {
              "id": "C",
              "text": "$1296$"
            },
            {
              "id": "D",
              "text": "$108$"
            }
          ],
          "correct": "B",
          "explanation": "For divisibility by 5 the last digit must be 5 (only digit divisible by 5 in the set): 1 choice. Each of the first three digits has 6 choices: $6^3 = 216$."
        },
        {
          "id": "w3-math-11",
          "section": "Mathematics (Permutations, Combinations, Probability & Measures of Dispersion)",
          "text": "Two fair dice are thrown once. What is the probability that the sum of the numbers on them is an even prime number?",
          "options": [
            {
              "id": "A",
              "text": "$\\frac{1}{18}$"
            },
            {
              "id": "B",
              "text": "$\\frac{1}{12}$"
            },
            {
              "id": "C",
              "text": "$\\frac{1}{36}$"
            },
            {
              "id": "D",
              "text": "$\\frac{5}{36}$"
            }
          ],
          "correct": "C",
          "explanation": "The only even prime is 2, which occurs only for the outcome $(1, 1)$. Favorable outcomes $= 1$ out of $36$, so $P = \\frac{1}{36}$."
        },
        {
          "id": "w3-math-12",
          "section": "Mathematics (Permutations, Combinations, Probability & Measures of Dispersion)",
          "text": "A fair coin is tossed 5 times. Find the probability of getting exactly 3 heads.",
          "options": [
            {
              "id": "A",
              "text": "$\\frac{3}{16}$"
            },
            {
              "id": "B",
              "text": "$\\frac{1}{2}$"
            },
            {
              "id": "C",
              "text": "$\\frac{5}{32}$"
            },
            {
              "id": "D",
              "text": "$\\frac{5}{16}$"
            }
          ],
          "correct": "D",
          "explanation": "Number of ways to choose 3 positions for heads $= {^5C_3} = 10$ out of $2^5 = 32$ total outcomes. $P = \\frac{10}{32} = \\frac{5}{16}$."
        },
        {
          "id": "w3-math-13",
          "section": "Mathematics (Permutations, Combinations, Probability & Measures of Dispersion)",
          "text": "Two cards are drawn at random without replacement from a well-shuffled pack of 52 cards. Find the probability that both are kings.",
          "options": [
            {
              "id": "A",
              "text": "$\\frac{1}{221}$"
            },
            {
              "id": "B",
              "text": "$\\frac{1}{169}$"
            },
            {
              "id": "C",
              "text": "$\\frac{1}{1326}$"
            },
            {
              "id": "D",
              "text": "$\\frac{2}{221}$"
            }
          ],
          "correct": "A",
          "explanation": "$P = \\frac{4}{52} \\times \\frac{3}{51} = \\frac{12}{2652} = \\frac{1}{221}$."
        },
        {
          "id": "w3-math-14",
          "section": "Mathematics (Permutations, Combinations, Probability & Measures of Dispersion)",
          "text": "The probabilities that three students can solve a problem are $\\frac{2}{3}$, $\\frac{1}{2}$ and $\\frac{2}{5}$ respectively. If all three attempt it independently, what is the probability that the problem will be solved?",
          "options": [
            {
              "id": "A",
              "text": "$\\frac{5}{6}$"
            },
            {
              "id": "B",
              "text": "$\\frac{9}{10}$"
            },
            {
              "id": "C",
              "text": "$\\frac{7}{10}$"
            },
            {
              "id": "D",
              "text": "$\\frac{4}{5}$"
            }
          ],
          "correct": "B",
          "explanation": "The problem is unsolved only when all three fail: $\\frac{1}{3} \\times \\frac{1}{2} \\times \\frac{3}{5} = \\frac{1}{10}$. Probability solved $= 1 - \\frac{1}{10} = \\frac{9}{10}$."
        },
        {
          "id": "w3-math-15",
          "section": "Mathematics (Permutations, Combinations, Probability & Measures of Dispersion)",
          "text": "A box contains 3 red and 5 green balls. Two balls are drawn at random without replacement. Find the probability that the two balls drawn are of different colours.",
          "options": [
            {
              "id": "A",
              "text": "$\\frac{1}{2}$"
            },
            {
              "id": "B",
              "text": "$\\frac{3}{8}$"
            },
            {
              "id": "C",
              "text": "$\\frac{15}{28}$"
            },
            {
              "id": "D",
              "text": "$\\frac{13}{28}$"
            }
          ],
          "correct": "C",
          "explanation": "$P = \\frac{3}{8} \\times \\frac{5}{7} + \\frac{5}{8} \\times \\frac{3}{7} = \\frac{30}{56} = \\frac{15}{28}$."
        },
        {
          "id": "w3-math-16",
          "section": "Mathematics (Permutations, Combinations, Probability & Measures of Dispersion)",
          "text": "The probability that a student passes a certain test is $\\frac{3}{4}$. If 4 students take the test independently, what is the probability that at least one of them passes?",
          "options": [
            {
              "id": "A",
              "text": "$\\frac{63}{64}$"
            },
            {
              "id": "B",
              "text": "$\\frac{15}{16}$"
            },
            {
              "id": "C",
              "text": "$\\frac{1}{4}$"
            },
            {
              "id": "D",
              "text": "$\\frac{255}{256}$"
            }
          ],
          "correct": "D",
          "explanation": "Probability that all four fail $= \\left(\\frac{1}{4}\\right)^4 = \\frac{1}{256}$. At least one passes $= 1 - \\frac{1}{256} = \\frac{255}{256}$."
        },
        {
          "id": "w3-math-17",
          "section": "Mathematics (Permutations, Combinations, Probability & Measures of Dispersion)",
          "text": "A fair die is thrown twice. Find the probability that the product of the two numbers shown is a perfect square.",
          "options": [
            {
              "id": "A",
              "text": "$\\frac{2}{9}$"
            },
            {
              "id": "B",
              "text": "$\\frac{1}{9}$"
            },
            {
              "id": "C",
              "text": "$\\frac{1}{6}$"
            },
            {
              "id": "D",
              "text": "$\\frac{5}{36}$"
            }
          ],
          "correct": "A",
          "explanation": "Favorable ordered pairs: $(1,1), (1,4), (4,1), (2,2), (3,3), (4,4), (5,5), (6,6)$ - 8 outcomes. $P = \\frac{8}{36} = \\frac{2}{9}$."
        },
        {
          "id": "w3-math-18",
          "section": "Mathematics (Permutations, Combinations, Probability & Measures of Dispersion)",
          "text": "A bag contains 4 white and 5 black balls. A ball is drawn, its colour noted, and then replaced. This is done twice. Find the probability that both drawn balls are of the same colour.",
          "options": [
            {
              "id": "A",
              "text": "$\\frac{20}{81}$"
            },
            {
              "id": "B",
              "text": "$\\frac{41}{81}$"
            },
            {
              "id": "C",
              "text": "$\\frac{40}{81}$"
            },
            {
              "id": "D",
              "text": "$\\frac{1}{2}$"
            }
          ],
          "correct": "B",
          "explanation": "Both white $= \\left(\\frac{4}{9}\\right)^2 = \\frac{16}{81}$ and both black $= \\left(\\frac{5}{9}\\right)^2 = \\frac{25}{81}$. Same colour $= \\frac{16 + 25}{81} = \\frac{41}{81}$."
        },
        {
          "id": "w3-math-19",
          "section": "Mathematics (Permutations, Combinations, Probability & Measures of Dispersion)",
          "text": "In a class, $60\\%$ of the students passed Mathematics and $50\\%$ of the total students passed both Mathematics and Physics. If a student who passed Mathematics is chosen at random, what is the probability that this student also passed Physics?",
          "options": [
            {
              "id": "A",
              "text": "$\\frac{1}{2}$"
            },
            {
              "id": "B",
              "text": "$\\frac{2}{3}$"
            },
            {
              "id": "C",
              "text": "$\\frac{5}{6}$"
            },
            {
              "id": "D",
              "text": "$\\frac{3}{5}$"
            }
          ],
          "correct": "C",
          "explanation": "$P(\\text{Physics} \\mid \\text{Maths}) = \\frac{P(M \\cap P)}{P(M)} = \\frac{0.50}{0.60} = \\frac{5}{6}$."
        },
        {
          "id": "w3-math-20",
          "section": "Mathematics (Permutations, Combinations, Probability & Measures of Dispersion)",
          "text": "Two events $A$ and $B$ are independent. If $P(A) = \\frac{1}{4}$ and $P(A \\cup B) = \\frac{5}{8}$, then $P(B)$ equals:",
          "options": [
            {
              "id": "A",
              "text": "$\\frac{3}{8}$"
            },
            {
              "id": "B",
              "text": "$\\frac{5}{8}$"
            },
            {
              "id": "C",
              "text": "$\\frac{1}{4}$"
            },
            {
              "id": "D",
              "text": "$\\frac{1}{2}$"
            }
          ],
          "correct": "D",
          "explanation": "For independent events, $P(A \\cup B) = P(A) + P(B) - P(A)P(B)$. Let $x = P(B)$: $\\frac{5}{8} = \\frac{1}{4} + x - \\frac{x}{4} \\Rightarrow \\frac{3}{8} = \\frac{3x}{4} \\Rightarrow x = \\frac{1}{2}$."
        },
        {
          "id": "w3-math-21",
          "section": "Mathematics (Permutations, Combinations, Probability & Measures of Dispersion)",
          "text": "For the data $12, 18, 25, 9, 31, 7, 42, 15$, the range is:",
          "options": [
            {
              "id": "A",
              "text": "$35$"
            },
            {
              "id": "B",
              "text": "$36$"
            },
            {
              "id": "C",
              "text": "$33$"
            },
            {
              "id": "D",
              "text": "$30$"
            }
          ],
          "correct": "A",
          "explanation": "Range $= \\text{maximum} - \\text{minimum} = 42 - 7 = 35$."
        },
        {
          "id": "w3-math-22",
          "section": "Mathematics (Permutations, Combinations, Probability & Measures of Dispersion)",
          "text": "The variance of the first $n$ natural numbers is:",
          "options": [
            {
              "id": "A",
              "text": "$\\frac{n^2 - n}{12}$"
            },
            {
              "id": "B",
              "text": "$\\frac{n^2 - 1}{12}$"
            },
            {
              "id": "C",
              "text": "$\\frac{n^2 + 1}{12}$"
            },
            {
              "id": "D",
              "text": "$\\frac{n - 1}{12}$"
            }
          ],
          "correct": "B",
          "explanation": "For first $n$ natural numbers, variance $= \\frac{n^2 - 1}{12}$ (mean $= \\frac{n+1}{2}$)."
        },
        {
          "id": "w3-math-23",
          "section": "Mathematics (Permutations, Combinations, Probability & Measures of Dispersion)",
          "text": "The variance of the five observations $5, 5, 5, 5, 5$ is:",
          "options": [
            {
              "id": "A",
              "text": "$1$"
            },
            {
              "id": "B",
              "text": "$25$"
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
          "correct": "C",
          "explanation": "All observations are identical, so every deviation from the mean is zero; variance $= 0$."
        },
        {
          "id": "w3-math-24",
          "section": "Mathematics (Permutations, Combinations, Probability & Measures of Dispersion)",
          "text": "The mean of 5 numbers is 12. If the observation 18 is replaced by 12, the new mean is:",
          "options": [
            {
              "id": "A",
              "text": "$11.2$"
            },
            {
              "id": "B",
              "text": "$12.0$"
            },
            {
              "id": "C",
              "text": "$10.4$"
            },
            {
              "id": "D",
              "text": "$10.8$"
            }
          ],
          "correct": "D",
          "explanation": "Original sum $= 5 \\times 12 = 60$. New sum $= 60 - 18 + 12 = 54$. New mean $= \\frac{54}{5} = 10.8$."
        },
        {
          "id": "w3-math-25",
          "section": "Mathematics (Permutations, Combinations, Probability & Measures of Dispersion)",
          "text": "The standard deviation of a data set is 4. If every observation is multiplied by 2 and then 3 is added to it, the new standard deviation is:",
          "options": [
            {
              "id": "A",
              "text": "$8$"
            },
            {
              "id": "B",
              "text": "$11$"
            },
            {
              "id": "C",
              "text": "$6$"
            },
            {
              "id": "D",
              "text": "$7$"
            }
          ],
          "correct": "A",
          "explanation": "Standard deviation is unaffected by adding a constant but is scaled by each multiplicative factor: new S.D. $= 4 \\times 2 = 8$."
        },
        {
          "id": "w3-math-26",
          "section": "Mathematics (Permutations, Combinations, Probability & Measures of Dispersion)",
          "text": "For the data $1, 3, 5, 7, 9, 11, 13, 15$, the mean deviation about the mean is:",
          "options": [
            {
              "id": "A",
              "text": "$5$"
            },
            {
              "id": "B",
              "text": "$4$"
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
          "correct": "B",
          "explanation": "Mean $= 8$. Sum of absolute deviations $= 7 + 5 + 3 + 1 + 1 + 3 + 5 + 7 = 32$. Mean deviation $= \\frac{32}{8} = 4$."
        },
        {
          "id": "w3-math-27",
          "section": "Mathematics (Permutations, Combinations, Probability & Measures of Dispersion)",
          "text": "The coefficient of variation of the data $4, 6, 8, 10, 12$ is:",
          "options": [
            {
              "id": "A",
              "text": "$20\\sqrt{2}\\%$"
            },
            {
              "id": "B",
              "text": "$15\\sqrt{2}\\%$"
            },
            {
              "id": "C",
              "text": "$25\\sqrt{2}\\%$"
            },
            {
              "id": "D",
              "text": "$12\\sqrt{2}\\%$"
            }
          ],
          "correct": "C",
          "explanation": "Mean $= 8$, variance $= \\frac{(16+4+0+4+16)}{5} = 8$, so S.D. $= \\sqrt{8} = 2\\sqrt{2}$. Coefficient of variation $= \\frac{2\\sqrt{2}}{8} \\times 100 = 25\\sqrt{2}\\%$."
        },
        {
          "id": "w3-math-28",
          "section": "Mathematics (Permutations, Combinations, Probability & Measures of Dispersion)",
          "text": "The mean of a distribution is 20 and its coefficient of variation is $25\\%$. The standard deviation of the distribution is:",
          "options": [
            {
              "id": "A",
              "text": "$4$"
            },
            {
              "id": "B",
              "text": "$8$"
            },
            {
              "id": "C",
              "text": "$6$"
            },
            {
              "id": "D",
              "text": "$5$"
            }
          ],
          "correct": "D",
          "explanation": "Coefficient of variation $= \\frac{\\sigma}{\\bar{x}} \\times 100 \\Rightarrow 25 = \\frac{\\sigma}{20} \\times 100 \\Rightarrow \\sigma = 5$."
        },
        {
          "id": "w3-math-29",
          "section": "Mathematics (Permutations, Combinations, Probability & Measures of Dispersion)",
          "text": "The quartile deviation (semi-interquartile range) of the data $5, 8, 12, 15, 18, 20, 24, 27, 30, 33, 36$ is:",
          "options": [
            {
              "id": "A",
              "text": "$9$"
            },
            {
              "id": "B",
              "text": "$18$"
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
          "correct": "A",
          "explanation": "$n = 11$. $Q_1$ is the 3rd value $= 12$; $Q_3$ is the 9th value $= 30$. Quartile deviation $= \\frac{Q_3 - Q_1}{2} = \\frac{30 - 12}{2} = 9$."
        },
        {
          "id": "w3-math-30",
          "section": "Mathematics (Permutations, Combinations, Probability & Measures of Dispersion)",
          "text": "The mean of 100 observations is 40. It is later found that one observation 45 was wrongly recorded as 54. The correct mean is:",
          "options": [
            {
              "id": "A",
              "text": "$39.1$"
            },
            {
              "id": "B",
              "text": "$39.91$"
            },
            {
              "id": "C",
              "text": "$39.5$"
            },
            {
              "id": "D",
              "text": "$40.09$"
            }
          ],
          "correct": "B",
          "explanation": "Incorrect sum $= 100 \\times 40 = 4000$. Corrected sum $= 4000 - 54 + 45 = 3991$. Correct mean $= \\frac{3991}{100} = 39.91$."
        },
        {
          "id": "w3-chem-31",
          "section": "Chemistry (Atomic Structure, Periodic Properties & Chemical Bonding)",
          "text": "The energy of an electron in the first Bohr orbit of a hydrogen atom is $-13.6\\text{ eV}$. The energy of an electron in the fourth Bohr orbit is:",
          "options": [
            {
              "id": "A",
              "text": "$-1.51\\text{ eV}$"
            },
            {
              "id": "B",
              "text": "$-0.54\\text{ eV}$"
            },
            {
              "id": "C",
              "text": "$-0.85\\text{ eV}$"
            },
            {
              "id": "D",
              "text": "$-3.4\\text{ eV}$"
            }
          ],
          "correct": "C",
          "explanation": "For hydrogen-like species, $E_n = -\\frac{13.6\\,Z^2}{n^2}\\text{ eV}$. For $n = 4$, $E_4 = -\\frac{13.6}{16} = -0.85\\text{ eV}$."
        },
        {
          "id": "w3-chem-32",
          "section": "Chemistry (Atomic Structure, Periodic Properties & Chemical Bonding)",
          "text": "Using the Rydberg formula with $R = 1.097 \\times 10^7\\text{ m}^{-1}$, the wavelength of the light emitted when an electron in a hydrogen atom jumps from $n = 3$ to $n = 2$ (first line of the Balmer series) is approximately:",
          "options": [
            {
              "id": "A",
              "text": "$486\\text{ nm}$"
            },
            {
              "id": "B",
              "text": "$434\\text{ nm}$"
            },
            {
              "id": "C",
              "text": "$410\\text{ nm}$"
            },
            {
              "id": "D",
              "text": "$656\\text{ nm}$"
            }
          ],
          "correct": "D",
          "explanation": "$\\frac{1}{\\lambda} = R\\left(\\frac{1}{2^2} - \\frac{1}{3^2}\\right) = R \\times \\frac{5}{36}$, so $\\lambda = \\frac{36}{5R} = \\frac{36}{5 \\times 1.097 \\times 10^7} \\approx 6.56 \\times 10^{-7}\\text{ m} = 656\\text{ nm}$ (the $H_\\alpha$ line)."
        },
        {
          "id": "w3-chem-33",
          "section": "Chemistry (Atomic Structure, Periodic Properties & Chemical Bonding)",
          "text": "An electron is accelerated through a potential difference of $100\\text{ V}$. Its de Broglie wavelength is approximately:",
          "options": [
            {
              "id": "A",
              "text": "$1.227\\\\text{Å}$"
            },
            {
              "id": "B",
              "text": "$12.27\\\\text{Å}$"
            },
            {
              "id": "C",
              "text": "$0.1227\\\\text{Å}$"
            },
            {
              "id": "D",
              "text": "$0.01227\\\\text{Å}$"
            }
          ],
          "correct": "A",
          "explanation": "$\\lambda = \\frac{12.27}{\\sqrt{V}}\\\\text{Å} = \\frac{12.27}{\\sqrt{100}} = 1.227\\\\text{Å}$."
        },
        {
          "id": "w3-chem-34",
          "section": "Chemistry (Atomic Structure, Periodic Properties & Chemical Bonding)",
          "text": "The correct set of four quantum numbers $(n, l, m_l, m_s)$ for the outermost electron in a sodium atom ($Z = 11$) in its ground state is:",
          "options": [
            {
              "id": "A",
              "text": "$(2, 0, 0, +\\frac{1}{2})$"
            },
            {
              "id": "B",
              "text": "$(3, 0, 0, +\\frac{1}{2})$"
            },
            {
              "id": "C",
              "text": "$(3, 1, 0, +\\frac{1}{2})$"
            },
            {
              "id": "D",
              "text": "$(3, 1, 1, +\\frac{1}{2})$"
            }
          ],
          "correct": "B",
          "explanation": "Sodium has the electronic configuration $1s^2 2s^2 2p^6 3s^1$. The outermost (3s) electron has $n = 3$, $l = 0$, $m_l = 0$, $m_s = +\\frac{1}{2}$ (or $-\\frac{1}{2}$)."
        },
        {
          "id": "w3-chem-35",
          "section": "Chemistry (Atomic Structure, Periodic Properties & Chemical Bonding)",
          "text": "The number of unpaired electrons present in the ground state of the $\\text{Fe}^{3+}$ ion ($Z = 26$) is:",
          "options": [
            {
              "id": "A",
              "text": "$6$"
            },
            {
              "id": "B",
              "text": "$3$"
            },
            {
              "id": "C",
              "text": "$5$"
            },
            {
              "id": "D",
              "text": "$4$"
            }
          ],
          "correct": "C",
          "explanation": "$\\text{Fe}$: $[\\text{Ar}] 3d^6 4s^2$. Removing three electrons gives $\\text{Fe}^{3+}$: $[\\text{Ar}] 3d^5$, which has 5 unpaired electrons."
        },
        {
          "id": "w3-chem-36",
          "section": "Chemistry (Atomic Structure, Periodic Properties & Chemical Bonding)",
          "text": "Among the isoelectronic species $\\text{Ca}^{2+}$, $\\text{K}^+$, $\\text{Ar}$, $\\text{Cl}^-$, and $\\text{S}^{2-}$, the one having the smallest ionic radius is:",
          "options": [
            {
              "id": "A",
              "text": "$\\text{K}^+$"
            },
            {
              "id": "B",
              "text": "$\\text{Ar}$"
            },
            {
              "id": "C",
              "text": "$\\text{Cl}^-$"
            },
            {
              "id": "D",
              "text": "$\\text{Ca}^{2+}$"
            }
          ],
          "correct": "D",
          "explanation": "All five species have 18 electrons. Among isoelectronic species, ionic radius decreases as nuclear charge increases, so $\\text{Ca}^{2+}$ ($Z = 20$) has the smallest radius."
        },
        {
          "id": "w3-chem-37",
          "section": "Chemistry (Atomic Structure, Periodic Properties & Chemical Bonding)",
          "text": "Which of the following elements has the highest first ionisation enthalpy: $\\text{Na}$, $\\text{Mg}$, $\\text{Al}$, or $\\text{Si}$?",
          "options": [
            {
              "id": "A",
              "text": "$\\text{Si}$"
            },
            {
              "id": "B",
              "text": "$\\text{Mg}$"
            },
            {
              "id": "C",
              "text": "$\\text{Al}$"
            },
            {
              "id": "D",
              "text": "$\\text{Na}$"
            }
          ],
          "correct": "A",
          "explanation": "Across the third period, ionisation enthalpy increases with $Z_{eff}$: Na $(496) < \\text{Al} (578) < \\text{Mg} (738) < \\text{Si} (786)$ kJ/mol. Hence Si has the highest value."
        },
        {
          "id": "w3-chem-38",
          "section": "Chemistry (Atomic Structure, Periodic Properties & Chemical Bonding)",
          "text": "The outer electronic configuration $7s^2$ belongs to an element placed in which of the following positions of the periodic table?",
          "options": [
            {
              "id": "A",
              "text": "Group 2, Period 6"
            },
            {
              "id": "B",
              "text": "Group 2, Period 7"
            },
            {
              "id": "C",
              "text": "Group 1, Period 7"
            },
            {
              "id": "D",
              "text": "Group 12, Period 6"
            }
          ],
          "correct": "B",
          "explanation": "An $ns^2$ configuration belongs to the s-block, group 2 (alkaline earth metals). With $n = 7$, the element is in Period 7."
        },
        {
          "id": "w3-chem-39",
          "section": "Chemistry (Atomic Structure, Periodic Properties & Chemical Bonding)",
          "text": "Among the halogens $\\text{F}$, $\\text{Cl}$, $\\text{Br}$, and $\\text{I}$, the element having the largest atomic radius is:",
          "options": [
            {
              "id": "A",
              "text": "$\\text{Cl}$"
            },
            {
              "id": "B",
              "text": "$\\text{F}$"
            },
            {
              "id": "C",
              "text": "$\\text{I}$"
            },
            {
              "id": "D",
              "text": "$\\text{Br}$"
            }
          ],
          "correct": "C",
          "explanation": "Atomic radius increases down a group as new shells are added, so iodine has the largest atomic radius among the halogens."
        },
        {
          "id": "w3-chem-40",
          "section": "Chemistry (Atomic Structure, Periodic Properties & Chemical Bonding)",
          "text": "Between phosphorus and sulphur, the element having the more negative electron gain enthalpy is:",
          "options": [
            {
              "id": "A",
              "text": "Phosphorus"
            },
            {
              "id": "B",
              "text": "Both have equal values"
            },
            {
              "id": "C",
              "text": "Cannot be predicted"
            },
            {
              "id": "D",
              "text": "Sulphur"
            }
          ],
          "correct": "D",
          "explanation": "Phosphorus has the stable half-filled configuration $[\\text{Ne}] 3s^2 3p^3$, so its electron gain enthalpy is less negative than that of sulphur."
        },
        {
          "id": "w3-chem-41",
          "section": "Chemistry (Atomic Structure, Periodic Properties & Chemical Bonding)",
          "text": "Which of the following elements of Group 15 has the highest electronegativity?",
          "options": [
            {
              "id": "A",
              "text": "$\\text{N}$"
            },
            {
              "id": "B",
              "text": "$\\text{P}$"
            },
            {
              "id": "C",
              "text": "$\\text{As}$"
            },
            {
              "id": "D",
              "text": "$\\text{Bi}$"
            }
          ],
          "correct": "A",
          "explanation": "Electronegativity decreases on moving down a group, so nitrogen (the top element of Group 15) has the highest electronegativity."
        },
        {
          "id": "w3-chem-42",
          "section": "Chemistry (Atomic Structure, Periodic Properties & Chemical Bonding)",
          "text": "The number of elements present in the fifth period of the modern periodic table is:",
          "options": [
            {
              "id": "A",
              "text": "$10$"
            },
            {
              "id": "B",
              "text": "$18$"
            },
            {
              "id": "C",
              "text": "$8$"
            },
            {
              "id": "D",
              "text": "$32$"
            }
          ],
          "correct": "B",
          "explanation": "The fifth period contains the $5s$ ($2$), $4d$ ($10$) and $5p$ ($6$) subshells, giving a total of $18$ elements."
        },
        {
          "id": "w3-chem-43",
          "section": "Chemistry (Atomic Structure, Periodic Properties & Chemical Bonding)",
          "text": "Which of the following molecules does not obey the octet rule?",
          "options": [
            {
              "id": "A",
              "text": "$\\text{NH}_3$"
            },
            {
              "id": "B",
              "text": "$\\text{H}_2\\text{O}$"
            },
            {
              "id": "C",
              "text": "$\\text{BF}_3$"
            },
            {
              "id": "D",
              "text": "$\\text{CH}_4$"
            }
          ],
          "correct": "C",
          "explanation": "In $\\text{BF}_3$, boron is surrounded by only 6 valence electrons (electron-deficient species), so it does not obey the octet rule."
        },
        {
          "id": "w3-chem-44",
          "section": "Chemistry (Atomic Structure, Periodic Properties & Chemical Bonding)",
          "text": "The molecular geometry (shape) of the $\\text{XeF}_4$ molecule is:",
          "options": [
            {
              "id": "A",
              "text": "Tetrahedral"
            },
            {
              "id": "B",
              "text": "See-saw"
            },
            {
              "id": "C",
              "text": "Square pyramidal"
            },
            {
              "id": "D",
              "text": "Square planar"
            }
          ],
          "correct": "D",
          "explanation": "Xenon in $\\text{XeF}_4$ has 4 bond pairs and 2 lone pairs (total 6 electron pairs). The arrangement gives a square planar shape."
        },
        {
          "id": "w3-chem-45",
          "section": "Chemistry (Atomic Structure, Periodic Properties & Chemical Bonding)",
          "text": "Which of the following molecules has a zero dipole moment?",
          "options": [
            {
              "id": "A",
              "text": "$\\text{BF}_3$"
            },
            {
              "id": "B",
              "text": "$\\text{NH}_3$"
            },
            {
              "id": "C",
              "text": "$\\text{H}_2\\text{O}$"
            },
            {
              "id": "D",
              "text": "$\\text{CHCl}_3$"
            }
          ],
          "correct": "A",
          "explanation": "$\\text{BF}_3$ is trigonal planar and perfectly symmetrical, so the three bond dipoles cancel and the net dipole moment is zero."
        },
        {
          "id": "w3-chem-46",
          "section": "Chemistry (Atomic Structure, Periodic Properties & Chemical Bonding)",
          "text": "The hybridisation of the central atom in the $\\text{SF}_4$ molecule is:",
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
          "explanation": "$\\text{SF}_4$ has 4 bond pairs and 1 lone pair around sulphur (5 electron pairs), giving $sp^3d$ hybridisation and a see-saw shape."
        },
        {
          "id": "w3-chem-47",
          "section": "Chemistry (Atomic Structure, Periodic Properties & Chemical Bonding)",
          "text": "Which of the following species is paramagnetic?",
          "options": [
            {
              "id": "A",
              "text": "$\\text{CO}$"
            },
            {
              "id": "B",
              "text": "$\\text{F}_2$"
            },
            {
              "id": "C",
              "text": "$\\text{O}_2$"
            },
            {
              "id": "D",
              "text": "$\\text{N}_2$"
            }
          ],
          "correct": "C",
          "explanation": "According to molecular orbital theory, $\\text{O}_2$ has two unpaired electrons in its antibonding $\\pi^*$ orbitals, making it paramagnetic."
        },
        {
          "id": "w3-chem-48",
          "section": "Chemistry (Atomic Structure, Periodic Properties & Chemical Bonding)",
          "text": "The bond orders of $\\text{O}_2^{+}$, $\\text{O}_2$ and $\\text{O}_2^{-}$ are respectively:",
          "options": [
            {
              "id": "A",
              "text": "$2, 1.5, 2.5$"
            },
            {
              "id": "B",
              "text": "$1.5, 2, 2.5$"
            },
            {
              "id": "C",
              "text": "$2.5, 1.5, 2$"
            },
            {
              "id": "D",
              "text": "$2.5, 2, 1.5$"
            }
          ],
          "correct": "D",
          "explanation": "$\\text{O}_2$ has bond order 2. Removing an electron from the antibonding $\\pi^*$ orbital raises it to 2.5 in $\\text{O}_2^{+}$, while adding one lowers it to 1.5 in $\\text{O}_2^{-}$."
        },
        {
          "id": "w3-chem-49",
          "section": "Chemistry (Atomic Structure, Periodic Properties & Chemical Bonding)",
          "text": "According to Fajans' rules, which of the following ionic halides has the highest covalent character?",
          "options": [
            {
              "id": "A",
              "text": "$\\text{LiCl}$"
            },
            {
              "id": "B",
              "text": "$\\text{NaCl}$"
            },
            {
              "id": "C",
              "text": "$\\text{KCl}$"
            },
            {
              "id": "D",
              "text": "$\\text{RbCl}$"
            }
          ],
          "correct": "A",
          "explanation": "Covalent character increases as the cation shrinks. Since $\\text{Li}^{+}$ is the smallest cation, $\\text{LiCl}$ has the highest covalent character."
        },
        {
          "id": "w3-chem-50",
          "section": "Chemistry (Atomic Structure, Periodic Properties & Chemical Bonding)",
          "text": "Which of the following compounds contains both ionic and covalent bonds?",
          "options": [
            {
              "id": "A",
              "text": "$\\text{CH}_4$"
            },
            {
              "id": "B",
              "text": "$\\text{NaOH}$"
            },
            {
              "id": "C",
              "text": "$\\text{NaCl}$"
            },
            {
              "id": "D",
              "text": "$\\text{H}_2\\text{O}$"
            }
          ],
          "correct": "B",
          "explanation": "$\\text{NaOH}$ contains an ionic bond between $\\text{Na}^{+}$ and $\\text{OH}^{-}$, while the $\\text{O}-\\text{H}$ bond within the hydroxide ion is covalent."
        },
        {
          "id": "w3-phy-51",
          "section": "Physics (Physical World, Units & Dimensions)",
          "text": "Which of the following is not a fundamental physical quantity in the SI system?",
          "options": [
            {
              "id": "A",
              "text": "Mass"
            },
            {
              "id": "B",
              "text": "Time"
            },
            {
              "id": "C",
              "text": "Speed"
            },
            {
              "id": "D",
              "text": "Length"
            }
          ],
          "correct": "C",
          "explanation": "Length, mass and time are fundamental quantities. Speed is a derived quantity (length divided by time)."
        },
        {
          "id": "w3-phy-52",
          "section": "Physics (Physical World, Units & Dimensions)",
          "text": "The SI unit of electric charge is:",
          "options": [
            {
              "id": "A",
              "text": "Ampere"
            },
            {
              "id": "B",
              "text": "Volt"
            },
            {
              "id": "C",
              "text": "Ohm"
            },
            {
              "id": "D",
              "text": "Coulomb"
            }
          ],
          "correct": "D",
          "explanation": "Charge = current $\\times$ time, and its SI unit is the coulomb (C)."
        },
        {
          "id": "w3-phy-53",
          "section": "Physics (Physical World, Units & Dimensions)",
          "text": "The dimensional formula of force is:",
          "options": [
            {
              "id": "A",
              "text": "$[\\text{M L T}^{-2}]$"
            },
            {
              "id": "B",
              "text": "$[\\text{M L}^2 \\text{T}^{-2}]$"
            },
            {
              "id": "C",
              "text": "$[\\text{M L T}^{-1}]$"
            },
            {
              "id": "D",
              "text": "$[\\text{M L}^2 \\text{T}^{-1}]$"
            }
          ],
          "correct": "A",
          "explanation": "Force $= \\text{mass} \\times \\text{acceleration} = [\\text{M}][\\text{L T}^{-2}] = [\\text{M L T}^{-2}]$."
        },
        {
          "id": "w3-phy-54",
          "section": "Physics (Physical World, Units & Dimensions)",
          "text": "The dimensional formula of Planck's constant $h$ is:",
          "options": [
            {
              "id": "A",
              "text": "$[\\text{M L T}^{-2}]$"
            },
            {
              "id": "B",
              "text": "$[\\text{M L}^2 \\text{T}^{-1}]$"
            },
            {
              "id": "C",
              "text": "$[\\text{M L}^2 \\text{T}^{-2}]$"
            },
            {
              "id": "D",
              "text": "$[\\text{M L T}^{-1}]$"
            }
          ],
          "correct": "B",
          "explanation": "From $E = h\\nu$: $h = \\frac{E}{\\nu} = \\frac{[\\text{M L}^2\\text{T}^{-2}]}{[\\text{T}^{-1}]} = [\\text{M L}^2 \\text{T}^{-1}]$."
        },
        {
          "id": "w3-phy-55",
          "section": "Physics (Physical World, Units & Dimensions)",
          "text": "Which of the following quantities has the dimensional formula $[\\text{M L}^2 \\text{T}^{-3}]$?",
          "options": [
            {
              "id": "A",
              "text": "Force"
            },
            {
              "id": "B",
              "text": "Momentum"
            },
            {
              "id": "C",
              "text": "Power"
            },
            {
              "id": "D",
              "text": "Work"
            }
          ],
          "correct": "C",
          "explanation": "Power $= \\frac{\\text{work}}{\\text{time}} = \\frac{[\\text{M L}^2\\text{T}^{-2}]}{[\\text{T}]} = [\\text{M L}^2 \\text{T}^{-3}]$."
        },
        {
          "id": "w3-phy-56",
          "section": "Physics (Physical World, Units & Dimensions)",
          "text": "If the velocity $v$ of a particle varies with time $t$ as $v = at^2 + bt + c$, then the dimensional formula of $a$ is:",
          "options": [
            {
              "id": "A",
              "text": "$[\\text{L T}^{-2}]$"
            },
            {
              "id": "B",
              "text": "$[\\text{L T}^{-1}]$"
            },
            {
              "id": "C",
              "text": "$[\\text{L T}]$"
            },
            {
              "id": "D",
              "text": "$[\\text{L T}^{-3}]$"
            }
          ],
          "correct": "D",
          "explanation": "The term $at^2$ must have the dimensions of velocity, so $a = \\frac{[\\text{L T}^{-1}]}{[\\text{T}^2]} = [\\text{L T}^{-3}]$."
        },
        {
          "id": "w3-phy-57",
          "section": "Physics (Physical World, Units & Dimensions)",
          "text": "The distance between two cities is given as 1.6 km. The number of significant figures in this measurement is:",
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
              "text": "$3$"
            },
            {
              "id": "D",
              "text": "$4$"
            }
          ],
          "correct": "A",
          "explanation": "In the number 1.6 both digits are significant; trailing zeroes of a decimal point would not change this. So there are 2 significant figures."
        },
        {
          "id": "w3-phy-58",
          "section": "Physics (Physical World, Units & Dimensions)",
          "text": "Which of the following relations is dimensionally correct for the velocity $v$ of a body falling freely through a height $h$ under acceleration due to gravity $g$?",
          "options": [
            {
              "id": "A",
              "text": "$v = 2gh$"
            },
            {
              "id": "B",
              "text": "$v = \\sqrt{2gh}$"
            },
            {
              "id": "C",
              "text": "$v = \\sqrt{2g/h}$"
            },
            {
              "id": "D",
              "text": "$v = \\sqrt{2gh^2}$"
            }
          ],
          "correct": "B",
          "explanation": "LHS has dimensions $[\\text{L T}^{-1}]$. For $\\sqrt{2gh}$: $\\sqrt{[\\text{L T}^{-2}][\\text{L}]} = [\\text{L T}^{-1}]$. Other options do not give the dimensions of velocity."
        },
        {
          "id": "w3-phy-59",
          "section": "Physics (Physical World, Units & Dimensions)",
          "text": "Work and torque have the same dimensional formula because:",
          "options": [
            {
              "id": "A",
              "text": "Work is $[\\text{M L T}^{-2}]$ and torque is $[\\text{M L}^2\\text{T}^{-2}]$"
            },
            {
              "id": "B",
              "text": "Both are dimensionless quantities"
            },
            {
              "id": "C",
              "text": "Both are given by $[\\text{M L}^2 \\text{T}^{-2}]$"
            },
            {
              "id": "D",
              "text": "Work is $[\\text{M L}^2\\text{T}^{-2}]$ while torque is $[\\text{M L}^2\\text{T}^{-3}]$"
            }
          ],
          "correct": "C",
          "explanation": "Work $= F \\times d$ and torque $= F \\times r$; both are obtained as (force $\\times$ length) $= [\\text{M L}^2 \\text{T}^{-2}]$."
        },
        {
          "id": "w3-phy-60",
          "section": "Physics (Physical World, Units & Dimensions)",
          "text": "In the equation $y = A \\sin(kx - \\omega t)$, the dimensional formula of the wave number $k$ is:",
          "options": [
            {
              "id": "A",
              "text": "$[\\text{L}]$"
            },
            {
              "id": "B",
              "text": "$[\\text{L T}^{-1}]$"
            },
            {
              "id": "C",
              "text": "Dimensionless"
            },
            {
              "id": "D",
              "text": "$[\\text{L}^{-1}]$"
            }
          ],
          "correct": "D",
          "explanation": "The argument of a sine function must be dimensionless; since $x$ has dimensions $[\\text{L}]$, $k$ must have dimensions $[\\text{L}^{-1}]$."
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