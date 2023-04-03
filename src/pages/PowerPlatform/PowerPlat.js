import React from "react";

import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import DraggableDialog from "../../components/PowerAutomate/qr-code-dialog";

const BiReport = () => {
return (
    <section>
        <section>
<h1>Power Automate</h1>
<DraggableDialog />
</section>
<section id="bi-report"> 
<h1>Power BI (Business Intelligence)</h1>
<PowerBIEmbed
embedConfig = {{
    type: 'report',   // Supported types: report, dashboard, tile, visual and qna
    id: '3d991e56-9375-4447-af2f-0f471cf27c5a',
    embedUrl: "https://app.powerbi.com/reportEmbed?reportId=3d991e56-9375-4447-af2f-0f471cf27c5a&groupId=a44b2575-eba2-4fcc-bb7d-49102b66d9ec&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1CLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlLCJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19",
    accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZmViYzAyOGItZjk0My00YmEzLWJmNzMtOWM0MDgyMmI4OTUxLyIsImlhdCI6MTY3OTM0MTQwOCwibmJmIjoxNjc5MzQxNDA4LCJleHAiOjE2NzkzNDU4OTYsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVlFBcS84VEFBQUFwRS9hRHVoeFFxQ2Rway96QllGVTh1Rm5naHVvazc5eU85aXdrV084NThmOG5vbjdrSnIrVUg5Z01rZ2hhNGdPV211YzB0S3VYbVpzTERDTVVNelpwU3g1QVV0bE5XVkhGUWhoaFhVQ2t1Yz0iLCJhbXIiOlsicHdkIiwibWZhIl0sImFwcGlkIjoiODcxYzAxMGYtNWU2MS00ZmIxLTgzYWMtOTg2MTBhN2U5MTEwIiwiYXBwaWRhY3IiOiIwIiwiZmFtaWx5X25hbWUiOiJNdWlydXJpIiwiZ2l2ZW5fbmFtZSI6Ikp1bGlhIiwiaXBhZGRyIjoiNDEuOTAuNzEuNDAiLCJuYW1lIjoiSnVsaWEgTXVpcnVyaSIsIm9pZCI6IjlhMzRhNzk3LTY3NWQtNDE4Yy1iYWJmLWM5ZWJkMWM5YzY4YSIsInB1aWQiOiIxMDAzMjAwMUU5MjQwODlFIiwicmgiOiIwLkFWVUFpd0s4X2tQNW8wdV9jNXhBZ2l1SlVRa0FBQUFBQUFBQXdBQUFBQUFBQUFDSUFHby4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzdWIiOiJmb2Nrb0FueFZLTFBQd3ZhUGVJOFVmNHRVUlZuTW93VTlsOG1fbHVDRkVnIiwidGlkIjoiZmViYzAyOGItZjk0My00YmEzLWJmNzMtOWM0MDgyMmI4OTUxIiwidW5pcXVlX25hbWUiOiJKdWxpYU11aXJ1cmlANWtsZjNxLm9ubWljcm9zb2Z0LmNvbSIsInVwbiI6Ikp1bGlhTXVpcnVyaUA1a2xmM3Eub25taWNyb3NvZnQuY29tIiwidXRpIjoiX0NaTTdrenBGa09UQkVudVBQY0pBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiNjJlOTAzOTQtNjlmNS00MjM3LTkxOTAtMDEyMTc3MTQ1ZTEwIiwiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19wbCI6ImVuLVVTIn0.O079W3XwCMZBblMOdZJK-aeNZ0fO42_L4yV1k1NIhp4cGxRqoC_DLbGPQU2Id5hvPgXTyIVZ80QSqWDsjYu0LHgdahW9gqoxL5VDzVsMfUTIFkAQEXmDP0n3jonymRObhKXGraGgozBR3rBp7PKlcxB-HPw4ztM4pwSj3BJgNDflED94I1OkXZ2CEh_yEG2Atjp4GfSxkpjpqIubBIEV07nwQM1dnAqKFljJzdS7KBYDwx8j2mX9etJuzhdgmLzbUFzAHywcTNsEGvlG6t8Iy_IZ4cs23Xdeut6EaClltelCSq-jmBT-CmZ9eO1lJE3a4idug6QEmZ3mri8WVZ3SiQ',
    tokenType: models.TokenType.Aad,
    settings: {
        panes: {
            filters: {
                expanded: false,
                visible: false
            }
        },
        background: models.BackgroundType.Transparent,
    }
}}

eventHandlers = { 
    new Map([
        ['loaded', function () {console.log('Report loaded');}],
        ['rendered', function () {console.log('Report rendered');}],
        ['error', function (event) {console.log(event.detail);}]
    ])
}
    
cssClassName = { "report-style-class" }

getEmbeddedComponent = { (embeddedReport) => {
    window.report = embeddedReport;
}}
/>
</section>

</section>
);
};

export default BiReport;