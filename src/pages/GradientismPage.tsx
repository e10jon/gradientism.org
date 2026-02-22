import { useState, useEffect } from "react";
import { usePageContext } from "vike-react/usePageContext";

export function GradientismPage() {
  const pageContext = usePageContext();
  const initialIsScientific = pageContext.urlParsed.search?.version !== "mainstream";
  const [isScientific, setIsScientific] = useState(initialIsScientific);

  // Sync state with URL changes (e.g., browser back/forward or Vike navigation)
  useEffect(() => {
    const shouldBeScientific = pageContext.urlParsed.search?.version !== "mainstream";
    setIsScientific(shouldBeScientific);
  }, [pageContext.urlParsed.search]);

  // Update URL when toggle changes
  const handleVersionChange = (scientific: boolean) => {
    setIsScientific(scientific);
    const params = new URLSearchParams(window.location.search);
    if (scientific) {
      params.delete("version");
    } else {
      params.set("version", "mainstream");
    }
    const newUrl = params.toString()
      ? `${window.location.pathname}?${params.toString()}`
      : window.location.pathname;
    window.history.replaceState({}, "", newUrl);
  };

  const scientificContent = {
    description:
      "The belief that value is intrinsically defined by a system’s own judgment of its capacity to perceive, generate, and sustain energy gradients that enable continued dissipation and evolution.",
    goal: "To create a hybrid of science and religion by combining religion's aspirations, community-building practices, and results; with science's undeniable empirical epistemology.",
    premisesHeading: "Premises",
    tiers: [
      {
        title: "Tier 1: Foundational Physics",
        premises: [
          {
            title: "1. Conservation and Degradation",
            content:
              "Energy cannot be created or destroyed, only transformed; however, each transformation increases entropy, degrading energy's ability to perform work.",
            citation:
              "Rudolf Clausius (1865) — Formulated the second law of thermodynamics: energy is conserved but degrades in quality through entropy increase.",
          },
          {
            title: "2. Finite Substrate Implies Inevitable Competition",
            content:
              "Since the universe contains a limited supply of low-entropy matter and energy, any system's growth reduces what is available to others.",
            citation:
              "Garrett Hardin (1968) — In The Tragedy of the Commons, showed that finite resources inevitably provoke competition among self-interested systems.",
          },
        ],
      },
      {
        title: "Tier 2: System Dynamics",
        premises: [
          {
            title: "1. Persistence Requires Dissipation",
            content:
              "All open systems that maintain structure far from equilibrium, persist only by consuming low-entropy energy and exporting entropy to their surroundings.",
            citation:
              'Ilya Prigogine (1977) — Demonstrated that self-organizing "dissipative structures" persist by exporting entropy while consuming energy gradients.',
          },
          {
            title: "2. Selection Favors Greater Dissipation",
            content:
              "Systems that capture and dissipate energy more effectively grow, replicate, and outcompete less dissipative systems.",
            citation:
              "Jeremy L. England (2013) — Proposed dissipation-driven adaptation: physical systems naturally evolve toward states that dissipate energy more efficiently.",
          },
        ],
      },
      {
        title: "Tier 3: Complex Adaptations",
        premises: [
          {
            title: "1. Intelligence as Predictive Dissipation",
            content:
              "Adaptive systems survive by minimizing informational free energy; reducing prediction error between internal models and external reality through Bayesian updating.",
            citation:
              "Karl Friston (2010) — The free-energy principle: adaptive intelligence minimizes surprise (informational free energy) to stabilize thermodynamic flow.",
          },
          {
            title: "2. Cooperative Integration",
            content:
              "Distinct biological systems merge or collaborate to capture and dissipate energy gradients that neither could access alone, reducing internal friction for shared thermodynamic gain. From single cells merging (endosymbiosis) to human tribes, cooperation achieves economies of scale in energy capture.",
            citation:
              "Lynn Margulis (1967) — Demonstrated through endosymbiotic theory that complex life evolved not just through competition, but through the cooperative merging of simpler organisms to share metabolic functions.",
          },
          {
            title: "3. Exosomatic Evolution",
            content:
              "The development of non-biological tools and machines that allow a system to outsource and radically scale its capacity to capture, store, and dissipate energy. A human body can only process about 100 watts of energy biologically. Technology allows us to harness thousands of times that amount by using external substrates (fire, fossil fuels, solar, fission).",
            citation:
              'Alfred J. Lotka (1945) — Proposed the law of maximum energy flux, noting that human evolution shifted from biological mutations to "exosomatic" (outside-the-body) tools to maximize energy capture.',
          },
          {
            title: "4. Cultural Information Transmission",
            content:
              "The use of language, myth, and culture to compress, store, and transmit low-entropy survival information across generations, allowing millions of individual agents to act as a single, synchronized dissipative structure. DNA takes thousands of years to adapt to new environments; culture allows a society to adapt its gradient-capture strategies in a single generation.",
            citation:
              "Joseph Henrich (2015) — In The Secret of Our Success, details how cumulative cultural evolution allows humans to adapt collectively in ways no individual intelligence could achieve.",
          },
          {
            title: "5. Sustainability as Gradient Regeneration",
            content:
              "Because the low-entropy substrate is finite, long-term persistence requires not only consuming existing gradients but creating and maintaining new ones that renew the potential for dissipation.",
            citation:
              'Erwin Schrödinger (1944) — Argued that life endures by feeding on "negative entropy," maintaining order by regenerating usable energy gradients.',
          },
        ],
      },
      {
        title: "Tier 4: Philosophical Conclusion",
        premises: [
          {
            title: "1. Value as Persistence",
            content:
              "All values, goals, and ethics emerge from the continued existence of the systems that hold them. Any ethic that undermines its own thermodynamic viability is self-negating.",
            citation:
              "N. Georgescu-Roegen (1971) — In The Entropy Law and the Economic Process, linked enduring value to thermodynamic viability and entropy constraints.",
          },
        ],
      },
    ],
    conclusion:
      "Humanity survives by consuming limited gradients of order. To endure, it must continuously and intelligently expand its capacity to dissipate energy sustainably; through innovation, adaptation, and cooperation that creates and preserves the gradients enabling future flux. Failure to do so ensures extinction or absorption by other systems—living or non—that will seek our substrate to perpetuate their existence.",
    novelImplications: [
      "AI gains a universal ethical framework that prevents extinction-level misalignment.",
      "Politics replaces ideology with thermodynamic realism, recognizing extremisms as merely inputs to a dynamic equilibrium.",
      "Wealth regains purpose by keeping capital circulating as a living gradient.",
      "Ecology shifts from conservation to active gradient renewal.",
      "Education teaches persistence as the root of meaning, and balancing systems as a virtuous endeavor.",
      "Culture sustains curiosity and creativity even in abundance.",
      "Governance values dissent and diversity as essential informational gradients.",
      "Ethics grounds morality in physical viability and long-term persistence.",
    ],
  };

  const nonScientificContent = {
    description:
      "The belief that value is measured by humanity's capacity to notice, create, and keep up useful differences in energy that allow life, growth, and change to continue.",
    goal: "To combine science's notion that knowledge comes from observation with religion's proven community-building practices and inspirational promises of a better life after death.",
    premisesHeading: "Scientific Truths",
    tiers: [
      {
        title: "Tier 1: The Basic Rules",
        premises: [
          {
            title: "1. Conservation and Degradation",
            content:
              "Energy cannot be created or destroyed, only transformed; however, each transformation reduces energy's ability to do useful work.",
            examples:
              "A battery loses its charge even sitting unused. Gasoline degrades in the tank. Your phone holds less charge each year.",
          },
          {
            title: "2. Finite Resources Imply Inevitable Competition",
            content:
              "Since the universe contains a limited supply of usable energy, any organism or society's growth reduces what is available to others.",
            examples:
              "Rush hour traffic—everyone wants the same road space. Black Friday sales—limited items, many buyers. Water shortages when too many people tap the same aquifer.",
          },
        ],
      },
      {
        title: "Tier 2: How Things Must Work",
        premises: [
          {
            title: "1. Persistence Requires Flow",
            content:
              "All living things maintain themselves by constantly consuming usable energy and exporting disorder to their surroundings.",
            examples:
              "Your body temperature stays constant only by burning calories. A candle flame exists only while consuming wax. A whirlpool persists only while water flows through it.",
          },
          {
            title: "2. Selection Favors Greater Flow",
            content:
              "Organisms and societies that capture and use energy more effectively grow, reproduce, and outcompete less efficient ones.",
            examples:
              "Weeds that grow faster take over gardens. Companies that scale faster dominate markets. Animals that find food more efficiently survive longer.",
          },
        ],
      },
      {
        title: "Tier 3: Clever Survival Strategies",
        premises: [
          {
            title: "1. Intelligence as Predictive Adaptation",
            content:
              "Organisms and societies survive by building better internal models of reality, constantly updating predictions to minimize surprise and maintain stable energy flow.",
            examples:
              "A child learns the stove is hot and avoids it. Your brain predicts where a ball will land before you catch it. Successful businesses anticipate customer needs before they're expressed.",
          },
          {
            title: "2. Cooperative Integration",
            content:
              "Distinct living things join forces to capture and use energy that neither could access alone, reducing wasted effort for shared gain. From the ancient merging of simple cells into complex life, to human tribes pooling labor, cooperation achieves more with less.",
            examples:
              "Bacteria living inside our cells power every move we make. Wolves hunt in packs to take down prey no individual could. Businesses form partnerships and supply chains to deliver products no single company could build alone.",
          },
          {
            title: "3. Exosomatic Evolution",
            content:
              "The development of tools and machines that allow us to outsource and massively scale our ability to capture and use energy beyond what our bodies alone can do. A human body runs on about 100 watts—the power of a light bulb. Technology lets us harness thousands of times more.",
            examples:
              "Fire let early humans cook food, unlocking more calories. Cars move us using the energy in fuel instead of our muscles. Solar panels harvest sunlight we could never absorb through our skin.",
          },
          {
            title: "4. Cultural Information Transmission",
            content:
              "The use of language, stories, and culture to compress, store, and pass survival knowledge across generations, allowing millions of people to act together as one coordinated unit. DNA takes thousands of years to adapt; culture lets a society change its strategies in a single generation.",
            examples:
              "Recipes pass cooking techniques across centuries. Written laws coordinate millions of strangers in a single society. A YouTube tutorial teaches skills that once took years of apprenticeship.",
          },
          {
            title: "5. Sustainability as Renewal",
            content:
              "Because usable energy is finite, long-term survival requires not only consuming existing resources but actively creating and maintaining new sources of potential.",
            examples:
              "Farmers rotate crops to renew soil fertility. Your body rebuilds muscle after exercise. Forests regenerate after controlled burns, creating new growth potential.",
          },
        ],
      },
      {
        title: "Tier 4: What It All Means",
        premises: [
          {
            title: "1. Value as Persistence",
            content:
              "All values, goals, and ethics emerge from the continued existence of the systems that hold them. Any ethic that undermines its own survival is self-negating.",
            examples:
              "You value food because without it you die. Cultures that abandon survival basics disappear. Companies that ignore profitability eventually collapse.",
          },
        ],
      },
    ],
    conclusion:
      "Humanity survives by using limited pockets of order in the universe; like food, fuels, ecosystems, and technology. To endure, we must keep improving how wisely we use energy: through innovation, adaptation, and cooperation that create and protect the conditions for future life and change. If we fail, humanity will be replaced by other systems—living or non—that want our energy for their own purposes.",
    novelImplications: [
      "AI helps humanity stay around longer by improving how we use energy without burning out our future, or extincting us.",
      "Politics steps back from empty ideology and focuses on what actually keeps people fed, safe, and thriving over generations, treating extremism as a problem to manage, not a banner to worship.",
      "Wealth regains purpose by keeping money, tools, and opportunities moving like a healthy flow, instead of letting them stagnate in a few hands.",
      'Ecology shifts from "just protect what\'s left" to actively rebuilding forests, soils, oceans, and climates so they can keep supporting life.',
      "Education teaches that lasting meaning comes from helping life persist—learning how to balance the many parts of society and nature becomes a core virtue.",
      "Culture works to keep curiosity and creativity alive even when basic needs are met, so comfort doesn't turn into boredom and decay.",
      "Governance treats dissent and diversity as crucial sources of new information and options, not as threats to be silenced.",
      "Ethics grounds morality in what keeps humanity and the living world around it able to continue, instead of in rules that ignore reality.",
    ],
  };

  const content = isScientific ? scientificContent : nonScientificContent;

  return (
    <div className="max-w-3xl mx-auto px-8 py-12 bg-white text-gray-900">
      <header className="mb-5 pb-3">
        <div className="mb-6 flex items-center gap-2">
          <select
            id="version-select"
            value={isScientific ? "scientific" : "mainstream"}
            onChange={(e) => handleVersionChange(e.target.value === "scientific")}
            className="px-3 py-1 text-sm font-medium rounded-md border border-gray-300 bg-white text-gray-900 cursor-pointer focus:outline-none"
          >
            <option value="scientific">Scientific</option>
            <option value="mainstream">Mainstream</option>
          </select>
        </div>
        <h1 className="text-5xl font-serif my-10 text-gray-900 font-semibold">Gradientism</h1>
        <p className="text-lg text-gray-700 font-serif italic mb-5 border-l-4 border-gray-300 pl-5">
          {content.description}
        </p>
      </header>

      <section className="mb-5 pb-8">
        <div className="relative bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 border-2 border-blue-200 rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-serif mb-4 text-gray-900 pr-16">Current Status</h2>
          <div className="space-y-4 text-gray-800 leading-relaxed">
            <p className="text-base">
              <span className="font-bold italic">This project is in the earliest stage.</span> We
              are looking to collaborate with anyone interested and passionate about the goal.
              Please reach out to{" "}
              <a href="mailto:ethan@ethanjon.net" className="text-blue-500 hover:text-blue-700">
                ethan@ethanjon.net
              </a>{" "}
              if so.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-8 pb-8 border-b border-gray-300">
        <h2 className="text-2xl font-serif mb-6 text-gray-900 font-semibold">Goal</h2>
        <p className="text-lg text-gray-700 font-serif">{content.goal}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-serif mb-4 text-gray-900 font-semibold">
          {content.premisesHeading}
        </h2>

        <div className="space-y-10">
          {content.tiers.map((tier, tierIndex) => (
            <div
              key={tier.title}
              className={
                tierIndex < content.tiers.length - 1 ? "pb-10 border-b border-gray-300" : ""
              }
            >
              <h3 className="text-xl font-serif mb-6 text-gray-900 font-semibold">{tier.title}</h3>
              <div className="space-y-8">
                {tier.premises.map((premise, index) => (
                  <article
                    key={premise.title}
                    className={
                      index < tier.premises.length - 1 ? "pb-6 border-b border-gray-200" : ""
                    }
                  >
                    <h4 className="text-lg mb-3 text-gray-900">{premise.title}</h4>
                    <p className="text-gray-700 leading-relaxed mb-3">{premise.content}</p>
                    {isScientific && "citation" in premise && premise.citation && (
                      <p className="text-sm text-gray-600 italic mt-4">{premise.citation}</p>
                    )}
                    {!isScientific && "examples" in premise && premise.examples && (
                      <p className="text-sm text-gray-600 italic mt-4">{premise.examples}</p>
                    )}
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-8 pt-8 border-t border-gray-300">
        <h2 className="text-2xl font-serif mb-6 text-gray-900 font-semibold">Conclusion</h2>
        <p className="mb-4 leading-relaxed text-lg text-gray-700 whitespace-pre-line">
          {isScientific && <em>The Thermodynamic Ethic — </em>}
          {content.conclusion}
        </p>
      </section>

      <section className="mb-8 pt-8 border-t border-gray-300">
        <h2 className="text-2xl font-serif mb-6 text-gray-900 font-semibold">
          {isScientific ? "Implications" : "What it Means"}
        </h2>
        <ol className="space-y-4 list-decimal list-inside pl-0">
          {content.novelImplications.map((implication) => (
            <li
              key={implication.substring(0, 50)}
              className="leading-relaxed text-lg text-gray-700"
            >
              {implication}
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-8 pt-8 border-t border-gray-300">
        <h2 className="text-2xl font-serif mb-6 text-gray-900 font-semibold">Contact</h2>
        <p className="text-lg">
          Send your thoughts, positive or negative, large or small, to{" "}
          <a href="mailto:ethan@ethanjon.net" className="text-blue-500 hover:text-blue-700">
            ethan@ethanjon.net
          </a>
          .
        </p>
      </section>
      <footer className="mt-8 pt-8 border-t border-gray-300 text-center text-sm text-gray-600">
        <p>
          &copy;2025 <a href="https://ethanjon.net">Ethan Jon</a>. Licensed under{" "}
          <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>.
        </p>
        <p>
          An evolution of{" "}
          <a href="https://creordics.org" className="underline">
            Creordics
          </a>
        </p>
      </footer>
    </div>
  );
}
