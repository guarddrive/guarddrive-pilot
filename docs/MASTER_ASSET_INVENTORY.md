# 🗃️ INVENTÁRIO MESTRE DE ATIVOS: TRIPLE-REPO ARCHITECTURE

Este documento classifica e enumera todos os ativos do ecossistema **GuardDrive**, organizados em uma estrutura de três repositórios para garantir máxima segurança e visibilidade estratégica.

---

## 🏛️ 1. Estrutura de Repositórios (Triple-Repo)

| Repositório | Visibilidade | Objetivo |
| :--- | :--- | :--- |
| **Pilot** | Público (Vercel) | Website oficial, Documentação pública e Portal de Marca. |
| **Submission Portal** | Público (GitHub) | Versão sanitizada para avaliadores de editais e TRL 6. |
| **Sovereign Vault** | **PRIVADO** | O "Cérebro" estratégico: NDAs, Patentes, Auditorias e IP. |

---

## 🏗️ 2. Ativos Técnicos e Infraestrutura
| ID | Ativo | Localização | Descrição |
| :--- | :--- | :--- | :--- |
| T1 | **City-Twin-Engine** | `submission-portal/` | Motor de simulação de alta fidelidade. |
| T2 | **GuardDrive SDK** | `submission-portal/` | Kit de desenvolvimento telemático. |
| T3 | **GuardPass** | `submission-portal/` | Camada de Identidade Soberana (Sovereign ID). |
| T4 | **LogicValidator** | **VAULT PRIVADO** | Auditoria de lógica (Ex-Themis). |
| T5 | **GrantOptimizer** | **VAULT PRIVADO** | IA de validação de editais (Ex-EditalShield). |

## ⚖️ 3. Vault Jurídico e Estratégico (PRIVADO)
| ID | Ativo | Localização | Descrição |
| :--- | :--- | :--- | :--- |
| L1 | **Signed NDAs** | `vault/legal/` | Acordos de confidencialidade críticos. |
| L2 | **Patent Vault** | `vault/patentes/` | Drafts robústos de patentes (Framework, ID, Security). |
| L3 | **Lawyer Review Pack** | `vault/` | Guia consolidado para RS Advogados. |
| L4 | **ZK-Privacy Report** | `submission-portal/` | Prova de conformidade LGPD (Sanitizada). |

---

## 🔐 4. Protocolo de Segurança e Soberania
- **Pilot**: Mantém a presença digital (Website). Bloqueado via `.gitignore` para nunca receber arquivos sensíveis.
- **Sovereign Vault**: Repositório independente e privado na organização GuardDrive. Contém o valor intelectual mestre.
- **Submission Portal**: Criado especificamente para o Centelha III e investidores.

---
© 2026 Symbeon Labs | Sovereign Infrastructure Division.
💍🛡️🚀🎓💍🛡️🦅
