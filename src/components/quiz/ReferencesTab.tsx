export default function ReferencesTab() {
  const references = [
    {
      authors: "Dweck, C. S.",
      year: "2006",
      title: "Mindset: The New Psychology of Success",
      source: "New York: Random House.",
    },
    {
      authors: "Dweck, C. S.",
      year: "2015",
      title: "Carol Dweck Revisits the 'Growth Mindset'",
      source: "Education Week, 35(5), 20\u201324.",
    },
    {
      authors: "Yeager, D. S., & Dweck, C. S.",
      year: "2012",
      title: "Mindsets That Promote Resilience: When Students Believe That Personal Characteristics Can Be Developed",
      source: "Educational Psychologist, 47(4), 302\u2013314.",
    },
    {
      authors: "Blackwell, L. S., Trzesniewski, K. H., & Dweck, C. S.",
      year: "2007",
      title: "Implicit Theories of Intelligence Predict Achievement Across an Adolescent Transition: A Longitudinal Study and an Intervention",
      source: "Child Development, 78(1), 246\u2013263.",
    },
  ];

  return (
    <div>
      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-dark-navy mb-8">
        References
      </h2>
      <ol className="space-y-8 list-decimal list-inside">
        {references.map((ref, i) => (
          <li key={i} className="text-base sm:text-lg text-dark-navy/80 leading-relaxed">
            {ref.authors} ({ref.year}).{" "}
            <em className="font-serif">{ref.title}</em>.{" "}
            {ref.source}
          </li>
        ))}
      </ol>
    </div>
  );
}
