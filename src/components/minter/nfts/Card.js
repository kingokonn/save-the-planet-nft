import React from "react";
import PropTypes from "prop-types";
import { Card, Col, Badge, Stack, Row } from "react-bootstrap";
import { truncateAddress } from "../../../utils";
import Identicon from "../../ui/Identicon";
import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";

const NftCard = ({ nft, isOwner}) => {
  const { description, owner, name, index } = nft;

  return (
    <Col key={index}>
      <Card className=" h-100">
        <Card.Header>
          <Stack direction="horizontal" gap={2}>
            <Identicon address={owner} size={28} />
            <span className="font-monospace text-secondary">
              {truncateAddress(owner)}
            </span>
            <Badge bg="secondary" className="ms-auto">
              {index} ID
            </Badge>
          </Stack>
        </Card.Header>

        <div className=" ratio ratio-4x3">
          <img src="https://www.bing.com/images/search?view=detailV2&ccid=PRQptRkh&id=B61E6544C7598EDA967068BBEBDBD6BC3FCF7886&thid=OIP.PRQptRkhLRxuISOFcWYEAgHaHa&mediaurl=https%3a%2f%2fd3t3ozftmdmh3i.cloudfront.net%2fproduction%2fpodcast_uploaded%2f1362488%2f1362488-1548040775541-354271dcd4512.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.3d1429b519212d1c6e21238571660402%3frik%3dhnjPP7zW2%252bu7aA%26pid%3dImgRaw%26r%3d0&exph=3000&expw=3000&q=save+the+planet&simid=608036909825153927&FORM=IRPRST&ck=97E5D24974FE94563F0CC61B9E318C79&selectedIndex=0&ajaxhist=0&ajaxserp=0" alt={description} style={{ objectFit: "cover" }} />
        </div>

        <Card.Body className="d-flex  flex-column text-center">
          <Card.Title>{name}</Card.Title>
          <Card.Text className="flex-grow-1">{description}</Card.Text>
          
        </Card.Body>
      </Card>
    </Col>
  );
};

NftCard.propTypes = {
  // props passed into this component
  nft: PropTypes.instanceOf(Object).isRequired,
};

export default NftCard;
