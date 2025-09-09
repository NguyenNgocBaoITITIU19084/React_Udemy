import { CORE_CONCEPTS } from "../../data";
import CoreConcept from "./CoreConcept";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Time to get started!</h2>
      <ul>
        {CORE_CONCEPTS.map((itemConcept) => (
          <CoreConcept key={itemConcept.title} {...itemConcept} />
        ))}
        {/* <CoreConcepts
                  image={CORE_CONCEPTS[0].image}
                  title={CORE_CONCEPTS[0].title}
                  description={CORE_CONCEPTS[0].description}
                />
                <CoreConcepts {...CORE_CONCEPTS[1]} />
                <CoreConcepts {...CORE_CONCEPTS[2]} />
                <CoreConcepts {...CORE_CONCEPTS[3]} /> */}
      </ul>
    </section>
  );
}
