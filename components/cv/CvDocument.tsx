import {
  Document,
  Page,
  View,
  Text,
  Link,
  StyleSheet,
} from "@react-pdf/renderer";
import type { PortfolioData } from "@/lib/data";
import type { DataLocale } from "@/lib/data";

const sectionTitles: Record<
  DataLocale,
  {
    about: string;
    education: string;
    experience: string;
    projects: string;
    skills: string;
    certifications: string;
  }
> = {
  fr: {
    about: "À propos",
    education: "Formation",
    experience: "Expérience",
    projects: "Projets",
    skills: "Compétences",
    certifications: "Certifications",
  },
  en: {
    about: "About",
    education: "Education",
    experience: "Experience",
    projects: "Projects",
    skills: "Skills",
    certifications: "Certifications",
  },
};

/** Tronque au dernier espace avant maxLen (évite de couper un mot), ajoute "…" */
function truncate(str: string, maxLen: number): string {
  if (str.length <= maxLen) return str;
  const cut = str.slice(0, maxLen).trim();
  const lastSpace = cut.lastIndexOf(" ");
  const end = lastSpace >= 0 ? lastSpace : cut.length;
  const out = str.slice(0, end).trim();
  return out + (out.length < str.length ? "…" : "");
}

const styles = StyleSheet.create({
  page: {
    padding: 32,
    fontSize: 8,
    fontFamily: "Helvetica",
  },
  header: {
    marginBottom: 12,
    paddingBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: "#1a1a1a",
  },
  name: {
    fontSize: 18,
    fontFamily: "Helvetica-Bold",
    marginBottom: 2,
    letterSpacing: 0.5,
  },
  location: {
    fontSize: 8,
    color: "#444",
    marginBottom: 4,
  },
  tagline: {
    fontSize: 9,
    color: "#333",
    marginBottom: 6,
  },
  contact: {
    fontSize: 7,
    color: "#444",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  contactItem: { marginRight: 6, flexShrink: 0 },
  contactSep: { marginRight: 6, color: "#999", flexShrink: 0 },
  section: {
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    marginBottom: 5,
    color: "#1a1a1a",
    letterSpacing: 0.3,
    paddingBottom: 2,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  about: {
    fontSize: 8,
    lineHeight: 1.4,
    color: "#333",
    textAlign: "justify",
  },
  eduRow: {
    flexDirection: "row",
    marginBottom: 4,
    alignItems: "center",
  },
  eduDegree: {
    fontFamily: "Helvetica-Bold",
    width: 125,
    flexShrink: 0,
    paddingRight: 10,
  },
  eduSchool: { flex: 1, color: "#333" },
  eduYears: { width: 55, flexShrink: 0, color: "#666", textAlign: "right" },
  expRow: {
    marginBottom: 5,
  },
  expLine: {
    flexDirection: "row",
    marginBottom: 2,
    alignItems: "flex-start",
  },
  expRole: { fontFamily: "Helvetica-Bold", width: 125, flexShrink: 0 },
  expCompany: { flex: 1, color: "#333" },
  expDates: { width: 95, flexShrink: 0, color: "#666", textAlign: "right" },
  expPoint: {
    fontSize: 7,
    color: "#444",
    marginLeft: 125,
    marginRight: 100,
    lineHeight: 1.3,
  },
  projectRow: {
    flexDirection: "row",
    marginBottom: 4,
    alignItems: "flex-start",
  },
  projectName: {
    fontFamily: "Helvetica-Bold",
    width: 125,
    flexShrink: 0,
    paddingRight: 10,
  },
  projectDesc: {
    flex: 1,
    fontSize: 7,
    color: "#444",
    lineHeight: 1.3,
    minWidth: 0,
    marginRight: 7,
  },
  projectTech: {
    fontSize: 7,
    color: "#555",
    width: 95,
    flexShrink: 0,
    textAlign: "right",
  },
  skillsLine: {
    flexDirection: "row",
    marginBottom: 2,
    alignItems: "flex-start",
  },
  skillsCat: {
    fontFamily: "Helvetica-Bold",
    width: 125,
    flexShrink: 0,
    paddingRight: 10,
    fontSize: 7,
    color: "#333",
  },
  skillsItems: {
    flex: 1,
    fontSize: 7,
    color: "#333",
    lineHeight: 1.35,
    minWidth: 0,
  },
  certLine: {
    fontSize: 7,
    color: "#333",
    lineHeight: 1.4,
  },
});

export function CvDocument({
  data,
  locale = "fr",
}: {
  data: PortfolioData;
  locale?: DataLocale;
}) {
  const {
    personal,
    professional,
    education,
    experience,
    projects,
    skills,
    certifications,
    contact,
  } = data;
  const t = sectionTitles[locale];
  const aboutShort = truncate(professional.about, 500);
  const projectsList = projects
    .filter((p) => p.slug !== "intranet-ch-cahors" && p.slug !== "arbirange")
    .slice(0, 5);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{personal.name}</Text>
          {personal.location && (
            <Text style={styles.location}>{personal.location}</Text>
          )}
          <Text style={styles.tagline}>{personal.tagline}</Text>
          <View style={styles.contact}>
            {contact.email && (
              <Link src={`mailto:${contact.email}`} style={styles.contactItem}>
                {contact.email}
              </Link>
            )}
            {contact.email &&
              (contact.phone || contact.linkedin || contact.github) && (
                <Text style={styles.contactSep}>|</Text>
              )}
            {contact.phone && (
              <Text style={styles.contactItem}>{contact.phone}</Text>
            )}
            {contact.phone && (contact.linkedin || contact.github) && (
              <Text style={styles.contactSep}>|</Text>
            )}
            {contact.linkedin && (
              <Link src={contact.linkedin} style={styles.contactItem}>
                LinkedIn
              </Link>
            )}
            {contact.linkedin && contact.github && (
              <Text style={styles.contactSep}>|</Text>
            )}
            {contact.github && (
              <Link src={contact.github} style={styles.contactItem}>
                GitHub
              </Link>
            )}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.about}</Text>
          <Text style={styles.about}>{professional.about}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.education}</Text>
          {education.map((edu, i) => (
            <View key={i} style={styles.eduRow}>
              <Text style={styles.eduDegree}>{edu.degree}</Text>
              <Text style={styles.eduSchool}>{edu.institution}</Text>
              <Text style={styles.eduYears}>
                {edu.startYear} – {edu.endYear}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.experience}</Text>
          {experience.map((exp, i) => (
            <View key={i} style={styles.expRow}>
              <View style={styles.expLine}>
                <Text style={styles.expRole}>{exp.role}</Text>
                <Text style={styles.expCompany}>
                  {exp.company}
                  {exp.city ? ` — ${exp.city}` : ""}
                </Text>
                <Text style={styles.expDates}>
                  {exp.startDate} – {exp.endDate}
                </Text>
              </View>
              {exp.points[0] && (
                <Text style={styles.expPoint}>{exp.points.join("\n")}</Text>
              )}
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.projects}</Text>
          {projectsList.map((proj, i) => (
            <View key={i} style={styles.projectRow}>
              <Text style={styles.projectName}>{proj.name}</Text>
              <Text style={styles.projectDesc}>{proj.description}</Text>
              <Text style={styles.projectTech}>
                {proj.technologies?.length
                  ? proj.technologies.slice(0, 5).join(", ")
                  : ""}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.skills}</Text>
          {skills.map((cat, i) => (
            <View key={i} style={styles.skillsLine}>
              <Text style={styles.skillsCat}>{cat.name}:</Text>
              <Text style={styles.skillsItems}>
                {cat.items.map((item) => item.name).join(", ")}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t.certifications}</Text>
          {certifications.map((cert, i) => (
            <Text key={i} style={styles.certLine}>
              {cert.name} — {cert.issuer} ({cert.year})
            </Text>
          ))}
        </View>
      </Page>
    </Document>
  );
}
