# 🛡️ Automotive Cybersecurity Blueprint (ISO 21434)

## 1. Gestão de Riscos Cibernéticos
O GuardDrive segue os princípios da norma ISO 21434, tratando o veículo como um nó de infraestrutura crítica. A arquitetura foca na mitigação de ameaças de interceptação de dados, spoofing de sensores e ataques de replay.

## 2. Elementos de Segurança L1 Core
- **Hardware Root of Trust (RoT)**: Chaves criptográficas geradas e mantidas dentro de *Secure Elements* imutáveis. O software core nunca tem acesso às chaves privadas.
- **Assinatura Baseada em Contexto**: O protocolo L1 assina cada payload de telemetria com um hash geográfico e temporal, garantindo que o dado não possa ser replicado em outro local/tempo.
- **Imunidade de Rede**: O sistema detecta e bloqueia injeção de dados inerciais falsos (Simulação via Chaos Monkey), mantendo a integridade da Cadeia de Custódia mesmo sob compromisso do sistema principal do veículo.

## 3. Monitoramento de Rigor em Tempo Real
O console de **Métricas de Rigor** atua como um IDPS (Intrusion Detection and Prevention System) pericial, monitorando desvios inerciais matematicamente impossíveis que sugerem manipulação de sensor.

---
**Status Técnico**: ISO 21434 READY (TRL 6)
**Diferencial**: Único protocolo a integrar perícia e cibersegurança em Camada 1.
