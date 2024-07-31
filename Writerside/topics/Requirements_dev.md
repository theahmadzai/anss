# ANSS Foundation Database Schema

Please review the non-technical requirements for an overview and goals of the database.

## Tables

### Staff/Volunteers/Board Members Table

1. UserID (primary key)
2. First Name
3. Last Name
4. Gender
5. Email Address
6. Phone Number
7. Current Address
8. Qualified to provide these services: Services_IDs

### Clients Table

1. UserID (primary key)
2. First Name
3. Last Name
4. Gender
5. Email Address
6. Phone Number
7. Current Address
8. Status in Canada
9. ANSS Member (Yes/No)


## Table Structure

1. Document Library
    - DocumentID (Primary Key)
    - DocumentName
    - UploadDate
    - UploadedBy (Foreign Key referencing StaffVolunteersBoardMembers.UserID)
    - DownloadCount
    - DocumentType
    - FilePath

2. Staff/Volunteers/Board Members Table
    - SVB_ID (Primary Key)
    - UserID (Foreign Key referencing Users.UserID)
    - FirstName
    - LastName
    - Gender
    - Email
    - Phone
    - CurrentAddress
    - Services_IDs (Foreign Key referencing Services.ServiceID)
    - PositionHeld

3. Services Table
    - ServiceID (Primary Key)
    - ServiceName
    - Description
    - StepsProcess
    - AvgScheduleTime
    - AvgDeliveryTime
    - SDL_ID (Foreign Key referencing StaffVolunteersBoardMembers.SVB_ID)

4. Clients Table
    - ClientID (Primary Key)
    - UserID (Foreign Key referencing Users.UserID)
    - FirstName
    - LastName
    - Gender
    - Email
    - Phone
    - CurrentAddress
    - StatusInCanada
    - ANSSMember (Yes/No)
    - EntryDate
    - Notes