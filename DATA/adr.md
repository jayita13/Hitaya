### Requirements, Scope, Risks and Assumptions

| Category | Details |
| ----------- | ---------- |
| Requirements | |
| In Scope | <ul><li> Post to portal and destroy from portal.</li><li> Focuses on North-America related architecture.</li></ul> |
| Out of Scope | NA |
| Risks | NA |
| Assumptions | NA |


### Non Functional Requirements

| Quality Attributes | Technical Requirements | Service Level Agreement (SLA) |
| ----------- | ---------- | ---------- |
| Business Volume | <ul><li>Traffic </li><li>Total Users </li><li>Throughput </li></ul> | <ul><li> 10,000 requests per day</li><li>100 Users </li><li>50 Concurrent Users</li></ul> |
| Performance | <ul><li>Response Time (RT) </li></ul> | <ul><li>Order Updated API ≤ 300 ms</li></ul> |
| Scalability | <ul><li>Servers </li></ul> | <ul><li>Runs on 8 App Servers - API</li><li>Runs on 4 Service Servers - Event Consumers </li></ul> |
| Data Retention & Archiving Plan | <ul><li>Retention Plan </li> <li>Data Archival Plan </li></ul> | <ul><li>Events in Kafka  - 7 days.</li><li>Transaction Status in Couchbase - 4 days.</li><li>2 years in transaction DB and additional 5 years in archive</li><li>Archive job to move data monthly</li></ul> |
| Auditability | <ul><li>Logging </li></ul> | <ul><li>Trip postings will be tracked in OrderAuditHistory Table in XPOMaster.</li></ul> |
| Observability | <ul><li>Monitoring </li></ul> | <ul><li>All requests will be logged to Kibana.</li></ul> |
| Security | <ul><li>Authentication</li><li>Authorization</li><li>Data at Rest</li><li>Data at Motion</li></ul> | <ul><li>Thinktecure</li><li>FO Roles & Permissions</li><li>No need of DB encryption</li><li>Use HTTPS</li></ul> |
| Availability & Disaster Recovery | <ul><li>Availability </li><li>Disaster Recovery </li></ul> | <ul><li>24X7 except the planned outage</li><li>Part of Brokerage DR Strategy</li></ul>  |
| Testability | <ul><li>Unit Test </li><li>Automation Testing </li><li>Performance Testing </li></ul> | <ul><li>Yes</li><li>Yes</li><li>Yes</li></ul> |
