import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// name, abv, ibu, isOrganic, labels, year, status, if available: related glass data

class BeerModal extends React.Component {
  render() {
    if (this.props.beer === null) {
      return null;
    }

    return (
      <div>
        <Modal isOpen onClick={this.props.toggleModal}>
          <ModalHeader>{this.props.beer.nameDisplay}</ModalHeader>
          <ModalBody>
            {this.props.beer.labels ? (
              <img
                src={this.props.beer.labels.medium}
                style={{
                  display: 'block',
                  margin: 'auto',
                  marginBottom: '20px',
                }}
              />
            ) : null}
            <div className="row">
              <div className={this.props.beer.description ? 'col-4' : 'col'}>
                {this.props.beer.abv ? (
                  <p>
                    <b>Alcohol: </b> {this.props.beer.abv}%
                  </p>
                ) : null}
                {this.props.beer.ibu ? (
                  <p>
                    <b>Bitterness: </b>
                    {this.props.beer.ibu}
                  </p>
                ) : null}
                {this.props.beer.isOrganic ? (
                  <p>
                    <b>Organic: </b>
                    {this.props.beer.isOrganic === 'N' ? 'No' : 'Yes'}
                  </p>
                ) : null}
                {this.props.beer.createDate ? (
                  <p>
                    <b>Year: </b> {this.props.beer.createDate.slice(0, 4)}
                  </p>
                ) : null}
                {this.props.beer.statusDisplay ? (
                  <p>
                    <b>Status: </b> {this.props.beer.statusDisplay}
                  </p>
                ) : null}
                {this.props.beer.available ? (
                  <p>
                    <b>Available: </b>
                    {this.props.beer.available.name}
                  </p>
                ) : null}
                {this.props.beer.glass ? (
                  <p>
                    <b>Glass: </b>
                    {this.props.beer.glass.name}
                  </p>
                ) : null}
              </div>

              {this.props.beer.description ? (
                <div className="col-8">
                  <p>
                    <b>Description: </b> {this.props.beer.description}
                  </p>
                </div>
              ) : null}
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.toggleModal}>
              Back
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

BeerModal.propTypes = {
  beer: PropTypes.objectOf(PropTypes.any),
  toggleModal: PropTypes.func,
};

export default BeerModal;
