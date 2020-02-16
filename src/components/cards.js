import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row
} from 'reactstrap';

const Cards = (props) => {
  return (
    <div className="col-12">

      <Row>
      <Card className="col-4">
        <CardImg top width="100%" src="https://softwarica.edu.np/wp-content/uploads/2018/07/softwarica-conventry.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>Softwarica College of IT & E-Commerce</CardTitle>
          <CardSubtitle>Dillibajar, Kathmandu</CardSubtitle>
          <CardText>IT College</CardText>
          <CardText>Softwarica College is located at Dillibazar, Kathmandu. It is working in collaboration 
            with Coventry University to offer a range of undergraduate programmes, BSc (Hons) Computing and BSc (Hons) 
            Ethical Hacking & Cybersecurity.
             On successful completion students will receive Coventry University degree award.</CardText>
          <Button href="https://softwarica.edu.np/apply-now/">APPLY</Button>
        </CardBody>
      </Card>

      <Card className="col-4">
        <CardImg top width="100%" src="https://softwarica.edu.np/wp-content/uploads/2018/07/softwarica-conventry.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>Softwarica College of IT & E-Commerce</CardTitle>
          <CardSubtitle>Dillibajar, Kathmandu</CardSubtitle>
          <CardText>IT College</CardText>
          <CardText>Softwarica College is located at Dillibazar, Kathmandu. It is working in collaboration 
            with Coventry University to offer a range of undergraduate programmes, BSc (Hons) Computing and BSc (Hons) 
            Ethical Hacking & Cybersecurity.
             On successful completion students will receive Coventry University degree award.</CardText>
          <Button href="https://softwarica.edu.np/apply-now/">APPLY</Button>
        </CardBody>
      </Card>

      <Card className="col-4">
        <CardImg top width="100%" src="https://lh3.googleusercontent.com/proxy/QI8xFFkD8PhXzmrk2JvQkcmf-MlPRdj8I0K4SCOlJ1d4Qz5Qz9bMP_K0u0CpIxl-wzKTgG10-lfhSdcuxl4Nq45oYZINzdforWR28zxETnDVFcWk5S5CSA-y8CDyxJy9JZc" />
        <CardBody>
          <CardTitle>Mid-Valley College</CardTitle>
          <CardSubtitle>Dillibajar, Kathmandu</CardSubtitle>
          <CardText>Hotel Management college</CardText>
          <CardText>Hospitality internships offer firsthand experience in some of the most
             distinguished tourism destinations and related companies in the world. Our internship
              program provides college students with 
            guaranteed internship placement in premier hospitality....</CardText>
          <Button href="http://www.midvalley.edu.np/admission/">APPLY</Button>
        </CardBody>
      </Card>

      </Row>

    </div>
  );
};

export default Cards;