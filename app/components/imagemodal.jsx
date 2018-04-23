import React, { Component } from 'react'

const SelectImageModal = () =>(
    <div className="modal fade" id="imagePickerModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Choose background </h5>
                    <button type="button" className="close btnCloseImageModal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-md-4 imageholder">
                            <div className="thumbnail">
                                <img src="images/milky.jpg" data-image-id="ootb1" alt="Lights"  />
                            </div>
                        </div>
                        <div className="col-md-4 imageholder">
                            <div className="thumbnail">
                                <img src="images/milky.jpg" data-image-id="ootb2" alt="Nature"  />
                            </div>
                        </div>
                        <div className="col-md-4 imageholder">
                            <div className="thumbnail">
                                <img src="images/milky.jpg" data-image-id="ootb3" alt="Fjords"  />
                            </div>
                        </div>
                        <div className="col-md-4 imageholder">
                            <div className="thumbnail">
                                <img src="images/milky.jpg" data-image-id="ootb4" alt="Fjords"  />
                            </div>
                        </div>
                        <div className="col-md-4 imageholder">
                            <div className="thumbnail">
                                <img src="images/milky.jpg" data-image-id="ootb5" alt="Fjords"  />
                            </div>
                        </div>
                        <div className="col-md-4 imageholder">
                            <div className="thumbnail">
                                <img src="images/milky.jpg" data-image-id="ootb6" alt="Fjords"  />
                            </div>
                        </div>
                        <div className="col-md-4 imageholder">
                            <div className="thumbnail">
                                <img src="images/milky.jpg" data-image-id="ootb7" alt="Fjords"  />
                            </div>
                        </div>
                        <div className="col-md-4 imageholder">
                            <div className="thumbnail">
                                <img src="images/milky.jpg" data-image-id="ootb8" alt="Fjords"  />
                            </div>
                        </div>
                        <div className="col-md-4 imageholder">
                            <div className="thumbnail">
                                <img src="images/milky.jpg" data-image-id="ootb9" alt="Fjords"  />
                            </div>
                        </div>
                        <div className="col-md-4 imageholder">
                            <div className="thumbnail">
                                <img src="images/milky.jpg" data-image-id="ootb10" alt="Fjords"  />
                            </div>
                        </div>
                        <div className="col-md-4 imageholder">
                            <div className="thumbnail">
                                <img src="images/milky.jpg" data-image-id="ootb11" alt="Fjords"  />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary btn-selectImage disabled">Ok</button>
                </div>
            </div>
        </div>
    </div>
)

export default SelectImageModal;