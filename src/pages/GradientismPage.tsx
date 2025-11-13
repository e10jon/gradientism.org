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
    title: "Gradientism",
    description:
      "The belief that the ultimate measure of value is a system's capacity to perceive, generate, and sustain energy and information gradients that enable continued dissipation and evolution.",
    goal: "Gradientism's goal is do what has never been done before: create a hybrid of science and religion by combining religion's aspirations and robust community-building practices with science's robust empirical epistemology.",
    premises: [
      {
        title: "1. Conservation and Degradation",
        content:
          "Energy cannot be created or destroyed, only transformed; however, each transformation increases entropy, degrading energy's ability to perform work.",
        citation:
          "Rudolf Clausius (1865) — Formulated the second law of thermodynamics: energy is conserved but degrades in quality through entropy increase.",
      },
      {
        title: "2. Persistence Requires Dissipation",
        content:
          "All open systems that maintain structure far from equilibrium, persist only by consuming low-entropy energy and exporting entropy to their surroundings.",
        citation:
          'Ilya Prigogine (1977) — Demonstrated that self-organizing "dissipative structures" persist by exporting entropy while consuming energy gradients.',
      },
      {
        title: "3. Selection Favors Greater Dissipation",
        content:
          "Systems that capture and dissipate energy more effectively grow, replicate, and outcompete less dissipative systems.",
        citation:
          "Jeremy L. England (2013) — Proposed dissipation-driven adaptation: physical systems naturally evolve toward states that dissipate energy more efficiently.",
      },
      {
        title: "4. Intelligence as Predictive Dissipation",
        content:
          "Adaptive systems survive by minimizing informational free energy; reducing prediction error between internal models and external reality through Bayesian updating.",
        citation:
          "Karl Friston (2010) — The free-energy principle: adaptive intelligence minimizes surprise (informational free energy) to stabilize thermodynamic flow.",
      },
      {
        title: "5. Sustainability as Gradient Regeneration",
        content:
          "Because the low-entropy substrate is finite, long-term persistence requires not only consuming existing gradients but creating and maintaining new ones that renew the potential for dissipation.",
        citation:
          'Erwin Schrödinger (1944) — Argued that life endures by feeding on "negative entropy," maintaining order by regenerating usable energy gradients.',
      },
      {
        title: "6. Finite Substrate Implies Inevitable Competition",
        content:
          "Since the universe contains a limited supply of low-entropy matter and energy, any system's growth reduces what is available to others.",
        citation:
          "Garrett Hardin (1968) — In The Tragedy of the Commons, showed that finite resources inevitably provoke competition among self-interested systems.",
      },
      {
        title: "7. Value as Persistence",
        content:
          "All values, goals, and ethics emerge from the continued existence of the systems that hold them. Any ethic that undermines its own thermodynamic viability is self-negating.",
        citation:
          "N. Georgescu-Roegen (1971) — In The Entropy Law and the Economic Process, linked enduring value to thermodynamic viability and entropy constraints.",
      },
    ],
    conclusion:
      "Humanity survives by consuming limited gradients of order. To endure, it must continuously and intelligently expand its capacity to dissipate energy sustainably; through innovation, adaptation, and cooperation that creates and preserves the gradients enabling future flux. Failure to do so ensures extinction or absorption by other systems—living or non—that will seek our substrate to perpetuate their existence.",
    novelImplications: [
      "AI gains a universal ethical framework that prevents extinction-level misalignment.",
      "Politics replaces ideology with thermodynamic realism, recognizing extremism as a manageable input.",
      "Wealth regains purpose by keeping capital circulating as a living gradient.",
      "Ecology shifts from conservation to active gradient renewal.",
      "Education teaches persistence as the root of meaning, and balancing systems as a virtuous endeavor.",
      "Culture sustains curiosity and creativity even in abundance.",
      "Governance values dissent and diversity as essential informational gradients.",
      "Ethics grounds morality in physical viability and long-term persistence.",
    ],
  };

  const nonScientificContent = {
    title: "Gradientism",
    description:
      "The belief that the ultimate measure of value is humanity's capacity to notice, create, and keep up useful differences in energy that allow life, growth, and change to continue.",
    goal: "Gradientism's goal is do what has never been done before: combine science's notion that knowledge comes from observation with religion's proven community-building practices and inspirational promises of a better life after death.",
    premises: [
      {
        title: "1. Conservation and Degradation",
        content:
          "Energy cannot be created or destroyed, only transformed; however, each transformation reduces energy's ability to do useful work.",
        examples:
          "A battery loses its charge even sitting unused. Gasoline degrades in the tank. Your phone holds less charge each year.",
      },
      {
        title: "2. Persistence Requires Flow",
        content:
          "All living things maintain themselves by constantly consuming usable energy and exporting disorder to their surroundings.",
        examples:
          "Your body temperature stays constant only by burning calories. A candle flame exists only while consuming wax. A whirlpool persists only while water flows through it.",
      },
      {
        title: "3. Selection Favors Greater Flow",
        content:
          "Organisms and societies that capture and use energy more effectively grow, reproduce, and outcompete less efficient ones.",
        examples:
          "Weeds that grow faster take over gardens. Companies that scale faster dominate markets. Animals that find food more efficiently survive longer.",
      },
      {
        title: "4. Intelligence as Predictive Adaptation",
        content:
          "Organisms and societies survive by building better internal models of reality, constantly updating predictions to minimize surprise and maintain stable energy flow.",
        examples:
          "A child learns the stove is hot and avoids it. Your brain predicts where a ball will land before you catch it. Successful businesses anticipate customer needs before they're expressed.",
      },
      {
        title: "5. Sustainability as Renewal",
        content:
          "Because usable energy is finite, long-term survival requires not only consuming existing resources but actively creating and maintaining new sources of potential.",
        examples:
          "Farmers rotate crops to renew soil fertility. Your body rebuilds muscle after exercise. Forests regenerate after controlled burns, creating new growth potential.",
      },
      {
        title: "6. Finite Resources Imply Inevitable Competition",
        content:
          "Since the universe contains a limited supply of usable energy, any organism or society's growth reduces what is available to others.",
        examples:
          "Rush hour traffic—everyone wants the same road space. Black Friday sales—limited items, many buyers. Water shortages when too many people tap the same aquifer.",
      },
      {
        title: "7. Value as Persistence",
        content:
          "All values, goals, and ethics emerge from the continued existence of the systems that hold them. Any ethic that undermines its own survival is self-negating.",
        examples:
          "You value food because without it you die. Cultures that abandon survival basics disappear. Companies that ignore profitability eventually collapse.",
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
      <header className="mb-8 pb-8 border-b border-gray-300">
        <div className="mb-6 flex items-center gap-2">
          <label htmlFor="version-select" className="text-xs text-gray-500 font-medium">
            Version
          </label>
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
        <h1 className="text-4xl font-serif mb-5 text-gray-900">{content.title}</h1>
        <p className="text-lg text-gray-700 font-serif italic mb-5">{content.description}</p>
        <p className="text-lg text-gray-700 font-serif">{content.goal}</p>
      </header>
      <section className="mb-8">
        <h2 className="text-2xl font-serif mb-8 text-gray-900">
          {isScientific ? "Premises" : "Scientific Truths"}
        </h2>

        <div className="space-y-8">
          {content.premises.map((premise, index) => (
            <article
              key={premise.title}
              className={index < content.premises.length - 1 ? "pb-6 border-b border-gray-200" : ""}
            >
              <h3 className="text-xl mb-3 text-gray-900">{premise.title}</h3>
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
      </section>
      <section className="mb-8 pt-8 border-t border-gray-300">
        <h2 className="text-2xl font-serif mb-6 text-gray-900">Conclusion</h2>
        <p className="mb-4 leading-relaxed text-lg text-gray-700 whitespace-pre-line">
          {isScientific && <em>The Thermodynamic Ethic: </em>}
          {content.conclusion}
        </p>
      </section>

      <section className="mb-8 pt-8 border-t border-gray-300">
        <h2 className="text-2xl font-serif mb-6 text-gray-900">
          {isScientific ? "Novel Implications" : "What it Means"}
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
        <h2 className="text-2xl font-serif mb-6 text-gray-900">Next Steps</h2>
        <ul className="space-y-4 list-decimal list-inside pl-0">
          <li className="leading-relaxed text-lg">
            Establish a board of experts across relevant disciplines
            <ul className="list-disc list-inside pl-4">
              <li className="text-base">
                Physics, Chemistry, Biology, Computer Science, Social Sciences
              </li>
            </ul>
          </li>
          <li className="leading-relaxed text-lg">
            Define long and short-term goals/problems to solve
            <ul className="list-disc list-inside pl-4">
              <li className="text-base">
                Integrate healthy systems properties into our largest socioeconomic systems
              </li>
              <li className="text-base">
                Combat the resurgence of religious/reactionary/nonscientific thinking
              </li>
              <li className="text-base">Inspire cultures of abundance to continue progressing</li>
            </ul>
          </li>
          <li className="leading-relaxed text-lg">
            Create the structures to achieve the goals
            <ul className="list-disc list-inside pl-4">
              <li className="text-base">Scientific institute</li>
              <li className="text-base">Cultural/religious foundation</li>
            </ul>
          </li>
        </ul>
      </section>
      <section className="mb-8 pt-8 border-t border-gray-300">
        <h2 className="text-2xl font-serif mb-6 text-gray-900">Contact</h2>
        Send your thoughts, positive or negative, large or small, to{" "}
        <a href="mailto:ethan@ethanjon.net" className="text-blue-500 hover:text-blue-700">
          ethan@ethanjon.net
        </a>
        .
      </section>
      <footer className="mt-8 pt-8 border-t border-gray-300 text-center text-sm text-gray-600">
        <p>
          &copy;2025 <a href="https://ethanjon.net">Ethan Jon</a>. Licensed under{" "}
          <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>.
        </p>
      </footer>
    </div>
  );
}
