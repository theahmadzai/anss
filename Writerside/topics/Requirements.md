# Requirements

## Objectives

- To have a secure platform to manage day-to-day social and resettlement services, and sponsorship activities.
- To manage day-to-day social and resettlement services securely.
- A data storage system to store day-to-day data related to services, membership, and project management.


## Key Functions

The following key functions should be provided by the database system:

- [ ] Have a document library, where pre-defined types of documents can be uploaded by ANSS Foundation
    - [ ] the uploaded contents can only be accessed through logging into the system as a staff member, volunteers, stakeholders, or donors, when appropriate access is provided.
    - [x] These documents can include, activity reports, financial reports, publications, research reports, training and capacity building materials, and other relevant resources in the form of documents.
    - [x] The document library should have capabilities to record metadata, such as who uploaded the documents, when, and from what user account, etc, as well who downloaded and number of downloads...
- [x] Database should store a list of ANSS Foundation Staff, Volunteers and Board Members, with key information about these, such as names, contact information, address, photo, resume, copies of educational/experience documents. It is also very important to identify who from these staff, volunteers and board members hold which positions, and they are qualified to provide which services/expertise.
    - [x] Each staff member/volunteer/Board member be assigned a unique ID. This could be a table in the database.

### Services

- [x] The database should integrate a list of all services provided by ANSS Foundation, each service having a unique ID; and each service having more details, such as: Description of services, steps/process in providing the service, average time it takes to schedule delivery of the service, and average time it takes to deliver the service, and who from the staff/volunteers/board members are qualified to be assigned as Service Delivery Lead (SDL).
    - [x] Database provides a link a checklist of information/documents needed from the client, to receive the service(s).

### Clients

- [ ] Clients are the core constituents of ANSS Foundation who receive various social and resettlement services. The database should record all services received by clients.
    - [ ] Clients can be categorized in two categories: (1) repeated clients, (2) new clients. All repeated clients should already be in our system, and if they receive services, a new entry should be done to indicate that a new service was provided. All new clients should be first entered into the system by filling a service in-take form, then they will be scheduled to receive the service(s) required.
    - [x] Each client, when we open their profile, should have all the details of when they were entered in the system, who provided which services to the client in the past, and we should be able to upload a limited(?) number of files in the client profile or add notes/remarks.

#### Client In-Take Form


Client information required for database as in-take before services can be provided:

- PA (Principal Applicant) First name:
- PA Last name:
- PA Contact number:
- PA UCI:
- PA Application number: If applicable
- PA Date of birth (MM-DD-YYYY):
- PA Current address (Complete Canadian address)

Description and nature of the service (s) requested and needs assessment: Narrative.

*Add the following information for all other family members who also require one or more services of ANSS Foundation **(if applicable only)**.*

- First name:
- Last name:
- UCI:
- Date of birth:
- Application number **(if applicable only)**:
- Email address:
- Service (s) requested (Select ALL services the client is requesting or needs):
    - PR Application
    - Community Sponsorship
    - Group of Five Sponsorship
    - Super Visa
    - Visit Visa
    - Food Bank - Referral ONLY
    - ESL/LINC/Adult School - Referral ONLY
    - Translation of a document (Identify documents, marriage certificates only)
    - ODSP Application
    - Ontario Works
    - Refugee Claim (inside Canada)
    - Legal Aid application
    - OSAP
    - Request for Dari or Pashto classes
    - School enrollment applications (children/adults), referral to colleges/universities
    - Family doctors (referrals to clinics/practitioners accepting new clients around the GTA)
    - SIN Number / Work Permit
    - Other (Please specify in the description box below)

Description of the service (s) requested and needs assessment.

Add details, for example, what are the immediate and long-term needs of the client, or/If a translation is needed, specify the type of translation, from which language, type of document, etc?

Details can be completed in English/French/Pashto/Dari/Arabic/Urdu

This form is completed by:

- PA (Applicant for services, self-served at this stage)
- ANSS Foundation Staff/Volunteer
    - If completed by ANSS Foundation staff/volunteer, include staff/volunteer name.

- I consent to the collection of my personal information to request ANSS Foundation service (s). I also hereby declare that I am authorized to share the information of my family members (if applicable only), who are also requesting ANSS Foundation service (s).
    - I consent
- Short comments/questions (Optional)


## Notes

- The database design incorporates relationships between Users, Staff/Volunteers/Board Members, Services, and Clients for effective data management.
- Metadata, such as upload/download details, is tracked in the Document Library.
- Services link to Staff/Volunteers/Board Members who act as Service Delivery Leads (SDL).
- Clients can be categorized as repeated or new, and their service history and profile details are maintained.
