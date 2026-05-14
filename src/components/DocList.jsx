import React from "react";
import { useAllDocsData } from "@docusaurus/plugin-content-docs/client";
import Link from "@docusaurus/Link";

export default function DocList() {
  const allDocsData = useAllDocsData();

  // Получаем документы из плагина docs (обычно 'default')
  const docsPluginId = "default"; // если не меняли в конфиге
  const docsData = allDocsData[docsPluginId];

  if (!docsData || !docsData.versions) {
    return null;
  }

  // Берём документы из последней версии
  const latestVersion =
    docsData.versions.find((v) => v.isLatest) || docsData.versions[0];
  const allDocs = latestVersion.docs;

  // Отфильтровываем только ссылки категорий
  const filteredDocs = allDocs.filter((doc) => doc.id.includes("/category/"));

  return (
    <ul>
      {filteredDocs.map((doc) => (
        <li key={doc.id}>
          <Link to={doc.path} style={{ fontSize: "1.3em", fontWeight: "bold" }}>
            {doc.id.split("/category/").pop().toUpperCase()}
          </Link>
        </li>
      ))}
    </ul>
  );
}
