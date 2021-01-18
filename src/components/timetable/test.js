: this.state.line === 12 && this.state.loadpage === false ? (
    <div>
      <Breadcrumb style={{ margin: "16px 0" }}>
        <Breadcrumb.Item>
          {this.state.year12 === null ? (
            <label>จัดตารางเรียนรวม</label>
          ) : (
            <a onClick={this.onCS12}>จัดตารางเรียนรวม</a>
          )}
        </Breadcrumb.Item>
        {this.state.year12 != null ? (
          <Breadcrumb.Item>
            {this.state.class12 === null ? (
              <label>ปีการศึกษา {this.state.year12}</label>
            ) : (
              <a onClick={this.onCY12}>
                ปีการศึกษา {this.state.year12}
              </a>
            )}
          </Breadcrumb.Item>
        ) : null}
        {this.state.class12 != null ? (
          <Breadcrumb.Item>
            {this.state.term12 === null ? (
              <label>กลุ่มเรียน {this.state.class12}</label>
            ) : (
              <a onClick={this.onCC12}>
                ชั้นปีที่ {this.state.class12}
              </a>
            )}
          </Breadcrumb.Item>
        ) : null}
        {this.state.term12 != null ? (
          <Breadcrumb.Item>เทอม {this.state.term12}</Breadcrumb.Item>
        ) : null}
      </Breadcrumb>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        {this.state.year12 === null ? (
          <div>
            <Divider orientation="left">ปีการศึกษา</Divider>
            <Row gutter={16}>
              <Col className="gutter-row" span={4}>
                {this.state.cutyear.map((listValue, index) => {
                  return (
                    <tr key={index}>
                      <a
                        onClick={async (a) => {
                          await this.setState({ year12: listValue });
                        }}
                      >
                        {listValue}
                      </a>
                    </tr>
                  );
                })}
              </Col>
            </Row>
            <Footer style={{ textAlign: "center", color: "red" }}>
              <label>
                *หากไม่ได้ตั้งค่าห้องเรียนอย่างน้อย1ปีการศึกษาจะไม่แสดงขึ้นมาให้เลือก
              </label>
            </Footer>
          </div>
        ) : this.state.class12 === null ? (
          <div>
            <Divider orientation="left">กลุ่มเรียน</Divider>
            <Row gutter={16}>
              <Col className="gutter-row" span={4}>
              <Button type="primary" onClick={async (a) => {
                          await this.setState({
                            class12: 1,
                          });
                        }}>ชั้นปีที่ 1</Button>
              </Col>
              <Col className="gutter-row" span={4}>
              <Button type="primary" onClick={async (a) => {
                          await this.setState({
                            class12: 2,
                          });
                        }}>ชั้นปีที่ 2</Button>
              </Col>
              <Col className="gutter-row" span={4}>
              <Button type="primary" onClick={async (a) => {
                          await this.setState({
                            class12: 3,
                          });
                        }}>ชั้นปีที่ 3</Button>
              </Col>
            </Row>
            <br></br>
            <Row gutter={16}>
              <Col className="gutter-row" span={4}>
              <Button type="primary" onClick={async (a) => {
                          await this.setState({
                            class12: 4,
                          });
                        }}>ชั้นปีที่ 4</Button>
              </Col>
              <Col className="gutter-row" span={4}>
              <Button type="primary" onClick={async (a) => {
                          await this.setState({
                            class12: 5,
                          });
                        }}>ชั้นปีที่ 5</Button>
              </Col>
              <Col className="gutter-row" span={4}>
              <Button type="primary" onClick={async (a) => {
                      await this.setState({ term7: 1 });
                      await this.filterIDSub12();
                      await this.selectDataCos12();
                    }}>ชั้นปีที่ 6</Button>
              </Col>
            </Row>
          </div>
        ) : this.state.term12 == null ? (
          <div>
            <Divider orientation="left">เทอม</Divider>
            <Row gutter={16}>
            <Col className="gutter-row" span={4}>
              <Button type="primary" onClick={async (a) => {
                      await this.setState({ term12: 1 });
                      await this.filterIDSub12();
                      await this.selectDataCos12();
                    }}>เทอม 1</Button>
              </Col>
              <Col className="gutter-row" span={4}>
              <Button type="primary" onClick={async (a) => {
                      await this.setState({ term12: 2 });
                      await this.filterIDSub12();
                      await this.selectDataCos12();
                    }}>เทอม 2</Button>
              </Col>
            </Row>
          </div>
        ) : (
          <div>
            <Divider orientation="left">จัดตารางเรียน</Divider>
            <Row gutter={24}>
              <Col className="gutter-row" span={1}></Col>
              <Col className="gutter-row" span={4}>
                <h3 style={{ textAlign: "start", padding: 5 }}>
                  เพิ่ม
                </h3>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col className="gutter-row" span={4}>
                <label>รายวิชา</label>
              </Col>
              <Col className="gutter-row" span={4}>
                <label>ช่วงเวลา</label>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col className="gutter-row" span={4}>
                <Select
                  showSearch
                  allowClear
                  disabled={this.state.lock7 === 1 ? false : true}
                  style={{ width: 190 }}
                  placeholder="เลือกรายวิชา"
                  optionFilterProp="children"
                  onChange={this.เปลี่ยนรายวิชา12}
                  value={this.state.seCos}
                  onSearch={this.onSearch}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {subjact}
                </Select>
              </Col>
              <Col className="gutter-row" span={4}>
                <Select
                  showSearch
                  allowClear
                  style={{ width: 190 }}
                  placeholder="เลือกช่วงเวลา"
                  optionFilterProp="children"
                  onChange={this.เปลี่ยนเวลา12}
                  value={this.state.seTime}
                  onSearch={this.onSearch}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {time}
                </Select>
              </Col>
              <Col className="gutter-row" span={4}>
                  <Button
                    disabled={
                      this.state.seTime !== null &&
                      this.state.seTime !== undefined &&
                      this.state.seCos !== null &&
                      this.state.seCos !== undefined
                        ? false
                        : true
                    }
                    type="primary"
                    loading={this.state.loading}
                    onClick={this.enterLoading12}
                  >
                    จัดลงตาราง
                  </Button>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col className="gutter-row" span={1}></Col>
              <Col className="gutter-row" span={4}>
                <h3 style={{ textAlign: "start", padding: 5 }}>ลบ</h3>
              </Col>
            </Row>
            <Row gutter={24}>
              <Col className="gutter-row" span={4}>
                <Select
                  showSearch
                  allowClear
                  disabled={
                    this.state.delTime.length > 0 ? false : true
                  }
                  style={{ width: 190 }}
                  placeholder="ช่วงเวลาที่ต้องการลบ"
                  optionFilterProp="children"
                  onChange={this.ลบช่วงเวลา7}
                  value={this.state.seDelTime}
                  onSearch={this.onSearch}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {deltime}
                </Select>
              </Col>
              <Col className="gutter-row" span={4}>
                <Button
                  disabled={
                    this.state.seDelTime !== null &&
                    this.state.seDelTime !== undefined
                      ? false
                      : true
                  }
                  type="primary"
                  loading={this.state.loading}
                  onClick={this.enterLoadingDel7}
                >
                  ลบช่วงเวลา
                </Button>
              </Col>
            </Row>
            <br></br>
            {this.state.show7 === 1 ? (
              <Row gutter={16}>
                <Col className="gutter-row" span={4}>
                  <table style={taTime}>
                    <tr>
                      <th
                        style={{
                          border: "1px solid black",
                          textAlign: "center",
                          width: "max-content",
                          borderInlineEndStyle: "inherit",
                          padding: "5px",
                        }}
                      ></th>
                      <th></th>
                      <th></th>
                      <th></th>
                      <th>ชั้นปีที่ {this.state.class12}</th>
                      <th>ภาคเรียนที่</th>
                      <th
                        style={{
                          textAlign: "left",
                        }}
                      >
                        {this.state.term12}/{this.state.year12}
                      </th>
                      <th></th>
                      <th></th>
                      <th></th>
                    </tr>
                    <tr>
                      <th></th>
                      <th style={taTime}>1</th>
                      <th style={taTime}>2</th>
                      <th style={taTime}>3</th>
                      <th style={taTime}>4</th>
                      <th style={taTime}>5</th>
                      <th style={taTime}>6</th>
                      <th style={taTime}>7</th>
                      <th style={taTime}>8</th>
                      <th style={taTime}>9</th>
                    </tr>
                    <tr>
                      <th></th>
                      <th style={taTime}> 08:30-09:20 </th>
                      <th style={taTime}> 09:20-10:10 </th>
                      <th style={taTime}> 10:10-11:00 </th>
                      <th style={taTime}> 11:00-11:50 </th>
                      <th style={taTime}> 11:50-12:50 </th>
                      <th style={taTime}> 12:50-13:40 </th>
                      <th style={taTime}> 13:40-14.30 </th>
                      <th style={taTime}> 14.30-15.20 </th>
                      <th style={taTime}> 15.20-16.10 </th>
                    </tr>
                    <tr style={taTime}>
                      <th style={taTime}>วันจันทร์</th>
                      <th style={taTime}>
                        {this.state.is1!== null && this.state.it1 === null && 
                        this.state.ic1 === null ? (
                          <div>
                            <label></label>
                            <label>{this.state.is1}</label>
                            <br></br>
                            <label></label>
                          </div>
                        ) : (
                          <div>
                            <label>{this.state.is1}</label>
                            <br></br>
                            <label>{this.state.it1}</label>
                            <br></br>
                            <label>{this.state.ic1}</label>
                          </div>
                        )}
                      </th>
                      <th style={taTime}>
                        {this.state.is2!== null && this.state.it2 === null && 
                        this.state.ic2 === null  ? (
                          <div>
                            <label></label>
                            <label>{this.state.is2}</label>
                            <br></br>
                            <label></label>
                          </div>
                        ) : (
                          <div>
                            <label>{this.state.is2}</label>
                            <br></br>
                            <label>{this.state.it2}</label>
                            <br></br>
                            <label>{this.state.ic2}</label>
                          </div>
                        )}
                      </th>
                      <th style={taTime}>
                        {this.state.is3!== null && this.state.it3 === null && 
                        this.state.ic3 === null ? (
                          <div>
                            <label></label>
                            <label>{this.state.is3}</label>
                            <br></br>
                            <label></label>
                          </div>
                        ) : (
                          <div>
                            <label>{this.state.is3}</label>
                            <br></br>
                            <label>{this.state.it3}</label>
                            <br></br>
                            <label>{this.state.ic3}</label>
                          </div>
                        )}
                      </th>
                      <th style={taTime}>
                        {this.state.is4!== null && this.state.it4 === null && 
                        this.state.ic4 === null  ? (
                          <div>
                            <label></label>
                            <label>{this.state.is4}</label>
                            <br></br>
                            <label></label>
                          </div>
                        ) : (
                          <div>
                            <label>{this.state.is4}</label>
                            <br></br>
                            <label>{this.state.it4}</label>
                            <br></br>
                            <label>{this.state.ic4}</label>
                          </div>
                        )}
                      </th>
                      <th style={taTime}>
                        {this.state.is5!== null && this.state.it5 === null && 
                        this.state.ic5 === null  ? (
                          <div>
                            <label></label>
                            <label>{this.state.is5}</label>
                            <br></br>
                            <label></label>
                          </div>
                        ) : (
                          <div>
                            <label>{this.state.is5}</label>
                            <br></br>
                            <label>{this.state.it5}</label>
                            <br></br>
                            <label>{this.state.ic5}</label>
                          </div>
                        )}
                      </th>
                      <th style={taTime}>
                        {this.state.is6!== null && this.state.it6 === null && 
                        this.state.ic6 === null ? (
                          <div>
                            <label></label>
                            <label>{this.state.is6}</label>
                            <br></br>
                            <label></label>
                          </div>
                        ) : (
                          <div>
                            <label>{this.state.is6}</label>
                            <br></br>
                            <label>{this.state.it6}</label>
                            <br></br>
                            <label>{this.state.ic6}</label>
                          </div>
                        )}
                      </th>
                      <th style={taTime}>
                        {this.state.is7!== null && this.state.it7 === null && 
                        this.state.ic7 === null ? (
                          <div>
                            <label></label>
                            <label>{this.state.is7}</label>
                            <br></br>
                            <label></label>
                          </div>
                        ) : (
                          <div>
                            <label>{this.state.is7}</label>
                            <br></br>
                            <label>{this.state.it7}</label>
                            <br></br>
                            <label>{this.state.ic7}</label>
                          </div>
                        )}
                      </th>
                      <th style={taTime}>
                        {this.state.is8!== null && this.state.it8 === null && 
                        this.state.ic8 === null  ? (
                          <div>
                            <label></label>
                            <label>{this.state.is8}</label>
                            <br></br>
                            <label></label>
                          </div>
                        ) : (
                          <div>
                            <label>{this.state.is8}</label>
                            <br></br>
                            <label>{this.state.it8}</label>
                            <br></br>
                            <label>{this.state.ic8}</label>
                          </div>
                        )}
                      </th>
                      <th style={taTime}>
                        {this.state.is9!== null && this.state.it9 === null && 
                        this.state.ic9 === null  ? (
                          <div>
                            <label></label>
                            <label>{this.state.is9}</label>
                            <br></br>
                            <label></label>
                          </div>
                        ) : (
                          <div>
                            <label>{this.state.is9}</label>
                            <br></br>
                            <label>{this.state.it9}</label>
                            <br></br>
                            <label>{this.state.ic9}</label>
                          </div>
                        )}
                      </th>
                    </tr>
                    <tr style={taTime}>
                      <th style={taTime}>วันอังคาร</th>
                      <th style={taTime}>
                        {this.state.is10!== null && this.state.it10 === null && 
                        this.state.ic10 === null ? (
                          <div>
                            <label></label>
                            <label>{this.state.is10}</label>
                            <br></br>
                            <label></label>
                          </div>
                        ) : (
                          <div>
                            <label>{this.state.is10}</label>
                            <br></br>
                            <label>{this.state.it10}</label>
                            <br></br>
                            <label>{this.state.ic10}</label>
                          </div>
                        )}
                      </th>
                      <th style={taTime}>
                        {this.state.is11!== null && this.state.it11 === null && 
                        this.state.ic11 === null ? (
                          <div>
                            <label></label>
                            <label>{this.state.is11}</label>
                            <br></br>
                            <label></label>
                          </div>
                        ) : (
                          <div>
                            <label>{this.state.is11}</label>
                            <br></br>
                            <label>{this.state.it11}</label>
                            <br></br>
                            <label>{this.state.ic11}</label>
                          </div>
                        )}
                      </th>
                      <th style={taTime}>
                        {this.state.is12!== null && this.state.it12 === null && 
                        this.state.ic12 === null ? (
                          <div>
                            <label></label>
                            <label>{this.state.is12}</label>
                            <br></br>
                            <label></label>
                          </div>
                        ) : (
                          <div>
                            <label>{this.state.is12}</label>
                            <br></br>
                            <label>{this.state.it12}</label>
                            <br></br>
                            <label>{this.state.ic12}</label>
                          </div>
                        )}
                      </th>
                      <th style={taTime}>
                        {this.state.is13!== null && this.state.it13 === null && 
                        this.state.ic13 === null ? (
                          <div>
                            <label></label>
                            <label>{this.state.is13}</label>
                            <br></br>
                            <label></label>
                          </div>
                        ) : (
                          <div>
                            <label>{this.state.is13}</label>
                            <br></br>
                            <label>{this.state.it13}</label>
                            <br></br>
                            <label>{this.state.ic13}</label>
                          </div>
                        )}
                      </th>
                      <th style={taTime}>
                        {this.state.is14!== null && this.state.it14 === null && 
                        this.state.ic14 === null  ? (
                          <div>
                            <label></label>
                            <label>{this.state.is14}</label>
                            <br></br>
                            <label></label>
                          </div>
                        ) : (
                          <div>
                            <label>{this.state.is14}</label>
                            <br></br>
                            <label>{this.state.it14}</label>
                            <br></br>
                            <label>{this.state.ic14}</label>
                          </div>
                        )}
                      </th>
                      <th style={taTime}>
                        {this.state.is15!== null && this.state.it15 === null && 
                        this.state.ic15 === null ? (
                          <div>
                            <label></label>
                            <label>{this.state.is15}</label>
                            <br></br>
                            <label></label>
                          </div>
                        ) : (
                          <div>
                            <label>{this.state.is15}</label>
                            <br></br>
                            <label>{this.state.it15}</label>
                            <br></br>
                            <label>{this.state.ic15}</label>
                          </div>
                        )}
                      </th>
                      <th style={taTime}>
                        {this.state.is16!== null && this.state.it16 === null && 
                        this.state.ic16 === null  ? (
                          <div>
                            <label></label>
                            <label>{this.state.is16}</label>
                            <br></br>
                            <label></label>
                          </div>
                        ) : (
                          <div>
                            <label>{this.state.is16}</label>
                            <br></br>
                            <label>{this.state.it16}</label>
                            <br></br>
                            <label>{this.state.ic16}</label>
                          </div>
                        )}
                      </th>
                      <th style={taTime}>
                        {this.state.is17 !== null && this.state.it17 === null && 
                        this.state.ic17 === null ? (
                          <div>
                            <label></label>
                            <label>{this.state.is17}</label>
                            <br></br>
                            <label></label>
                          </div>
                        ) : (
                          <div>
                            <label>{this.state.is17}</label>
                            <br></br>
                            <label>{this.state.it17}</label>
                            <br></br>
                            <label>{this.state.ic17}</label>
                          </div>
                        )}
                      </th>
                      <th style={taTime}>
                        {this.state.is18 !== null && this.state.it18 === null && 
                        this.state.ic18 === null ? (
                          <div>
                            <label></label>
                            <label>{this.state.is18}</label>
                            <br></br>
                            <label></label>
                          </div>
                        ) : (
                          <div>
                            <label>{this.state.is18}</label>
                            <br></br>
                            <label>{this.state.it18}</label>
                            <br></br>
                            <label>{this.state.ic18}</label>
                          </div>
                        )}
                      </th>
                    </tr>
                    <tr style={taTime}>
                      <th style={taTime}>วันพุทธ</th>
                      <th style={taTime}>
                        {this.state.is19 !== null && this.state.it19 === null && 
                        this.state.ic19 === null ? (
                          <div>
                            <label></label>
                            <label>{this.state.is19}</label>
                            <br></br>
                            <label></label>
                          </div>
                        ) : (
                          <div>
                            <label>{this.state.is19}</label>
                            <br></br>
                            <label>{this.state.it19}</label>
                            <br></br>
                            <label>{this.state.ic19}</label>
                          </div>
                        )}
                      </th>
                      <th style={taTime}>
                        {this.state.is20 !== null && this.state.it20 === null && 
                        this.state.ic20 === null ? (
                          <div>
                            <label></label>
                            <label>{this.state.is20}</label>
                            <br></br>
                            <label></label>
                          </div>
                        ) : (
                          <div>
                            <label>{this.state.is20}</label>
                            <br></br>
                            <label>{this.state.it20}</label>
                            <br></br>
                            <label>{this.state.ic20}</label>
                          </div>
                        )}
                      </th>
                      <th style={taTime}>
                        {this.state.is21 !== null && this.state.it21 === null && 
                        this.state.ic21 === null ? (
                          <div>
                            <label></label>
                            <label>{this.state.is21}</label>
                            <br></br>
                            <label></label>
                          </div>
                        ) : (
                          <div>
                            <label>{this.state.is21}</label>
                            <br></br>
                            <label>{this.state.it21}</label>
                            <br></br>
                            <label>{this.state.ic21}</label>
                          </div>
                        )}
                      </th>
                      <th style={taTime}>
                        {this.state.is22 !== null && this.state.it22 === null && 
                        this.state.ic22 === null ? (
                          <div>
                            <label></label>
                            <label>{this.state.is22}</label>
                            <br></br>
                            <label></label>
                          </div>
                        ) : (
                          <div>
                            <label>{this.state.is22}</label>
                            <br></br>
                            <label>{this.state.it22}</label>
                            <br></br>
                            <label>{this.state.ic22}</label>
                          </div>
                        )}
                      </th>
                      <th style={taTime}>
                        {this.state.is23 !== null && this.state.it23 === null && 
                        this.state.ic23 === null ? (
                          <div>
                            <label></label>
                            <label>{this.state.is23}</label>
                            <br></br>
                            <label></label>
                          </div>
                        ) : (
                          <div>
                            <label>{this.state.is23}</label>
                            <br></br>
                            <label>{this.state.it23}</label>
                            <br></br>
                            <label>{this.state.ic23}</label>
                          </div>
                        )}
                      </th>
                      <th style={taTime}>
                        {this.state.is24 !== null && this.state.it24 === null && 
                        this.state.ic24 === null ? (
                          <div>
                            <label></label>
                            <label>{this.state.is24}</label>
                            <br></br>
                            <label></label>
                          </div>
                        ) : (
                          <div>
                            <label>{this.state.is24}</label>
                            <br></br>
                            <label>{this.state.it24}</label>
                            <br></br>
                            <label>{this.state.ic24}</label>
                          </div>
                        )}
                      </th>
                      <th style={taTime}>
                        {this.state.is25 !== null && this.state.it25 === null && 
                        this.state.ic25 === null ? (
                          <div>
                            <label></label>
                            <label>{this.state.is25}</label>
                            <br></br>
                            <label></label>
                          </div>
                        ) : (
                          <div>
                            <label>{this.state.is25}</label>
                            <br></br>
                            <label>{this.state.it25}</label>
                            <br></br>
                            <label>{this.state.ic25}</label>
                          </div>
                        )}
                      </th>
                      <th style={taTime}>
                        {this.state.is26 !== null && this.state.it26 === null && 
                        this.state.ic26 === null ? (
                          <div>
                            <label></label>
                            <label>{this.state.is26}</label>
                            <br></br>
                            <label></label>
                          </div>
                        ) : (
                          <div>
                            <label>{this.state.is26}</label>
                            <br></br>
                            <label>{this.state.it26}</label>
                            <br></br>
                            <label>{this.state.ic26}</label>
                          </div>
                        )}
                      </th>
                      <th style={taTime}>
                        {this.state.is27 !== null && this.state.it27 === null && 
                        this.state.ic27 === null ? (
                          <div>
                            <label></label>
                            <label>{this.state.is27}</label>
                            <br></br>
                            <label></label>
                          </div>
                        ) : (
                          <div>
                            <label>{this.state.is27}</label>
                            <br></br>
                            <label>{this.state.it27}</label>
                            <br></br>
                            <label>{this.state.ic27}</label>
                          </div>
                        )}
                      </th>
                    </tr>
                    <tr style={taTime}>
                      <th style={taTime}>วันพฤหัสบดี</th>
                      <th style={taTime}>
                        {this.state.is28 !== null && this.state.it28 === null && 
                        this.state.ic28 === null ? (
                          <div>
                            <label></label>
                            <label>{this.state.is28}</label>
                            <br></br>
                            <label></label>
                          </div>
                        ) : (
                          <div>
                            <label>{this.state.is28}</label>
                            <br></br>
                            <label>{this.state.it28}</label>
                            <br></br>
                            <label>{this.state.ic28}</label>
                          </div>
                        )}
                      </th>
                      <th style={taTime}>
                        {this.state.is29 !== null && this.state.it29 === null && 
                        this.state.ic29 === null ? (
                          <div>
                            <label></label>
                            <label>{this.state.is29}</label>
                            <br></br>
                            <label></label>
                          </div>
                        ) : (
                          <div>
                            <label>{this.state.is29}</label>
                            <br></br>
                            <label>{this.state.it29}</label>
                            <br></br>
                            <label>{this.state.ic29}</label>
                          </div>
                        )}
                      </th>
                      <th style={taTime}>
                        {this.state.is30 !== null && this.state.it30 === null && 
                        this.state.ic30 === null ? (
                          <div>
                            <label></label>
                            <label>{this.state.is30}</label>
                            <br></br>
                            <label></label>
                          </div>
                        ) : (
                          <div>
                            <label>{this.state.is30}</label>
                            <br></br>
                            <label>{this.state.it30}</label>
                            <br></br>
                            <label>{this.state.ic30}</label>
                          </div>
                        )}
                      </th>
                      <th style={taTime}>
                        {this.state.is31 !== null && this.state.it31 === null && 
                        this.state.ic31 === null ? (
                          <div>
                            <label></label>
                            <label>{this.state.is31}</label>
                            <br></br>
                            <label></label>
                          </div>
                        ) : (
                          <div>
                            <label>{this.state.is31}</label>
                            <br></br>
                            <label>{this.state.it31}</label>
                            <br></br>
                            <label>{this.state.ic31}</label>
                          </div>
                        )}
                      </th>
                      <th style={taTime}>
                        {this.state.is32 !== null && this.state.it32 === null && 
                        this.state.ic32 === null ? (
                          <div>
                            <label></label>
                            <label>{this.state.is32}</label>
                            <br></br>
                            <label></label>
                          </div>
                        ) : (
                          <div>
                            <label>{this.state.is32}</label>
                            <br></br>
                            <label>{this.state.it32}</label>
                            <br></br>
                            <label>{this.state.ic32}</label>
                          </div>
                        )}
                      </th>
                      <th style={taTime}>
                        {this.state.is33 !== null && this.state.it33 === null && 
                        this.state.ic33 === null ? (
                          <div>
                            <label></label>
                            <label>{this.state.is33}</label>
                            <br></br>
                            <label></label>
                          </div>
                        ) : (
                          <div>
                            <label>{this.state.is33}</label>
                            <br></br>
                            <label>{this.state.it33}</label>
                            <br></br>
                            <label>{this.state.ic33}</label>
                          </div>
                        )}
                      </th>
                      <th style={taTime}>
                        {this.state.is34 !== null && this.state.it34 === null && 
                        this.state.ic34 === null ? (
                          <div>
                            <label></label>
                            <label>{this.state.is34}</label>
                            <br></br>
                            <label></label>
                          </div>
                        ) : (
                          <div>
                            <label>{this.state.is34}</label>
                            <br></br>
                            <label>{this.state.it34}</label>
                            <br></br>
                            <label>{this.state.ic34}</label>
                          </div>
                        )}
                      </th>
                      <th style={taTime}>
                        {this.state.is35 !== null && this.state.it35 === null && 
                        this.state.ic35 === null ? (
                          <div>
                            <label></label>
                            <label>{this.state.is35}</label>
                            <br></br>
                            <label></label>
                          </div>
                        ) : (
                          <div>
                            <label>{this.state.is35}</label>
                            <br></br>
                            <label>{this.state.it35}</label>
                            <br></br>
                            <label>{this.state.ic35}</label>
                          </div>
                        )}
                      </th>
                      <th style={taTime}>
                        {this.state.is36 !== null && this.state.it36 === null && 
                        this.state.ic36 === null ? (
                          <div>
                            <label></label>
                            <label>{this.state.is36}</label>
                            <br></br>
                            <label></label>
                          </div>
                        ) : (
                          <div>
                            <label>{this.state.is36}</label>
                            <br></br>
                            <label>{this.state.it36}</label>
                            <br></br>
                            <label>{this.state.ic36}</label>
                          </div>
                        )}
                      </th>
                    </tr>
                    <tr style={taTime}>
                      <th style={taTime}>วันศุกร์</th>
                      <th style={taTime}>
                        {this.state.is37 !== null && this.state.it37 === null && 
                        this.state.ic37 === null ? (
                          <div>
                            <label></label>
                            <label>{this.state.is37}</label>
                            <br></br>
                            <label></label>
                          </div>
                        ) : (
                          <div>
                            <label>{this.state.is37}</label>
                            <br></br>
                            <label>{this.state.it37}</label>
                            <br></br>
                            <label>{this.state.ic37}</label>
                          </div>
                        )}
                      </th>
                      <th style={taTime}>
                        {this.state.is38 !== null && this.state.it38 === null && 
                        this.state.ic38 === null ? (
                          <div>
                            <label></label>
                            <label>{this.state.is38}</label>
                            <br></br>
                            <label></label>
                          </div>
                        ) : (
                          <div>
                            <label>{this.state.is38}</label>
                            <br></br>
                            <label>{this.state.it38}</label>
                            <br></br>
                            <label>{this.state.ic38}</label>
                          </div>
                        )}
                      </th>
                      <th style={taTime}>
                        {this.state.is39 !== null && this.state.it39 === null && 
                        this.state.ic39 === null ? (
                          <div>
                            <label></label>
                            <label>{this.state.is39}</label>
                            <br></br>
                            <label></label>
                          </div>
                        ) : (
                          <div>
                            <label>{this.state.is39}</label>
                            <br></br>
                            <label>{this.state.it39}</label>
                            <br></br>
                            <label>{this.state.ic39}</label>
                          </div>
                        )}
                      </th>
                      <th style={taTime}>
                        {this.state.is40 !== null && this.state.it40 === null && 
                        this.state.ic40 === null ? (
                          <div>
                            <label></label>
                            <label>{this.state.is40}</label>
                            <br></br>
                            <label></label>
                          </div>
                        ) : (
                          <div>
                            <label>{this.state.is40}</label>
                            <br></br>
                            <label>{this.state.it40}</label>
                            <br></br>
                            <label>{this.state.ic40}</label>
                          </div>
                        )}
                      </th>
                      <th style={taTime}>
                        {this.state.is41 !== null && this.state.it41 === null && 
                        this.state.ic41 === null ? (
                          <div>
                            <label></label>
                            <label>{this.state.is41}</label>
                            <br></br>
                            <label></label>
                          </div>
                        ) : (
                          <div>
                            <label>{this.state.is41}</label>
                            <br></br>
                            <label>{this.state.it41}</label>
                            <br></br>
                            <label>{this.state.ic41}</label>
                          </div>
                        )}
                      </th>
                      <th style={taTime}>
                        {this.state.is42 !== null && this.state.it42 === null && 
                        this.state.ic42 === null ? (
                          <div>
                            <label></label>
                            <label>{this.state.is42}</label>
                            <br></br>
                            <label></label>
                          </div>
                        ) : (
                          <div>
                            <label>{this.state.is42}</label>
                            <br></br>
                            <label>{this.state.it42}</label>
                            <br></br>
                            <label>{this.state.ic42}</label>
                          </div>
                        )}
                      </th>
                      <th style={taTime}>
                        {this.state.is43 !== null && this.state.it43 === null && 
                        this.state.ic43=== null ? (
                          <div>
                            <label></label>
                            <label>{this.state.is43}</label>
                            <br></br>
                            <label></label>
                          </div>
                        ) : (
                          <div>
                            <label>{this.state.is43}</label>
                            <br></br>
                            <label>{this.state.it43}</label>
                            <br></br>
                            <label>{this.state.ic43}</label>
                          </div>
                        )}
                      </th>
                      <th style={taTime}>
                        {this.state.is44 !== null && this.state.it44 === null && 
                        this.state.ic44 === null ? (
                          <div>
                            <label></label>
                            <label>{this.state.is44}</label>
                            <br></br>
                            <label></label>
                          </div>
                        ) : (
                          <div>
                            <label>{this.state.is44}</label>
                            <br></br>
                            <label>{this.state.it44}</label>
                            <br></br>
                            <label>{this.state.ic44}</label>
                          </div>
                        )}
                      </th>
                      <th style={taTime}>
                        {this.state.is45 !== null && this.state.it45 === null && 
                        this.state.ic45 === null ? (
                          <div>
                            <label></label>
                            <label>{this.state.is45}</label>
                            <br></br>
                            <label></label>
                          </div>
                        ) : (
                          <div>
                            <label>{this.state.is45}</label>
                            <br></br>
                            <label>{this.state.it45}</label>
                            <br></br>
                            <label>{this.state.ic45}</label>
                          </div>
                        )}
                      </th>
                    </tr>
                  </table>
                </Col>
              </Row>
            ) : null}
            <br></br>
            <Row gutter={24}>
              <Col className="gutter-row" span={7}></Col>
              <Col className="gutter-row" span={4}>
                <Button
                  style={
                    this.state.upDataClass.length > 0 &&
                    this.state.upDataClassRoom.length > 0 &&
                    this.state.upDataTeacher.length > 0
                      ? { backgroundColor: "green" }
                      : null
                  }
                  disabled={
                    this.state.upDataClass.length > 0 ||
                    this.state.upDataClassRoom.length > 0 ||
                    this.state.upDataTeacher.length > 0
                      ? false
                      : true
                  }
                  type="primary"
                  loading={loadings[0]}
                  onClick={() => this.onsave7()}
                >
                  บันทึกการจัดตาราง
                </Button>
              </Col>
              <Col className="gutter-row" span={8}></Col>
            </Row>
          </div>
        )}
      </div>
    </div>
  ) 

  onCS12 = async () => {
    await this.setState({
      year12: null,
      allTime: [],
      class12: null,
      term12: null,
      seTime: null,
      seCos: null,
      seDelTime: null,
      is1: null,
      ic1: null,
      it1: null,
      is2: null,
      ic2: null,
      it2: null,
      is3: null,
      ic3: null,
      it3: null,
      is4: null,
      ic4: null,
      it4: null,
      is5: null,
      ic5: null,
      it5: null,
      is6: null,
      ic6: null,
      it6: null,
      is7: null,
      ic7: null,
      it7: null,
      is8: null,
      ic8: null,
      it8: null,
      is9: null,
      ic9: null,
      it9: null,
      is10: null,
      ic10: null,
      it10: null,
      is11: null,
      ic11: null,
      it11: null,
      is12: null,
      ic12: null,
      it12: null,
      is13: null,
      ic13: null,
      it13: null,
      is14: null,
      ic14: null,
      it14: null,
      is15: null,
      ic15: null,
      it15: null,
      is16: null,
      ic16: null,
      it16: null,
      is17: null,
      ic17: null,
      it17: null,
      is18: null,
      ic18: null,
      it18: null,
      is19: null,
      ic19: null,
      it19: null,
      is20: null,
      ic20: null,
      it20: null,
      is21: null,
      ic21: null,
      it21: null,
      is22: null,
      ic22: null,
      it22: null,
      is23: null,
      ic23: null,
      it23: null,
      is24: null,
      ic24: null,
      it24: null,
      is25: null,
      ic25: null,
      it25: null,
      is26: null,
      ic26: null,
      it26: null,
      is27: null,
      ic27: null,
      it27: null,
      is28: null,
      ic28: null,
      it28: null,
      is29: null,
      ic29: null,
      it29: null,
      is30: null,
      ic30: null,
      it30: null,
      is31: null,
      ic31: null,
      it31: null,
      is32: null,
      ic32: null,
      it32: null,
      is33: null,
      ic33: null,
      it33: null,
      is34: null,
      ic34: null,
      it34: null,
      is35: null,
      ic35: null,
      it35: null,
      is36: null,
      ic36: null,
      it36: null,
      is37: null,
      ic37: null,
      it37: null,
      is38: null,
      ic38: null,
      it38: null,
      is39: null,
      ic39: null,
      it39: null,
      is40: null,
      ic40: null,
      it40: null,
      is41: null,
      ic41: null,
      it41: null,
      is42: null,
      ic42: null,
      it42: null,
      is43: null,
      ic43: null,
      it43: null,
      is44: null,
      ic44: null,
      it44: null,
      is45: null,
      ic45: null,
      it45: null,
    });
  };
  onCY12 = async () => {
    await this.setState({
      class12: null,
      allTime: [],
      term12: null,
      seTime: null,
      seCos: null,
      seDelTime: null,
      is1: null,
      ic1: null,
      it1: null,
      is2: null,
      ic2: null,
      it2: null,
      is3: null,
      ic3: null,
      it3: null,
      is4: null,
      ic4: null,
      it4: null,
      is5: null,
      ic5: null,
      it5: null,
      is6: null,
      ic6: null,
      it6: null,
      is7: null,
      ic7: null,
      it7: null,
      is8: null,
      ic8: null,
      it8: null,
      is9: null,
      ic9: null,
      it9: null,
      is10: null,
      ic10: null,
      it10: null,
      is11: null,
      ic11: null,
      it11: null,
      is12: null,
      ic12: null,
      it12: null,
      is13: null,
      ic13: null,
      it13: null,
      is14: null,
      ic14: null,
      it14: null,
      is15: null,
      ic15: null,
      it15: null,
      is16: null,
      ic16: null,
      it16: null,
      is17: null,
      ic17: null,
      it17: null,
      is18: null,
      ic18: null,
      it18: null,
      is19: null,
      ic19: null,
      it19: null,
      is20: null,
      ic20: null,
      it20: null,
      is21: null,
      ic21: null,
      it21: null,
      is22: null,
      ic22: null,
      it22: null,
      is23: null,
      ic23: null,
      it23: null,
      is24: null,
      ic24: null,
      it24: null,
      is25: null,
      ic25: null,
      it25: null,
      is26: null,
      ic26: null,
      it26: null,
      is27: null,
      ic27: null,
      it27: null,
      is28: null,
      ic28: null,
      it28: null,
      is29: null,
      ic29: null,
      it29: null,
      is30: null,
      ic30: null,
      it30: null,
      is31: null,
      ic31: null,
      it31: null,
      is32: null,
      ic32: null,
      it32: null,
      is33: null,
      ic33: null,
      it33: null,
      is34: null,
      ic34: null,
      it34: null,
      is35: null,
      ic35: null,
      it35: null,
      is36: null,
      ic36: null,
      it36: null,
      is37: null,
      ic37: null,
      it37: null,
      is38: null,
      ic38: null,
      it38: null,
      is39: null,
      ic39: null,
      it39: null,
      is40: null,
      ic40: null,
      it40: null,
      is41: null,
      ic41: null,
      it41: null,
      is42: null,
      ic42: null,
      it42: null,
      is43: null,
      ic43: null,
      it43: null,
      is44: null,
      ic44: null,
      it44: null,
      is45: null,
      ic45: null,
      it45: null,
    });
  };
  onCC12 = async () => {
    await this.setState({
      term12: null,
      allTime: [],
      seTime: null,
      seCos: null,
      seDelTime: null,
      is1: null,
      ic1: null,
      it1: null,
      is2: null,
      ic2: null,
      it2: null,
      is3: null,
      ic3: null,
      it3: null,
      is4: null,
      ic4: null,
      it4: null,
      is5: null,
      ic5: null,
      it5: null,
      is6: null,
      ic6: null,
      it6: null,
      is7: null,
      ic7: null,
      it7: null,
      is8: null,
      ic8: null,
      it8: null,
      is9: null,
      ic9: null,
      it9: null,
      is10: null,
      ic10: null,
      it10: null,
      is11: null,
      ic11: null,
      it11: null,
      is12: null,
      ic12: null,
      it12: null,
      is13: null,
      ic13: null,
      it13: null,
      is14: null,
      ic14: null,
      it14: null,
      is15: null,
      ic15: null,
      it15: null,
      is16: null,
      ic16: null,
      it16: null,
      is17: null,
      ic17: null,
      it17: null,
      is18: null,
      ic18: null,
      it18: null,
      is19: null,
      ic19: null,
      it19: null,
      is20: null,
      ic20: null,
      it20: null,
      is21: null,
      ic21: null,
      it21: null,
      is22: null,
      ic22: null,
      it22: null,
      is23: null,
      ic23: null,
      it23: null,
      is24: null,
      ic24: null,
      it24: null,
      is25: null,
      ic25: null,
      it25: null,
      is26: null,
      ic26: null,
      it26: null,
      is27: null,
      ic27: null,
      it27: null,
      is28: null,
      ic28: null,
      it28: null,
      is29: null,
      ic29: null,
      it29: null,
      is30: null,
      ic30: null,
      it30: null,
      is31: null,
      ic31: null,
      it31: null,
      is32: null,
      ic32: null,
      it32: null,
      is33: null,
      ic33: null,
      it33: null,
      is34: null,
      ic34: null,
      it34: null,
      is35: null,
      ic35: null,
      it35: null,
      is36: null,
      ic36: null,
      it36: null,
      is37: null,
      ic37: null,
      it37: null,
      is38: null,
      ic38: null,
      it38: null,
      is39: null,
      ic39: null,
      it39: null,
      is40: null,
      ic40: null,
      it40: null,
      is41: null,
      ic41: null,
      it41: null,
      is42: null,
      ic42: null,
      it42: null,
      is43: null,
      ic43: null,
      it43: null,
      is44: null,
      ic44: null,
      it44: null,
      is45: null,
      ic45: null,
      it45: null,
    });
  };
  filterIDSub12 = async () => {
    await this.setState({ delTime: [] });
    for (let index = 0; index <= this.state.classSchedule.length - 1; index++) {
      if (
        Number(this.state.classSchedule[index].year) ===
          Number(this.state.year12) &&
        Number(this.state.classSchedule[index].term) ===
          Number(this.state.term12) &&
        this.state.classSchedule[index].groupStudent === this.state.class12+"/1"
      ) {
        if (this.state.classSchedule[index].time.length > 0) {
          for (
            let id = 0;
            id <= this.state.classSchedule[index].time.length - 1;
            id++
          ) {
            for (let dex = 0; dex < this.state.course.length; dex++) {
              if (this.state.course[dex].idSubject === this.state.classSchedule[index].time[id].idSubject &&
                Number(this.state.course[dex].year) === Number(this.state.year7) &&
                Number(this.state.course[dex].term) === Number(this.state.term7) &&
                Number(this.state.course[dex].level) === 
                Number(this.state.classSchedule[index].groupStudent.substring(0,1)) &&
                this.state.classSchedule[index].program === this.state.course[dex].program &&
                this.state.course[dex].all === "เรียนรวม") {
                await this.setState({
              delTime: [
                ...this.state.delTime,
                this.state.classSchedule[index].time[id].time,
              ],
            });
              }
            }
            if (!this.state.classSchedule[index].time[id].idteacher) {
            if (Number(this.state.classSchedule[index].time[id].time) === 1) {
              await this.setState({
                is1: this.state.classSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classSchedule[index].time[id].time === 2) {
              await this.setState({
                is2: this.state.classSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classSchedule[index].time[id].time === 3) {
              await this.setState({
                is3: this.state.classSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classSchedule[index].time[id].time === 4) {
              await this.setState({
                is4: this.state.classSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classSchedule[index].time[id].time === 5) {
              await this.setState({
                is5: this.state.classSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classSchedule[index].time[id].time === 6) {
              await this.setState({
                is6: this.state.classSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classSchedule[index].time[id].time === 7) {
              await this.setState({
                is7: this.state.classSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classSchedule[index].time[id].time === 8) {
              await this.setState({
                is8: this.state.classSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classSchedule[index].time[id].time === 9) {
              await this.setState({
                is9: this.state.classSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classSchedule[index].time[id].time === 10) {
              await this.setState({
                is10: this.state.classSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classSchedule[index].time[id].time === 11) {
              await this.setState({
                is11: this.state.classSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classSchedule[index].time[id].time === 12) {
              await this.setState({
                is12: this.state.classSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classSchedule[index].time[id].time === 13) {
              await this.setState({
                is13: this.state.classSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classSchedule[index].time[id].time === 14) {
              await this.setState({
                is14: this.state.classSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classSchedule[index].time[id].time === 15) {
              await this.setState({
                is15: this.state.classSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classSchedule[index].time[id].time === 16) {
              await this.setState({
                is16: this.state.classSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classSchedule[index].time[id].time === 17) {
              await this.setState({
                is17: this.state.classSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classSchedule[index].time[id].time === 18) {
              await this.setState({
                is18: this.state.classSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classSchedule[index].time[id].time === 19) {
              await this.setState({
                is19: this.state.classSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classSchedule[index].time[id].time === 20) {
              await this.setState({
                is20: this.state.classSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classSchedule[index].time[id].time === 21) {
              await this.setState({
                is21: this.state.classSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classSchedule[index].time[id].time === 22) {
              await this.setState({
                is22: this.state.classSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classSchedule[index].time[id].time === 23) {
              await this.setState({
                is23: this.state.classSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classSchedule[index].time[id].time === 24) {
              await this.setState({
                is24: this.state.classSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classSchedule[index].time[id].time === 25) {
              await this.setState({
                is25: this.state.classSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classSchedule[index].time[id].time === 26) {
              await this.setState({
                is26: this.state.classSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classSchedule[index].time[id].time === 27) {
              await this.setState({
                is27: this.state.classSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classSchedule[index].time[id].time === 28) {
              await this.setState({
                is28: this.state.classSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classSchedule[index].time[id].time === 29) {
              await this.setState({
                is29: this.state.classSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classSchedule[index].time[id].time === 30) {
              await this.setState({
                is30: this.state.classSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classSchedule[index].time[id].time === 31) {
              await this.setState({
                is31: this.state.classSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classSchedule[index].time[id].time === 32) {
              await this.setState({
                is32: this.state.classSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classSchedule[index].time[id].time === 33) {
              await this.setState({
                is33: this.state.classSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classSchedule[index].time[id].time === 34) {
              await this.setState({
                is34: this.state.classSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classSchedule[index].time[id].time === 35) {
              await this.setState({
                is35: this.state.classSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classSchedule[index].time[id].time === 36) {
              await this.setState({
                is36: this.state.classSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classSchedule[index].time[id].time === 37) {
              await this.setState({
                is37: this.state.classSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classSchedule[index].time[id].time === 38) {
              await this.setState({
                is38: this.state.classSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classSchedule[index].time[id].time === 39) {
              await this.setState({
                is39: this.state.classSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classSchedule[index].time[id].time === 40) {
              await this.setState({
                is40: this.state.classSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classSchedule[index].time[id].time === 41) {
              await this.setState({
                is41: this.state.classSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classSchedule[index].time[id].time === 42) {
              await this.setState({
                is42: this.state.classSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classSchedule[index].time[id].time === 43) {
              await this.setState({
                is43: this.state.classSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classSchedule[index].time[id].time === 44) {
              await this.setState({
                is44: this.state.classSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classSchedule[index].time[id].time === 45) {
              await this.setState({
                is45: this.state.classSchedule[index].time[id].idSubject,
              });
            }
          }
        }
        }
      }
    }
  };
  selectDataCos12 = async () => {
    let dataSelect = [];
    let gl = [];
    for (let index = 0; index <= this.state.classSchedule.length - 1; index++) {
      if (
        Number(this.state.classSchedule[index].year) ===
          Number(this.state.year12) &&
        Number(
          this.state.classSchedule[index].term === Number(this.state.term12)
        ) &&
        this.state.classSchedule[index].groupStudent === this.state.class12+"/1"
      ) {
        gl.push(this.state.classSchedule[index].program);
      }
    }
    for (let index = 0; index <= this.state.course.length - 1; index++) {
      if (
        Number(this.state.course[index].level) ===
          Number(this.state.class12) &&
        Number(this.state.course[index].term) === Number(this.state.term12) &&
        this.state.course[index].program === gl[0] &&
        this.state.course[index].all === "เรียนรวม"
      ) {
        await dataSelect.push(this.state.course[index]);
      }
    }
    for (let index = 0; index <= this.state.classSchedule.length - 1; index++) {
      if (
        Number(this.state.classSchedule[index].year) ===
          Number(this.state.year12) &&
        Number(
          this.state.classSchedule[index].term === Number(this.state.term12)
        ) &&
        this.state.classSchedule[index].groupStudent === this.state.class12+"/1"
      ) {
        if (this.state.classSchedule[index].time.length > 0) {
          for (
            let csID = 0;
            csID <= this.state.classSchedule[index].time.length - 1;
            csID++
          ) {
            for (let dsID = 0; dsID <= dataSelect.length - 1; dsID++) {
              if (
                this.state.classSchedule[index].time[csID].idSubject ===
                dataSelect[dsID].idSubject
              ) {
                let sumhour = Number(dataSelect[dsID].hours) - 1;
                if (sumhour > 0) {
                  dataSelect.splice(dsID, 1, {
                    hours: sumhour,
                    idSubject: dataSelect[dsID].idSubject,
                    level: dataSelect[dsID].level,
                    program: dataSelect[dsID].program,
                    term: dataSelect[dsID].term,
                    year: dataSelect[dsID].year,
                    id: dataSelect[dsID].id,
                  });
                } else {
                  dataSelect.splice(dsID, 1);
                }
              }
            }
          }
        }
      }
    }
    await this.setState({
      selectCos: [{ idSubject: "พักกลางวัน" }, ...dataSelect],
    });
  };
  
  selectDataTime12 = async () => {
    let dataAll = [];
    for (let index = 0; index <= this.state.classSchedule.length - 1; index++) {
      if (
        this.state.classSchedule[index].groupStudent === this.state.class12+"/1" &&
        Number(this.state.classSchedule[index].term) ===
          Number(this.state.term12) &&
        Number(this.state.classSchedule[index].year) ===
          Number(this.state.year12)
      ) {
        if (this.state.classSchedule[index].time.length > 0) {
          for (
            let TS = 0;
            TS <= this.state.classSchedule[index].time.length - 1;
            TS++
          ) {
            for (let dex = 0; dex < this.state.selectCos.length-1; dex++) {
              console.log(this.state.selectCos[dex] , this.state.classSchedule[index].time[TS].idSubject);
              if (this.state.selectCos[dex] === this.state.classSchedule[index].time[TS].idSubject
                || "พักกลางวัน" === this.state.classSchedule[index].time[TS].idSubject) {
                 dataAll.push(this.state.classSchedule[index].time[TS].time);
              }
            }
          }
        }
      }
    }
    let sortData = dataAll.sort(function (b, a) {
      return b - a;
    });
    let d = [];
    let data = [];
    let allTime = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
    ];
    allTime.filter((i) => {
      let So = [];
      sortData.filter((s) => {
        s === i ? So.push("a") : d.push(i);
      });
      if (So.length === 0) {
        data.push(i);
      }
    });
    await this.setState({ allTime: data });
  };
  enterLoading12 = async (index) => {
    await this.setState({ show7: 0, lock7: 0, loading: true });
    let data = [];
    let datadel = [];
    for (let index = 0; index <= this.state.classSchedule.length - 1; index++) {
      if (
        Number(this.state.classSchedule[index].groupStudent.substring(0,1)) === Number(this.state.class12) &&
        Number(this.state.classSchedule[index].year) ===
          Number(this.state.year12) &&
        Number(this.state.classSchedule[index].term) ===
          Number(this.state.term12)
      ) {
        if (this.state.upDataClass.length === 0) {
          await this.state.upDataClass.push(this.state.classSchedule[index].id);
        } else {
          let data1 = [];
          for (let id = 0; id <= this.state.upDataClass.length - 1; id++) {
            if (
              this.state.classSchedule[index].id === this.state.upDataClass[id]
            ) {
              await data1.push("a");
            }
          }
          if (data1.length === 0) {
            await this.state.upDataClass.push(
              this.state.classSchedule[index].id
            );
          }
        }
        for (let iex = 0; iex <= this.state.classSchedule[index].time.length-1; iex++) {
          if (this.state.classSchedule[index].time[iex].time === this.state.seTime) {
            datadel.push({groupStudent:this.state.classSchedule[index].groupStudent,
              idteacher:this.state.classSchedule[index].time[iex].idteacher,
              idSubject:this.state.classSchedule[index].time[iex].idSubject,
              nameRoom:this.state.classSchedule[index].time[iex].nameRoom,})
            this.state.classSchedule[index].time.splice(iex, 1);
          }
        }
        await this.state.classSchedule[index].time.push({
          idSubject: this.state.seCos,
          time: this.state.seTime,
        });
        let namesub = [];
        if (this.state.seCos === "พักกลางวัน") {
            namesub.push("พักกลางวัน") 
        } else {
          for (let dex = 0; dex <= this.state.subject.length-1; dex++) {
          if (this.state.seCos === this.state.subject[dex].idSubject) {
            namesub.push(this.state.subject[dex].nameRoom) 
           }
        }
        }
        if (this.state.seTime === 1) {
          await this.setState({
            is1:namesub.length === 0 ? this.state.seCos : namesub[0],
          });
        }
        if (this.state.seTime === 2) {
          await this.setState({
            is2: namesub.length === 0 ? this.state.seCos : namesub[0],
          });
        }
        if (this.state.seTime === 3) {
          await this.setState({
            is3: namesub.length === 0 ? this.state.seCos : namesub[0],
          });
        }
        if (this.state.seTime === 4) {
          await this.setState({
            is4: namesub.length === 0 ? this.state.seCos : namesub[0],
          });
        }
        if (this.state.seTime === 5) {
          await this.setState({
            is5: namesub.length === 0 ? this.state.seCos : namesub[0],
          });
        }
        if (this.state.seTime === 6) {
          await this.setState({
            is6: namesub.length === 0 ? this.state.seCos : namesub[0],
          });
        }
        if (this.state.seTime === 7) {
          await this.setState({
            is7: namesub.length === 0 ? this.state.seCos : namesub[0],
          });
        }
        if (this.state.seTime === 8) {
          await this.setState({
            is8: namesub.length === 0 ? this.state.seCos : namesub[0],
          });
        }
        if (this.state.seTime === 9) {
          await this.setState({
            is9: namesub.length === 0 ? this.state.seCos : namesub[0],
          });
        }
        if (this.state.seTime === 10) {
          await this.setState({
            is10: namesub.length === 0 ? this.state.seCos : namesub[0],
          });
        }
        if (this.state.seTime === 11) {
          await this.setState({
            is11: namesub.length === 0 ? this.state.seCos : namesub[0],
          });
        }
        if (this.state.seTime === 12) {
          await this.setState({
            is12: namesub.length === 0 ? this.state.seCos : namesub[0],
          });
        }
        if (this.state.seTime === 13) {
          await this.setState({
            is13: namesub.length === 0 ? this.state.seCos : namesub[0],
          });
        }
        if (this.state.seTime === 14) {
          await this.setState({
            is14: namesub.length === 0 ? this.state.seCos : namesub[0],
          });
        }
        if (this.state.seTime === 15) {
          await this.setState({
            is15: namesub.length === 0 ? this.state.seCos : namesub[0],
          });
        }
        if (this.state.seTime === 16) {
          await this.setState({
            is16: namesub.length === 0 ? this.state.seCos : namesub[0],
          });
        }
        if (this.state.seTime === 17) {
          await this.setState({
            is17: namesub.length === 0 ? this.state.seCos : namesub[0],
          });
        }
        if (this.state.seTime === 18) {
          await this.setState({
            is18: namesub.length === 0 ? this.state.seCos : namesub[0],
          });
        }
        if (this.state.seTime === 19) {
          await this.setState({
            is19: namesub.length === 0 ? this.state.seCos : namesub[0],
          });
        }
        if (this.state.seTime === 20) {
          await this.setState({
            is20: namesub.length === 0 ? this.state.seCos : namesub[0],
          });
        }
        if (this.state.seTime === 21) {
          await this.setState({
            is21: namesub.length === 0 ? this.state.seCos : namesub[0],
          });
        }
        if (this.state.seTime === 22) {
          await this.setState({
            is22: namesub.length === 0 ? this.state.seCos : namesub[0],
          });
        }
        if (this.state.seTime === 23) {
          await this.setState({
            is23: namesub.length === 0 ? this.state.seCos : namesub[0],
          });
        }
        if (this.state.seTime === 24) {
          await this.setState({
            is24: namesub.length === 0 ? this.state.seCos : namesub[0],
          });
        }
        if (this.state.seTime === 25) {
          await this.setState({
            is25: namesub.length === 0 ? this.state.seCos : namesub[0],
          });
        }
        if (this.state.seTime === 26) {
          await this.setState({
            is26: namesub.length === 0 ? this.state.seCos : namesub[0],
          });
        }
        if (this.state.seTime === 27) {
          await this.setState({
            is27: namesub.length === 0 ? this.state.seCos : namesub[0],
          });
        }
        if (this.state.seTime === 28) {
          await this.setState({
            is28: namesub.length === 0 ? this.state.seCos : namesub[0],
          });
        }
        if (this.state.seTime === 29) {
          await this.setState({
            is29: namesub.length === 0 ? this.state.seCos : namesub[0],
          });
        }
        if (this.state.seTime === 30) {
          await this.setState({
            is30: namesub.length === 0 ? this.state.seCos : namesub[0],
          });
        }
        if (this.state.seTime === 31) {
          await this.setState({
            is31: namesub.length === 0 ? this.state.seCos : namesub[0],
          });
        }
        if (this.state.seTime === 32) {
          await this.setState({
            is32: namesub.length === 0 ? this.state.seCos : namesub[0],
          });
        }
        if (this.state.seTime === 33) {
          await this.setState({
            is33: namesub.length === 0 ? this.state.seCos : namesub[0],
          });
        }
        if (this.state.seTime === 34) {
          await this.setState({
            is34: namesub.length === 0 ? this.state.seCos : namesub[0],
          });
        }
        if (this.state.seTime === 35) {
          await this.setState({
            is35: namesub.length === 0 ? this.state.seCos : namesub[0],
          });
        }
        if (this.state.seTime === 36) {
          await this.setState({
            is36: namesub.length === 0 ? this.state.seCos : namesub[0],
          });
        }
        if (this.state.seTime === 37) {
          await this.setState({
            is37: namesub.length === 0 ? this.state.seCos : namesub[0],
          });
        }
        if (this.state.seTime === 38) {
          await this.setState({
            is38: namesub.length === 0 ? this.state.seCos : namesub[0],
          });
        }
        if (this.state.seTime === 39) {
          await this.setState({
            is39: namesub.length === 0 ? this.state.seCos : namesub[0],
          });
        }
        if (this.state.seTime === 40) {
          await this.setState({
            is40: namesub.length === 0 ? this.state.seCos : namesub[0],
          });
        }
        if (this.state.seTime === 41) {
          await this.setState({
            is41: namesub.length === 0 ? this.state.seCos : namesub[0],
          });
        }
        if (this.state.seTime === 42) {
          await this.setState({
            is42: namesub.length === 0 ? this.state.seCos : namesub[0],
          });
        }
        if (this.state.seTime === 43) {
          await this.setState({
            is43: namesub.length === 0 ? this.state.seCos : namesub[0],
          });
        }
        if (this.state.seTime === 44) {
          await this.setState({
            is44: namesub.length === 0 ? this.state.seCos : namesub[0],
          });
        }
        if (this.state.seTime === 45) {
          await this.setState({
            is45: namesub.length === 0 ? this.state.seCos : namesub[0],
          });
        }
        await data.push("a");
      }
    }
    for (let ix = 0; ix <= datadel.length-1; ix++) {
      if (datadel[ix].idteacher) {
        let cosHours = [];
        let cosHoursNow = [];
        let haveTea = [];
        for (let index = 0; index <= this.state.subject.length - 1; index++) {
          if (this.state.subject[index].idSubject === datadel[ix].idSubject) {
            let h = this.state.subject[index].creditSubject * 2;
            cosHours.push(h);
          }
          if (this.state.subject[index].idSubject === this.state.seCos) {
            let h = this.state.subject[index].creditSubject * 2;
            cosHoursNow.push(h);
          }
        }
        for (
          let index = 0;
          index <= this.state.teacherSchedule.length - 1;
          index++
        ) {
          if (
            this.state.teacherSchedule[index].idteacher === datadel[ix].idteacher &&
            Number(this.state.teacherSchedule[index].year) ===
              Number(this.state.year12) &&
            Number(this.state.teacherSchedule[index].term) ===
              Number(this.state.term12)
          ) {
            if (this.state.upDataTeacher.length === 0) {
              this.state.upDataTeacher.push(this.state.teacherSchedule[index].id);
            } else {
              let data = [];
              for (let id = 0; id <= this.state.upDataTeacher.length - 1; id++) {
                if (
                  this.state.teacherSchedule[index].id ===
                  this.state.upDataTeacher[id]
                ) {
                  data.push("a");
                }
              }
              if (data.length === 0) {
                this.state.upDataTeacher.push(this.state.teacherSchedule[index].id);
              }
            }
            for (let iex = 0; iex <= this.state.teacherSchedule[index].time.length-1; iex++) {
              if (this.state.teacherSchedule[index].time[iex].time === this.state.seTime) {
                this.state.teacherSchedule[index].time.splice(iex, 1);
              }
            }
            for (
              let idex = 0;
              idex <= this.state.teacherSchedule[index].time.length - 1;
              idex++
            ) {
              if (
                this.state.teacherSchedule[index].time[idex].groupStudent ===
                  datadel[ix].groupStudent &&
                this.state.teacherSchedule[index].time[idex].idSubject ===
                  datadel[ix].idSubject
              ) {
                haveTea.push(this.state.teacherSchedule[index]);
              }
            }
          }
            if (haveTea.length === 0) {
              this.state.teacherSchedule.splice(index, 1, {
                id: this.state.teacherSchedule[index].id,
                hours: this.state.teacherSchedule[index].hours + cosHours[0],
                idteacher: this.state.teacherSchedule[index].idteacher,
                term: this.state.teacherSchedule[index].term,
                time: this.state.teacherSchedule[index].time,
                year: this.state.teacherSchedule[index].year,
              });
            }
          }
      }
      if (datadel[ix].nameRoom) {
        
      }
    }
    let idteacherAdd = [];
        let cosHoursNow = [];
        for (let index = 0; index <= this.state.subject.length - 1; index++) {
          if (this.state.subject[index].idSubject === this.state.seCos) {
            let h = this.state.subject[index].creditSubject * 2;
            cosHoursNow.push(h);
          }
        }
          for (let index = 0; index <= this.state.teacher.length-1; index++) {
              if (this.state.teacher[index].mainGroupLearning.length !== 0 ) {
                for (let idex = 0; idex <= this.state.teacher[index].mainGroupLearning.length-1; idex++) {
                  if (this.state.teacher[index].mainGroupLearning[idex] === this.state.seCos) {
                    idteacherAdd.push(this.state.teacher[index].idteacher)
                  }
                }
              }
              if (this.state.teacher[index].secondaryGroupLearning.length !== 0 ) {
                for (let idex = 0; idex <= this.state.teacher[index].secondaryGroupLearning.length-1; idex++) {
                  if (this.state.teacher[index].secondaryGroupLearning[idex] === this.state.seCos) {
                    idteacherAdd.push(this.state.teacher[index].idteacher)
                  }
                }
              }
          } 
          for (let index = 0; index <= this.state.teacherSchedule.length-1; index++) {
            for (let dex = 0; dex <= idteacherAdd.length-1; dex++) {
              if (Number(this.state.teacherSchedule[index].year) ===
              Number(this.state.year12) &&
            Number(this.state.teacherSchedule[index].term) ===
              Number(this.state.term12) &&
              this.state.teacherSchedule[index].idteacher === idteacherAdd[dex]) {
                if (this.state.upDataTeacher.length === 0) {
                  this.state.upDataTeacher.push(this.state.teacherSchedule[index].id);
                } else {
                  let data = [];
                  for (let id = 0; id <= this.state.upDataTeacher.length - 1; id++) {
                    if (
                      this.state.teacherSchedule[index].id ===
                      this.state.upDataTeacher[id]
                    ) {
                      data.push("a");
                    }
                  }
                  if (data.length === 0) {
                    this.state.upDataTeacher.push(this.state.teacherSchedule[index].id);
                  }
                }
                if (this.state.seCos !== "พักกลางวัน") {
              await this.state.teacherSchedule[index].time.push({
              idSubject: this.state.seCos,
              groupStudent: this.state.class12,
            });
            }
            let haveTea = [];
            for (
              let idex = 0;
              idex <= this.state.teacherSchedule[index].time.length - 1;
              idex++
            ) {
              if (
                this.state.teacherSchedule[index].time[idex].groupStudent ===
                this.state.class12 &&
                this.state.teacherSchedule[index].time[idex].idSubject ===
                this.state.seCos
              ) {
                haveTea.push(this.state.teacherSchedule[index]);
              }
              }
              if (haveTea.length === 0) {
                this.state.teacherSchedule.splice(index, 1, {
                  id: this.state.teacherSchedule[index].id,
                  hours: this.state.teacherSchedule[index].hours - cosHoursNow[0],
                  idteacher: this.state.teacherSchedule[index].idteacher,
                  term: this.state.teacherSchedule[index].term,
                  time: this.state.teacherSchedule[index].time,
                  year: this.state.teacherSchedule[index].year,
                });
              }
              }
            }
          } 
    if (data.length === 1) {
      await this.filterIDSub12();
      await this.selectDataCos12();
      await this.setState({
        allTime: [],
        seTime: null,
        seCos: null,
      });
      await this.setState({ loading: false, show7: 1, lock7: 1 });
    }
  };
  
  ลบช่วงเวลา12 = async (value) => {
    await this.setState({ seDelTime: value });
  };
  
  all2: null,
  allyear12: [],
  year12: 2563,
  class12: null,
  term12: null,
  
  load12 = async () => {
    await this.setState({
      loadpage: true,
      allyear12: [],
      classSchedule: [],
      course: [],
      teacher: [],
      teacherSchedule: [],
      subject: [],
      year12: null,
      class12: null,
      term12: null,
      allTime: [],
      seTime: null,
      seCos: null,
      seDelTime: null,
      upDataClass: [],
      upDataClassRoom: [],
      upDataTeacher: [],
      is1: null,
      ic1: null,
      it1: null,
      is2: null,
      ic2: null,
      it2: null,
      is3: null,
      ic3: null,
      it3: null,
      is4: null,
      ic4: null,
      it4: null,
      is5: null,
      ic5: null,
      it5: null,
      is6: null,
      ic6: null,
      it6: null,
      is7: null,
      ic7: null,
      it7: null,
      is8: null,
      ic8: null,
      it8: null,
      is9: null,
      ic9: null,
      it9: null,
      is10: null,
      ic10: null,
      it10: null,
      is11: null,
      ic11: null,
      it11: null,
      is12: null,
      ic12: null,
      it12: null,
      is13: null,
      ic13: null,
      it13: null,
      is14: null,
      ic14: null,
      it14: null,
      is15: null,
      ic15: null,
      it15: null,
      is16: null,
      ic16: null,
      it16: null,
      is17: null,
      ic17: null,
      it17: null,
      is18: null,
      ic18: null,
      it18: null,
      is19: null,
      ic19: null,
      it19: null,
      is20: null,
      ic20: null,
      it20: null,
      is21: null,
      ic21: null,
      it21: null,
      is22: null,
      ic22: null,
      it22: null,
      is23: null,
      ic23: null,
      it23: null,
      is24: null,
      ic24: null,
      it24: null,
      is25: null,
      ic25: null,
      it25: null,
      is26: null,
      ic26: null,
      it26: null,
      is27: null,
      ic27: null,
      it27: null,
      is28: null,
      ic28: null,
      it28: null,
      is29: null,
      ic29: null,
      it29: null,
      is30: null,
      ic30: null,
      it30: null,
      is31: null,
      ic31: null,
      it31: null,
      is32: null,
      ic32: null,
      it32: null,
      is33: null,
      ic33: null,
      it33: null,
      is34: null,
      ic34: null,
      it34: null,
      is35: null,
      ic35: null,
      it35: null,
      is36: null,
      ic36: null,
      it36: null,
      is37: null,
      ic37: null,
      it37: null,
      is38: null,
      ic38: null,
      it38: null,
      is39: null,
      ic39: null,
      it39: null,
      is40: null,
      ic40: null,
      it40: null,
      is41: null,
      ic41: null,
      it41: null,
      is42: null,
      ic42: null,
      it42: null,
      is43: null,
      ic43: null,
      it43: null,
      is44: null,
      ic44: null,
      it44: null,
      is45: null,
      ic45: null,
      it45: null,
    });
    await db
      .collection("settingRoom")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.setState({
            allyear12: [
              ...this.state.allyear12,
              doc.data().year
              ,
            ],
          });
        });
      });
    await db
      .collection("subject")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.setState({
            subject: [
              ...this.state.subject,
              {
                id: doc.id,
                creditSubject: doc.data().creditSubject,
                groupLearning: doc.data().groupLearning,
                idSubject: doc.data().idSubject,
                nameSubject: doc.data().nameSubject,
              },
            ],
          });
        });
      });
    await db
      .collection("classSchedule")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.setState({
            classSchedule: [
              ...this.state.classSchedule,
              {
                id: doc.id,
                groupStudent: doc.data().groupStudent,
                program: doc.data().program,
                term: doc.data().term,
                time: doc.data().time,
                year: doc.data().year,
              },
            ],
          });
        });
      });
    await db
      .collection("course")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.setState({
            course: [
              ...this.state.course,
              {
                id: doc.id,
                groupLearning: doc.data().groupLearning,
                hours: doc.data().hours,
                idSubject: doc.data().idSubject,
                level: doc.data().level,
                program: doc.data().program,
                term: doc.data().term,
                year: doc.data().year,
                all: doc.data().all,
              },
            ],
          });
        });
      });
    await db
      .collection("teacher")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.setState({
            teacher: [
              ...this.state.teacher,
              {
                id: doc.id,
                fName: doc.data().fName,
                hours: doc.data().hours,
                idteacher: doc.data().idteacher,
                lName: doc.data().lName,
                mainGroupLearning: doc.data().mainGroupLearning,
                pName: doc.data().pName,
                secondaryGroupLearning: doc.data().secondaryGroupLearning,
              },
            ],
          });
        });
      });
    await db
      .collection("teacherSchedule")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.setState({
            teacherSchedule: [
              ...this.state.teacherSchedule,
              {
                id: doc.id,
                hours: doc.data().hours,
                idteacher: doc.data().idteacher,
                term: doc.data().term,
                time: doc.data().time,
                year: doc.data().year,
              },
            ],
          });
        });
      });
    let lallyeay = this.state.allyear12.sort(function (a, b) {
      return b - a;
    });
    await this.setState({ cutyear: lallyeay });
    let secondsToGo = 2;
    const timer = setInterval(() => {}, 1000);
    setTimeout(async () => {
      await this.setState({
        loadpage: false,
      });
    }, secondsToGo * 1000);
  };
  
  เปลี่ยนรายวิชา12 = async (value) => {
    let data = [];
    for (let index = 0; index <= this.state.classSchedule.length - 1; index++) {
      if (
        Number(this.state.classSchedule[index].year) ===
          Number(this.state.year12) &&
        Number(this.state.classSchedule[index].term) ===
          Number(this.state.term12) &&
        this.state.classSchedule[index].groupStudent === this.state.class12+"/1"
      ) {
        if (this.state.classSchedule[index].time.length > 0) {
          for (
            let id = 0;
            id <= this.state.classSchedule[index].time.length - 1;
            id++
          ) {
            if (this.state.classSchedule[index].time[id].idSubject === value) {
              await data.push(
                Number(this.state.classSchedule[index].time[id].idteacher)
              );
            }
          }
        }
      }
    }
      await this.setState({
        seCos: value,
        seTea: null,
        lockTea7: 0,
        seRoom: null,
        seTime: null,
        allTime: [],
      });
      await this.selectDataTime12();
  };
  
  เปลี่ยนเวลา12 = async (value) => {
    await this.setState({ seTime: value });
  };