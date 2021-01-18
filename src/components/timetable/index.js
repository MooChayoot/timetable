import React, { Component, useState } from "react";
import Highlighter from "react-highlight-words";
import moment from "moment";
import {
  Layout,
  Menu,
  Breadcrumb,
  Row,
  Col,
  Divider,
  Select,
  Button,
  Input,
  Table,
  Space,
  Spin,
  Tag,
  Modal,
  Popconfirm,
  message,
  DatePicker,
} from "antd";
import {
  TableOutlined,
  ExclamationCircleOutlined,
  LoginOutlined,
  TeamOutlined,
  UserOutlined,
  ReadOutlined,
  SettingFilled,
  HomeOutlined,
  BankOutlined,
  LogoutOutlined,
  AppstoreAddOutlined,
  SearchOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { db, aut } from "../../config/firebaseConfig";
import auth from "../firebase";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Option, OptGroup } = Select;
const style = { background: "#0092ff", padding: "8px 0" };
let taTime = {
  border: "1px solid black",
  textAlign: "center",
  width: "max-content",
  padding: "5px",
};
class TimeTable extends Component {
  constructor() {
    super();
    this.state = {
      collapsed: true,
      line: 20,
      subject: [],
      classroom: [],
      classSchedule: [],
      classroomSchedule: [],
      course: [],
      settingRoom: [],
      teacher: [],
      teacherSchedule: [],
      student: [],
      allyear: [],
      lock7: 1,
      slogout: false,
      lockTea7: 1,
      cutclass: [],
      cutyear: [],
      year7: null,
      class7: null,
      term7: null,
      show7: 1,
      lv1: [],
      lv2: [],
      lv3: [],
      lv4: [],
      lv5: [],
      lv6: [],
      namelv1: [],
      namelv2: [],
      namelv3: [],
      namelv4: [],
      namelv5: [],
      namelv6: [],
      idSub: [],
      idTea: [],
      idRoom: [],
      selectCos: [],
      loadings: [],
      subload: 1,
      seCos: null,
      seTea: null,
      selectTeaF: [],
      selectTeaS: [],
      selectRoom: [],
      groupLearning: [],
      mainRoomG: [],
      secRoomG: [],
      tsp: [],
      seRoom: null,
      allTime: [],
      seTime: [],
      upDataClass: [],
      upDataClassRoom: [],
      upDataTeacher: [],
      delTime: [],
      seDelTime: null,
      searchText: "",
      searchedColumn: "",
      visible: false,
      setVisible: false,
      seIdSub1: null,
      seNameSub1: null,
      seCreditSub1: null,
      seGL1: null,
      loading: false,
      id1: null,
      id2: null,
      id4: null,
      id3: null,
      id5: null,
      idSub2: null,
      GL2: null,
      lavel2: null,
      year2: null,
      year3: null,
      year4: null,
      gs4: null,
      term2: null,
      lavel13: null,
      lavel23: null,
      lavel33: null,
      lavel43: null,
      lavel53: null,
      lavel63: null,
      pg4: null,
      allclass4: [],
      seGL5: null,
      seM5: [],
      seS5: [],
      main5: [],
      sec5: [],
      fnameT5: null,
      lnameT5: null,
      idT5: null,
      hourT5: null,
      pnameT5: null,
      mT5: [],
      sT5: [],
      nameroom6: null,
      seGL6: null,
      tsp6: [],
      id6: null,
      id8: null,
      idStudent8: null,
      no8: null,
      pName8: null,
      fName8: null,
      lName8: null,
      level8: null,
      roomOfLevel8: null,
      birthday8: null,
      address8: null,
      tel8: null,
      status8: null,
      currentUser: null,
      emailSignIN: null,
      passwordSignIN: null,
      slogin: false,
      loadpage: false,
      chackall:false,
      selectTermYear:[],
      year10: null,
      term10: null,
      seTY10: null,
      allclass10: [],
      gs10:null,
      year9: null,
      term9: null,
      seTY9: null,
      alltea9: [],
      idtea9:null,
      ltea9:null,
      ftea9:null,
      year11: null,
      term11: null,
      seTY11: null,
      allCR11: [],
      cR11:null,
      cR111:null,
    };
  }
  async componentDidMount() {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        await this.setState({
          currentUser: user,
        });
      }
    });
  }
  load1 = async () => {
    await this.setState({
      loadpage: true,
    });
    await this.setState({
      subject: [],
      seCreditSub1: null,
      seIdSub1: null,
      seNameSub1: null,
      seGL1: null,
      id1: null,
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
    let secondsToGo = 2;
    const timer = setInterval(() => {}, 1000);
    setTimeout(async () => {
      await this.setState({
        loadpage: false,
      });
    }, secondsToGo * 1000);
  };
  load2 = async () => {
    await this.setState({
      loadpage: true,
    });
    await this.setState({
      course: [],
      subject: [],
      idSub2: null,
      lavel2: null,
      year2: null,
      GL2: null,
      term2: null,
      id2: null,
    });
     db
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
    let secondsToGo = 2;
    const timer = setInterval(() => {}, 1000);
    setTimeout(async () => {
      await this.setState({
        loadpage: false,
      });
    }, secondsToGo * 1000);
  };
  load3 = async () => {
    await this.setState({
      loadpage: true,
    });
    await this.setState({
      settingRoom: [],
      lavel13: null,
      lavel23: null,
      lavel33: null,
      lavel43: null,
      lavel53: null,
      lavel63: null,
      year3: null,
      id3: null,
    });
    await db
      .collection("settingRoom")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.setState({
            settingRoom: [
              ...this.state.settingRoom,
              {
                id: doc.id,
                level1: doc.data().level1,
                level2: doc.data().level2,
                level3: doc.data().level3,
                level4: doc.data().level4,
                level5: doc.data().level5,
                level6: doc.data().level6,
                year: doc.data().year,
              },
            ],
          });
        });
      });
    let secondsToGo = 2;
    const timer = setInterval(() => {}, 1000);
    setTimeout(async () => {
      await this.setState({
        loadpage: false,
      });
    }, secondsToGo * 1000);
  };
  load4 = async () => {
    await this.setState({
      loadpage: true,
    });
    await this.setState({
      classSchedule: [],
      pg4: null,
      gs4: null,
      id4: null,
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
          this.setState({
            allyear: [...this.state.allyear, Number(doc.data().year)],
          });
        });
      });
    let data = [];
    for (let index = 0; index <= this.state.classSchedule.length - 1; index++) {
      if (
        Number(this.state.classSchedule[index].groupStudent.substring(0, 1)) >
          3 &&
        Number(this.state.classSchedule[index].term) === 1
      ) {
        await data.push({
          id: this.state.classSchedule[index].id,
          year: this.state.classSchedule[index].year,
          groupStudent: this.state.classSchedule[index].groupStudent,
          program: this.state.classSchedule[index].program,
        });
      }
    }
    let secondsToGo = 2;
    const timer = setInterval(() => {}, 1000);
    setTimeout(async () => {
      await this.setState({
        allclass4: data,
        loadpage: false,
      });
    }, secondsToGo * 1000);
  };
  load5 = async () => {
    await this.setState({
      loadpage: true,
    });
    await this.setState({
      teacher: [],
      subject: [],
      fnameT5: null,
      hourT5: null,
      idT5: null,
      lnameT5: null,
      mT5: [],
      seGL5: null,
      pnameT5: null,
      sT5: [],
      id5: null,
    });
     db
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
    let secondsToGo = 2;
    const timer = setInterval(() => {}, 1000);
    setTimeout(async () => {
      await this.setState({
        loadpage: false,
      });
    }, secondsToGo * 1000);
  };
  load6 = async () => {
    await this.setState({
      loadpage: true,
    });
    await this.setState({
      classroom: [],
      subject: [],
      tsp6: [],
      nameroom6: null,
      seGL6: null,
      id6: null,
    });
     db
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
      .collection("classroom")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.setState({
            classroom: [
              ...this.state.classroom,
              {
                id: doc.id,
                TsP: doc.data().TsP,
                groupLearning: doc.data().groupLearning,
                nameRoom: doc.data().nameRoom,
              },
            ],
          });
        });
      });
    let secondsToGo = 2;
    const timer = setInterval(() => {}, 1000);
    setTimeout(async () => {
      await this.setState({
        loadpage: false,
      });
    }, secondsToGo * 1000);
  };
  load7 = async () => {
    await this.setState({
      loadpage: true,
    });
    await this.setState({
      upDataClass: [],
      upDataClassRoom: [],
      upDataTeacher: [],
      classroom: [],
      classSchedule: [],
      classroomSchedule: [],
      course: [],
      settingRoom: [],
      teacher: [],
      teacherSchedule: [],
      subject: [],
      year7: null,
      class7: null,
      term7: null,
      selectTeaS: [],
      selectTeaF: [],
      tsp: [],
      secRoomG: [],
      mainRoomG: [],
      allTime: [],
      seRoom: null,
      seTea: null,
      seTime: null,
      seCos: null,
      seDelTime: null,
      upDataClass: [],
      upDataClassRoom: [],
      upDataTeacher: [],
    });
     db
      .collection("classroom")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.setState({
            classroom: [
              ...this.state.classroom,
              {
                id: doc.id,
                TsP: doc.data().TsP,
                groupLearning: doc.data().groupLearning,
                nameRoom: doc.data().nameRoom,
              },
            ],
          });
        });
      });
     db
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
     db
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
          this.setState({
            allyear: [...this.state.allyear, Number(doc.data().year)],
          });
        });
      });
     db
      .collection("classroomSchedule")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.setState({
            classroomSchedule: [
              ...this.state.classroomSchedule,
              {
                id: doc.id,
                nameRoom: doc.data().nameRoom,
                term: doc.data().term,
                time: doc.data().time,
                year: doc.data().year,
              },
            ],
          });
        });
      });
     db
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
      let y = [];
     db
      .collection("settingRoom")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.setState({
            settingRoom: [
              ...this.state.settingRoom,
              {
                id: doc.id,
                level1: doc.data().level1,
                level2: doc.data().level2,
                level3: doc.data().level3,
                level4: doc.data().level4,
                level5: doc.data().level5,
                level6: doc.data().level6,
                year: doc.data().year,
              },
            ],
          });
          y.push(Number(doc.data().year))
        });
      });
     db
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
    let lallyeay = y.sort(function (a, b) {
      return b - a;
    });
    await this.setState({ cutyear: lallyeay ,show7:1});
    let secondsToGo = 2;
    const timer = setInterval(() => {}, 1000);
    setTimeout(async () => {
      await this.setState({
        loadpage: false,
      });
    }, secondsToGo * 1000);
  };
  load8 = async () => {
    await this.setState({
      loadpage: true,
    });
    await this.setState({
      student: [],
      id8: null,
      idStudent8: null,
      no8: null,
      pName8: null,
      fName8: null,
      lName8: null,
      level8: null,
      roomOfLevel8: null,
      birthday8: null,
      address8: null,
      tel8: null,
      status8: null,
    });
    await db
      .collection("student")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.setState({
            student: [
              ...this.state.student,
              {
                id: doc.id,
                idStudent: doc.data().idStudent,
                no: doc.data().no,
                groupStudent: doc.data().groupStudent,
                pName: doc.data().pName,
                fName: doc.data().fName,
                lName: doc.data().lName,
                level: doc.data().level,
                roomOfLevel: doc.data().roomOfLevel,
                birthday: doc.data().birthday,
                address: doc.data().address,
                tel: doc.data().tel,
                status: doc.data().status,
              },
            ],
          });
        });
      });
    let secondsToGo = 2;
    const timer = setInterval(() => {}, 1000);
    setTimeout(async () => {
      await this.setState({
        loadpage: false,
      });
    }, secondsToGo * 1000);
  };
  load9 = async () => {
    await this.setState({
      loadpage: true,
    });
    await this.setState({
      teacherSchedule: [],
      settingRoom:[],
      course: [],
      teacher: [],
      subject: [],
      show7:0,
      selectTermYear:[],
      year9: null,
      term9: null,
      seTY9: null,
      alltea9: [],
      idtea9:null,
      ltea9:null,
      ftea9:null,
    });
    db
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
     db
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
       db
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
      let y = [];
         db
      .collection("settingRoom")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.setState({
            settingRoom: [
              ...this.state.settingRoom,
              {
                id: doc.id,
                level1: doc.data().level1,
                level2: doc.data().level2,
                level3: doc.data().level3,
                level4: doc.data().level4,
                level5: doc.data().level5,
                level6: doc.data().level6,
                year: doc.data().year,
              },
            ],
          });
          y.push(Number(doc.data().year))
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
      let year = [];
      let lallyeay = y.sort(function (a, b) {
        return b - a;
      });
      for (let index = 0; index <= lallyeay.length-1; index++) {
        for (let dex = 2; dex >= 1; dex--) {
          year.push(dex+"/"+lallyeay[index])
        }
      }
      await this.setState({ selectTermYear: year });
    let secondsToGo = 2;
    const timer = setInterval(() => {}, 1000);
    setTimeout(async () => {
      await this.setState({
        loadpage: false,
      });
    }, secondsToGo * 1000);
  };
  load10 = async () => {
    await this.setState({
      loadpage: true,
    });
    await this.setState({
      settingRoom:[],
      classSchedule: [],
      course: [],
      teacher: [],
      subject: [],
      show7:0,
      selectTermYear:[],
      year10: null,
      term10: null,
      seTY10: null,
      allclass10: [],
      gs10:null,
    });
    db
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
     db
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
       db
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
      let y = [];
         db
      .collection("settingRoom")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.setState({
            settingRoom: [
              ...this.state.settingRoom,
              {
                id: doc.id,
                level1: doc.data().level1,
                level2: doc.data().level2,
                level3: doc.data().level3,
                level4: doc.data().level4,
                level5: doc.data().level5,
                level6: doc.data().level6,
                year: doc.data().year,
              },
            ],
          });
          y.push(Number(doc.data().year))
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
      let year = [];
    let lallyeay = y.sort(function (a, b) {
      return b - a;
    });
    for (let index = 0; index <= lallyeay.length-1; index++) {
      for (let dex = 2; dex >= 1; dex--) {
        year.push(dex+"/"+lallyeay[index])
      }
    }
    await this.setState({ selectTermYear: year });
    let secondsToGo = 2;
    const timer = setInterval(() => {}, 1000);
    setTimeout(async () => {
      await this.setState({
        loadpage: false,
      });
    }, secondsToGo * 1000);
  };
  load11 = async () => {
    await this.setState({
      loadpage: true,
    });
    await this.setState({
      classroomSchedule: [],
      settingRoom:[],
      classroom:[],
      course: [],
      teacher: [],
      subject: [],
      show7:0,
      selectTermYear:[],
      year11: null,
      term11: null,
      seTY11: null,
      allCR11: [],
      cR11:null,
    });
    db
      .collection("classroom")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.setState({
            classroom: [
              ...this.state.classroom,
              {
                id: doc.id,
                TsP: doc.data().TsP,
                groupLearning: doc.data().groupLearning,
                nameRoom: doc.data().nameRoom,
              },
            ],
          });
        });
      });
    db
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
     db
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
       db
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
      let y = [];
         db
      .collection("settingRoom")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.setState({
            settingRoom: [
              ...this.state.settingRoom,
              {
                id: doc.id,
                level1: doc.data().level1,
                level2: doc.data().level2,
                level3: doc.data().level3,
                level4: doc.data().level4,
                level5: doc.data().level5,
                level6: doc.data().level6,
                year: doc.data().year,
              },
            ],
          });
          y.push(Number(doc.data().year))
        });
      });
    await db
      .collection("classroomSchedule")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.setState({
            classroomSchedule: [
              ...this.state.classroomSchedule,
              {
                id: doc.id,
                nameRoom: doc.data().nameRoom,
                term: doc.data().term,
                time: doc.data().time,
                year: doc.data().year,
              },
            ],
          });
        });
      });
      let year = [];
    let lallyeay = y.sort(function (a, b) {
      return b - a;
    });
    for (let index = 0; index <= lallyeay.length-1; index++) {
      for (let dex = 2; dex >= 1; dex--) {
        year.push(dex+"/"+lallyeay[index])
      }
    }
    await this.setState({ selectTermYear: year });
    let secondsToGo = 2;
    const timer = setInterval(() => {}, 1000);
    setTimeout(async () => {
      await this.setState({
        loadpage: false,
      });
    }, secondsToGo * 1000);
  };
  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };
  onSel = async (e) => {
    if (e.key !== "login" && e.key !== "logout") {
      await this.setState({ line: Number(e.key) });
    }
  };
  onCS7 = async () => {
    await this.setState({
      year7: null,
      class7: null,
      term7: null,
      selectTeaF: [],
      selectTeaS: [],
      tsp: [],
      mainRoomG: [],
      secRoomG: [],
      allTime: [],
      seRoom: null,
      seTea: null,
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
  onCY7 = async () => {
    await this.setState({
      class7: null,
      term7: null,
      selectTeaF: [],
      selectTeaS: [],
      tsp: [],
      mainRoomG: [],
      secRoomG: [],
      allTime: [],
      seRoom: null,
      seTea: null,
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
  onCC7 = async () => {
    await this.setState({
      term7: null,
      selectTeaF: [],
      selectTeaS: [],
      tsp: [],
      mainRoomG: [],
      secRoomG: [],
      allTime: [],
      seRoom: null,
      seTea: null,
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
  cutC7 = async () => {
    await this.setState({
      lv1: [],
      lv2: [],
      lv3: [],
      lv4: [],
      lv5: [],
      lv6: [],
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
    for (let index = 0; index <= this.state.classSchedule.length - 1; index++) {
      if (
        Number(this.state.classSchedule[index].groupStudent.substring(0, 1)) ===
          1 &&
        Number(this.state.classSchedule[index].year) === this.state.year7 &&
        Number(this.state.classSchedule[index].term) === 1 &&
        this.state.classSchedule[index].program !== null
      ) {
        await this.setState({
          lv1: [
            ...this.state.lv1,
            Number(
              this.state.classSchedule[index].groupStudent.substring(
                2,
                this.state.classSchedule[index].groupStudent.length
              )
            ),
          ],
        });
      }
      if (
        Number(this.state.classSchedule[index].groupStudent.substring(0, 1)) ===
          2 &&
        Number(this.state.classSchedule[index].year) === this.state.year7 &&
        Number(this.state.classSchedule[index].term) === 1 &&
        this.state.classSchedule[index].program !== null
      ) {
        await this.setState({
          lv2: [
            ...this.state.lv2,
            Number(
              this.state.classSchedule[index].groupStudent.substring(
                2,
                this.state.classSchedule[index].groupStudent.length
              )
            ),
          ],
        });
      }
      if (
        Number(this.state.classSchedule[index].groupStudent.substring(0, 1)) ===
          3 &&
        Number(this.state.classSchedule[index].year) === this.state.year7 &&
        Number(this.state.classSchedule[index].term) === 1 &&
        this.state.classSchedule[index].program !== null
      ) {
        await this.setState({
          lv3: [
            ...this.state.lv3,
            Number(
              this.state.classSchedule[index].groupStudent.substring(
                2,
                this.state.classSchedule[index].groupStudent.length
              )
            ),
          ],
        });
      }
      if (
        Number(this.state.classSchedule[index].groupStudent.substring(0, 1)) ===
          4 &&
        Number(this.state.classSchedule[index].year) === this.state.year7 &&
        Number(this.state.classSchedule[index].term) === 1 &&
        this.state.classSchedule[index].program !== null
      ) {
        await this.setState({
          lv4: [
            ...this.state.lv4,
            Number(
              this.state.classSchedule[index].groupStudent.substring(
                2,
                this.state.classSchedule[index].groupStudent.length
              )
            ),
          ],
        });
      }
      if (
        Number(this.state.classSchedule[index].groupStudent.substring(0, 1)) ===
          5 &&
        Number(this.state.classSchedule[index].year) === this.state.year7 &&
        Number(this.state.classSchedule[index].term) === 1 &&
        this.state.classSchedule[index].program !== null
      ) {
        await this.setState({
          lv5: [
            ...this.state.lv5,
            Number(
              this.state.classSchedule[index].groupStudent.substring(
                2,
                this.state.classSchedule[index].groupStudent.length
              )
            ),
          ],
        });
      }
      if (
        Number(this.state.classSchedule[index].groupStudent.substring(0, 1)) ===
          6 &&
        Number(this.state.classSchedule[index].year) === this.state.year7 &&
        Number(this.state.classSchedule[index].term) === 1 &&
        this.state.classSchedule[index].program !== null
      ) {
        await this.setState({
          lv6: [
            ...this.state.lv6,
            Number(
              this.state.classSchedule[index].groupStudent.substring(
                2,
                this.state.classSchedule[index].groupStudent.length
              )
            ),
          ],
        });
      }
    }
  };
  lclass = async () => {
    await this.setState({
      namelv1: [],
      namelv2: [],
      namelv3: [],
      namelv4: [],
      namelv5: [],
      namelv6: [],
    });
    for (let index = 1; index <= 6; index++) {
      if (index === 1) {
        let data = this.state.lv1.sort(function (b, a) {
          return b - a;
        });
        for (let idex = 0; idex <= data.length - 1; idex++) {
          await this.setState({
            namelv1: [...this.state.namelv1, "1/" + data[idex]],
          });
        }
      }
      if (index === 2) {
        let data = this.state.lv2.sort(function (b, a) {
          return b - a;
        });
        for (let idex = 0; idex <= data.length - 1; idex++) {
          await this.setState({
            namelv2: [...this.state.namelv2, "2/" + data[idex]],
          });
        }
      }
      if (index === 3) {
        let data = this.state.lv3.sort(function (b, a) {
          return b - a;
        });
        for (let idex = 0; idex <= data.length - 1; idex++) {
          await this.setState({
            namelv3: [...this.state.namelv3, "3/" + data[idex]],
          });
        }
      }
      if (index === 4) {
        let data = this.state.lv4.sort(function (b, a) {
          return b - a;
        });
        for (let idex = 0; idex <= data.length - 1; idex++) {
          await this.setState({
            namelv4: [...this.state.namelv4, "4/" + data[idex]],
          });
        }
      }
      if (index === 5) {
        let data = this.state.lv5.sort(function (b, a) {
          return b - a;
        });
        for (let idex = 0; idex <= data.length - 1; idex++) {
          await this.setState({
            namelv5: [...this.state.namelv5, "5/" + data[idex]],
          });
        }
      }
      if (index === 6) {
        let data = this.state.lv6.sort(function (b, a) {
          return b - a;
        });
        for (let idex = 0; idex <= data.length - 1; idex++) {
          await this.setState({
            namelv6: [...this.state.namelv6, "6/" + data[idex]],
          });
        }
      }
    }
  };
  filterIDSub = async () => {
    await this.setState({ delTime: [] });
    for (let index = 0; index <= this.state.classSchedule.length - 1; index++) {
      if (
        Number(this.state.classSchedule[index].year) ===
          Number(this.state.year7) &&
        Number(this.state.classSchedule[index].term) ===
          Number(this.state.term7) &&
        this.state.classSchedule[index].groupStudent === this.state.class7
      ) {
        if (this.state.classSchedule[index].time.length > 0) {
          for (
            let id = 0;
            id <= this.state.classSchedule[index].time.length - 1;
            id++
          ) {
                await this.setState({
              delTime: [
                ...this.state.delTime,
                this.state.classSchedule[index].time[id].time,
              ],
            });
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
            if (this.state.classSchedule[index].time[id].nameRoom && this.state.classSchedule[index].time[id].idteacher) {
            if (Number(this.state.classSchedule[index].time[id].time) === 1) {
              await this.setState({
                ic1: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 2) {
              await this.setState({
                ic2: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 3) {
              await this.setState({
                ic3: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 4) {
              await this.setState({
                ic4: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 5) {
              await this.setState({
                ic5: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 6) {
              await this.setState({
                ic6: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 7) {
              await this.setState({
                ic7: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 8) {
              await this.setState({
                ic8: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 9) {
              await this.setState({
                ic9: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 10) {
              await this.setState({
                ic10: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 11) {
              await this.setState({
                ic11: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 12) {
              await this.setState({
                ic12: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 13) {
              await this.setState({
                ic13: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 14) {
              await this.setState({
                ic14: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 15) {
              await this.setState({
                ic15: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 16) {
              await this.setState({
                ic16: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 17) {
              await this.setState({
                ic17: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 18) {
              await this.setState({
                ic18: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 19) {
              await this.setState({
                ic19: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 20) {
              await this.setState({
                ic20: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 21) {
              await this.setState({
                ic21: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 22) {
              await this.setState({
                ic22: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 23) {
              await this.setState({
                ic23: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 24) {
              await this.setState({
                ic24: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 25) {
              await this.setState({
                ic25: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 26) {
              await this.setState({
                ic26: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 27) {
              await this.setState({
                ic27: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 28) {
              await this.setState({
                ic28: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 29) {
              await this.setState({
                ic29: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 30) {
              await this.setState({
                ic30: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 31) {
              await this.setState({
                ic31: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 32) {
              await this.setState({
                ic32: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 33) {
              await this.setState({
                ic33: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 34) {
              await this.setState({
                ic34: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 35) {
              await this.setState({
                ic35: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 36) {
              await this.setState({
                ic36: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 37) {
              await this.setState({
                ic37: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 38) {
              await this.setState({
                ic38: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 39) {
              await this.setState({
                ic39: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 40) {
              await this.setState({
                ic40: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 41) {
              await this.setState({
                ic41: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 42) {
              await this.setState({
                ic42: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 43) {
              await this.setState({
                ic43: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 44) {
              await this.setState({
                ic44: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 45) {
              await this.setState({
                ic45: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            let idT = this.state.classSchedule[index].time[id].idteacher;
            let name = [];

            for (
              let index = 0;
              index <= this.state.teacher.length - 1;
              index++
            ) {
              if (Number(this.state.teacher[index].idteacher) === Number(idT)) {
                name.push(this.state.teacher[index].fName);
              }
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 1) {
              await this.setState({
                it1: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 2) {
              await this.setState({
                it2: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 3) {
              await this.setState({
                it3: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 4) {
              await this.setState({
                it4: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 5) {
              await this.setState({
                it5: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 6) {
              await this.setState({
                it6: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 7) {
              await this.setState({
                it7: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 8) {
              await this.setState({
                it8: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 9) {
              await this.setState({
                it9: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 10) {
              await this.setState({
                it10: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 11) {
              await this.setState({
                it11: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 12) {
              await this.setState({
                it12: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 13) {
              await this.setState({
                it13: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 14) {
              await this.setState({
                it14: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 15) {
              await this.setState({
                it15: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 16) {
              await this.setState({
                it16: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 17) {
              await this.setState({
                it17: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 18) {
              await this.setState({
                it18: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 19) {
              await this.setState({
                it19: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 20) {
              await this.setState({
                it20: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 21) {
              await this.setState({
                it21: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 22) {
              await this.setState({
                it22: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 23) {
              await this.setState({
                it23: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 24) {
              await this.setState({
                it24: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 25) {
              await this.setState({
                it25: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 26) {
              await this.setState({
                it26: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 27) {
              await this.setState({
                it27: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 28) {
              await this.setState({
                it28: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 29) {
              await this.setState({
                it29: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 30) {
              await this.setState({
                it30: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 31) {
              await this.setState({
                it31: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 32) {
              await this.setState({
                it32: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 33) {
              await this.setState({
                it33: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 34) {
              await this.setState({
                it34: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 35) {
              await this.setState({
                it35: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 36) {
              await this.setState({
                it36: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 37) {
              await this.setState({
                it37: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 38) {
              await this.setState({
                it38: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 39) {
              await this.setState({
                it39: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 40) {
              await this.setState({
                it40: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 41) {
              await this.setState({
                it41: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 42) {
              await this.setState({
                it42: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 43) {
              await this.setState({
                it43: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 44) {
              await this.setState({
                it44: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 45) {
              await this.setState({
                it45: "อ." + name[0],
              });
            }
          }
        }
        }
      }
    }
  };
  filterIDSub10 = async () => {
    await this.setState({ delTime: [] });
    for (let index = 0; index <= this.state.classSchedule.length - 1; index++) {
      if (
        Number(this.state.classSchedule[index].year) ===
          Number(this.state.year10) &&
        Number(this.state.classSchedule[index].term) ===
          Number(this.state.term10) &&
        this.state.classSchedule[index].groupStudent === this.state.gs10
      ) {
        if (this.state.classSchedule[index].time.length > 0) {
          for (
            let id = 0;
            id <= this.state.classSchedule[index].time.length - 1;
            id++
          ) {
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
            if (this.state.classSchedule[index].time[id].nameRoom && this.state.classSchedule[index].time[id].idteacher) {
            if (Number(this.state.classSchedule[index].time[id].time) === 1) {
              await this.setState({
                ic1: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 2) {
              await this.setState({
                ic2: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 3) {
              await this.setState({
                ic3: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 4) {
              await this.setState({
                ic4: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 5) {
              await this.setState({
                ic5: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 6) {
              await this.setState({
                ic6: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 7) {
              await this.setState({
                ic7: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 8) {
              await this.setState({
                ic8: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 9) {
              await this.setState({
                ic9: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 10) {
              await this.setState({
                ic10: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 11) {
              await this.setState({
                ic11: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 12) {
              await this.setState({
                ic12: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 13) {
              await this.setState({
                ic13: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 14) {
              await this.setState({
                ic14: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 15) {
              await this.setState({
                ic15: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 16) {
              await this.setState({
                ic16: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 17) {
              await this.setState({
                ic17: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 18) {
              await this.setState({
                ic18: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 19) {
              await this.setState({
                ic19: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 20) {
              await this.setState({
                ic20: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 21) {
              await this.setState({
                ic21: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 22) {
              await this.setState({
                ic22: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 23) {
              await this.setState({
                ic23: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 24) {
              await this.setState({
                ic24: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 25) {
              await this.setState({
                ic25: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 26) {
              await this.setState({
                ic26: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 27) {
              await this.setState({
                ic27: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 28) {
              await this.setState({
                ic28: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 29) {
              await this.setState({
                ic29: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 30) {
              await this.setState({
                ic30: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 31) {
              await this.setState({
                ic31: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 32) {
              await this.setState({
                ic32: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 33) {
              await this.setState({
                ic33: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 34) {
              await this.setState({
                ic34: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 35) {
              await this.setState({
                ic35: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 36) {
              await this.setState({
                ic36: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 37) {
              await this.setState({
                ic37: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 38) {
              await this.setState({
                ic38: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 39) {
              await this.setState({
                ic39: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 40) {
              await this.setState({
                ic40: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 41) {
              await this.setState({
                ic41: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 42) {
              await this.setState({
                ic42: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 43) {
              await this.setState({
                ic43: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 44) {
              await this.setState({
                ic44: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 45) {
              await this.setState({
                ic45: this.state.classSchedule[index].time[id].nameRoom,
              });
            }
            let idT = this.state.classSchedule[index].time[id].idteacher;
            let name = [];

            for (
              let index = 0;
              index <= this.state.teacher.length - 1;
              index++
            ) {
              if (Number(this.state.teacher[index].idteacher) === Number(idT)) {
                name.push(this.state.teacher[index].fName);
              }
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 1) {
              await this.setState({
                it1: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 2) {
              await this.setState({
                it2: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 3) {
              await this.setState({
                it3: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 4) {
              await this.setState({
                it4: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 5) {
              await this.setState({
                it5: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 6) {
              await this.setState({
                it6: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 7) {
              await this.setState({
                it7: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 8) {
              await this.setState({
                it8: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 9) {
              await this.setState({
                it9: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 10) {
              await this.setState({
                it10: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 11) {
              await this.setState({
                it11: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 12) {
              await this.setState({
                it12: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 13) {
              await this.setState({
                it13: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 14) {
              await this.setState({
                it14: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 15) {
              await this.setState({
                it15: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 16) {
              await this.setState({
                it16: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 17) {
              await this.setState({
                it17: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 18) {
              await this.setState({
                it18: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 19) {
              await this.setState({
                it19: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 20) {
              await this.setState({
                it20: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 21) {
              await this.setState({
                it21: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 22) {
              await this.setState({
                it22: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 23) {
              await this.setState({
                it23: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 24) {
              await this.setState({
                it24: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 25) {
              await this.setState({
                it25: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 26) {
              await this.setState({
                it26: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 27) {
              await this.setState({
                it27: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 28) {
              await this.setState({
                it28: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 29) {
              await this.setState({
                it29: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 30) {
              await this.setState({
                it30: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 31) {
              await this.setState({
                it31: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 32) {
              await this.setState({
                it32: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 33) {
              await this.setState({
                it33: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 34) {
              await this.setState({
                it34: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 35) {
              await this.setState({
                it35: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 36) {
              await this.setState({
                it36: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 37) {
              await this.setState({
                it37: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 38) {
              await this.setState({
                it38: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 39) {
              await this.setState({
                it39: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 40) {
              await this.setState({
                it40: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 41) {
              await this.setState({
                it41: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 42) {
              await this.setState({
                it42: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 43) {
              await this.setState({
                it43: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 44) {
              await this.setState({
                it44: "อ." + name[0],
              });
            }
            if (Number(this.state.classSchedule[index].time[id].time) === 45) {
              await this.setState({
                it45: "อ." + name[0],
              });
            }
          }
        }
        }
      }
    }
  };
  filterIDSub9 = async () => {
    await this.setState({ delTime: [] });
    for (let index = 0; index <= this.state.teacherSchedule.length - 1; index++) {
      if (
        Number(this.state.teacherSchedule[index].year) ===
          Number(this.state.year9) &&
        Number(this.state.teacherSchedule[index].term) ===
          Number(this.state.term9) &&
        this.state.teacherSchedule[index].idteacher === this.state.idtea9
      ) {
        if (this.state.teacherSchedule[index].time.length > 0) {
          for (
            let id = 0;
            id <= this.state.teacherSchedule[index].time.length - 1;
            id++
          ) {
            if (Number(this.state.teacherSchedule[index].time[id].time) === 1) {
              await this.setState({
                is1: this.state.teacherSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.teacherSchedule[index].time[id].time === 2) {
              await this.setState({
                is2: this.state.teacherSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.teacherSchedule[index].time[id].time === 3) {
              await this.setState({
                is3: this.state.teacherSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.teacherSchedule[index].time[id].time === 4) {
              await this.setState({
                is4: this.state.teacherSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.teacherSchedule[index].time[id].time === 5) {
              await this.setState({
                is5: this.state.teacherSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.teacherSchedule[index].time[id].time === 6) {
              await this.setState({
                is6: this.state.teacherSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.teacherSchedule[index].time[id].time === 7) {
              await this.setState({
                is7: this.state.teacherSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.teacherSchedule[index].time[id].time === 8) {
              await this.setState({
                is8: this.state.teacherSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.teacherSchedule[index].time[id].time === 9) {
              await this.setState({
                is9: this.state.teacherSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.teacherSchedule[index].time[id].time === 10) {
              await this.setState({
                is10: this.state.teacherSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.teacherSchedule[index].time[id].time === 11) {
              await this.setState({
                is11: this.state.teacherSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.teacherSchedule[index].time[id].time === 12) {
              await this.setState({
                is12: this.state.teacherSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.teacherSchedule[index].time[id].time === 13) {
              await this.setState({
                is13: this.state.teacherSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.teacherSchedule[index].time[id].time === 14) {
              await this.setState({
                is14: this.state.teacherSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.teacherSchedule[index].time[id].time === 15) {
              await this.setState({
                is15: this.state.teacherSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.teacherSchedule[index].time[id].time === 16) {
              await this.setState({
                is16: this.state.teacherSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.teacherSchedule[index].time[id].time === 17) {
              await this.setState({
                is17: this.state.teacherSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.teacherSchedule[index].time[id].time === 18) {
              await this.setState({
                is18: this.state.teacherSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.teacherSchedule[index].time[id].time === 19) {
              await this.setState({
                is19: this.state.teacherSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.teacherSchedule[index].time[id].time === 20) {
              await this.setState({
                is20: this.state.teacherSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.teacherSchedule[index].time[id].time === 21) {
              await this.setState({
                is21: this.state.teacherSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.teacherSchedule[index].time[id].time === 22) {
              await this.setState({
                is22: this.state.teacherSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.teacherSchedule[index].time[id].time === 23) {
              await this.setState({
                is23: this.state.teacherSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.teacherSchedule[index].time[id].time === 24) {
              await this.setState({
                is24: this.state.teacherSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.teacherSchedule[index].time[id].time === 25) {
              await this.setState({
                is25: this.state.teacherSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.teacherSchedule[index].time[id].time === 26) {
              await this.setState({
                is26: this.state.teacherSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.teacherSchedule[index].time[id].time === 27) {
              await this.setState({
                is27: this.state.teacherSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.teacherSchedule[index].time[id].time === 28) {
              await this.setState({
                is28: this.state.teacherSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.teacherSchedule[index].time[id].time === 29) {
              await this.setState({
                is29: this.state.teacherSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.teacherSchedule[index].time[id].time === 30) {
              await this.setState({
                is30: this.state.teacherSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.teacherSchedule[index].time[id].time === 31) {
              await this.setState({
                is31: this.state.teacherSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.teacherSchedule[index].time[id].time === 32) {
              await this.setState({
                is32: this.state.teacherSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.teacherSchedule[index].time[id].time === 33) {
              await this.setState({
                is33: this.state.teacherSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.teacherSchedule[index].time[id].time === 34) {
              await this.setState({
                is34: this.state.teacherSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.teacherSchedule[index].time[id].time === 35) {
              await this.setState({
                is35: this.state.teacherSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.teacherSchedule[index].time[id].time === 36) {
              await this.setState({
                is36: this.state.teacherSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.teacherSchedule[index].time[id].time === 37) {
              await this.setState({
                is37: this.state.teacherSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.teacherSchedule[index].time[id].time === 38) {
              await this.setState({
                is38: this.state.teacherSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.teacherSchedule[index].time[id].time === 39) {
              await this.setState({
                is39: this.state.teacherSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.teacherSchedule[index].time[id].time === 40) {
              await this.setState({
                is40: this.state.teacherSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.teacherSchedule[index].time[id].time === 41) {
              await this.setState({
                is41: this.state.teacherSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.teacherSchedule[index].time[id].time === 42) {
              await this.setState({
                is42: this.state.teacherSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.teacherSchedule[index].time[id].time === 43) {
              await this.setState({
                is43: this.state.teacherSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.teacherSchedule[index].time[id].time === 44) {
              await this.setState({
                is44: this.state.teacherSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.teacherSchedule[index].time[id].time === 45) {
              await this.setState({
                is45: this.state.teacherSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.teacherSchedule[index].time[id].nameRoom && 
              this.state.teacherSchedule[index].time[id].groupStudent) {
            if (Number(this.state.teacherSchedule[index].time[id].time) === 1) {
              await this.setState({
                ic1: this.state.teacherSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 2) {
              await this.setState({
                ic2: this.state.teacherSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 3) {
              await this.setState({
                ic3: this.state.teacherSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 4) {
              await this.setState({
                ic4: this.state.teacherSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 5) {
              await this.setState({
                ic5: this.state.teacherSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 6) {
              await this.setState({
                ic6: this.state.teacherSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 7) {
              await this.setState({
                ic7: this.state.teacherSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 8) {
              await this.setState({
                ic8: this.state.teacherSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 9) {
              await this.setState({
                ic9: this.state.teacherSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 10) {
              await this.setState({
                ic10: this.state.teacherSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 11) {
              await this.setState({
                ic11: this.state.teacherSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 12) {
              await this.setState({
                ic12: this.state.teacherSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 13) {
              await this.setState({
                ic13: this.state.teacherSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 14) {
              await this.setState({
                ic14: this.state.teacherSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 15) {
              await this.setState({
                ic15: this.state.teacherSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 16) {
              await this.setState({
                ic16: this.state.teacherSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 17) {
              await this.setState({
                ic17: this.state.teacherSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 18) {
              await this.setState({
                ic18: this.state.teacherSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 19) {
              await this.setState({
                ic19: this.state.teacherSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 20) {
              await this.setState({
                ic20: this.state.teacherSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 21) {
              await this.setState({
                ic21: this.state.teacherSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 22) {
              await this.setState({
                ic22: this.state.teacherSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 23) {
              await this.setState({
                ic23: this.state.teacherSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 24) {
              await this.setState({
                ic24: this.state.teacherSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 25) {
              await this.setState({
                ic25: this.state.teacherSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 26) {
              await this.setState({
                ic26: this.state.teacherSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 27) {
              await this.setState({
                ic27: this.state.teacherSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 28) {
              await this.setState({
                ic28: this.state.teacherSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 29) {
              await this.setState({
                ic29: this.state.teacherSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 30) {
              await this.setState({
                ic30: this.state.teacherSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 31) {
              await this.setState({
                ic31: this.state.teacherSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 32) {
              await this.setState({
                ic32: this.state.teacherSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 33) {
              await this.setState({
                ic33: this.state.teacherSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 34) {
              await this.setState({
                ic34: this.state.teacherSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 35) {
              await this.setState({
                ic35: this.state.teacherSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 36) {
              await this.setState({
                ic36: this.state.teacherSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 37) {
              await this.setState({
                ic37: this.state.teacherSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 38) {
              await this.setState({
                ic38: this.state.teacherSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 39) {
              await this.setState({
                ic39: this.state.teacherSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 40) {
              await this.setState({
                ic40: this.state.teacherSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 41) {
              await this.setState({
                ic41: this.state.teacherSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 42) {
              await this.setState({
                ic42: this.state.teacherSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 43) {
              await this.setState({
                ic43: this.state.teacherSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 44) {
              await this.setState({
                ic44: this.state.teacherSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 45) {
              await this.setState({
                ic45: this.state.teacherSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 1) {
              await this.setState({
                it1: "อ." 
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 2) {
              await this.setState({
                it2: "อ." 
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 3) {
              await this.setState({
                it3: "อ." 
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 4) {
              await this.setState({
                it4: "อ." 
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 5) {
              await this.setState({
                it5: "อ." 
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 6) {
              await this.setState({
                it6: "อ." 
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 7) {
              await this.setState({
                it7: "อ." 
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 8) {
              await this.setState({
                it8: "อ." 
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 9) {
              await this.setState({
                it9: "อ." 
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 10) {
              await this.setState({
                it10: "อ." 
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 11) {
              await this.setState({
                it11: "อ." 
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 12) {
              await this.setState({
                it12: "อ." 
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 13) {
              await this.setState({
                it13: "อ." 
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 14) {
              await this.setState({
                it14: "อ." 
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 15) {
              await this.setState({
                it15: "อ." 
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 16) {
              await this.setState({
                it16: "อ." 
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 17) {
              await this.setState({
                it17: "อ." 
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 18) {
              await this.setState({
                it18: "อ." 
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 19) {
              await this.setState({
                it19: "อ." 
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 20) {
              await this.setState({
                it20: "อ." 
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 21) {
              await this.setState({
                it21: "อ." 
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 22) {
              await this.setState({
                it22: "อ." 
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 23) {
              await this.setState({
                it23: "อ." 
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 24) {
              await this.setState({
                it24: "อ." 
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 25) {
              await this.setState({
                it25: "อ." 
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 26) {
              await this.setState({
                it26: "อ." 
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 27) {
              await this.setState({
                it27: "อ." 
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 28) {
              await this.setState({
                it28: "อ." 
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 29) {
              await this.setState({
                it29: "อ." 
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 30) {
              await this.setState({
                it30: "อ." 
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 31) {
              await this.setState({
                it31: "อ." 
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 32) {
              await this.setState({
                it32: "อ." 
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 33) {
              await this.setState({
                it33: "อ." 
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 34) {
              await this.setState({
                it34: "อ." 
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 35) {
              await this.setState({
                it35: "อ." 
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 36) {
              await this.setState({
                it36: "อ." 
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 37) {
              await this.setState({
                it37: "อ." 
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 38) {
              await this.setState({
                it38: "อ." 
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 39) {
              await this.setState({
                it39: "อ." 
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 40) {
              await this.setState({
                it40: "อ." 
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 41) {
              await this.setState({
                it41: "อ." 
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 42) {
              await this.setState({
                it42: "อ." 
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 43) {
              await this.setState({
                it43: "อ." 
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 44) {
              await this.setState({
                it44: "อ." 
              });
            }
            if (Number(this.state.teacherSchedule[index].time[id].time) === 45) {
              await this.setState({
                it45: "อ." 
              });
            }
          }
        }
        }
      }
    }
  };
  filterIDSub11 = async () => {
    await this.setState({ delTime: [] });
    for (let index = 0; index <= this.state.classroomSchedule.length - 1; index++) {
      if (
        Number(this.state.classroomSchedule[index].year) ===
          Number(this.state.year11) &&
        Number(this.state.classroomSchedule[index].term) ===
          Number(this.state.term11) &&
        this.state.classroomSchedule[index].nameRoom === this.state.cR11
      ) {
        if (this.state.classroomSchedule[index].time.length > 0) {
          for (
            let id = 0;
            id <= this.state.classroomSchedule[index].time.length - 1;
            id++
          ) {
            if (Number(this.state.classroomSchedule[index].time[id].time) === 1) {
              await this.setState({
                is1: this.state.classroomSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classroomSchedule[index].time[id].time === 2) {
              await this.setState({
                is2: this.state.classroomSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classroomSchedule[index].time[id].time === 3) {
              await this.setState({
                is3: this.state.classroomSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classroomSchedule[index].time[id].time === 4) {
              await this.setState({
                is4: this.state.classroomSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classroomSchedule[index].time[id].time === 5) {
              await this.setState({
                is5: this.state.classroomSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classroomSchedule[index].time[id].time === 6) {
              await this.setState({
                is6: this.state.classroomSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classroomSchedule[index].time[id].time === 7) {
              await this.setState({
                is7: this.state.classroomSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classroomSchedule[index].time[id].time === 8) {
              await this.setState({
                is8: this.state.classroomSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classroomSchedule[index].time[id].time === 9) {
              await this.setState({
                is9: this.state.classroomSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classroomSchedule[index].time[id].time === 10) {
              await this.setState({
                is10: this.state.classroomSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classroomSchedule[index].time[id].time === 11) {
              await this.setState({
                is11: this.state.classroomSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classroomSchedule[index].time[id].time === 12) {
              await this.setState({
                is12: this.state.classroomSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classroomSchedule[index].time[id].time === 13) {
              await this.setState({
                is13: this.state.classroomSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classroomSchedule[index].time[id].time === 14) {
              await this.setState({
                is14: this.state.classroomSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classroomSchedule[index].time[id].time === 15) {
              await this.setState({
                is15: this.state.classroomSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classroomSchedule[index].time[id].time === 16) {
              await this.setState({
                is16: this.state.classroomSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classroomSchedule[index].time[id].time === 17) {
              await this.setState({
                is17: this.state.classroomSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classroomSchedule[index].time[id].time === 18) {
              await this.setState({
                is18: this.state.classroomSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classroomSchedule[index].time[id].time === 19) {
              await this.setState({
                is19: this.state.classroomSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classroomSchedule[index].time[id].time === 20) {
              await this.setState({
                is20: this.state.classroomSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classroomSchedule[index].time[id].time === 21) {
              await this.setState({
                is21: this.state.classroomSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classroomSchedule[index].time[id].time === 22) {
              await this.setState({
                is22: this.state.classroomSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classroomSchedule[index].time[id].time === 23) {
              await this.setState({
                is23: this.state.classroomSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classroomSchedule[index].time[id].time === 24) {
              await this.setState({
                is24: this.state.classroomSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classroomSchedule[index].time[id].time === 25) {
              await this.setState({
                is25: this.state.classroomSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classroomSchedule[index].time[id].time === 26) {
              await this.setState({
                is26: this.state.classroomSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classroomSchedule[index].time[id].time === 27) {
              await this.setState({
                is27: this.state.classroomSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classroomSchedule[index].time[id].time === 28) {
              await this.setState({
                is28: this.state.classroomSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classroomSchedule[index].time[id].time === 29) {
              await this.setState({
                is29: this.state.classroomSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classroomSchedule[index].time[id].time === 30) {
              await this.setState({
                is30: this.state.classroomSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classroomSchedule[index].time[id].time === 31) {
              await this.setState({
                is31: this.state.classroomSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classroomSchedule[index].time[id].time === 32) {
              await this.setState({
                is32: this.state.classroomSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classroomSchedule[index].time[id].time === 33) {
              await this.setState({
                is33: this.state.classroomSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classroomSchedule[index].time[id].time === 34) {
              await this.setState({
                is34: this.state.classroomSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classroomSchedule[index].time[id].time === 35) {
              await this.setState({
                is35: this.state.classroomSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classroomSchedule[index].time[id].time === 36) {
              await this.setState({
                is36: this.state.classroomSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classroomSchedule[index].time[id].time === 37) {
              await this.setState({
                is37: this.state.classroomSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classroomSchedule[index].time[id].time === 38) {
              await this.setState({
                is38: this.state.classroomSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classroomSchedule[index].time[id].time === 39) {
              await this.setState({
                is39: this.state.classroomSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classroomSchedule[index].time[id].time === 40) {
              await this.setState({
                is40: this.state.classroomSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classroomSchedule[index].time[id].time === 41) {
              await this.setState({
                is41: this.state.classroomSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classroomSchedule[index].time[id].time === 42) {
              await this.setState({
                is42: this.state.classroomSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classroomSchedule[index].time[id].time === 43) {
              await this.setState({
                is43: this.state.classroomSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classroomSchedule[index].time[id].time === 44) {
              await this.setState({
                is44: this.state.classroomSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classroomSchedule[index].time[id].time === 45) {
              await this.setState({
                is45: this.state.classroomSchedule[index].time[id].idSubject,
              });
            }
            if (this.state.classroomSchedule[index].time[id].idteacher && 
              this.state.classroomSchedule[index].time[id].groupStudent) {
            if (Number(this.state.classroomSchedule[index].time[id].time) === 1) {
              await this.setState({
                ic1: this.state.classroomSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 2) {
              await this.setState({
                ic2: this.state.classroomSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 3) {
              await this.setState({
                ic3: this.state.classroomSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 4) {
              await this.setState({
                ic4: this.state.classroomSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 5) {
              await this.setState({
                ic5: this.state.classroomSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 6) {
              await this.setState({
                ic6: this.state.classroomSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 7) {
              await this.setState({
                ic7: this.state.classroomSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 8) {
              await this.setState({
                ic8: this.state.classroomSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 9) {
              await this.setState({
                ic9: this.state.classroomSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 10) {
              await this.setState({
                ic10: this.state.classroomSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 11) {
              await this.setState({
                ic11: this.state.classroomSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 12) {
              await this.setState({
                ic12: this.state.classroomSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 13) {
              await this.setState({
                ic13: this.state.classroomSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 14) {
              await this.setState({
                ic14: this.state.classroomSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 15) {
              await this.setState({
                ic15: this.state.classroomSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 16) {
              await this.setState({
                ic16: this.state.classroomSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 17) {
              await this.setState({
                ic17: this.state.classroomSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 18) {
              await this.setState({
                ic18: this.state.classroomSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 19) {
              await this.setState({
                ic19: this.state.classroomSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 20) {
              await this.setState({
                ic20: this.state.classroomSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 21) {
              await this.setState({
                ic21: this.state.classroomSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 22) {
              await this.setState({
                ic22: this.state.classroomSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 23) {
              await this.setState({
                ic23: this.state.classroomSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 24) {
              await this.setState({
                ic24: this.state.classroomSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 25) {
              await this.setState({
                ic25: this.state.classroomSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 26) {
              await this.setState({
                ic26: this.state.classroomSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 27) {
              await this.setState({
                ic27: this.state.classroomSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 28) {
              await this.setState({
                ic28: this.state.classroomSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 29) {
              await this.setState({
                ic29: this.state.classroomSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 30) {
              await this.setState({
                ic30: this.state.classroomSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 31) {
              await this.setState({
                ic31: this.state.classroomSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 32) {
              await this.setState({
                ic32: this.state.classroomSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 33) {
              await this.setState({
                ic33: this.state.classroomSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 34) {
              await this.setState({
                ic34: this.state.classroomSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 35) {
              await this.setState({
                ic35: this.state.classroomSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 36) {
              await this.setState({
                ic36: this.state.classroomSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 37) {
              await this.setState({
                ic37: this.state.classroomSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 38) {
              await this.setState({
                ic38: this.state.classroomSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 39) {
              await this.setState({
                ic39: this.state.classroomSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 40) {
              await this.setState({
                ic40: this.state.classroomSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 41) {
              await this.setState({
                ic41: this.state.classroomSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 42) {
              await this.setState({
                ic42: this.state.classroomSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 43) {
              await this.setState({
                ic43: this.state.classroomSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 44) {
              await this.setState({
                ic44: this.state.classroomSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 45) {
              await this.setState({
                ic45: this.state.classroomSchedule[index].time[id].nameRoom,
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 1) {
              await this.setState({
                it1: "อ." 
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 2) {
              await this.setState({
                it2: "อ." 
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 3) {
              await this.setState({
                it3: "อ." 
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 4) {
              await this.setState({
                it4: "อ." 
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 5) {
              await this.setState({
                it5: "อ." 
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 6) {
              await this.setState({
                it6: "อ." 
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 7) {
              await this.setState({
                it7: "อ." 
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 8) {
              await this.setState({
                it8: "อ." 
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 9) {
              await this.setState({
                it9: "อ." 
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 10) {
              await this.setState({
                it10: "อ." 
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 11) {
              await this.setState({
                it11: "อ." 
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 12) {
              await this.setState({
                it12: "อ." 
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 13) {
              await this.setState({
                it13: "อ." 
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 14) {
              await this.setState({
                it14: "อ." 
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 15) {
              await this.setState({
                it15: "อ." 
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 16) {
              await this.setState({
                it16: "อ." 
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 17) {
              await this.setState({
                it17: "อ." 
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 18) {
              await this.setState({
                it18: "อ." 
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 19) {
              await this.setState({
                it19: "อ." 
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 20) {
              await this.setState({
                it20: "อ." 
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 21) {
              await this.setState({
                it21: "อ." 
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 22) {
              await this.setState({
                it22: "อ." 
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 23) {
              await this.setState({
                it23: "อ." 
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 24) {
              await this.setState({
                it24: "อ." 
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 25) {
              await this.setState({
                it25: "อ." 
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 26) {
              await this.setState({
                it26: "อ." 
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 27) {
              await this.setState({
                it27: "อ." 
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 28) {
              await this.setState({
                it28: "อ." 
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 29) {
              await this.setState({
                it29: "อ." 
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 30) {
              await this.setState({
                it30: "อ." 
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 31) {
              await this.setState({
                it31: "อ." 
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 32) {
              await this.setState({
                it32: "อ." 
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 33) {
              await this.setState({
                it33: "อ." 
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 34) {
              await this.setState({
                it34: "อ." 
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 35) {
              await this.setState({
                it35: "อ." 
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 36) {
              await this.setState({
                it36: "อ." 
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 37) {
              await this.setState({
                it37: "อ." 
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 38) {
              await this.setState({
                it38: "อ." 
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 39) {
              await this.setState({
                it39: "อ." 
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 40) {
              await this.setState({
                it40: "อ." 
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 41) {
              await this.setState({
                it41: "อ." 
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 42) {
              await this.setState({
                it42: "อ." 
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 43) {
              await this.setState({
                it43: "อ." 
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 44) {
              await this.setState({
                it44: "อ." 
              });
            }
            if (Number(this.state.classroomSchedule[index].time[id].time) === 45) {
              await this.setState({
                it45: "อ." 
              });
            }
          }
        }
        }
      }
    }
  };
  onCGL1 = async (value) => {
    await this.setState({
      seGL1: value,
    });
  };
  onCGL5 = async (value) => {
    await this.setState({
      seGL5: value,
      mT5: [],
      sT5: [],
    });
    let dataM = [];
    let dataS = [];
    for (let index = 0; index <= this.state.subject.length - 1; index++) {
      if (value === this.state.subject[index].groupLearning) {
        await dataM.push(this.state.subject[index]);
      }
      if (value !== this.state.subject[index].groupLearning) {
        await dataS.push(this.state.subject[index]);
      }
    }
    await this.setState({ main5: dataM, sec5: dataS });
  };
  onCGL6 = async (value) => {
    await this.setState({
      seGL6: value,
    });
  };
  onCIS1 = async (value) => {
    await this.setState({
      seIdSub1: value,
    });
  };
  onCC1 = async (value) => {
    await this.setState({
      seCreditSub1: value,
    });
  };
  onCNS1 = async (value) => {
    await this.setState({
      seNameSub1: value,
    });
  };
  เปลี่ยนรายวิชา7 = async (value) => {
    let data = [];
    let all = [];
    for (let index = 0; index <= this.state.classSchedule.length - 1; index++) {
      if (
        Number(this.state.classSchedule[index].year) ===
          Number(this.state.year7) &&
        Number(this.state.classSchedule[index].term) ===
          Number(this.state.term7) &&
        this.state.classSchedule[index].groupStudent === this.state.class7
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
    for (let index = 0; index <= this.state.selectCos.length - 1; index++) {
      if (this.state.selectCos[index].idSubject === value) {
        all.push(this.state.selectCos[index].all)
      }
    }
    if (value === "พักกลางวัน") {
      await this.setState({
        seCos: value,
        seTea: null,
        chackall:false,
        lockTea7: 0,
        seRoom: null,
        seTime: null,
        selectTeaF: [],
        selectTeaS: [],
        tsp: [],
        mainRoomG: [],
        secRoomG: [],
        allTime: [],
      });
      await this.selectDataTimeall();
    } else if (all[0] === "เรียนรวม") {
      await this.setState({
        seCos: value,
        seTea: null,
        chackall:true,
        lockTea7: 0,
        seRoom: null,
        seTime: null,
        selectTeaF: [],
        selectTeaS: [],
        tsp: [],
        mainRoomG: [],
        secRoomG: [],
        allTime: [],
      });
      await this.selectDataTimeall();
    } else if (data.length > 0) {
      await this.setState({
        seCos: value,
        seTea: data[0],
        lockTea7: 0,
        seRoom: null,
        seTime: null,
        selectTeaF: [],
        selectTeaS: [],
        tsp: [],
        mainRoomG: [],
        secRoomG: [],
        allTime: [],
      });
      await this.selectDataTea();
      await this.selectDataRoom();
    } else {
      await this.setState({
        seCos: value,
        chackall:false,
        lockTea7: 1,
        seTea: null,
        seRoom: null,
        seTime: null,
        selectTeaF: [],
        selectTeaS: [],
        tsp: [],
        mainRoomG: [],
        secRoomG: [],
        allTime: [],
      });
      this.selectDataTea();
    }
  };
  เปลี่ยนครู7 = async (value) => {
    await this.setState({
      seTea: value,
      seRoom: null,
      seTime: null,
      tsp: [],
      mainRoomG: [],
      secRoomG: [],
      allTime: [],
    });
    if (value !== undefined) {
      this.selectDataRoom();
    }
  };
  เปลี่ยนห้อง7 = async (value) => {
    await this.setState({ seRoom: value, seTime: null, allTime: [] });
    if (value !== undefined) {
      this.selectDataTime();
    }
  };
  เปลี่ยนเวลา7 = async (value) => {
    await this.setState({ seTime: value });
  };
  ลบช่วงเวลา7 = async (value) => {
    await this.setState({ seDelTime: value });
  };
  onSearch(val) {
    // console.log("search:", val);
  }
  selectDataCos = async () => {
    let dataSelect = [];
    let gl = [];
    for (let index = 0; index <= this.state.classSchedule.length - 1; index++) {
      if (
        Number(this.state.classSchedule[index].year) ===
          Number(this.state.year7) &&
        Number(
          this.state.classSchedule[index].term === Number(this.state.term7)
        ) &&
        this.state.classSchedule[index].groupStudent === this.state.class7
      ) {
        gl.push(this.state.classSchedule[index].program);
      }
    }
    for (let index = 0; index <= this.state.course.length - 1; index++) {
      if (
        Number(this.state.course[index].level) ===
          Number(this.state.class7.substring(0, 1)) &&
        Number(this.state.course[index].term) === Number(this.state.term7) &&
        this.state.course[index].program === gl[0] 
      ) {
        for (let dex = 0; dex <= this.state.subject.length-1; dex++) {
          if (this.state.course[index].idSubject === this.state.subject[dex].idSubject) {
            await dataSelect.push({hours: this.state.course[index].hours,
              idSubject: this.state.course[index].idSubject,
              level: this.state.course[index].level,
              program: this.state.course[index].program,
              nameSubject:this.state.subject[dex].nameSubject,
              term: this.state.course[index].term,
              year: this.state.course[index].year,
              id: this.state.course[index].id,
              all: this.state.course[index].all
              });
          }
        }
      }
    }
    for (let index = 0; index <= this.state.classSchedule.length - 1; index++) {
      if (
        Number(this.state.classSchedule[index].year) ===
          Number(this.state.year7) &&
        Number(
          this.state.classSchedule[index].term === Number(this.state.term7)
        ) &&
        this.state.classSchedule[index].groupStudent === this.state.class7
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
                    nameSubject:dataSelect[dsID].nameSubject,
                    term: dataSelect[dsID].term,
                    year: dataSelect[dsID].year,
                    id: dataSelect[dsID].id,
                    all:dataSelect[dsID].all
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
      selectCos: [{idSubject:"พักกลางวัน",nameSubject:""},...dataSelect],
    });
  };
  selectDataTea = async () => {
    let dataF = [];
    let dataS = [];
    let selectF = [];
    let selectS = [];
    for (let index = 0; index <= this.state.teacher.length - 1; index++) {
      if (this.state.teacher[index].mainGroupLearning.length > 0) {
        for (
          let mid = 0;
          mid <= this.state.teacher[index].mainGroupLearning.length - 1;
          mid++
        ) {
          if (
            this.state.teacher[index].mainGroupLearning[mid] ===
            this.state.seCos
          ) {
            await dataF.push({
              id: this.state.teacher[index].idteacher,
              name:
                this.state.teacher[index].idteacher +
                " อ." +
                this.state.teacher[index].fName,
            });
          }
        }
      }
      if (this.state.teacher[index].secondaryGroupLearning.length > 0) {
        for (
          let mid = 0;
          mid <= this.state.teacher[index].secondaryGroupLearning.length - 1;
          mid++
        ) {
          if (
            this.state.teacher[index].secondaryGroupLearning[mid] ===
            this.state.seCos
          ) {
            await dataS.push({
              id: this.state.teacher[index].idteacher,
              name:
                this.state.teacher[index].idteacher +
                " อ." +
                this.state.teacher[index].fName,
            });
          }
        }
      }
    }
    for (let index = 0; index <= dataF.length - 1; index++) {
      for (let TS = 0; TS <= this.state.teacherSchedule.length - 1; TS++) {
        for (let SC = 0; SC <= this.state.selectCos.length - 1; SC++) {
          if (
            Number(dataF[index].id) ===
              Number(this.state.teacherSchedule[TS].idteacher) &&
            Number(this.state.teacherSchedule[TS].term) ===
              Number(this.state.term7) &&
            Number(this.state.teacherSchedule[TS].year) ===
              Number(this.state.year7) &&
            Number(this.state.teacherSchedule[TS].hours) >=
              Number(this.state.selectCos[SC].hours) &&
            Number(this.state.selectCos[SC].hours) > 0 &&
            this.state.seCos === this.state.selectCos[SC].idSubject
          ) {
            if (selectF.length === 0) {
              selectF.push(dataF[index]);
            } else if (selectF.length > 0) {
              let da = [];
              for (let Rou = 0; Rou < selectF.length; Rou++) {
                if (selectF[Rou].id === dataF.id) {
                  da.push("a");
                }
              }
              if (da.length === 0) {
                selectF.push(dataF[index]);
              }
            }
          }
        }
      }
    }
    for (let index = 0; index <= dataS.length - 1; index++) {
      for (let TS = 0; TS <= this.state.teacherSchedule.length - 1; TS++) {
        for (let SC = 0; SC <= this.state.selectCos.length - 1; SC++) {
          if (
            Number(dataS[index].id) ===
              Number(this.state.teacherSchedule[TS].idteacher) &&
            Number(this.state.teacherSchedule[TS].term) ===
              Number(this.state.term7) &&
            Number(this.state.teacherSchedule[TS].year) ===
              Number(this.state.year7) &&
            Number(this.state.teacherSchedule[TS].hours) >=
              Number(this.state.selectCos[SC].hours) &&
            Number(this.state.selectCos[SC].hours) > 0 &&
            this.state.seCos === this.state.selectCos[SC].idSubject
          ) {
            if (selectS.length === 0) {
              selectS.push(dataS[index]);
            } else if (selectS.length > 0) {
              let da = [];
              for (let Rou = 0; Rou < selectS.length; Rou++) {
                if (selectS[Rou].id === dataS.id) {
                  da.push("a");
                }
              }
              if (da.length === 0) {
                selectS.push(dataS[index]);
              }
            }
          }
        }
      }
    }
    await this.setState({ selectTeaF: selectF, selectTeaS: selectS });
  };
  selectDataRoom = async () => {
    let groupLearning = [];
    let d = [];
    let MainRoomG = [];
    let SecRoomG = [];
    let TsP = [];
    this.state.course.filter((i) => {
      i.idSubject === this.state.seCos
        ? groupLearning.push(i.groupLearning)
        : d.push(i.groupLearning);
    });
    await this.setState({ groupLearning: groupLearning[0] });
    this.state.classroom.filter((i) => {
      i.groupLearning === this.state.groupLearning
        ? i.TsP.length > 0
          ? i.TsP.filter((c) => {
              this.state.seCos === c
                ? TsP.push(i.nameRoom)
                : MainRoomG.length > 0
                ? MainRoomG[MainRoomG.length - 1] === i.nameRoom
                  ? d.push("a")
                  : MainRoomG.push(i.nameRoom)
                : MainRoomG.push(i.nameRoom);
            })
          : MainRoomG.push(i.nameRoom)
        : SecRoomG.push(i.nameRoom);
    });
    await this.setState({ mainRoomG: MainRoomG, secRoomG: SecRoomG, tsp: TsP });
  };
  selectDataTime = async () => {
    let dataAll = [];
    for (
      let index = 0;
      index <= this.state.teacherSchedule.length - 1;
      index++
    ) {
      if (
        Number(this.state.teacherSchedule[index].idteacher) ===
          Number(this.state.seTea) &&
        Number(this.state.teacherSchedule[index].term) ===
          Number(this.state.term7) &&
        Number(this.state.teacherSchedule[index].year) ===
          Number(this.state.year7)
      ) {
        if (this.state.teacherSchedule[index].time.length > 0) {
          for (
            let TS = 0;
            TS <= this.state.teacherSchedule[index].time.length - 1;
            TS++
          ) {
            dataAll.push(this.state.teacherSchedule[index].time[TS].time);
          }
        }
      }
    }

    for (let index = 0; index <= this.state.classSchedule.length - 1; index++) {
      if (
        this.state.classSchedule[index].groupStudent === this.state.class7 &&
        Number(this.state.classSchedule[index].term) ===
          Number(this.state.term7) &&
        Number(this.state.classSchedule[index].year) ===
          Number(this.state.year7)
      ) {
        if (this.state.classSchedule[index].time.length > 0) {
          for (
            let TS = 0;
            TS <= this.state.classSchedule[index].time.length - 1;
            TS++
          ) {
            dataAll.push(this.state.classSchedule[index].time[TS].time);
          }
        }
      }
    }
    for (
      let index = 0;
      index <= this.state.classroomSchedule.length - 1;
      index++
    ) {
      if (
        this.state.classroomSchedule[index].nameRoom === this.state.seRoom &&
        Number(this.state.classroomSchedule[index].term) ===
          Number(this.state.term7) &&
        Number(this.state.classroomSchedule[index].year) ===
          Number(this.state.year7)
      ) {
        if (this.state.classroomSchedule[index].time.length > 0) {
          for (
            let TS = 0;
            TS <= this.state.classroomSchedule[index].time.length - 1;
            TS++
          ) {
            dataAll.push(this.state.classroomSchedule[index].time[TS].time);
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
  selectDataTimeall = async () => {
    let dataAll = [];
    for (let index = 0; index <= this.state.classSchedule.length - 1; index++) {
      if (
        this.state.classSchedule[index].groupStudent.substring(0,1) === this.state.class7.substring(0,1) &&
        Number(this.state.classSchedule[index].term) ===
          Number(this.state.term7) &&
        Number(this.state.classSchedule[index].year) ===
          Number(this.state.year7)
      ) {
        if (this.state.classSchedule[index].time.length > 0) {
          for (
            let TS = 0;
            TS <= this.state.classSchedule[index].time.length - 1;
            TS++
          ) {
            dataAll.push(this.state.classSchedule[index].time[TS].time);
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
  enterLoading = async (index) => {
    await this.setState({ show7: 0, lock7: 0, loading: true });
    let data = [];
    let haveTea = [];
    let cosHours = [];
    if (this.state.chackall === false) {
      for (let index = 0; index <= this.state.classSchedule.length - 1; index++) {
      if (
        this.state.classSchedule[index].groupStudent === this.state.class7 &&
        Number(this.state.classSchedule[index].year) ===
          Number(this.state.year7) &&
        Number(this.state.classSchedule[index].term) ===
          Number(this.state.term7) &&
        this.state.classSchedule[index].time.length !== 0
      ) {
        for (
          let idex = 0;
          idex <= this.state.classSchedule[index].time.length - 1;
          idex++
        ) {
          if (
            this.state.classSchedule[index].time[idex].idteacher ===
              this.state.seTea &&
            this.state.classSchedule[index].time[idex].idSubject ===
              this.state.seCos
          ) {
            haveTea.push(this.state.classSchedule[index]);
          }
        }
      }
      if (
        this.state.classSchedule[index].groupStudent === this.state.class7 &&
        Number(this.state.classSchedule[index].year) ===
          Number(this.state.year7) &&
        Number(this.state.classSchedule[index].term) ===
          Number(this.state.term7)
      ) {
        if (this.state.upDataClass.length === 0) {
          this.state.upDataClass.push(this.state.classSchedule[index].id);
        } else {
          let data = [];
          for (let id = 0; id <= this.state.upDataClass.length - 1; id++) {
            if (
              this.state.classSchedule[index].id === this.state.upDataClass[id]
            ) {
              data.push("a");
            }
          }
          if (data.length === 0) {
            this.state.upDataClass.push(this.state.classSchedule[index].id);
          }
        }
        this.state.classSchedule[index].time.push({
          idSubject: this.state.seCos,
          idteacher: this.state.seTea,
          nameRoom: this.state.seRoom,
          time: this.state.seTime,
        });
        if (this.state.seTime === 1) {
          this.setState({
            is1: this.state.seCos,
          });
        }
        if (this.state.seTime === 2) {
          this.setState({
            is2: this.state.seCos,
          });
        }
        if (this.state.seTime === 3) {
          this.setState({
            is3: this.state.seCos,
          });
        }
        if (this.state.seTime === 4) {
          this.setState({
            is4: this.state.seCos,
          });
        }
        if (this.state.seTime === 5) {
          this.setState({
            is5: this.state.seCos,
          });
        }
        if (this.state.seTime === 6) {
          this.setState({
            is6: this.state.seCos,
          });
        }
        if (this.state.seTime === 7) {
          this.setState({
            is7: this.state.seCos,
          });
        }
        if (this.state.seTime === 8) {
          this.setState({
            is8: this.state.seCos,
          });
        }
        if (this.state.seTime === 9) {
          this.setState({
            is9: this.state.seCos,
          });
        }
        if (this.state.seTime === 10) {
          this.setState({
            is10: this.state.seCos,
          });
        }
        if (this.state.seTime === 11) {
          this.setState({
            is11: this.state.seCos,
          });
        }
        if (this.state.seTime === 12) {
          this.setState({
            is12: this.state.seCos,
          });
        }
        if (this.state.seTime === 13) {
          this.setState({
            is13: this.state.seCos,
          });
        }
        if (this.state.seTime === 14) {
          this.setState({
            is14: this.state.seCos,
          });
        }
        if (this.state.seTime === 15) {
          this.setState({
            is15: this.state.seCos,
          });
        }
        if (this.state.seTime === 16) {
          this.setState({
            is16: this.state.seCos,
          });
        }
        if (this.state.seTime === 17) {
          this.setState({
            is17: this.state.seCos,
          });
        }
        if (this.state.seTime === 18) {
          this.setState({
            is18: this.state.seCos,
          });
        }
        if (this.state.seTime === 19) {
          this.setState({
            is19: this.state.seCos,
          });
        }
        if (this.state.seTime === 20) {
          this.setState({
            is20: this.state.seCos,
          });
        }
        if (this.state.seTime === 21) {
          this.setState({
            is21: this.state.seCos,
          });
        }
        if (this.state.seTime === 22) {
          this.setState({
            is22: this.state.seCos,
          });
        }
        if (this.state.seTime === 23) {
          this.setState({
            is23: this.state.seCos,
          });
        }
        if (this.state.seTime === 24) {
          this.setState({
            is24: this.state.seCos,
          });
        }
        if (this.state.seTime === 25) {
          this.setState({
            is25: this.state.seCos,
          });
        }
        if (this.state.seTime === 26) {
          this.setState({
            is26: this.state.seCos,
          });
        }
        if (this.state.seTime === 27) {
          this.setState({
            is27: this.state.seCos,
          });
        }
        if (this.state.seTime === 28) {
          this.setState({
            is28: this.state.seCos,
          });
        }
        if (this.state.seTime === 29) {
          this.setState({
            is29: this.state.seCos,
          });
        }
        if (this.state.seTime === 30) {
          this.setState({
            is30: this.state.seCos,
          });
        }
        if (this.state.seTime === 31) {
          this.setState({
            is31: this.state.seCos,
          });
        }
        if (this.state.seTime === 32) {
          this.setState({
            is32: this.state.seCos,
          });
        }
        if (this.state.seTime === 33) {
          this.setState({
            is33: this.state.seCos,
          });
        }
        if (this.state.seTime === 34) {
          this.setState({
            is34: this.state.seCos,
          });
        }
        if (this.state.seTime === 35) {
          this.setState({
            is35: this.state.seCos,
          });
        }
        if (this.state.seTime === 36) {
          this.setState({
            is36: this.state.seCos,
          });
        }
        if (this.state.seTime === 37) {
          this.setState({
            is37: this.state.seCos,
          });
        }
        if (this.state.seTime === 38) {
          this.setState({
            is38: this.state.seCos,
          });
        }
        if (this.state.seTime === 39) {
          this.setState({
            is39: this.state.seCos,
          });
        }
        if (this.state.seTime === 40) {
          this.setState({
            is40: this.state.seCos,
          });
        }
        if (this.state.seTime === 41) {
          this.setState({
            is41: this.state.seCos,
          });
        }
        if (this.state.seTime === 42) {
          this.setState({
            is42: this.state.seCos,
          });
        }
        if (this.state.seTime === 43) {
          this.setState({
            is43: this.state.seCos,
          });
        }
        if (this.state.seTime === 44) {
          this.setState({
            is44: this.state.seCos,
          });
        }
        if (this.state.seTime === 45) {
          this.setState({
            is45: this.state.seCos,
          });
        }
        data.push("a");
      }
    }
    for (
      let index = 0;
      index <= this.state.classroomSchedule.length - 1;
      index++
    ) {
      if (
        this.state.classroomSchedule[index].nameRoom === this.state.seRoom &&
        Number(this.state.classroomSchedule[index].year) ===
          Number(this.state.year7) &&
        Number(this.state.classroomSchedule[index].term) ===
          Number(this.state.term7)
      ) {
        if (this.state.upDataClassRoom.length === 0) {
          this.state.upDataClassRoom.push(
            this.state.classroomSchedule[index].id
          );
        } else {
          let data1 = [];
          for (let id = 0; id <= this.state.upDataClassRoom.length - 1; id++) {
            if (
              this.state.classroomSchedule[index].id ===
              this.state.upDataClassRoom[id]
            ) {
              data1.push("a");
            }
          }
          if (data1.length === 0) {
            this.state.upDataClassRoom.push(
              this.state.classroomSchedule[index].id
            );
          }
        }
        this.state.classroomSchedule[index].time.push({
          idSubject: this.state.seCos,
          idteacher: this.state.seTea,
          groupStudent: this.state.class7,
          time: this.state.seTime,
        });
        if (this.state.seTime === 1) {
          this.setState({
            ic1: this.state.seRoom,
          });
        }
        if (this.state.seTime === 2) {
          this.setState({
            ic2: this.state.seRoom,
          });
        }
        if (this.state.seTime === 3) {
          this.setState({
            ic3: this.state.seRoom,
          });
        }
        if (this.state.seTime === 4) {
          this.setState({
            ic4: this.state.seRoom,
          });
        }
        if (this.state.seTime === 5) {
          this.setState({
            ic5: this.state.seRoom,
          });
        }
        if (this.state.seTime === 6) {
          this.setState({
            ic6: this.state.seRoom,
          });
        }
        if (this.state.seTime === 7) {
          this.setState({
            ic7: this.state.seRoom,
          });
        }
        if (this.state.seTime === 8) {
          this.setState({
            ic8: this.state.seRoom,
          });
        }
        if (this.state.seTime === 9) {
          this.setState({
            ic9: this.state.seRoom,
          });
        }
        if (this.state.seTime === 10) {
          this.setState({
            ic10: this.state.seRoom,
          });
        }
        if (this.state.seTime === 11) {
          this.setState({
            ic11: this.state.seRoom,
          });
        }
        if (this.state.seTime === 12) {
          this.setState({
            ic12: this.state.seRoom,
          });
        }
        if (this.state.seTime === 13) {
          this.setState({
            ic13: this.state.seRoom,
          });
        }
        if (this.state.seTime === 14) {
          this.setState({
            ic14: this.state.seRoom,
          });
        }
        if (this.state.seTime === 15) {
          this.setState({
            ic15: this.state.seRoom,
          });
        }
        if (this.state.seTime === 16) {
          this.setState({
            ic16: this.state.seRoom,
          });
        }
        if (this.state.seTime === 17) {
          this.setState({
            ic17: this.state.seRoom,
          });
        }
        if (this.state.seTime === 18) {
          this.setState({
            ic18: this.state.seRoom,
          });
        }
        if (this.state.seTime === 19) {
          this.setState({
            ic19: this.state.seRoom,
          });
        }
        if (this.state.seTime === 20) {
          this.setState({
            ic20: this.state.seRoom,
          });
        }
        if (this.state.seTime === 21) {
          this.setState({
            ic21: this.state.seRoom,
          });
        }
        if (this.state.seTime === 22) {
          this.setState({
            ic22: this.state.seRoom,
          });
        }
        if (this.state.seTime === 23) {
          this.setState({
            ic23: this.state.seRoom,
          });
        }
        if (this.state.seTime === 24) {
          this.setState({
            ic24: this.state.seRoom,
          });
        }
        if (this.state.seTime === 25) {
          this.setState({
            ic25: this.state.seRoom,
          });
        }
        if (this.state.seTime === 26) {
          this.setState({
            ic26: this.state.seRoom,
          });
        }
        if (this.state.seTime === 27) {
          this.setState({
            ic27: this.state.seRoom,
          });
        }
        if (this.state.seTime === 28) {
          this.setState({
            ic28: this.state.seRoom,
          });
        }
        if (this.state.seTime === 29) {
          this.setState({
            ic29: this.state.seRoom,
          });
        }
        if (this.state.seTime === 30) {
          this.setState({
            ic30: this.state.seRoom,
          });
        }
        if (this.state.seTime === 31) {
          this.setState({
            ic31: this.state.seRoom,
          });
        }
        if (this.state.seTime === 32) {
          this.setState({
            ic32: this.state.seRoom,
          });
        }
        if (this.state.seTime === 33) {
          this.setState({
            ic33: this.state.seRoom,
          });
        }
        if (this.state.seTime === 34) {
          this.setState({
            ic34: this.state.seRoom,
          });
        }
        if (this.state.seTime === 35) {
          this.setState({
            ic35: this.state.seRoom,
          });
        }
        if (this.state.seTime === 36) {
          this.setState({
            ic36: this.state.seRoom,
          });
        }
        if (this.state.seTime === 37) {
          this.setState({
            ic37: this.state.seRoom,
          });
        }
        if (this.state.seTime === 38) {
          this.setState({
            ic38: this.state.seRoom,
          });
        }
        if (this.state.seTime === 39) {
          this.setState({
            ic39: this.state.seRoom,
          });
        }
        if (this.state.seTime === 40) {
          this.setState({
            ic40: this.state.seRoom,
          });
        }
        if (this.state.seTime === 41) {
          this.setState({
            ic41: this.state.seRoom,
          });
        }
        if (this.state.seTime === 42) {
          this.setState({
            ic42: this.state.seRoom,
          });
        }
        if (this.state.seTime === 43) {
          this.setState({
            ic43: this.state.seRoom,
          });
        }
        if (this.state.seTime === 44) {
          this.setState({
            ic44: this.state.seRoom,
          });
        }
        if (this.state.seTime === 45) {
          this.setState({
            ic45: this.state.seRoom,
          });
        }
        data.push("b");
      }
    }
    let name = [];
    for (let index = 0; index <= this.state.teacher.length - 1; index++) {
      if (Number(this.state.teacher[index].idteacher) === this.state.seTea) {
        name.push(this.state.teacher[index].fName);
      }
    }
    for (let index = 0; index <= this.state.subject.length - 1; index++) {
      if (this.state.subject[index].idSubject === this.state.seCos) {
        let h = this.state.subject[index].creditSubject * 2;
        cosHours.push(h);
      }
    }
    for (
      let index = 0;
      index <= this.state.teacherSchedule.length - 1;
      index++
    ) {
      if (
        this.state.teacherSchedule[index].idteacher === this.state.seTea &&
        Number(this.state.teacherSchedule[index].year) ===
          Number(this.state.year7) &&
        Number(this.state.teacherSchedule[index].term) ===
          Number(this.state.term7)
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
        await this.state.teacherSchedule[index].time.push({
          idSubject: this.state.seCos,
          nameRoom: this.state.seRoom,
          groupStudent: this.state.class7,
          time: this.state.seTime,
        });
        if (haveTea.length === 0) {
          this.state.teacherSchedule.splice(index, 1, {
            id: this.state.teacherSchedule[index].id,
            hours: this.state.teacherSchedule[index].hours - cosHours[0],
            idteacher: this.state.teacherSchedule[index].idteacher,
            term: this.state.teacherSchedule[index].term,
            time: this.state.teacherSchedule[index].time,
            year: this.state.teacherSchedule[index].year,
          });
        }
        if (this.state.seTime === 1) {
          this.setState({
            it1: "อ." + name,
          });
        }
        if (this.state.seTime === 2) {
          this.setState({
            it2: "อ." + name,
          });
        }
        if (this.state.seTime === 3) {
          this.setState({
            it3: "อ." + name,
          });
        }
        if (this.state.seTime === 4) {
          this.setState({
            it4: "อ." + name,
          });
        }
        if (this.state.seTime === 5) {
          this.setState({
            it5: "อ." + name,
          });
        }
        if (this.state.seTime === 6) {
          this.setState({
            it6: "อ." + name,
          });
        }
        if (this.state.seTime === 7) {
          this.setState({
            it7: "อ." + name,
          });
        }
        if (this.state.seTime === 8) {
          this.setState({
            it8: "อ." + name,
          });
        }
        if (this.state.seTime === 9) {
          this.setState({
            it9: "อ." + name,
          });
        }
        if (this.state.seTime === 10) {
          this.setState({
            it10: "อ." + name,
          });
        }
        if (this.state.seTime === 11) {
          this.setState({
            it11: "อ." + name,
          });
        }
        if (this.state.seTime === 12) {
          this.setState({
            it12: "อ." + name,
          });
        }
        if (this.state.seTime === 13) {
          this.setState({
            it13: "อ." + name,
          });
        }
        if (this.state.seTime === 14) {
          this.setState({
            it14: "อ." + name,
          });
        }
        if (this.state.seTime === 15) {
          this.setState({
            it15: "อ." + name,
          });
        }
        if (this.state.seTime === 16) {
          this.setState({
            it16: "อ." + name,
          });
        }
        if (this.state.seTime === 17) {
          this.setState({
            it17: "อ." + name,
          });
        }
        if (this.state.seTime === 18) {
          this.setState({
            it18: "อ." + name,
          });
        }
        if (this.state.seTime === 19) {
          this.setState({
            it19: "อ." + name,
          });
        }
        if (this.state.seTime === 20) {
          this.setState({
            it20: "อ." + name,
          });
        }
        if (this.state.seTime === 21) {
          this.setState({
            it21: "อ." + name,
          });
        }
        if (this.state.seTime === 22) {
          this.setState({
            it22: "อ." + name,
          });
        }
        if (this.state.seTime === 23) {
          this.setState({
            it23: "อ." + name,
          });
        }
        if (this.state.seTime === 24) {
          this.setState({
            it24: "อ." + name,
          });
        }
        if (this.state.seTime === 25) {
          this.setState({
            it25: "อ." + name,
          });
        }
        if (this.state.seTime === 26) {
          this.setState({
            it26: "อ." + name,
          });
        }
        if (this.state.seTime === 27) {
          this.setState({
            it27: "อ." + name,
          });
        }
        if (this.state.seTime === 28) {
          this.setState({
            it28: "อ." + name,
          });
        }
        if (this.state.seTime === 29) {
          this.setState({
            it29: "อ." + name,
          });
        }
        if (this.state.seTime === 30) {
          this.setState({
            it30: "อ." + name,
          });
        }
        if (this.state.seTime === 31) {
          this.setState({
            it31: "อ." + name,
          });
        }
        if (this.state.seTime === 32) {
          this.setState({
            it32: "อ." + name,
          });
        }
        if (this.state.seTime === 33) {
          this.setState({
            it33: "อ." + name,
          });
        }
        if (this.state.seTime === 34) {
          this.setState({
            it34: "อ." + name,
          });
        }
        if (this.state.seTime === 35) {
          this.setState({
            it35: "อ." + name,
          });
        }
        if (this.state.seTime === 36) {
          this.setState({
            it36: "อ." + name,
          });
        }
        if (this.state.seTime === 37) {
          this.setState({
            it37: "อ." + name,
          });
        }
        if (this.state.seTime === 38) {
          this.setState({
            it38: "อ." + name,
          });
        }
        if (this.state.seTime === 39) {
          this.setState({
            it39: "อ." + name,
          });
        }
        if (this.state.seTime === 40) {
          this.setState({
            it40: "อ." + name,
          });
        }
        if (this.state.seTime === 41) {
          this.setState({
            it41: "อ." + name,
          });
        }
        if (this.state.seTime === 42) {
          this.setState({
            it42: "อ." + name,
          });
        }
        if (this.state.seTime === 43) {
          this.setState({
            it43: "อ." + name,
          });
        }
        if (this.state.seTime === 44) {
          this.setState({
            it44: "อ." + name,
          });
        }
        if (this.state.seTime === 45) {
          this.setState({
            it45: "อ." + name,
          });
        }
        data.push("c");
      }
    }
    if (data.length === 3) {
      this.filterIDSub();
      this.selectDataCos();
      this.setState({
        selectTeaS: [],
        selectTeaF: [],
        tsp: [],
        secRoomG: [],
        mainRoomG: [],
        allTime: [],
        seRoom: null,
        seTea: null,
        seTime: null,
        seCos: null,
      });
      await this.setState({ loading: false, show7: 1, lock7: 1 });
    }
    } else {
      let idteacherAdd = [];
    for (let index = 0; index <= this.state.subject.length - 1; index++) {
      if (this.state.subject[index].idSubject === this.state.seCos) {
        let h = this.state.subject[index].creditSubject * 2;
        cosHours.push(h);
      }
    }
    for (let index = 0; index <= this.state.teacher.length - 1; index++) {
        if (this.state.teacher[index].mainGroupLearning.length !== 0 ) {
          for (let idex = 0; idex <= this.state.teacher[index].mainGroupLearning.length-1; idex++) {
            if (this.state.teacher[index].mainGroupLearning[idex] === this.state.seCos) {
              if (idteacherAdd.length === 0 ) {
                idteacherAdd.push(this.state.teacher[index].idteacher)
              } else {
                let haveidtea = [];
                for (let x = 0; x <= idteacherAdd.length-1; x++) {
                  if (idteacherAdd[x] === this.state.teacher[index].idteacher) {
                  await  haveidtea.push("a")
                  }
                }
                if (haveidtea.length === 0) {
                  idteacherAdd.push(this.state.teacher[index].idteacher)
                }
              }
            }
          }
        }
        if (this.state.teacher[index].secondaryGroupLearning.length !== 0 ) {
          for (let idex = 0; idex <= this.state.teacher[index].secondaryGroupLearning.length-1; idex++) {
            if (this.state.teacher[index].secondaryGroupLearning[idex] === this.state.seCos) {
              if (idteacherAdd.length === 0 ) {
                idteacherAdd.push(this.state.teacher[index].idteacher)
              } else {
                let haveidtea = [];
                for (let x = 0; x <= idteacherAdd.length-1; x++) {
                  if (idteacherAdd[x] === this.state.teacher[index].idteacher) {
                  await  haveidtea.push("a")
                  }
                }
                if (haveidtea.length === 0) {
                  idteacherAdd.push(this.state.teacher[index].idteacher)
                }
              }
            }
          }
        }
    }
    for (let index = 0; index <= this.state.teacherSchedule.length - 1; index++) {
      for (let dex = 0; dex <= idteacherAdd.length-1; dex++) {
        if (this.state.teacherSchedule[index].idteacher === idteacherAdd[dex] &&
      Number(this.state.teacherSchedule[index].year) ===
        Number(this.state.year7) &&
      Number(this.state.teacherSchedule[index].term) ===
        Number(this.state.term7) &&
        this.state.teacherSchedule[index].time.length !== 0) {
        for (let ex = 0; ex <= this.state.teacherSchedule[index].time.length-1; ex++) {
            let cosHoursnow = [];
            for (let idex = 0; idex <= this.state.subject.length - 1; idex++) {
              if (this.state.subject[idex].idSubject === 
                this.state.teacherSchedule[index].time[ex].idSubject &&
                this.state.teacherSchedule[index].time[ex].time === this.state.seTime) {
                let h = this.state.subject[idex].creditSubject * 2;
                cosHoursnow.push(h);
              }
            }
            for (let ix = 0; ix <= this.state.classroomSchedule.length-1; ix++) {
              let dataCR = [];
              if (this.state.classroomSchedule[ix].nameRoom === this.state.teacherSchedule[index].time[ex].nameRoom &&
                Number(this.state.classroomSchedule[ix].year) ===
                  Number(this.state.year7) &&
                Number(this.state.classroomSchedule[ix].term) ===
                  Number(this.state.term7) &&
                  this.state.classroomSchedule[ix].time.length !== 0) {
                for (let idx = 0; idx <= this.state.classroomSchedule[ix].time.length-1; idx++) {
                  if (this.state.classroomSchedule[ix].time[idx].time !== this.state.teacherSchedule[index].time[ex].time) {
                    dataCR.push(this.state.classroomSchedule[ix].time[idx])
                  }
                }
                this.state.classroomSchedule.splice(ix, 1,{
                  id: this.state.classroomSchedule[ix].id,
                nameRoom: this.state.classroomSchedule[ix].nameRoom,
                term: this.state.classroomSchedule[ix].term,
                time: dataCR,
                year:this.state.classroomSchedule[ix].year,
                });
                if (this.state.upDataClassRoom.length === 0) {
                  this.state.upDataClassRoom.push(
                    this.state.classroomSchedule[ix].id
                  );
                } else {
                  let data1 = [];
                  for (let id = 0; id <= this.state.upDataClassRoom.length - 1; id++) {
                    if (
                      this.state.classroomSchedule[ix].id ===
                      this.state.upDataClassRoom[id]
                    ) {
                      data1.push("a");
                    }
                  }
                  if (data1.length === 0) {
                    this.state.upDataClassRoom.push(
                      this.state.classroomSchedule[ix].id
                    );
                  }
                }
              }
            }
            for (let ix = 0; ix <= this.state.classSchedule.length-1; ix++) {
              let dataCR = [];
              if (this.state.classSchedule[ix].groupStudent === this.state.teacherSchedule[index].time[ex].groupStudent &&
                Number(this.state.classSchedule[ix].year) ===
                  Number(this.state.year7) &&
                Number(this.state.classSchedule[ix].term) ===
                  Number(this.state.term7) &&
                  this.state.classSchedule[ix].time.length !== 0) {
                for (let idx = 0; idx <= this.state.classSchedule[ix].time.length-1; idx++) {
                  if (this.state.classSchedule[ix].time[idx].time !== this.state.teacherSchedule[index].time[ex].time) {
                    dataCR.push(this.state.classSchedule[ix].time[idx])
                  }
                }
                this.state.classSchedule.splice(ix, 1,{
                  id: this.state.classSchedule[ix].id,
                groupStudent: this.state.classSchedule[ix].groupStudent,
                term: this.state.classSchedule[ix].term,
                time: dataCR,
                year:this.state.classSchedule[ix].year,
                });
                if (this.state.upDataClass.length === 0) {
                  this.state.upDataClass.push(
                    this.state.classSchedule[ix].id
                  );
                } else {
                  let data1 = [];
                  for (let id = 0; id <= this.state.upDataClass.length - 1; id++) {
                    if (
                      this.state.classSchedule[ix].id ===
                      this.state.upDataClass[id]
                    ) {
                      data1.push("a");
                    }
                  }
                  if (data1.length === 0) {
                    this.state.upDataClass.push(
                      this.state.classSchedule[ix].id
                    );
                  }
                }
              }
            }
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
            let oldsub = this.state.teacherSchedule[index].time[ex].idSubject
            let havenew = [];
            let haveold = [];
            for (
              let idex = 0;
              idex <= this.state.teacherSchedule[index].time.length - 1;
              idex++
            ) {
              if (
                this.state.teacherSchedule[index].time[idex].idSubject ===
                  this.state.seCos
              ) {
                havenew.push(this.state.teacherSchedule[index]);
              }
            }
            if (cosHoursnow.length !== 0) {
              this.state.teacherSchedule[index].time.splice(ex, 1,);
            }
            this.state.teacherSchedule[index].time.push({
              time:this.state.seTime,
              idSubject:this.state.seCos,
              groupStudent:this.state.class7.substring(0,1),
            })
            for (
              let idex = 0;
              idex <= this.state.teacherSchedule[index].time.length - 1;
              idex++
            ) {
              if (
                this.state.teacherSchedule[index].time[idex].idSubject ===
                oldsub
              ) {
                haveold.push(this.state.teacherSchedule[index]);
              }
            }
            if (havenew.length === 0) {
              this.state.teacherSchedule.splice(index, 1, {
                id: this.state.teacherSchedule[index].id,
                hours: this.state.teacherSchedule[index].hours - cosHours[0],
                idteacher: this.state.teacherSchedule[index].idteacher,
                term: this.state.teacherSchedule[index].term,
                time: this.state.teacherSchedule[index].time,
                year: this.state.teacherSchedule[index].year,
              });
            }
            if (haveold.length === 0 && cosHoursnow.length !== 0) {
              this.state.teacherSchedule.splice(index, 1, {
                id: this.state.teacherSchedule[index].id,
                hours: this.state.teacherSchedule[index].hours + cosHoursnow[0],
                idteacher: this.state.teacherSchedule[index].idteacher,
                term: this.state.teacherSchedule[index].term,
                time: this.state.teacherSchedule[index].time,
                year: this.state.teacherSchedule[index].year,
              });
            }
        }
      }
      if (this.state.teacherSchedule[index].idteacher === idteacherAdd[dex] &&
        Number(this.state.teacherSchedule[index].year) ===
          Number(this.state.year7) &&
        Number(this.state.teacherSchedule[index].term) ===
          Number(this.state.term7) &&
          this.state.teacherSchedule[index].time.length === 0) {
            let havenew = [];
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
              for (
                let idex = 0;
                idex <= this.state.teacherSchedule[index].time.length - 1;
                idex++
              ) {
                if (
                  this.state.teacherSchedule[index].time[idex].idSubject ===
                    this.state.seCos
                ) {
                  havenew.push(this.state.teacherSchedule[index]);
                }
              }
              this.state.teacherSchedule[index].time.push({
                time:this.state.seTime,
                idSubject:this.state.seCos,
                groupStudent:this.state.class7.substring(0,1),
              });
            if (havenew.length === 0) {
                this.state.teacherSchedule.splice(index, 1, {
                  id: this.state.teacherSchedule[index].id,
                  hours: this.state.teacherSchedule[index].hours - cosHours[0],
                  idteacher: this.state.teacherSchedule[index].idteacher,
                  term: this.state.teacherSchedule[index].term,
                  time: this.state.teacherSchedule[index].time,
                  year: this.state.teacherSchedule[index].year,
                });
              }
        }
      }
    }
    for (let index = 0; index <= this.state.classSchedule.length - 1; index++) {
      if (
        Number(this.state.classSchedule[index].groupStudent.substring(0,1)) === Number(this.state.class7.substring(0,1)) &&
        Number(this.state.classSchedule[index].year) ===
          Number(this.state.year7) &&
        Number(this.state.classSchedule[index].term) ===
          Number(this.state.term7)
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
        await this.state.classSchedule[index].time.push({
          idSubject: this.state.seCos,
          time: this.state.seTime,
        });
        if (this.state.seTime === 1) {
          await this.setState({
            is1: this.state.seCos,
          });
        }
        if (this.state.seTime === 2) {
          await this.setState({
            is2: this.state.seCos,
          });
        }
        if (this.state.seTime === 3) {
          await this.setState({
            is3: this.state.seCos,
          });
        }
        if (this.state.seTime === 4) {
          await this.setState({
            is4: this.state.seCos,
          });
        }
        if (this.state.seTime === 5) {
          await this.setState({
            is5: this.state.seCos,
          });
        }
        if (this.state.seTime === 6) {
          await this.setState({
            is6: this.state.seCos,
          });
        }
        if (this.state.seTime === 7) {
          await this.setState({
            is7: this.state.seCos,
          });
        }
        if (this.state.seTime === 8) {
          await this.setState({
            is8: this.state.seCos,
          });
        }
        if (this.state.seTime === 9) {
          await this.setState({
            is9: this.state.seCos,
          });
        }
        if (this.state.seTime === 10) {
          await this.setState({
            is10: this.state.seCos,
          });
        }
        if (this.state.seTime === 11) {
          await this.setState({
            is11: this.state.seCos,
          });
        }
        if (this.state.seTime === 12) {
          await this.setState({
            is12: this.state.seCos,
          });
        }
        if (this.state.seTime === 13) {
          await this.setState({
            is13: this.state.seCos,
          });
        }
        if (this.state.seTime === 14) {
          await this.setState({
            is14: this.state.seCos,
          });
        }
        if (this.state.seTime === 15) {
          await this.setState({
            is15: this.state.seCos,
          });
        }
        if (this.state.seTime === 16) {
          await this.setState({
            is16: this.state.seCos,
          });
        }
        if (this.state.seTime === 17) {
          await this.setState({
            is17: this.state.seCos,
          });
        }
        if (this.state.seTime === 18) {
          await this.setState({
            is18: this.state.seCos,
          });
        }
        if (this.state.seTime === 19) {
          await this.setState({
            is19: this.state.seCos,
          });
        }
        if (this.state.seTime === 20) {
          await this.setState({
            is20: this.state.seCos,
          });
        }
        if (this.state.seTime === 21) {
          await this.setState({
            is21: this.state.seCos,
          });
        }
        if (this.state.seTime === 22) {
          await this.setState({
            is22: this.state.seCos,
          });
        }
        if (this.state.seTime === 23) {
          await this.setState({
            is23: this.state.seCos,
          });
        }
        if (this.state.seTime === 24) {
          await this.setState({
            is24: this.state.seCos,
          });
        }
        if (this.state.seTime === 25) {
          await this.setState({
            is25: this.state.seCos,
          });
        }
        if (this.state.seTime === 26) {
          await this.setState({
            is26: this.state.seCos,
          });
        }
        if (this.state.seTime === 27) {
          await this.setState({
            is27: this.state.seCos,
          });
        }
        if (this.state.seTime === 28) {
          await this.setState({
            is28: this.state.seCos,
          });
        }
        if (this.state.seTime === 29) {
          await this.setState({
            is29: this.state.seCos,
          });
        }
        if (this.state.seTime === 30) {
          await this.setState({
            is30: this.state.seCos,
          });
        }
        if (this.state.seTime === 31) {
          await this.setState({
            is31: this.state.seCos,
          });
        }
        if (this.state.seTime === 32) {
          await this.setState({
            is32: this.state.seCos,
          });
        }
        if (this.state.seTime === 33) {
          await this.setState({
            is33: this.state.seCos,
          });
        }
        if (this.state.seTime === 34) {
          await this.setState({
            is34: this.state.seCos,
          });
        }
        if (this.state.seTime === 35) {
          await this.setState({
            is35: this.state.seCos,
          });
        }
        if (this.state.seTime === 36) {
          await this.setState({
            is36: this.state.seCos,
          });
        }
        if (this.state.seTime === 37) {
          await this.setState({
            is37: this.state.seCos,
          });
        }
        if (this.state.seTime === 38) {
          await this.setState({
            is38: this.state.seCos,
          });
        }
        if (this.state.seTime === 39) {
          await this.setState({
            is39: this.state.seCos,
          });
        }
        if (this.state.seTime === 40) {
          await this.setState({
            is40: this.state.seCos,
          });
        }
        if (this.state.seTime === 41) {
          await this.setState({
            is41: this.state.seCos,
          });
        }
        if (this.state.seTime === 42) {
          await this.setState({
            is42: this.state.seCos,
          });
        }
        if (this.state.seTime === 43) {
          await this.setState({
            is43: this.state.seCos,
          });
        }
        if (this.state.seTime === 44) {
          await this.setState({
            is44: this.state.seCos,
          });
        }
        if (this.state.seTime === 45) {
          await this.setState({
            is45: this.state.seCos,
          });
        }
      }
    }
      await this.filterIDSub();
      await this.selectDataCos();
      await this.setState({
        selectTeaS: [],
        selectTeaF: [],
        tsp: [],
        secRoomG: [],
        mainRoomG: [],
        allTime: [],
        seRoom: null,
        seTea: null,
        seTime: null,
        seCos: null,
      });
      await this.setState({ loading: false, show7: 1, lock7: 1 });
    }
  };
  enterLoading2 = async (index) => {
    await this.setState({ show7: 0, lock7: 0, loading: true });
    let data = [];
    for (let index = 0; index <= this.state.classSchedule.length - 1; index++) {
      if (
        Number(this.state.classSchedule[index].groupStudent.substring(0,1)) === Number(this.state.class7.substring(0,1)) &&
        Number(this.state.classSchedule[index].year) ===
          Number(this.state.year7) &&
        Number(this.state.classSchedule[index].term) ===
          Number(this.state.term7)
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
        await this.state.classSchedule[index].time.push({
          idSubject: this.state.seCos,
          time: this.state.seTime,
        });
        if (this.state.seTime === 1) {
          await this.setState({
            is1: this.state.seCos,
          });
        }
        if (this.state.seTime === 2) {
          await this.setState({
            is2: this.state.seCos,
          });
        }
        if (this.state.seTime === 3) {
          await this.setState({
            is3: this.state.seCos,
          });
        }
        if (this.state.seTime === 4) {
          await this.setState({
            is4: this.state.seCos,
          });
        }
        if (this.state.seTime === 5) {
          await this.setState({
            is5: this.state.seCos,
          });
        }
        if (this.state.seTime === 6) {
          await this.setState({
            is6: this.state.seCos,
          });
        }
        if (this.state.seTime === 7) {
          await this.setState({
            is7: this.state.seCos,
          });
        }
        if (this.state.seTime === 8) {
          await this.setState({
            is8: this.state.seCos,
          });
        }
        if (this.state.seTime === 9) {
          await this.setState({
            is9: this.state.seCos,
          });
        }
        if (this.state.seTime === 10) {
          await this.setState({
            is10: this.state.seCos,
          });
        }
        if (this.state.seTime === 11) {
          await this.setState({
            is11: this.state.seCos,
          });
        }
        if (this.state.seTime === 12) {
          await this.setState({
            is12: this.state.seCos,
          });
        }
        if (this.state.seTime === 13) {
          await this.setState({
            is13: this.state.seCos,
          });
        }
        if (this.state.seTime === 14) {
          await this.setState({
            is14: this.state.seCos,
          });
        }
        if (this.state.seTime === 15) {
          await this.setState({
            is15: this.state.seCos,
          });
        }
        if (this.state.seTime === 16) {
          await this.setState({
            is16: this.state.seCos,
          });
        }
        if (this.state.seTime === 17) {
          await this.setState({
            is17: this.state.seCos,
          });
        }
        if (this.state.seTime === 18) {
          await this.setState({
            is18: this.state.seCos,
          });
        }
        if (this.state.seTime === 19) {
          await this.setState({
            is19: this.state.seCos,
          });
        }
        if (this.state.seTime === 20) {
          await this.setState({
            is20: this.state.seCos,
          });
        }
        if (this.state.seTime === 21) {
          await this.setState({
            is21: this.state.seCos,
          });
        }
        if (this.state.seTime === 22) {
          await this.setState({
            is22: this.state.seCos,
          });
        }
        if (this.state.seTime === 23) {
          await this.setState({
            is23: this.state.seCos,
          });
        }
        if (this.state.seTime === 24) {
          await this.setState({
            is24: this.state.seCos,
          });
        }
        if (this.state.seTime === 25) {
          await this.setState({
            is25: this.state.seCos,
          });
        }
        if (this.state.seTime === 26) {
          await this.setState({
            is26: this.state.seCos,
          });
        }
        if (this.state.seTime === 27) {
          await this.setState({
            is27: this.state.seCos,
          });
        }
        if (this.state.seTime === 28) {
          await this.setState({
            is28: this.state.seCos,
          });
        }
        if (this.state.seTime === 29) {
          await this.setState({
            is29: this.state.seCos,
          });
        }
        if (this.state.seTime === 30) {
          await this.setState({
            is30: this.state.seCos,
          });
        }
        if (this.state.seTime === 31) {
          await this.setState({
            is31: this.state.seCos,
          });
        }
        if (this.state.seTime === 32) {
          await this.setState({
            is32: this.state.seCos,
          });
        }
        if (this.state.seTime === 33) {
          await this.setState({
            is33: this.state.seCos,
          });
        }
        if (this.state.seTime === 34) {
          await this.setState({
            is34: this.state.seCos,
          });
        }
        if (this.state.seTime === 35) {
          await this.setState({
            is35: this.state.seCos,
          });
        }
        if (this.state.seTime === 36) {
          await this.setState({
            is36: this.state.seCos,
          });
        }
        if (this.state.seTime === 37) {
          await this.setState({
            is37: this.state.seCos,
          });
        }
        if (this.state.seTime === 38) {
          await this.setState({
            is38: this.state.seCos,
          });
        }
        if (this.state.seTime === 39) {
          await this.setState({
            is39: this.state.seCos,
          });
        }
        if (this.state.seTime === 40) {
          await this.setState({
            is40: this.state.seCos,
          });
        }
        if (this.state.seTime === 41) {
          await this.setState({
            is41: this.state.seCos,
          });
        }
        if (this.state.seTime === 42) {
          await this.setState({
            is42: this.state.seCos,
          });
        }
        if (this.state.seTime === 43) {
          await this.setState({
            is43: this.state.seCos,
          });
        }
        if (this.state.seTime === 44) {
          await this.setState({
            is44: this.state.seCos,
          });
        }
        if (this.state.seTime === 45) {
          await this.setState({
            is45: this.state.seCos,
          });
        }
        await data.push("a");
      }
    }
      await this.filterIDSub();
      await this.selectDataCos();
      await this.setState({
        selectTeaS: [],
        selectTeaF: [],
        tsp: [],
        secRoomG: [],
        mainRoomG: [],
        allTime: [],
        seRoom: null,
        seTea: null,
        seTime: null,
        seCos: null,
      });
      await this.setState({ loading: false, show7: 1, lock7: 1 });
  };
  onsave7 = async (index) => {
    await this.setState({ show7: 0 });
    this.setState(({ loadings }) => {
      const newLoadings = [...loadings];
      newLoadings[index] = true;

      return {
        loadings: newLoadings,
      };
    });
    setTimeout(() => {
      this.setState(({ loadings }) => {
        const newLoadings = [...loadings];
        newLoadings[index] = false;

        return {
          loadings: newLoadings,
        };
      });
    }, 50000000);
    if (this.state.upDataClass.length > 0) {
      for (let index = 0; index <= this.state.upDataClass.length - 1; index++) {
        for (let id = 0; id <= this.state.classSchedule.length - 1; id++) {
          if (
            this.state.upDataClass[index] === this.state.classSchedule[id].id
          ) {
            db.collection("classSchedule")
              .doc(this.state.upDataClass[index])
              .update({
                time: this.state.classSchedule[id].time,
              })
              .then(() => {})
              .catch((err) => {});
          }
        }
      }
    }
    if (this.state.upDataClassRoom.length > 0) {
      for (
        let index = 0;
        index <= this.state.upDataClassRoom.length - 1;
        index++
      ) {
        for (let id = 0; id <= this.state.classroomSchedule.length - 1; id++) {
          if (
            this.state.upDataClassRoom[index] ===
            this.state.classroomSchedule[id].id
          ) {
            db.collection("classroomSchedule")
              .doc(this.state.upDataClassRoom[index])
              .update({
                time: this.state.classroomSchedule[id].time,
              })
              .then(() => {})
              .catch((err) => {});
          }
        }
      }
    }
    if (this.state.upDataTeacher.length > 0) {
      for (
        let index = 0;
        index <= this.state.upDataTeacher.length - 1;
        index++
      ) {
        for (let id = 0; id <= this.state.teacherSchedule.length - 1; id++) {
          if (
            this.state.upDataTeacher[index] ===
            this.state.teacherSchedule[id].id
          ) {
            db.collection("teacherSchedule")
              .doc(this.state.upDataTeacher[index])
              .update({
                time: this.state.teacherSchedule[id].time,
                hours: Number(this.state.teacherSchedule[id].hours),
              })
              .then(() => {})
              .catch((err) => {});
          }
        }
      }
    }
    await this.setState({
      selectTeaS: [],
      selectTeaF: [],
      tsp: [],
      secRoomG: [],
      mainRoomG: [],
      allTime: [],
      seRoom: null,
      seTea: null,
      seTime: null,
      seCos: null,
      upDataClass: [],
      upDataClassRoom: [],
      upDataTeacher: [],
      loadings: [],
      show7: 1,
    });
    message.success(`บันทึกตารางที่มีการเปลี่ยนแปลงทั้งหมดสําเร็จ`);
  };
  enterLoadingDel7 = async () => {
    await this.setState({ show7: 0, lock7: 0, loading: true });
    let data = [];
    let dataC = [];
    let all = [];
    let del = [];
    let haveTea = [];
    let cosHours = [];
    for (let index = 0; index <= this.state.classSchedule.length - 1; index++) {
      if (this.state.classSchedule[index].groupStudent === this.state.class7 &&
        Number(this.state.classSchedule[index].year) ===
          Number(this.state.year7) &&
        Number(this.state.classSchedule[index].term) ===
          Number(this.state.term7)) {
            for (
              let idex = 0;
              idex < this.state.classSchedule[index].time.length;
              idex++
            ) {
              if (
                Number(this.state.classSchedule[index].time[idex].time) ===
                Number(this.state.seDelTime)
              ) {
                await dataC.push(
                  this.state.classSchedule[index].time[idex].idSubject,
                );
              }
            }
          }
      }
      for (let index = 0; index <= this.state.course.length - 1; index++) {
        if (this.state.course[index].idSubject === dataC[0]) {
          all.push(this.state.course[index].all)
        }
      }

    if (dataC[0] === "พักกลางวัน" ) {
      this.enterLoadingDel72();
    } else {
      if (all[0] === "เรียนรวม") {
        this.enterLoadingDel72();
      }else{
        for (let index = 0; index <= this.state.classSchedule.length - 1; index++) {
      if (
        this.state.classSchedule[index].groupStudent === this.state.class7 &&
        Number(this.state.classSchedule[index].year) ===
          Number(this.state.year7) &&
        Number(this.state.classSchedule[index].term) ===
          Number(this.state.term7)
      ) {
        if (this.state.upDataClass.length === 0) {
          await this.state.upDataClass.push(this.state.classSchedule[index].id);
        } else {
          let data = [];
          for (let id = 0; id <= this.state.upDataClass.length - 1; id++) {
            if (
              this.state.classSchedule[index].id === this.state.upDataClass[id]
            ) {
              await data.push("a");
            }
          }
          if (data.length === 0) {
            await this.state.upDataClass.push(
              this.state.classSchedule[index].id
            );
          }
        }
        for (
          let idex = 0;
          idex < this.state.classSchedule[index].time.length;
          idex++
        ) {
          if (
            Number(this.state.classSchedule[index].time[idex].time) ===
            Number(this.state.seDelTime)
          ) {
            await data.push({
              nameRoom: this.state.classSchedule[index].time[idex].nameRoom,
              idteacher: this.state.classSchedule[index].time[idex].idteacher,
              idSubject: this.state.classSchedule[index].time[idex].idSubject,
            });
            await del.push(idex);
          }
        }
        await this.state.classSchedule[index].time.splice(del[0], 1);
      }
      if (
        this.state.classSchedule[index].groupStudent === this.state.class7 &&
        Number(this.state.classSchedule[index].year) ===
          Number(this.state.year7) &&
        Number(this.state.classSchedule[index].term) ===
          Number(this.state.term7) &&
        this.state.classSchedule[index].time.length !== 0
      ) {
        for (
          let idex = 0;
          idex <= this.state.classSchedule[index].time.length - 1;
          idex++
        ) {
          if (
            this.state.classSchedule[index].time[idex].idteacher ===
              data[0].idteacher &&
            this.state.classSchedule[index].time[idex].idSubject ===
              data[0].idSubject
          ) {
            haveTea.push(this.state.classSchedule[index]);
          }
        }
      }
    }
    for (
      let index = 0;
      index <= this.state.classroomSchedule.length - 1;
      index++
    ) {
      if (
        this.state.classroomSchedule[index].nameRoom === data[0].nameRoom &&
        Number(this.state.classroomSchedule[index].year) ===
          Number(this.state.year7) &&
        Number(this.state.classroomSchedule[index].term) ===
          Number(this.state.term7)
      ) {
        if (this.state.upDataClassRoom.length === 0) {
          await this.state.upDataClassRoom.push(
            this.state.classroomSchedule[index].id
          );
        } else {
          let data = [];
          for (let id = 0; id <= this.state.upDataClassRoom.length - 1; id++) {
            if (
              this.state.classroomSchedule[index].id ===
              this.state.upDataClassRoom[id]
            ) {
              await data.push("a");
            }
          }
          if (data.length === 0) {
            await this.state.upDataClassRoom.push(
              this.state.classroomSchedule[index].id
            );
          }
        }
        let delCR = [];
        for (
          let idex = 0;
          idex < this.state.classroomSchedule[index].time.length - 1;
          idex++
        ) {
          if (
            Number(this.state.classroomSchedule[index].time[idex].time) ===
            Number(this.state.seDelTime)
          ) {
            await delCR.push(idex);
          }
        }
        await this.state.classroomSchedule[index].time.splice(delCR[0], 1);
      }
    }
    for (let index = 0; index <= this.state.subject.length - 1; index++) {
      if (this.state.subject[index].idSubject === data[0].idSubject) {
        let h = this.state.subject[index].creditSubject * 2;
        cosHours.push(h);
      }
    }
    for (
      let index = 0;
      index <= this.state.teacherSchedule.length - 1;
      index++
    ) {
      if (
        Number(this.state.teacherSchedule[index].idteacher) ===
          Number(data[0].idteacher) &&
        Number(this.state.teacherSchedule[index].year) ===
          Number(this.state.year7) &&
        Number(this.state.teacherSchedule[index].term) ===
          Number(this.state.term7)
      ) {
        if (this.state.upDataTeacher.length === 0) {
          await this.state.upDataTeacher.push(
            this.state.teacherSchedule[index].id
          );
        } else {
          let data = [];
          for (let id = 0; id <= this.state.upDataTeacher.length - 1; id++) {
            if (
              this.state.teacherSchedule[index].id ===
              this.state.upDataTeacher[id]
            ) {
              await data.push("a");
            }
          }
          if (data.length === 0) {
            await this.state.upDataTeacher.push(
              this.state.teacherSchedule[index].id
            );
          }
        }
        let delCR = [];
        for (
          let idex = 0;
          idex < this.state.teacherSchedule[index].time.length - 1;
          idex++
        ) {
          if (
            Number(this.state.teacherSchedule[index].time[idex].time) ===
            Number(this.state.seDelTime)
          ) {
            await delCR.push(idex);
          }
        }
        await this.state.teacherSchedule[index].time.splice(delCR[0], 1);
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
    if (Number(this.state.seDelTime) === 1) {
      await this.setState({
        is1: null,
      });
    }
    if (this.state.seDelTime === 2) {
      await this.setState({
        is2: null,
      });
    }
    if (this.state.seDelTime === 3) {
      await this.setState({
        is3: null,
      });
    }
    if (this.state.seDelTime === 4) {
      await this.setState({
        is4: null,
      });
    }
    if (this.state.seDelTime === 5) {
      await this.setState({
        is5: null,
      });
    }
    if (this.state.seDelTime === 6) {
      await this.setState({
        is6: null,
      });
    }
    if (this.state.seDelTime === 7) {
      await this.setState({
        is7: null,
      });
    }
    if (this.state.seDelTime === 8) {
      await this.setState({
        is8: null,
      });
    }
    if (this.state.seDelTime === 9) {
      await this.setState({
        is9: null,
      });
    }
    if (this.state.seDelTime === 10) {
      await this.setState({
        is10: null,
      });
    }
    if (this.state.seDelTime === 11) {
      await this.setState({
        is11: null,
      });
    }
    if (this.state.seDelTime === 12) {
      await this.setState({
        is12: null,
      });
    }
    if (this.state.seDelTime === 13) {
      await this.setState({
        is13: null,
      });
    }
    if (this.state.seDelTime === 14) {
      await this.setState({
        is14: null,
      });
    }
    if (this.state.seDelTime === 15) {
      await this.setState({
        is15: null,
      });
    }
    if (this.state.seDelTime === 16) {
      await this.setState({
        is16: null,
      });
    }
    if (this.state.seDelTime === 17) {
      await this.setState({
        is17: null,
      });
    }
    if (this.state.seDelTime === 18) {
      await this.setState({
        is18: null,
      });
    }
    if (this.state.seDelTime === 19) {
      await this.setState({
        is19: null,
      });
    }
    if (this.state.seDelTime === 20) {
      await this.setState({
        is20: null,
      });
    }
    if (this.state.seDelTime === 21) {
      await this.setState({
        is21: null,
      });
    }
    if (this.state.seDelTime === 22) {
      await this.setState({
        is22: null,
      });
    }
    if (this.state.seDelTime === 23) {
      await this.setState({
        is23: null,
      });
    }
    if (this.state.seDelTime === 24) {
      await this.setState({
        is24: null,
      });
    }
    if (this.state.seDelTime === 25) {
      await this.setState({
        is25: null,
      });
    }
    if (this.state.seDelTime === 26) {
      await this.setState({
        is26: null,
      });
    }
    if (this.state.seDelTime === 27) {
      await this.setState({
        is27: null,
      });
    }
    if (this.state.seDelTime === 28) {
      await this.setState({
        is28: null,
      });
    }
    if (this.state.seDelTime === 29) {
      await this.setState({
        is29: null,
      });
    }
    if (this.state.seDelTime === 30) {
      await this.setState({
        is30: null,
      });
    }
    if (this.state.seDelTime === 31) {
      await this.setState({
        is31: null,
      });
    }
    if (this.state.seDelTime === 32) {
      await this.setState({
        is32: null,
      });
    }
    if (this.state.seDelTime === 33) {
      await this.setState({
        is33: null,
      });
    }
    if (this.state.seDelTime === 34) {
      await this.setState({
        is34: null,
      });
    }
    if (this.state.seDelTime === 35) {
      await this.setState({
        is35: null,
      });
    }
    if (this.state.seDelTime === 36) {
      await this.setState({
        is36: null,
      });
    }
    if (this.state.seDelTime === 37) {
      await this.setState({
        is37: null,
      });
    }
    if (this.state.seDelTime === 38) {
      await this.setState({
        is38: null,
      });
    }
    if (this.state.seDelTime === 39) {
      await this.setState({
        is39: null,
      });
    }
    if (this.state.seDelTime === 40) {
      await this.setState({
        is40: null,
      });
    }
    if (this.state.seDelTime === 41) {
      await this.setState({
        is41: null,
      });
    }
    if (this.state.seDelTime === 42) {
      await this.setState({
        is42: null,
      });
    }
    if (this.state.seDelTime === 43) {
      await this.setState({
        is43: null,
      });
    }
    if (this.state.seDelTime === 44) {
      await this.setState({
        is44: null,
      });
    }
    if (this.state.seDelTime === 45) {
      await this.setState({
        is45: null,
      });
    }
    if (Number(this.state.seDelTime) === 1) {
      await this.setState({
        ic1: null,
      });
    }
    if (Number(this.state.seDelTime) === 2) {
      await this.setState({
        ic2: null,
      });
    }
    if (Number(this.state.seDelTime) === 3) {
      await this.setState({
        ic3: null,
      });
    }
    if (Number(this.state.seDelTime) === 4) {
      await this.setState({
        ic4: null,
      });
    }
    if (Number(this.state.seDelTime) === 5) {
      await this.setState({
        ic5: null,
      });
    }
    if (Number(this.state.seDelTime) === 6) {
      await this.setState({
        ic6: null,
      });
    }
    if (Number(this.state.seDelTime) === 7) {
      await this.setState({
        ic7: null,
      });
    }
    if (Number(this.state.seDelTime) === 8) {
      await this.setState({
        ic8: null,
      });
    }
    if (Number(this.state.seDelTime) === 9) {
      await this.setState({
        ic9: null,
      });
    }
    if (Number(this.state.seDelTime) === 10) {
      await this.setState({
        ic10: null,
      });
    }
    if (Number(this.state.seDelTime) === 11) {
      await this.setState({
        ic11: null,
      });
    }
    if (Number(this.state.seDelTime) === 12) {
      await this.setState({
        ic12: null,
      });
    }
    if (Number(this.state.seDelTime) === 13) {
      await this.setState({
        ic13: null,
      });
    }
    if (Number(this.state.seDelTime) === 14) {
      await this.setState({
        ic14: null,
      });
    }
    if (Number(this.state.seDelTime) === 15) {
      await this.setState({
        ic15: null,
      });
    }
    if (Number(this.state.seDelTime) === 16) {
      await this.setState({
        ic16: null,
      });
    }
    if (Number(this.state.seDelTime) === 17) {
      await this.setState({
        ic17: null,
      });
    }
    if (Number(this.state.seDelTime) === 18) {
      await this.setState({
        ic18: null,
      });
    }
    if (Number(this.state.seDelTime) === 19) {
      await this.setState({
        ic19: null,
      });
    }
    if (Number(this.state.seDelTime) === 20) {
      await this.setState({
        ic20: null,
      });
    }
    if (Number(this.state.seDelTime) === 21) {
      await this.setState({
        ic21: null,
      });
    }
    if (Number(this.state.seDelTime) === 22) {
      await this.setState({
        ic22: null,
      });
    }
    if (Number(this.state.seDelTime) === 23) {
      await this.setState({
        ic23: null,
      });
    }
    if (Number(this.state.seDelTime) === 24) {
      await this.setState({
        ic24: null,
      });
    }
    if (Number(this.state.seDelTime) === 25) {
      await this.setState({
        ic25: null,
      });
    }
    if (Number(this.state.seDelTime) === 26) {
      await this.setState({
        ic26: null,
      });
    }
    if (Number(this.state.seDelTime) === 27) {
      await this.setState({
        ic27: null,
      });
    }
    if (Number(this.state.seDelTime) === 28) {
      await this.setState({
        ic28: null,
      });
    }
    if (Number(this.state.seDelTime) === 29) {
      await this.setState({
        ic29: null,
      });
    }
    if (Number(this.state.seDelTime) === 30) {
      await this.setState({
        ic30: null,
      });
    }
    if (Number(this.state.seDelTime) === 31) {
      await this.setState({
        ic31: null,
      });
    }
    if (Number(this.state.seDelTime) === 32) {
      await this.setState({
        ic32: null,
      });
    }
    if (Number(this.state.seDelTime) === 33) {
      await this.setState({
        ic33: null,
      });
    }
    if (Number(this.state.seDelTime) === 34) {
      await this.setState({
        ic34: null,
      });
    }
    if (Number(this.state.seDelTime) === 35) {
      await this.setState({
        ic35: null,
      });
    }
    if (Number(this.state.seDelTime) === 36) {
      await this.setState({
        ic36: null,
      });
    }
    if (Number(this.state.seDelTime) === 37) {
      await this.setState({
        ic37: null,
      });
    }
    if (Number(this.state.seDelTime) === 38) {
      await this.setState({
        ic38: null,
      });
    }
    if (Number(this.state.seDelTime) === 39) {
      await this.setState({
        ic39: null,
      });
    }
    if (Number(this.state.seDelTime) === 40) {
      await this.setState({
        ic40: null,
      });
    }
    if (Number(this.state.seDelTime) === 41) {
      await this.setState({
        ic41: null,
      });
    }
    if (Number(this.state.seDelTime) === 42) {
      await this.setState({
        ic42: null,
      });
    }
    if (Number(this.state.seDelTime) === 43) {
      await this.setState({
        ic43: null,
      });
    }
    if (Number(this.state.seDelTime) === 44) {
      await this.setState({
        ic44: null,
      });
    }
    if (Number(this.state.seDelTime) === 45) {
      await this.setState({
        ic45: null,
      });
    }
    if (Number(this.state.seDelTime) === 1) {
      await this.setState({
        it1: null,
      });
    }
    if (Number(this.state.seDelTime) === 2) {
      await this.setState({
        it2: null,
      });
    }
    if (Number(this.state.seDelTime) === 3) {
      await this.setState({
        it3: null,
      });
    }
    if (Number(this.state.seDelTime) === 4) {
      await this.setState({
        it4: null,
      });
    }
    if (Number(this.state.seDelTime) === 5) {
      await this.setState({
        it5: null,
      });
    }
    if (Number(this.state.seDelTime) === 6) {
      await this.setState({
        it6: null,
      });
    }
    if (Number(this.state.seDelTime) === 7) {
      await this.setState({
        it7: null,
      });
    }
    if (Number(this.state.seDelTime) === 8) {
      await this.setState({
        it8: null,
      });
    }
    if (Number(this.state.seDelTime) === 9) {
      await this.setState({
        it9: null,
      });
    }
    if (Number(this.state.seDelTime) === 10) {
      await this.setState({
        it10: null,
      });
    }
    if (Number(this.state.seDelTime) === 11) {
      await this.setState({
        it11: null,
      });
    }
    if (Number(this.state.seDelTime) === 12) {
      await this.setState({
        it12: null,
      });
    }
    if (Number(this.state.seDelTime) === 13) {
      await this.setState({
        it13: null,
      });
    }
    if (Number(this.state.seDelTime) === 14) {
      await this.setState({
        it14: null,
      });
    }
    if (Number(this.state.seDelTime) === 15) {
      await this.setState({
        it15: null,
      });
    }
    if (Number(this.state.seDelTime) === 16) {
      await this.setState({
        it16: null,
      });
    }
    if (Number(this.state.seDelTime) === 17) {
      await this.setState({
        it17: null,
      });
    }
    if (Number(this.state.seDelTime) === 18) {
      await this.setState({
        it18: null,
      });
    }
    if (Number(this.state.seDelTime) === 19) {
      await this.setState({
        it19: null,
      });
    }
    if (Number(this.state.seDelTime) === 20) {
      await this.setState({
        it20: null,
      });
    }
    if (Number(this.state.seDelTime) === 21) {
      await this.setState({
        it21: null,
      });
    }
    if (Number(this.state.seDelTime) === 22) {
      await this.setState({
        it22: null,
      });
    }
    if (Number(this.state.seDelTime) === 23) {
      await this.setState({
        it23: null,
      });
    }
    if (Number(this.state.seDelTime) === 24) {
      await this.setState({
        it24: null,
      });
    }
    if (Number(this.state.seDelTime) === 25) {
      await this.setState({
        it25: null,
      });
    }
    if (Number(this.state.seDelTime) === 26) {
      await this.setState({
        it26: null,
      });
    }
    if (Number(this.state.seDelTime) === 27) {
      await this.setState({
        it27: null,
      });
    }
    if (Number(this.state.seDelTime) === 28) {
      await this.setState({
        it28: null,
      });
    }
    if (Number(this.state.seDelTime) === 29) {
      await this.setState({
        it29: null,
      });
    }
    if (Number(this.state.seDelTime) === 30) {
      await this.setState({
        it30: null,
      });
    }
    if (Number(this.state.seDelTime) === 31) {
      await this.setState({
        it31: null,
      });
    }
    if (Number(this.state.seDelTime) === 32) {
      await this.setState({
        it32: null,
      });
    }
    if (Number(this.state.seDelTime) === 33) {
      await this.setState({
        it33: null,
      });
    }
    if (Number(this.state.seDelTime) === 34) {
      await this.setState({
        it34: null,
      });
    }
    if (Number(this.state.seDelTime) === 35) {
      await this.setState({
        it35: null,
      });
    }
    if (Number(this.state.seDelTime) === 36) {
      await this.setState({
        it36: null,
      });
    }
    if (Number(this.state.seDelTime) === 37) {
      await this.setState({
        it37: null,
      });
    }
    if (Number(this.state.seDelTime) === 38) {
      await this.setState({
        it38: null,
      });
    }
    if (Number(this.state.seDelTime) === 39) {
      await this.setState({
        it39: null,
      });
    }
    if (Number(this.state.seDelTime) === 40) {
      await this.setState({
        it40: null,
      });
    }
    if (Number(this.state.seDelTime) === 41) {
      await this.setState({
        it41: null,
      });
    }
    if (Number(this.state.seDelTime) === 42) {
      await this.setState({
        it42: null,
      });
    }
    if (Number(this.state.seDelTime) === 43) {
      await this.setState({
        it43: null,
      });
    }
    if (Number(this.state.seDelTime) === 44) {
      await this.setState({
        it44: null,
      });
    }
    if (Number(this.state.seDelTime) === 45) {
      await this.setState({
        it45: null,
      });
    }

    await this.filterIDSub();
    await this.selectDataCos();
    await this.setState({
      selectTeaS: [],
      selectTeaF: [],
      tsp: [],
      secRoomG: [],
      mainRoomG: [],
      allTime: [],
      seRoom: null,
      seTea: null,
      seTime: null,
      seCos: null,
      loading: false,
      show7: 1,
      lock7: 1,
      seDelTime: null,
    });
  }
  }
  };
  enterLoadingDel72 = async () => {
    await this.setState({ show7: 0, lock7: 0, loading: true });
    let data = [];
    let del = [];
    let haveTea = [];
    let cosHours = [];
    for (let index = 0; index <= this.state.classSchedule.length - 1; index++) {
      if (
        this.state.classSchedule[index].groupStudent.substring(0,1) === this.state.class7.substring(0,1) &&
        Number(this.state.classSchedule[index].year) ===
          Number(this.state.year7) &&
        Number(this.state.classSchedule[index].term) ===
          Number(this.state.term7)
      ) {
        if (this.state.upDataClass.length === 0) {
          await this.state.upDataClass.push(this.state.classSchedule[index].id);
        } else {
          let data = [];
          for (let id = 0; id <= this.state.upDataClass.length - 1; id++) {
            if (
              this.state.classSchedule[index].id === this.state.upDataClass[id]
            ) {
              await data.push("a");
            }
          }
          if (data.length === 0) {
            await this.state.upDataClass.push(
              this.state.classSchedule[index].id
            );
          }
        }
        for (
          let idex = 0;
          idex <= this.state.classSchedule[index].time.length-1;
          idex++
        ) {
          console.log(Number(this.state.classSchedule[index].time[idex].time) ,
          Number(this.state.seDelTime));
          if (
            Number(this.state.classSchedule[index].time[idex].time) ===
            Number(this.state.seDelTime)
          ) {
            await data.unshift({
              idSubject: this.state.classSchedule[index].time[idex].idSubject,
            });
            await del.unshift(idex);
          }
        }
        await this.state.classSchedule[index].time.splice(del[0], 1);
      }
      if (
        this.state.classSchedule[index].groupStudent.substring(0,1) === this.state.class7.substring(0,1) &&
        Number(this.state.classSchedule[index].year) ===
          Number(this.state.year7) &&
        Number(this.state.classSchedule[index].term) ===
          Number(this.state.term7) &&
        this.state.classSchedule[index].time.length !== 0
      ) {
        for (
          let idex = 0;
          idex <= this.state.classSchedule[index].time.length - 1;
          idex++
        ) {
          if (
            this.state.classSchedule[index].time[idex].idSubject ===
              data[0].idSubject
          ) {
            haveTea.push(this.state.classSchedule[index]);
          }
        }
      }
    }
    for (let index = 0; index <= this.state.subject.length - 1; index++) {
      if (this.state.subject[index].idSubject === data[0].idSubject) {
        let h = this.state.subject[index].creditSubject * 2;
        cosHours.push(h);
      }
    }
    let idteacherAdd = [];
    for (let index = 0; index <= this.state.teacher.length - 1; index++) {
      if (this.state.teacher[index].mainGroupLearning.length !== 0 ) {
        for (let idex = 0; idex <= this.state.teacher[index].mainGroupLearning.length-1; idex++) {
          if (this.state.teacher[index].mainGroupLearning[idex] === data[0].idSubject) {
            if (idteacherAdd.length === 0 ) {
              idteacherAdd.push(this.state.teacher[index].idteacher)
            } else {
              let haveidtea = [];
              for (let x = 0; x <= idteacherAdd.length-1; x++) {
                if (idteacherAdd[x] === this.state.teacher[index].idteacher) {
                await  haveidtea.push("a")
                }
              }
              if (haveidtea.length === 0) {
                idteacherAdd.push(this.state.teacher[index].idteacher)
              }
            }
          }
        }
      }
      if (this.state.teacher[index].secondaryGroupLearning.length !== 0 ) {
        for (let idex = 0; idex <= this.state.teacher[index].secondaryGroupLearning.length-1; idex++) {
          if (this.state.teacher[index].secondaryGroupLearning[idex] === data[0].idSubject) {
            if (idteacherAdd.length === 0 ) {
              idteacherAdd.push(this.state.teacher[index].idteacher)
            } else {
              let haveidtea = [];
              for (let x = 0; x <= idteacherAdd.length-1; x++) {
                if (idteacherAdd[x] === this.state.teacher[index].idteacher) {
                await  haveidtea.push("a")
                }
              }
              if (haveidtea.length === 0) {
                idteacherAdd.push(this.state.teacher[index].idteacher)
              }
            }
          }
        }
      }
  }
    for (
      let index = 0;
      index <= this.state.teacherSchedule.length - 1;
      index++
    ) {
      for (
        let iex = 0;
        iex <= idteacherAdd.length - 1;
        iex++
      ) {
        if (
        Number(this.state.teacherSchedule[index].idteacher) ===
          Number(idteacherAdd[iex]) &&
        Number(this.state.teacherSchedule[index].year) ===
          Number(this.state.year7) &&
        Number(this.state.teacherSchedule[index].term) ===
          Number(this.state.term7)
      ) {
        if (this.state.upDataTeacher.length === 0) {
          await this.state.upDataTeacher.push(
            this.state.teacherSchedule[index].id
          );
        } else {
          let data = [];
          for (let id = 0; id <= this.state.upDataTeacher.length - 1; id++) {
            if (
              this.state.teacherSchedule[index].id ===
              this.state.upDataTeacher[id]
            ) {
              await data.push("a");
            }
          }
          if (data.length === 0) {
            await this.state.upDataTeacher.push(
              this.state.teacherSchedule[index].id
            );
          }
        }
        let delCR = [];
        for (
          let idex = 0;
          idex < this.state.teacherSchedule[index].time.length - 1;
          idex++
        ) {
          if (
            Number(this.state.teacherSchedule[index].time[idex].time) ===
            Number(this.state.seDelTime)
          ) {
            await delCR.push(idex);
          }
        }
        await this.state.teacherSchedule[index].time.splice(delCR[0], 1);
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
    }
    if (Number(this.state.seDelTime) === 1) {
      await this.setState({
        is1: null,
      });
    }
    if (this.state.seDelTime === 2) {
      await this.setState({
        is2: null,
      });
    }
    if (this.state.seDelTime === 3) {
      await this.setState({
        is3: null,
      });
    }
    if (this.state.seDelTime === 4) {
      await this.setState({
        is4: null,
      });
    }
    if (this.state.seDelTime === 5) {
      await this.setState({
        is5: null,
      });
    }
    if (this.state.seDelTime === 6) {
      await this.setState({
        is6: null,
      });
    }
    if (this.state.seDelTime === 7) {
      await this.setState({
        is7: null,
      });
    }
    if (this.state.seDelTime === 8) {
      await this.setState({
        is8: null,
      });
    }
    if (this.state.seDelTime === 9) {
      await this.setState({
        is9: null,
      });
    }
    if (this.state.seDelTime === 10) {
      await this.setState({
        is10: null,
      });
    }
    if (this.state.seDelTime === 11) {
      await this.setState({
        is11: null,
      });
    }
    if (this.state.seDelTime === 12) {
      await this.setState({
        is12: null,
      });
    }
    if (this.state.seDelTime === 13) {
      await this.setState({
        is13: null,
      });
    }
    if (this.state.seDelTime === 14) {
      await this.setState({
        is14: null,
      });
    }
    if (this.state.seDelTime === 15) {
      await this.setState({
        is15: null,
      });
    }
    if (this.state.seDelTime === 16) {
      await this.setState({
        is16: null,
      });
    }
    if (this.state.seDelTime === 17) {
      await this.setState({
        is17: null,
      });
    }
    if (this.state.seDelTime === 18) {
      await this.setState({
        is18: null,
      });
    }
    if (this.state.seDelTime === 19) {
      await this.setState({
        is19: null,
      });
    }
    if (this.state.seDelTime === 20) {
      await this.setState({
        is20: null,
      });
    }
    if (this.state.seDelTime === 21) {
      await this.setState({
        is21: null,
      });
    }
    if (this.state.seDelTime === 22) {
      await this.setState({
        is22: null,
      });
    }
    if (this.state.seDelTime === 23) {
      await this.setState({
        is23: null,
      });
    }
    if (this.state.seDelTime === 24) {
      await this.setState({
        is24: null,
      });
    }
    if (this.state.seDelTime === 25) {
      await this.setState({
        is25: null,
      });
    }
    if (this.state.seDelTime === 26) {
      await this.setState({
        is26: null,
      });
    }
    if (this.state.seDelTime === 27) {
      await this.setState({
        is27: null,
      });
    }
    if (this.state.seDelTime === 28) {
      await this.setState({
        is28: null,
      });
    }
    if (this.state.seDelTime === 29) {
      await this.setState({
        is29: null,
      });
    }
    if (this.state.seDelTime === 30) {
      await this.setState({
        is30: null,
      });
    }
    if (this.state.seDelTime === 31) {
      await this.setState({
        is31: null,
      });
    }
    if (this.state.seDelTime === 32) {
      await this.setState({
        is32: null,
      });
    }
    if (this.state.seDelTime === 33) {
      await this.setState({
        is33: null,
      });
    }
    if (this.state.seDelTime === 34) {
      await this.setState({
        is34: null,
      });
    }
    if (this.state.seDelTime === 35) {
      await this.setState({
        is35: null,
      });
    }
    if (this.state.seDelTime === 36) {
      await this.setState({
        is36: null,
      });
    }
    if (this.state.seDelTime === 37) {
      await this.setState({
        is37: null,
      });
    }
    if (this.state.seDelTime === 38) {
      await this.setState({
        is38: null,
      });
    }
    if (this.state.seDelTime === 39) {
      await this.setState({
        is39: null,
      });
    }
    if (this.state.seDelTime === 40) {
      await this.setState({
        is40: null,
      });
    }
    if (this.state.seDelTime === 41) {
      await this.setState({
        is41: null,
      });
    }
    if (this.state.seDelTime === 42) {
      await this.setState({
        is42: null,
      });
    }
    if (this.state.seDelTime === 43) {
      await this.setState({
        is43: null,
      });
    }
    if (this.state.seDelTime === 44) {
      await this.setState({
        is44: null,
      });
    }
    if (this.state.seDelTime === 45) {
      await this.setState({
        is45: null,
      });
    }
    if (Number(this.state.seDelTime) === 1) {
      await this.setState({
        ic1: null,
      });
    }
    if (Number(this.state.seDelTime) === 2) {
      await this.setState({
        ic2: null,
      });
    }
    if (Number(this.state.seDelTime) === 3) {
      await this.setState({
        ic3: null,
      });
    }
    if (Number(this.state.seDelTime) === 4) {
      await this.setState({
        ic4: null,
      });
    }
    if (Number(this.state.seDelTime) === 5) {
      await this.setState({
        ic5: null,
      });
    }
    if (Number(this.state.seDelTime) === 6) {
      await this.setState({
        ic6: null,
      });
    }
    if (Number(this.state.seDelTime) === 7) {
      await this.setState({
        ic7: null,
      });
    }
    if (Number(this.state.seDelTime) === 8) {
      await this.setState({
        ic8: null,
      });
    }
    if (Number(this.state.seDelTime) === 9) {
      await this.setState({
        ic9: null,
      });
    }
    if (Number(this.state.seDelTime) === 10) {
      await this.setState({
        ic10: null,
      });
    }
    if (Number(this.state.seDelTime) === 11) {
      await this.setState({
        ic11: null,
      });
    }
    if (Number(this.state.seDelTime) === 12) {
      await this.setState({
        ic12: null,
      });
    }
    if (Number(this.state.seDelTime) === 13) {
      await this.setState({
        ic13: null,
      });
    }
    if (Number(this.state.seDelTime) === 14) {
      await this.setState({
        ic14: null,
      });
    }
    if (Number(this.state.seDelTime) === 15) {
      await this.setState({
        ic15: null,
      });
    }
    if (Number(this.state.seDelTime) === 16) {
      await this.setState({
        ic16: null,
      });
    }
    if (Number(this.state.seDelTime) === 17) {
      await this.setState({
        ic17: null,
      });
    }
    if (Number(this.state.seDelTime) === 18) {
      await this.setState({
        ic18: null,
      });
    }
    if (Number(this.state.seDelTime) === 19) {
      await this.setState({
        ic19: null,
      });
    }
    if (Number(this.state.seDelTime) === 20) {
      await this.setState({
        ic20: null,
      });
    }
    if (Number(this.state.seDelTime) === 21) {
      await this.setState({
        ic21: null,
      });
    }
    if (Number(this.state.seDelTime) === 22) {
      await this.setState({
        ic22: null,
      });
    }
    if (Number(this.state.seDelTime) === 23) {
      await this.setState({
        ic23: null,
      });
    }
    if (Number(this.state.seDelTime) === 24) {
      await this.setState({
        ic24: null,
      });
    }
    if (Number(this.state.seDelTime) === 25) {
      await this.setState({
        ic25: null,
      });
    }
    if (Number(this.state.seDelTime) === 26) {
      await this.setState({
        ic26: null,
      });
    }
    if (Number(this.state.seDelTime) === 27) {
      await this.setState({
        ic27: null,
      });
    }
    if (Number(this.state.seDelTime) === 28) {
      await this.setState({
        ic28: null,
      });
    }
    if (Number(this.state.seDelTime) === 29) {
      await this.setState({
        ic29: null,
      });
    }
    if (Number(this.state.seDelTime) === 30) {
      await this.setState({
        ic30: null,
      });
    }
    if (Number(this.state.seDelTime) === 31) {
      await this.setState({
        ic31: null,
      });
    }
    if (Number(this.state.seDelTime) === 32) {
      await this.setState({
        ic32: null,
      });
    }
    if (Number(this.state.seDelTime) === 33) {
      await this.setState({
        ic33: null,
      });
    }
    if (Number(this.state.seDelTime) === 34) {
      await this.setState({
        ic34: null,
      });
    }
    if (Number(this.state.seDelTime) === 35) {
      await this.setState({
        ic35: null,
      });
    }
    if (Number(this.state.seDelTime) === 36) {
      await this.setState({
        ic36: null,
      });
    }
    if (Number(this.state.seDelTime) === 37) {
      await this.setState({
        ic37: null,
      });
    }
    if (Number(this.state.seDelTime) === 38) {
      await this.setState({
        ic38: null,
      });
    }
    if (Number(this.state.seDelTime) === 39) {
      await this.setState({
        ic39: null,
      });
    }
    if (Number(this.state.seDelTime) === 40) {
      await this.setState({
        ic40: null,
      });
    }
    if (Number(this.state.seDelTime) === 41) {
      await this.setState({
        ic41: null,
      });
    }
    if (Number(this.state.seDelTime) === 42) {
      await this.setState({
        ic42: null,
      });
    }
    if (Number(this.state.seDelTime) === 43) {
      await this.setState({
        ic43: null,
      });
    }
    if (Number(this.state.seDelTime) === 44) {
      await this.setState({
        ic44: null,
      });
    }
    if (Number(this.state.seDelTime) === 45) {
      await this.setState({
        ic45: null,
      });
    }
    if (Number(this.state.seDelTime) === 1) {
      await this.setState({
        it1: null,
      });
    }
    if (Number(this.state.seDelTime) === 2) {
      await this.setState({
        it2: null,
      });
    }
    if (Number(this.state.seDelTime) === 3) {
      await this.setState({
        it3: null,
      });
    }
    if (Number(this.state.seDelTime) === 4) {
      await this.setState({
        it4: null,
      });
    }
    if (Number(this.state.seDelTime) === 5) {
      await this.setState({
        it5: null,
      });
    }
    if (Number(this.state.seDelTime) === 6) {
      await this.setState({
        it6: null,
      });
    }
    if (Number(this.state.seDelTime) === 7) {
      await this.setState({
        it7: null,
      });
    }
    if (Number(this.state.seDelTime) === 8) {
      await this.setState({
        it8: null,
      });
    }
    if (Number(this.state.seDelTime) === 9) {
      await this.setState({
        it9: null,
      });
    }
    if (Number(this.state.seDelTime) === 10) {
      await this.setState({
        it10: null,
      });
    }
    if (Number(this.state.seDelTime) === 11) {
      await this.setState({
        it11: null,
      });
    }
    if (Number(this.state.seDelTime) === 12) {
      await this.setState({
        it12: null,
      });
    }
    if (Number(this.state.seDelTime) === 13) {
      await this.setState({
        it13: null,
      });
    }
    if (Number(this.state.seDelTime) === 14) {
      await this.setState({
        it14: null,
      });
    }
    if (Number(this.state.seDelTime) === 15) {
      await this.setState({
        it15: null,
      });
    }
    if (Number(this.state.seDelTime) === 16) {
      await this.setState({
        it16: null,
      });
    }
    if (Number(this.state.seDelTime) === 17) {
      await this.setState({
        it17: null,
      });
    }
    if (Number(this.state.seDelTime) === 18) {
      await this.setState({
        it18: null,
      });
    }
    if (Number(this.state.seDelTime) === 19) {
      await this.setState({
        it19: null,
      });
    }
    if (Number(this.state.seDelTime) === 20) {
      await this.setState({
        it20: null,
      });
    }
    if (Number(this.state.seDelTime) === 21) {
      await this.setState({
        it21: null,
      });
    }
    if (Number(this.state.seDelTime) === 22) {
      await this.setState({
        it22: null,
      });
    }
    if (Number(this.state.seDelTime) === 23) {
      await this.setState({
        it23: null,
      });
    }
    if (Number(this.state.seDelTime) === 24) {
      await this.setState({
        it24: null,
      });
    }
    if (Number(this.state.seDelTime) === 25) {
      await this.setState({
        it25: null,
      });
    }
    if (Number(this.state.seDelTime) === 26) {
      await this.setState({
        it26: null,
      });
    }
    if (Number(this.state.seDelTime) === 27) {
      await this.setState({
        it27: null,
      });
    }
    if (Number(this.state.seDelTime) === 28) {
      await this.setState({
        it28: null,
      });
    }
    if (Number(this.state.seDelTime) === 29) {
      await this.setState({
        it29: null,
      });
    }
    if (Number(this.state.seDelTime) === 30) {
      await this.setState({
        it30: null,
      });
    }
    if (Number(this.state.seDelTime) === 31) {
      await this.setState({
        it31: null,
      });
    }
    if (Number(this.state.seDelTime) === 32) {
      await this.setState({
        it32: null,
      });
    }
    if (Number(this.state.seDelTime) === 33) {
      await this.setState({
        it33: null,
      });
    }
    if (Number(this.state.seDelTime) === 34) {
      await this.setState({
        it34: null,
      });
    }
    if (Number(this.state.seDelTime) === 35) {
      await this.setState({
        it35: null,
      });
    }
    if (Number(this.state.seDelTime) === 36) {
      await this.setState({
        it36: null,
      });
    }
    if (Number(this.state.seDelTime) === 37) {
      await this.setState({
        it37: null,
      });
    }
    if (Number(this.state.seDelTime) === 38) {
      await this.setState({
        it38: null,
      });
    }
    if (Number(this.state.seDelTime) === 39) {
      await this.setState({
        it39: null,
      });
    }
    if (Number(this.state.seDelTime) === 40) {
      await this.setState({
        it40: null,
      });
    }
    if (Number(this.state.seDelTime) === 41) {
      await this.setState({
        it41: null,
      });
    }
    if (Number(this.state.seDelTime) === 42) {
      await this.setState({
        it42: null,
      });
    }
    if (Number(this.state.seDelTime) === 43) {
      await this.setState({
        it43: null,
      });
    }
    if (Number(this.state.seDelTime) === 44) {
      await this.setState({
        it44: null,
      });
    }
    if (Number(this.state.seDelTime) === 45) {
      await this.setState({
        it45: null,
      });
    }

    await this.filterIDSub();
    await this.selectDataCos();
    await this.setState({
      selectTeaS: [],
      selectTeaF: [],
      tsp: [],
      secRoomG: [],
      mainRoomG: [],
      allTime: [],
      seRoom: null,
      seTea: null,
      seTime: null,
      seCos: null,
      loading: false,
      show7: 1,
      lock7: 1,
      seDelTime: null,
    });
  };
  getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            this.handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => this.handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: (text) =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });
  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };
  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ searchText: "" });
  };
  pushnumber = (evt) => {
    if (
      evt.key !== "0" &&
      evt.key !== "1" &&
      evt.key !== "2" &&
      evt.key !== "3" &&
      evt.key !== "4" &&
      evt.key !== "5" &&
      evt.key !== "6" &&
      evt.key !== "7" &&
      evt.key !== "8" &&
      evt.key !== "9" &&
      evt.key !== "Backspace"
    ) {
      evt.preventDefault();
    }
  };
  pushthaiENG = (evt) => {
    if (
      evt.key === "+" ||
      evt.key === "?" ||
      evt.key === "!" ||
      evt.key === "@" ||
      evt.key === "#" ||
      evt.key === "$" ||
      evt.key === "%" ||
      evt.key === "^" ||
      evt.key === "&" ||
      evt.key === "*" ||
      evt.key === "(" ||
      evt.key === "=" ||
      evt.key === "[" ||
      evt.key === "]" ||
      evt.key === "|" ||
      evt.key === "/" ||
      evt.key === ")" ||
      evt.key === ">" ||
      evt.key === ";" ||
      evt.key === "," ||
      evt.key === "{" ||
      evt.key === "}" ||
      evt.key === ":" ||
      evt.key === "<" ||
      evt.key === "฿" ||
      evt.key === "." ||
      evt.key === "%" ||
      evt.key === "_" ||
      evt.key === "€" ||
      evt.key === "¥" ||
      evt.key === "•" ||
      evt.key === "๑" ||
      evt.key === "๒" ||
      evt.key === "๓" ||
      evt.key === "๔" ||
      evt.key === "๕" ||
      evt.key === "๖" ||
      evt.key === "๗" ||
      evt.key === "๘" ||
      evt.key === "๙" ||
      evt.key === "\u00a9" ||
      evt.key === "\u00ae" ||
      evt.key === "[\u2000-\u3300]" ||
      evt.key === "\ud83c[\ud000-\udfff]" ||
      evt.key === "\ud83d[\ud000-\udfff]" ||
      evt.key === "\ud83e[\ud000-\udfff]" ||
      evt.key === "-"
    ) {
      evt.preventDefault();
    }
  };
  pushthaiENGass = (evt) => {
    if (
      evt.key === "+" ||
      evt.key === "?" ||
      evt.key === "!" ||
      evt.key === "@" ||
      evt.key === "#" ||
      evt.key === "$" ||
      evt.key === "%" ||
      evt.key === "^" ||
      evt.key === "&" ||
      evt.key === "*" ||
      evt.key === "(" ||
      evt.key === "=" ||
      evt.key === "[" ||
      evt.key === "]" ||
      evt.key === "|" ||
      evt.key === ")" ||
      evt.key === ">" ||
      evt.key === ";" ||
      evt.key === "," ||
      evt.key === "{" ||
      evt.key === "}" ||
      evt.key === ":" ||
      evt.key === "<" ||
      evt.key === "฿" ||
      evt.key === "%" ||
      evt.key === "_" ||
      evt.key === "€" ||
      evt.key === "¥" ||
      evt.key === "•" ||
      evt.key === "๑" ||
      evt.key === "๒" ||
      evt.key === "๓" ||
      evt.key === "๔" ||
      evt.key === "๕" ||
      evt.key === "๖" ||
      evt.key === "๗" ||
      evt.key === "๘" ||
      evt.key === "๙" ||
      evt.key === "\u00a9" ||
      evt.key === "\u00ae" ||
      evt.key === "[\u2000-\u3300]" ||
      evt.key === "\ud83c[\ud000-\udfff]" ||
      evt.key === "\ud83d[\ud000-\udfff]" ||
      evt.key === "\ud83e[\ud000-\udfff]" 
    ) {
      evt.preventDefault();
    }
  };
  pushthaiENGsub = (evt) => {
    if (
      evt.key === "+" ||
      evt.key === "?" ||
      evt.key === "!" ||
      evt.key === "@" ||
      evt.key === "#" ||
      evt.key === "$" ||
      evt.key === "%" ||
      evt.key === "^" ||
      evt.key === "&" ||
      evt.key === "*" ||
      evt.key === "=" ||
      evt.key === "[" ||
      evt.key === "]" ||
      evt.key === "|" ||
      evt.key === "/" ||
      evt.key === ">" ||
      evt.key === ";" ||
      evt.key === "," ||
      evt.key === "{" ||
      evt.key === "}" ||
      evt.key === ":" ||
      evt.key === "<" ||
      evt.key === "฿" ||
      evt.key === "." ||
      evt.key === "%" ||
      evt.key === "_" ||
      evt.key === "€" ||
      evt.key === "¥" ||
      evt.key === "•" ||
      evt.key === "๑" ||
      evt.key === "๒" ||
      evt.key === "๓" ||
      evt.key === "๔" ||
      evt.key === "๕" ||
      evt.key === "๖" ||
      evt.key === "๗" ||
      evt.key === "๘" ||
      evt.key === "๙" ||
      evt.key === "\u00a9" ||
      evt.key === "\u00ae" ||
      evt.key === "[\u2000-\u3300]" ||
      evt.key === "\ud83c[\ud000-\udfff]" ||
      evt.key === "\ud83d[\ud000-\udfff]" ||
      evt.key === "\ud83e[\ud000-\udfff]"
    ) {
      evt.preventDefault();
    }
  };
  pushthai = (evt) => {
    if (
      evt.key === "+" ||
      evt.key === "?" ||
      evt.key === "!" ||
      evt.key === "@" ||
      evt.key === "#" ||
      evt.key === "$" ||
      evt.key === "%" ||
      evt.key === "^" ||
      evt.key === "&" ||
      evt.key === "*" ||
      evt.key === "(" ||
      evt.key === "=" ||
      evt.key === "[" ||
      evt.key === "]" ||
      evt.key === "|" ||
      evt.key === "/" ||
      evt.key === ")" ||
      evt.key === ">" ||
      evt.key === ";" ||
      evt.key === "," ||
      evt.key === "{" ||
      evt.key === "}" ||
      evt.key === ":" ||
      evt.key === "<" ||
      evt.key === "฿" ||
      evt.key === "." ||
      evt.key === "%" ||
      evt.key === "_" ||
      evt.key === "€" ||
      evt.key === "¥" ||
      evt.key === "•" ||
      evt.key === "๑" ||
      evt.key === "๒" ||
      evt.key === "๓" ||
      evt.key === "๔" ||
      evt.key === "๕" ||
      evt.key === "๖" ||
      evt.key === "๗" ||
      evt.key === "๘" ||
      evt.key === "๙" ||
      evt.key === "\u00a9" ||
      evt.key === "\u00ae" ||
      evt.key === "[\u2000-\u3300]" ||
      evt.key === "\ud83c[\ud000-\udfff]" ||
      evt.key === "\ud83d[\ud000-\udfff]" ||
      evt.key === "\ud83e[\ud000-\udfff]" ||
      evt.key === "-" ||
      evt.key === "q" ||
      evt.key === "w" ||
      evt.key === "e" ||
      evt.key === "r" ||
      evt.key === "t" ||
      evt.key === "y" ||
      evt.key === "u" ||
      evt.key === "i" ||
      evt.key === "o" ||
      evt.key === "p" ||
      evt.key === "a" ||
      evt.key === "s" ||
      evt.key === "d" ||
      evt.key === "f" ||
      evt.key === "g" ||
      evt.key === "h" ||
      evt.key === "j" ||
      evt.key === "k" ||
      evt.key === "l" ||
      evt.key === "z" ||
      evt.key === "x" ||
      evt.key === "c" ||
      evt.key === "v" ||
      evt.key === "b" ||
      evt.key === "n" ||
      evt.key === "m" ||
      evt.key === "Q" ||
      evt.key === "W" ||
      evt.key === "E" ||
      evt.key === "R" ||
      evt.key === "T" ||
      evt.key === "Y" ||
      evt.key === "U" ||
      evt.key === "I" ||
      evt.key === "O" ||
      evt.key === "P" ||
      evt.key === "A" ||
      evt.key === "S" ||
      evt.key === "D" ||
      evt.key === "F" ||
      evt.key === "G" ||
      evt.key === "H" ||
      evt.key === "J" ||
      evt.key === "K" ||
      evt.key === "L" ||
      evt.key === "Z" ||
      evt.key === "X" ||
      evt.key === "C" ||
      evt.key === "V" ||
      evt.key === "B" ||
      evt.key === "N" ||
      evt.key === "M"
    ) {
      evt.preventDefault();
    }
  };
  pushthaiNotNum = (evt) => {
    if (
      evt.key === "+" ||
      evt.key === "?" ||
      evt.key === "!" ||
      evt.key === "@" ||
      evt.key === "#" ||
      evt.key === "$" ||
      evt.key === "%" ||
      evt.key === "^" ||
      evt.key === "&" ||
      evt.key === "*" ||
      evt.key === "(" ||
      evt.key === "=" ||
      evt.key === "[" ||
      evt.key === "]" ||
      evt.key === "|" ||
      evt.key === "/" ||
      evt.key === ")" ||
      evt.key === ">" ||
      evt.key === ";" ||
      evt.key === "," ||
      evt.key === "{" ||
      evt.key === "}" ||
      evt.key === ":" ||
      evt.key === "<" ||
      evt.key === "฿" ||
      evt.key === "." ||
      evt.key === "%" ||
      evt.key === "_" ||
      evt.key === "€" ||
      evt.key === "¥" ||
      evt.key === "•" ||
      evt.key === "๑" ||
      evt.key === "๒" ||
      evt.key === "๓" ||
      evt.key === "๔" ||
      evt.key === "๕" ||
      evt.key === "๖" ||
      evt.key === "๗" ||
      evt.key === "๘" ||
      evt.key === "๙" ||
      evt.key === "\u00a9" ||
      evt.key === "\u00ae" ||
      evt.key === "[\u2000-\u3300]" ||
      evt.key === "\ud83c[\ud000-\udfff]" ||
      evt.key === "\ud83d[\ud000-\udfff]" ||
      evt.key === "\ud83e[\ud000-\udfff]" ||
      evt.key === "-" ||
      evt.key === "q" ||
      evt.key === "w" ||
      evt.key === "e" ||
      evt.key === "r" ||
      evt.key === "t" ||
      evt.key === "y" ||
      evt.key === "u" ||
      evt.key === "i" ||
      evt.key === "o" ||
      evt.key === "p" ||
      evt.key === "a" ||
      evt.key === "s" ||
      evt.key === "d" ||
      evt.key === "f" ||
      evt.key === "g" ||
      evt.key === "h" ||
      evt.key === "j" ||
      evt.key === "k" ||
      evt.key === "l" ||
      evt.key === "z" ||
      evt.key === "x" ||
      evt.key === "c" ||
      evt.key === "v" ||
      evt.key === "b" ||
      evt.key === "n" ||
      evt.key === "m" ||
      evt.key === "Q" ||
      evt.key === "W" ||
      evt.key === "E" ||
      evt.key === "R" ||
      evt.key === "T" ||
      evt.key === "Y" ||
      evt.key === "U" ||
      evt.key === "I" ||
      evt.key === "O" ||
      evt.key === "P" ||
      evt.key === "A" ||
      evt.key === "S" ||
      evt.key === "D" ||
      evt.key === "F" ||
      evt.key === "G" ||
      evt.key === "H" ||
      evt.key === "J" ||
      evt.key === "K" ||
      evt.key === "L" ||
      evt.key === "Z" ||
      evt.key === "X" ||
      evt.key === "C" ||
      evt.key === "V" ||
      evt.key === "B" ||
      evt.key === "N" ||
      evt.key === "M" ||
      evt.key === "0" ||
      evt.key === "1" ||
      evt.key === "2" ||
      evt.key === "3" ||
      evt.key === "4" ||
      evt.key === "5" ||
      evt.key === "6" ||
      evt.key === "7" ||
      evt.key === "8" ||
      evt.key === "9"
    ) {
      evt.preventDefault();
    }
  };
  pushthaiENGNotNum = (evt) => {
    if (
      evt.key === "+" ||
      evt.key === "?" ||
      evt.key === "!" ||
      evt.key === "@" ||
      evt.key === "#" ||
      evt.key === "$" ||
      evt.key === "%" ||
      evt.key === "^" ||
      evt.key === "&" ||
      evt.key === "*" ||
      evt.key === "(" ||
      evt.key === "=" ||
      evt.key === "[" ||
      evt.key === "]" ||
      evt.key === "|" ||
      evt.key === "/" ||
      evt.key === ")" ||
      evt.key === ">" ||
      evt.key === ";" ||
      evt.key === "," ||
      evt.key === "{" ||
      evt.key === "}" ||
      evt.key === ":" ||
      evt.key === "<" ||
      evt.key === "฿" ||
      evt.key === "." ||
      evt.key === "%" ||
      evt.key === "_" ||
      evt.key === "€" ||
      evt.key === "¥" ||
      evt.key === "•" ||
      evt.key === "๑" ||
      evt.key === "๒" ||
      evt.key === "๓" ||
      evt.key === "๔" ||
      evt.key === "๕" ||
      evt.key === "๖" ||
      evt.key === "๗" ||
      evt.key === "๘" ||
      evt.key === "๙" ||
      evt.key === "\u00a9" ||
      evt.key === "\u00ae" ||
      evt.key === "[\u2000-\u3300]" ||
      evt.key === "\ud83c[\ud000-\udfff]" ||
      evt.key === "\ud83d[\ud000-\udfff]" ||
      evt.key === "\ud83e[\ud000-\udfff]" ||
      evt.key === "-" ||
      evt.key === "0" ||
      evt.key === "1" ||
      evt.key === "2" ||
      evt.key === "3" ||
      evt.key === "4" ||
      evt.key === "5" ||
      evt.key === "6" ||
      evt.key === "7" ||
      evt.key === "8" ||
      evt.key === "9"
    ) {
      evt.preventDefault();
    }
  };
  onsave1 = async () => {
    this.setState({ loading: true });
    if (this.state.id1 !== null && this.state.id1 !== undefined) {
      let F = [];
      for (let index = 0; index <= this.state.subject.length - 1; index++) {
        if (
          this.state.subject[index].nameSubject === this.state.seNameSub1 &&
          Number(this.state.subject[index].creditSubject) ===
            Number(this.state.seCreditSub1) &&
          this.state.subject[index].groupLearning === this.state.seGL1
        ) {
          F.push("a");
        }
      }
      if (F.length === 0) {
        db.collection("subject")
          .doc(this.state.id1)
          .update({
            idSubject: this.state.seIdSub1,
            nameSubject: this.state.seNameSub1,
            creditSubject: this.state.seCreditSub1,
            groupLearning: this.state.seGL1,
          })
          .then(async () => {
            for (
              let index = 0;
              index <= this.state.subject.length - 1;
              index++
            ) {
              if (this.state.subject[index].id === this.state.id1) {
                let id = this.state.subject[index].id;
                await this.state.subject.splice(index, 1);
                await this.setState({
                  subject: [
                    {
                      id: id,
                      idSubject: this.state.seIdSub1,
                      nameSubject: this.state.seNameSub1,
                      creditSubject: this.state.seCreditSub1,
                      groupLearning: this.state.seGL1,
                    },
                    ...this.state.subject,
                  ],
                });
              }
            }
            message.success(`แก้ไขรหัสวิชา ${this.state.seIdSub1} สําเร็จ`);
            this.setState({
              seCreditSub1: null,
              seIdSub1: null,
              seNameSub1: null,
              seGL1: null,
              id1: null,
              visible: false,
              loading: false,
            });
          })
          .catch(async (e) => {
            message.error(`การแก้ไขรายวิชาล้มเหลว`);
            this.setState({
              loading: false,
            });
          });
      } else {
        message.error(
          `รหัสวิชา ${this.state.seIdSub1} ไม่มีการเปลี่ยนแปลงข้อมูล`
        );
        this.setState({
          loading: false,
        });
      }
    } else {
      let F = [];
      for (let index = 0; index <= this.state.subject.length - 1; index++) {
        if (this.state.subject[index].idSubject === this.state.seIdSub1) {
          F.push("a");
        }
      }
      if (F.length === 0) {
        db.collection("subject")
          .add({
            idSubject: this.state.seIdSub1,
            nameSubject: this.state.seNameSub1,
            creditSubject: this.state.seCreditSub1,
            groupLearning: this.state.seGL1,
          })
          .then(async (e) => {
            await this.setState({
              subject: [
                {
                  id: e.id,
                  idSubject: this.state.seIdSub1,
                  nameSubject: this.state.seNameSub1,
                  creditSubject: this.state.seCreditSub1,
                  groupLearning: this.state.seGL1,
                },
                ...this.state.subject,
              ],
            });
            message.success(`เพิ่มรหัสวิชา ${this.state.seIdSub1} สําเร็จ`);
            this.setState({
              seCreditSub1: null,
              seIdSub1: null,
              seNameSub1: null,
              seGL1: null,
              id1: null,
              visible: false,
              loading: false,
            });
          })
          .catch(async (e) => {
            message.error(`การเพิ่มรายวิชาล้มเหลว`);
            this.setState({
              loading: false,
            });
          });
      } else {
        message.error(`รหัสวิชา ${this.state.seIdSub1} มีอยู่ในระบบ`);
        this.setState({
          loading: false,
        });
      }
    }
  };
  onsave2 = async () => {
    this.setState({ loading: true });
    if (this.state.id2 !== null && this.state.id2 !== undefined) {
      let F = [];
      let data = [];
      for (let index = 0; index <= this.state.subject.length - 1; index++) {
        if (this.state.subject[index].idSubject === this.state.idSub2) {
          for (let idex = 0; idex <= this.state.course.length - 1; idex++) {
            if (
              this.state.idSub2 === this.state.course[idex].idSubject &&
              Number(this.state.course[idex].level) ===
                Number(this.state.lavel2) &&
              Number(this.state.course[idex].year) ===
                Number(this.state.year2) &&
              Number(this.state.course[idex].term) ===
                Number(this.state.term2) &&
              this.state.course[idex].program === this.state.GL2 &&
              this.state.course[idex].id === this.state.id2
            ) {
              F.push("a");
            }
          }
          data.push({
            hour: this.state.subject[index].creditSubject * 2,
            gl: this.state.subject[index].groupLearning,
          });
        }
      }
      if (F.length === 0 && data.length > 0) {
        db.collection("course")
          .doc(this.state.id2)
          .update({
            groupLearning: data[0].gl,
            hours: data[0].hour,
            idSubject: this.state.idSub2,
            level: this.state.lavel2,
            program: this.state.GL2,
            term: this.state.term2,
            year: Number(this.state.year2),
            all: this.state.all2,
          })
          .then(async () => {
            for (
              let index = 0;
              index <= this.state.course.length - 1;
              index++
            ) {
              if (this.state.course[index].id === this.state.id2) {
                let id = this.state.course[index].id;
                await this.state.course.splice(index, 1);
                await this.setState({
                  course: [
                    {
                      id: id,
                      groupLearning: data[0].gl,
                      hours: data[0].hour,
                      idSubject: this.state.idSub2,
                      level: this.state.lavel2,
                      program: this.state.GL2,
                      term: this.state.term2,
                      year: Number(this.state.year2),
                      all: this.state.all2,
                    },
                    ...this.state.course,
                  ],
                });
              }
            }
            message.success(`แก้ไขหลักสูตร รายวิชา ${this.state.idSub2} ชั้นปีที่ ${this.state.lavel2}
           ปีการศึกษา ${this.state.year2} เทอม ${this.state.term2}  สําเร็จ`);
            this.setState({
              idSub2: null,
              all2: null,
              lavel2: null,
              year2: null,
              GL2: null,
              term2: null,
              visible: false,
              loading: false,
            });
          })
          .catch(async (e) => {
            message.error(`การแก้ไขหลักสูตรล้มเหลว`);
            this.setState({
              loading: false,
            });
          });
      } else {
        message.error(`หลักสูตร รายวิชา ${this.state.idSub2} ชั้นปีที่ ${this.state.lavel2}
        ปีการศึกษา ${this.state.year2} เทอม ${this.state.term2} ไม่มีการเปลี่ยนแปลงข้อมูล`);
        this.setState({
          loading: false,
        });
      }
    } else {
      let F = [];
      let data = [];
      for (let index = 0; index <= this.state.subject.length - 1; index++) {
        if (this.state.subject[index].idSubject === this.state.idSub2) {
          for (let idex = 0; idex <= this.state.course.length - 1; idex++) {
            if (
              this.state.subject[index].idSubject ===
                this.state.course[idex].idSubject &&
              Number(this.state.course[idex].level) ===
                Number(this.state.lavel2) &&
              Number(this.state.course[idex].year) ===
                Number(this.state.year2) &&
              Number(this.state.course[idex].term) ===
                Number(this.state.term2) &&
              this.state.course[idex].program === this.state.GL2
            ) {
              F.push("a");
            }
          }
          data.push({
            hour: this.state.subject[index].creditSubject * 2,
            gl: this.state.subject[index].groupLearning,
          });
        }
      }
      if (F.length === 0 && data.length > 0) {
        db.collection("course")
          .add({
            groupLearning: data[0].gl,
            hours: data[0].hour,
            idSubject: this.state.idSub2,
            level: this.state.lavel2,
            program: this.state.GL2,
            term: this.state.term2,
            year: Number(this.state.year2),
            all: this.state.all2,
          })
          .then(async (e) => {
            await this.setState({
              course: [
                {
                  id: e.id,
                  groupLearning: data[0].gl,
                  hours: data[0].hour,
                  idSubject: this.state.idSub2,
                  level: this.state.lavel2,
                  program: this.state.GL2,
                  term: this.state.term2,
                  year: Number(this.state.year2),
                  all: this.state.all2,
                },
                ...this.state.course,
              ],
            });
            message.success(`เพิ่มหลักสูตร รายวิชา ${this.state.idSub2} ชั้นปีที่ ${this.state.lavel2}
        ปีการศึกษา ${this.state.year2} เทอม ${this.state.term2} สําเร็จ`);
            this.setState({
              idSub2: null,
              all2: null,
              lavel2: null,
              year2: null,
              GL2: null,
              term2: null,
              visible: false,
              loading: false,
            });
          })
          .catch(async (e) => {
            message.error(`การเพิ่มหลักสูตรล้มเหลว`);
            this.setState({
              loading: false,
            });
          });
      } else {
        message.error(`หลักสูตร รายวิชา ${this.state.idSub2} ชั้นปีที่ ${this.state.lavel2}
      ปีการศึกษา ${this.state.year2} เทอม ${this.state.term2} มีอยู่ในระบบ`);
        this.setState({
          loading: false,
        });
      }
    }
  };
  onsave3 = async () => {
    this.setState({ loading: true });
    if (this.state.id3 !== null && this.state.id3 !== undefined) {
      let F = [];
      for (let index = 0; index <= this.state.settingRoom.length - 1; index++) {
        if (
          Number(this.state.settingRoom[index].year) ===
            Number(this.state.year3) &&
          Number(this.state.settingRoom[index].level1) ===
            Number(this.state.lavel13) &&
          Number(this.state.settingRoom[index].level2) ===
            Number(this.state.lavel23) &&
          Number(this.state.settingRoom[index].level3) ===
            Number(this.state.lavel33) &&
          Number(this.state.settingRoom[index].level4) ===
            Number(this.state.lavel43) &&
          Number(this.state.settingRoom[index].level5) ===
            Number(this.state.lavel53) &&
          Number(this.state.settingRoom[index].level6) ===
            Number(this.state.lavel63)
        ) {
          F.push("a");
        }
      }
      if (F.length === 0) {
        db.collection("settingRoom")
          .doc(this.state.id3)
          .update({
            year: Number(this.state.year3),
            level1: this.state.lavel13,
            level2: this.state.lavel23,
            level3: this.state.lavel33,
            level4: this.state.lavel43,
            level5: this.state.lavel53,
            level6: this.state.lavel63,
          })
          .then(async () => {
            for (
              let index = 0;
              index <= this.state.settingRoom.length - 1;
              index++
            ) {
              if (this.state.settingRoom[index].id === this.state.id3) {
                let id = this.state.settingRoom[index].id;
                await this.state.settingRoom.splice(index, 1);
                await this.setState({
                  settingRoom: [
                    {
                      id: id,
                      year: Number(this.state.year3),
                      level1: this.state.lavel13,
                      level2: this.state.lavel23,
                      level3: this.state.lavel33,
                      level4: this.state.lavel43,
                      level5: this.state.lavel53,
                      level6: this.state.lavel63,
                    },
                    ...this.state.settingRoom,
                  ],
                });
              }
            }
            message.success(
              `แก้ไขตั้งค่าจำนานห้องเรียนปีการศึกษา ${this.state.year3} สําเร็จ`
            );
            this.setState({
              lavel13: null,
              year3: null,
              lavel23: null,
              lavel33: null,
              lavel43: null,
              lavel53: null,
              lavel63: null,
              id3: null,
              visible: false,
              loading: false,
            });
          })
          .catch(async (e) => {
            message.error(`แก้ไขตั้งค่าจำนานห้องเรียนปีการศึกษาล้มเหลว`);
            this.setState({
              loading: false,
            });
          });
      } else {
        message.error(
          `ตั้งค่าจำนานห้องเรียนปีการศึกษา ${this.state.year3} ไม่มีการเปลี่ยนแปลงข้อมูล`
        );
        this.setState({
          loading: false,
        });
      }
    } else {
      let F = [];
      for (let index = 0; index <= this.state.settingRoom.length - 1; index++) {
        if (
          Number(this.state.settingRoom[index].year) ===
          Number(this.state.year3)
        ) {
          F.push("a");
        }
      }
      if (F.length === 0) {
        db.collection("settingRoom")
          .add({
            year: Number(this.state.year3),
            level1: this.state.lavel13,
            level2: this.state.lavel23,
            level3: this.state.lavel33,
            level4: this.state.lavel43,
            level5: this.state.lavel53,
            level6: this.state.lavel63,
          })
          .then(async (e) => {
            await this.setState({
              settingRoom: [
                {
                  id: e.id,
                  year: Number(this.state.year3),
                  level1: this.state.lavel13,
                  level2: this.state.lavel23,
                  level3: this.state.lavel33,
                  level4: this.state.lavel43,
                  level5: this.state.lavel53,
                  level6: this.state.lavel63,
                },
                ...this.state.settingRoom,
              ],
            });
            message.success(
              `เพิ่มตั้งค่าจำนานห้องเรียนปีการศึกษา ${this.state.year3} สําเร็จ`
            );
            this.setState({
              lavel13: null,
              lavel23: null,
              lavel33: null,
              lavel43: null,
              year3: null,
              lavel53: null,
              lavel63: null,
              id3: null,
              visible: false,
              loading: false,
            });
          })
          .catch(async (e) => {
            message.error(`เพิ่มตั้งค่าจำนานห้องเรียนปีการศึกษาล้มเหลว`);
            this.setState({
              loading: false,
            });
          });
      } else {
        message.error(
          `ตั้งค่าจำนานห้องเรียนปีการศึกษา ${this.state.year3} มีอยู่ในระบบ`
        );
        this.setState({
          loading: false,
        });
      }
    }
  };
  onsave4 = async () => {
    let data = [];
    let idC = [];
    let pg = this.state.pg4;
    this.setState({ loading: true });
    for (let index = 0; index <= this.state.classSchedule.length - 1; index++) {
      if (
        this.state.classSchedule[index].groupStudent === this.state.gs4 &&
        Number(this.state.classSchedule[index].year) ===
          Number(this.state.year4)
      ) {
        await data.push(
          this.state.classSchedule[index].groupStudent,
          this.state.classSchedule[index].year
        );
        await idC.push(this.state.classSchedule[index].id);
      }
    }
    for (let index = 0; index <= idC.length - 1; index++) {
      db.collection("classSchedule")
        .doc(idC[index])
        .update({
          program: this.state.pg4,
        })
        .then(async () => {
          for (
            let idex = 0;
            idex <= this.state.classSchedule.length - 1;
            idex++
          ) {
            if (this.state.classSchedule[idex].id === idC[index]) {
              let id = this.state.classSchedule[idex].id;
              let groupStudent = this.state.classSchedule[idex].groupStudent;
              let term = this.state.classSchedule[idex].term;
              let time = this.state.classSchedule[idex].time;
              let year = this.state.classSchedule[idex].year;
              await this.state.classSchedule.splice(idex, 1);
              await this.setState({
                classSchedule: [
                  {
                    id: id,
                    groupStudent: groupStudent,
                    program: pg,
                    term: term,
                    time: time,
                    year: year,
                  },
                  ...this.state.classSchedule,
                ],
              });
            }
          }
          for (let idex = 0; idex <= this.state.allclass4.length - 1; idex++) {
            if (this.state.allclass4[idex].id === idC[index]) {
              let id = this.state.allclass4[idex].id;
              let groupStudent = this.state.allclass4[idex].groupStudent;
              let term = this.state.allclass4[idex].term;
              let time = this.state.allclass4[idex].time;
              let year = this.state.allclass4[idex].year;
              await this.state.allclass4.splice(idex, 1);
              await this.setState({
                allclass4: [
                  {
                    id: id,
                    groupStudent: groupStudent,
                    program: pg,
                    term: term,
                    time: time,
                    year: year,
                  },
                  ...this.state.allclass4,
                ],
              });
            }
          }
        })
        .catch(async (e) => {
          message.error(`แก้ไขสายการเรียนล้มเหลว`);
          this.setState({
            loading: false,
          });
        });
    }
    message.success(
      `แก้ไขสายการเรียน กลุ่มเรียน ${data[0]} ปีการศึกษา ${data[1]} สําเร็จ`
    );
    this.setState({
      pg4: null,
      id4: null,
      visible: false,
      loading: false,
    });
  };
  onsave5 = async () => {
    this.setState({ loading: true });
    if (this.state.id5 !== null && this.state.id5 !== undefined) {
      let F = [];
      for (let index = 0; index <= this.state.teacher.length - 1; index++) {
        if (this.state.teacher[index].id === this.state.id5) {
          F.push(this.state.teacher[index].idteacher);
        }
      }
      db.collection("teacher")
        .doc(this.state.id5)
        .update({
          fName: this.state.fnameT5,
          hours: Number(this.state.hourT5),
          idteacher: Number(this.state.idT5),
          lName: this.state.lnameT5,
          mainGroupLearning: this.state.mT5,
          pName: this.state.pnameT5,
          secondaryGroupLearning: this.state.sT5,
        })
        .then(async () => {
          for (let index = 0; index <= this.state.teacher.length - 1; index++) {
            if (this.state.teacher[index].id === this.state.id5) {
              let id = this.state.teacher[index].id;
              await this.state.teacher.splice(index, 1);
              await this.setState({
                teacher: [
                  {
                    id: id,
                    fName: this.state.fnameT5,
                    hours: Number(this.state.hourT5),
                    idteacher: this.state.idT5,
                    lName: this.state.lnameT5,
                    mainGroupLearning: this.state.mT5,
                    pName: this.state.pnameT5,
                    secondaryGroupLearning: this.state.sT5,
                  },
                  ...this.state.teacher,
                ],
              });
            }
          }
          message.success(`แก้ไขทะเบียนครู รหัส ${F} สําเร็จ`);
          this.setState({
            fnameT5: null,
            hourT5: null,
            idT5: null,
            lnameT5: null,
            mT5: [],
            pnameT5: null,
            sT5: [],
            seGL5: null,
            id5: null,
            visible: false,
            loading: false,
          });
        })
        .catch(async (e) => {
          message.error(`แก้ไขทะเบียนครูล้มเหลว`);
          this.setState({
            loading: false,
          });
        });
    } else {
      let F = [];
      for (let index = 0; index <= this.state.teacher.length - 1; index++) {
        if (
          Number(this.state.teacher[index].idteacher) ===
          Number(this.state.idT5)
        ) {
          F.push(this.state.teacher[index].idteacher);
        }
      }
      if (F.length === 0) {
        db.collection("teacher")
          .add({
            fName: this.state.fnameT5,
            hours: Number(this.state.hourT5),
            idteacher: Number(this.state.idT5),
            lName: this.state.lnameT5,
            mainGroupLearning: this.state.mT5,
            pName: this.state.pnameT5,
            secondaryGroupLearning: this.state.sT5,
          })
          .then(async (e) => {
            await this.setState({
              teacher: [
                {
                  id: e.id,
                  fName: this.state.fnameT5,
                  hours: Number(this.state.hourT5),
                  idteacher: Number(this.state.idT5),
                  lName: this.state.lnameT5,
                  mainGroupLearning: this.state.mT5,
                  pName: this.state.pnameT5,
                  secondaryGroupLearning: this.state.sT5,
                },
                ...this.state.teacher,
              ],
            });
            message.success(`เพิ่มทะเบียนครู รหัส ${this.state.idT5} สําเร็จ`);
            this.setState({
              fnameT5: null,
              hourT5: null,
              idT5: null,
              lnameT5: null,
              mT5: [],
              seGL5: null,
              pnameT5: null,
              sT5: [],
              id5: null,
              visible: false,
              loading: false,
            });
          })
          .catch(async (e) => {
            message.error(`เพิ่มทะเบียนครูล้มเหลว`);
            this.setState({
              loading: false,
            });
          });
      } else {
        message.error(`ทะเบียนครู รหัส ${this.state.idT5} มีอยู่ในระบบ`);
        this.setState({
          loading: false,
        });
      }
    }
  };
  onsave6 = async () => {
    this.setState({ loading: true });
    if (this.state.id6 !== null && this.state.id6 !== undefined) {
      let F = [];
      for (let index = 0; index <= this.state.classroom.length - 1; index++) {
        if (this.state.classroom[index].id === this.state.id6) {
          F.push(this.state.classroom[index].nameRoom);
        }
      }
      db.collection("classroom")
        .doc(this.state.id6)
        .update({
          TsP: this.state.tsp6,
          groupLearning: this.state.seGL6,
        })
        .then(async () => {
          for (
            let index = 0;
            index <= this.state.classroom.length - 1;
            index++
          ) {
            if (this.state.classroom[index].id === this.state.id6) {
              let id = this.state.classroom[index].id;
              await this.state.classroom.splice(index, 1);
              await this.setState({
                classroom: [
                  {
                    id: id,
                    TsP: this.state.tsp6,
                    groupLearning: this.state.seGL6,
                    nameRoom: this.state.nameroom6,
                  },
                  ...this.state.classroom,
                ],
              });
            }
          }
          message.success(`แก้ไขข้อมูลห้องที่ใช้สอน ห้อง${F} สําเร็จ`);
          this.setState({
            tsp6: [],
            seGL6: null,
            nameroom6: null,
            id6: null,
            visible: false,
            loading: false,
          });
        })
        .catch(async (e) => {
          message.error(`แก้ไขข้อมูลห้องที่ใช้สอนล้มเหลว`);
          this.setState({
            loading: false,
          });
        });
    } else {
      let F = [];
      for (let index = 0; index <= this.state.classroom.length - 1; index++) {
        if (this.state.classroom[index].nameRoom === this.state.nameroom6) {
          F.push(this.state.classroom[index].nameRoom);
        }
      }
      if (F.length === 0) {
        db.collection("classroom")
          .add({
            TsP: this.state.tsp6,
            groupLearning: this.state.seGL6,
            nameRoom: this.state.nameroom6,
          })
          .then(async (e) => {
            await this.setState({
              classroom: [
                {
                  id: e.id,
                  TsP: this.state.tsp6,
                  groupLearning: this.state.seGL6,
                  nameRoom: this.state.nameroom6,
                },
                ...this.state.classroom,
              ],
            });
            message.success(
              `เพิ่มห้องที่ใช้สอน ห้อง${this.state.nameroom6} สําเร็จ`
            );
            this.setState({
              tsp6: [],
              seGL6: null,
              nameroom6: null,
              id6: null,
              visible: false,
              loading: false,
            });
          })
          .catch(async (e) => {
            message.error(`เพิ่มห้องที่ใช้สอนล้มเหลว`);
            this.setState({
              loading: false,
            });
          });
      } else {
        message.error(`ห้องที่ใช้สอน ห้อง${this.state.nameroom6} มีอยู่ในระบบ`);
        this.setState({
          loading: false,
        });
      }
    }
  };
  onsave8 = async () => {
    this.setState({ loading: true });
    if (this.state.id8 !== null && this.state.id8 !== undefined) {
      let F = [];
      let F2 = [];
      for (let index = 0; index <= this.state.student.length - 1; index++) {
        if (this.state.student[index].id === this.state.id8) {
          F.push(this.state.student[index].idStudent);
        }
        if (
          Number(this.state.student[index].no) === Number(this.state.no8) &&
          Number(this.state.student[index].level) ===
            Number(this.state.level8) &&
          Number(this.state.student[index].roomOfLevel) ===
            Number(this.state.roomOfLevel8) &&
          this.state.student[index].id !== this.state.id8
        ) {
          F2.push({
            r: this.state.roomOfLevel8,
            l: this.state.level8,
            n: this.state.no8,
          });
        }
      }
      if (F2.length === 0) {
        db.collection("student")
          .doc(this.state.id8)
          .update({
            no: this.state.no8,
            groupStudent: `${this.state.level8}/${this.state.roomOfLevel8}`,
            pName: this.state.pName8,
            fName: this.state.fName8,
            lName: this.state.lName8,
            level: this.state.level8,
            roomOfLevel: this.state.roomOfLevel8,
            birthday: this.state.birthday8,
            address: this.state.address8,
            tel: this.state.tel8,
            status: this.state.status8,
          })
          .then(async () => {
            for (
              let index = 0;
              index <= this.state.student.length - 1;
              index++
            ) {
              if (this.state.student[index].id === this.state.id8) {
                let id = this.state.student[index].id;
                await this.state.student.splice(index, 1);
                await this.setState({
                  student: [
                    {
                      id: id,
                      idStudent: this.state.idStudent8,
                      groupStudent: `${this.state.level8}/${this.state.roomOfLevel8}`,
                      no: this.state.no8,
                      pName: this.state.pName8,
                      fName: this.state.fName8,
                      lName: this.state.lName8,
                      level: this.state.level8,
                      roomOfLevel: this.state.roomOfLevel8,
                      birthday: this.state.birthday8,
                      address: this.state.address8,
                      tel: this.state.tel8,
                      status: this.state.status8,
                    },
                    ...this.state.student,
                  ],
                });
              }
            }
            message.success(`แก้ไขข้อมูลนักเรียนรหัส ${F} สําเร็จ`);
            this.setState({
              id8: null,
              idStudent8: null,
              no8: null,
              pName8: null,
              fName8: null,
              lName8: null,
              level8: null,
              roomOfLevel8: null,
              birthday8: null,
              address8: null,
              tel8: null,
              status8: null,
              visible: false,
              loading: false,
            });
          })
          .catch(async (e) => {
            message.error(`แก้ไขข้อมูลนักเรียนล้มเหลว`);
            this.setState({
              loading: false,
            });
          });
      } else {
        message.error(
          `เลขที่ ${F2[0].n} ของกลุ่มเรียน ${F2[0].l}/${F2[0].r} มีอยู่ในระบบ`
        );
        this.setState({
          loading: false,
        });
      }
    } else {
      let F = [];
      let F2 = [];
      for (let index = 0; index <= this.state.student.length - 1; index++) {
        if (
          Number(this.state.student[index].idStudent) ===
          Number(this.state.idStudent8)
        ) {
          F.push(this.state.student[index].idStudent);
        }
        if (
          Number(this.state.student[index].no) === Number(this.state.no8) &&
          Number(this.state.student[index].level) ===
            Number(this.state.level8) &&
          Number(this.state.student[index].roomOfLevel) ===
            Number(this.state.roomOfLevel8) &&
          this.state.student[index].idStudent !== this.state.idStudent8
        ) {
          F2.push({
            r: this.state.roomOfLevel8,
            l: this.state.level8,
            n: this.state.no8,
          });
        }
      }
      if (F2.length === 0) {
        if (F.length === 0) {
          db.collection("student")
            .add({
              idStudent: this.state.idStudent8,
              no: this.state.no8,
              groupStudent: `${this.state.level8}/${this.state.roomOfLevel8}`,
              pName: this.state.pName8,
              fName: this.state.fName8,
              lName: this.state.lName8,
              level: this.state.level8,
              roomOfLevel: this.state.roomOfLevel8,
              birthday: this.state.birthday8,
              address: this.state.address8,
              tel: this.state.tel8,
              status: this.state.status8,
            })
            .then(async (e) => {
              await this.setState({
                student: [
                  {
                    id: e.id,
                    idStudent: this.state.idStudent8,
                    no: this.state.no8,
                    groupStudent: `${this.state.level8}/${this.state.roomOfLevel8}`,
                    pName: this.state.pName8,
                    fName: this.state.fName8,
                    lName: this.state.lName8,
                    level: this.state.level8,
                    roomOfLevel: this.state.roomOfLevel8,
                    birthday: this.state.birthday8,
                    address: this.state.address8,
                    tel: this.state.tel8,
                    status: this.state.status8,
                  },
                  ...this.state.student,
                ],
              });
              message.success(
                `เพิ่มนักเรียนรหัส ${this.state.idStudent8} สําเร็จ`
              );
              this.setState({
                id8: null,
                idStudent8: null,
                no8: null,
                pName8: null,
                fName8: null,
                lName8: null,
                level8: null,
                roomOfLevel8: null,
                birthday8: null,
                address8: null,
                tel8: null,
                status8: null,
                visible: false,
                loading: false,
              });
            })
            .catch(async (e) => {
              message.error(`เพิ่มห้องที่ใช้สอนล้มเหลว`);
              this.setState({
                loading: false,
              });
            });
        } else {
          message.error(`นักเรียนรหัส ${this.state.idStudent8} มีอยู่ในระบบ`);
          this.setState({
            loading: false,
          });
        }
      } else {
        message.error(
          `เลขที่ ${F2[0].n} ของกลุ่มเรียน ${F2[0].l}/${F2[0].r} มีอยู่ในระบบ`
        );
        this.setState({
          loading: false,
        });
      }
    }
  };
  showdata1 = async () => {
    for (let index = 0; index <= this.state.subject.length - 1; index++) {
      if (this.state.subject[index].id === this.state.id1) {
        await this.setState({
          seCreditSub1: this.state.subject[index].creditSubject,
          seGL1: this.state.subject[index].groupLearning,
          seIdSub1: this.state.subject[index].idSubject,
          seNameSub1: this.state.subject[index].nameSubject,
          visible: true,
        });
      }
    }
  };
  showdata2 = async () => {
    for (let index = 0; index <= this.state.course.length - 1; index++) {
      if (this.state.course[index].id === this.state.id2) {
        await this.setState({
          idSub2: this.state.course[index].idSubject,
          lavel2: Number(this.state.course[index].level),
          year2: String(this.state.course[index].year),
          GL2: this.state.course[index].program,
          term2: this.state.course[index].term,
          all2: this.state.course[index].all,
          visible: true,
        });
      }
    }
  };
  showdata3 = async () => {
    for (let index = 0; index <= this.state.settingRoom.length - 1; index++) {
      if (this.state.settingRoom[index].id === this.state.id3) {
        await this.setState({
          year3: String(this.state.settingRoom[index].year),
          lavel13: this.state.settingRoom[index].level1,
          lavel23: this.state.settingRoom[index].level2,
          lavel33: this.state.settingRoom[index].level3,
          lavel43: this.state.settingRoom[index].level4,
          lavel53: this.state.settingRoom[index].level5,
          lavel63: this.state.settingRoom[index].level6,
          visible: true,
        });
      }
    }
  };
  showdata4 = async () => {
    for (let index = 0; index <= this.state.allclass4.length - 1; index++) {
      if (this.state.allclass4[index].id === this.state.id4) {
        await this.setState({
          year4: String(this.state.allclass4[index].year),
          pg4: this.state.allclass4[index].program,
          gs4: this.state.allclass4[index].groupStudent,
          visible: true,
        });
      }
    }
  };
  showdata5 = async () => {
    for (let index = 0; index <= this.state.teacher.length - 1; index++) {
      if (this.state.teacher[index].id === this.state.id5) {
        let gl = [];
        for (let idex = 0; idex <= this.state.subject.length - 1; idex++) {
          if (
            this.state.subject[idex].idSubject ===
            this.state.teacher[index].mainGroupLearning[0]
          ) {
            gl.push(this.state.subject[idex].groupLearning);
          }
        }
        if (gl.length !== 0) {
          await this.setState({
            fnameT5: this.state.teacher[index].fName,
            hourT5: this.state.teacher[index].hours,
            idT5: this.state.teacher[index].idteacher,
            lnameT5: this.state.teacher[index].lName,
            mT5:
              this.state.teacher[index].mainGroupLearning.length === 0
                ? []
                : this.state.teacher[index].mainGroupLearning,
            pnameT5: this.state.teacher[index].pName,
            seGL5: gl[0],
            sT5:
              this.state.teacher[index].secondaryGroupLearning.length === 0
                ? []
                : this.state.teacher[index].secondaryGroupLearning,
            visible: true,
          });
        } else {
          await this.setState({
            fnameT5: this.state.teacher[index].fName,
            hourT5: this.state.teacher[index].hours,
            idT5: this.state.teacher[index].idteacher,
            lnameT5: this.state.teacher[index].lName,
            mT5:
              this.state.teacher[index].mainGroupLearning.length === 0
                ? []
                : this.state.teacher[index].mainGroupLearning,
            pnameT5: this.state.teacher[index].pName,
            seGL5: null,
            sT5:
              this.state.teacher[index].secondaryGroupLearning.length === 0
                ? []
                : this.state.teacher[index].secondaryGroupLearning,
            visible: true,
          });
        }
      }
    }
  };
  showdata6 = async () => {
    for (let index = 0; index <= this.state.classroom.length - 1; index++) {
      if (this.state.classroom[index].id === this.state.id6) {
        this.setState({
          nameroom6: this.state.classroom[index].nameRoom,
          tsp6:
            this.state.classroom[index].TsP.length === 0
              ? []
              : this.state.classroom[index].TsP,
          seGL6: this.state.classroom[index].groupLearning,
          visible: true,
        });
      }
    }
  };
  showdata8 = async () => {
    for (let index = 0; index <= this.state.student.length - 1; index++) {
      if (this.state.student[index].id === this.state.id8) {
        this.setState({
          idStudent8: this.state.student[index].idStudent,
          no8: this.state.student[index].no,
          pName8: this.state.student[index].pName,
          fName8: this.state.student[index].fName,
          lName8: this.state.student[index].lName,
          level8: this.state.student[index].level,
          roomOfLevel8: this.state.student[index].roomOfLevel,
          birthday8: this.state.student[index].birthday,
          address8: this.state.student[index].address,
          tel8: this.state.student[index].tel,
          status8: this.state.student[index].status,
          visible: true,
        });
      }
    }
  };
  onDel1 = () => {
    let idsubDel = [];
    db.collection("subject")
      .doc(this.state.id1)
      .delete()
      .then(async () => {
        for (let index = 0; index <= this.state.subject.length - 1; index++) {
          if (this.state.subject[index].id === this.state.id1) {
            await idsubDel.push(this.state.subject[index].idSubject);
            await this.state.subject.splice(index, 1);
            await this.setState({ subject: [...this.state.subject] });
          }
        }
        message.success(`ลบรหัสวิชา ${idsubDel[0]} สําเร็จ`);
        this.setState({
          id1: null,
          visible: false,
          loading: false,
        });
      })
      .catch((e) => {
        message.error(`การลบล้มเหลว`);
      });
  };
  onDel2 = () => {
    let idsubDel = [];
    db.collection("course")
      .doc(this.state.id2)
      .delete()
      .then(async () => {
        for (let index = 0; index <= this.state.course.length - 1; index++) {
          if (this.state.course[index].id === this.state.id2) {
            await idsubDel.push({
              id: this.state.course[index].idSubject,
              level: this.state.course[index].level,
              year: this.state.course[index].year,
              term: this.state.course[index].term,
            });
            await this.state.course.splice(index, 1);
            await this.setState({ course: [...this.state.course] });
          }
        }
        message.success(`ลบหลักสูตร รายวิชา ${idsubDel[0].id} ชั้นปีที่ ${idsubDel[0].level}
        ปีการศึกษา ${idsubDel[0].year} เทอม ${idsubDel[0].term} สําเร็จ`);
        this.setState({
          id2: null,
          visible: false,
          loading: false,
        });
      })
      .catch((e) => {
        message.error(`การลบหลักสูตรล้มเหลว`);
      });
  };
  onDel3 = () => {
    let idsubDel = [];
    db.collection("settingRoom")
      .doc(this.state.id3)
      .delete()
      .then(async () => {
        for (
          let index = 0;
          index <= this.state.settingRoom.length - 1;
          index++
        ) {
          if (this.state.settingRoom[index].id === this.state.id3) {
            await idsubDel.push(this.state.settingRoom[index].year);
            await this.state.settingRoom.splice(index, 1);
            await this.setState({ settingRoom: [...this.state.settingRoom] });
          }
        }
        message.success(
          `ลบตั้งค่าจำนวนห้องเรียนปีการศึกษา ${idsubDel[0]} สําเร็จ`
        );
        this.setState({
          id3: null,
          visible: false,
          loading: false,
        });
      })
      .catch((e) => {
        message.error(`การลบล้มเหลว`);
      });
  };
  onDel5 = () => {
    let idsubDel = [];
    db.collection("teacher")
      .doc(this.state.id5)
      .delete()
      .then(async () => {
        for (let index = 0; index <= this.state.teacher.length - 1; index++) {
          if (this.state.teacher[index].id === this.state.id5) {
            await idsubDel.push(this.state.teacher[index].idteacher);
            await this.state.teacher.splice(index, 1);
            await this.setState({ teacher: [...this.state.teacher] });
          }
        }
        message.success(`ลบทะเบียนครู รหัส ${idsubDel[0]} สําเร็จ`);
        this.setState({
          id5: null,
          visible: false,
          loading: false,
        });
      })
      .catch((e) => {
        message.error(`การลบล้มเหลว`);
      });
  };
  onDel6 = () => {
    let idsubDel = [];
    db.collection("classroom")
      .doc(this.state.id6)
      .delete()
      .then(async () => {
        for (let index = 0; index <= this.state.classroom.length - 1; index++) {
          if (this.state.classroom[index].id === this.state.id6) {
            await idsubDel.push(this.state.classroom[index].nameRoom);
            await this.state.classroom.splice(index, 1);
            await this.setState({ classroom: [...this.state.classroom] });
          }
        }
        message.success(`ลบห้องเรียน ${idsubDel[0]} สําเร็จ`);
        this.setState({
          id6: null,
          visible: false,
          loading: false,
        });
      })
      .catch((e) => {
        message.error(`การลบล้มเหลว`);
      });
  };
  onDel8 = () => {
    let idsubDel = [];
    db.collection("student")
      .doc(this.state.id8)
      .delete()
      .then(async () => {
        for (let index = 0; index <= this.state.student.length - 1; index++) {
          if (this.state.student[index].id === this.state.id8) {
            await idsubDel.push(this.state.student[index].idStudent);
            await this.state.student.splice(index, 1);
            await this.setState({ student: [...this.state.student] });
          }
        }
        message.success(`ลบข้อมูลนักเรียนรหัส ${idsubDel[0]} สําเร็จ`);
        this.setState({
          id8: null,
          visible: false,
          loading: false,
        });
      })
      .catch((e) => {
        message.error(`การลบล้มเหลว`);
      });
  };
  onCL2 = async (value) => {
    if (value === 1 || value === 2 || value === 3) {
      await this.setState({
        lavel2: value,
        GL2: "ทั่วไป",
      });
    } else {
      await this.setState({
        lavel2: value,
        GL2: null,
      });
    }
  };
  onCS2 = async (value) => {
    await this.setState({
      idSub2: value,
    });
  };
  onCAll2 = async (value) => {
    await this.setState({
      all2: value,
    });
  };
  onCGL2 = async (value) => {
    await this.setState({
      GL2: value,
    });
  };
  onCT2 = async (value) => {
    await this.setState({
      term2: value,
    });
  };
  onCPG4 = async (value) => {
    await this.setState({
      pg4: value,
    });
  };
  onChangeDate = async (date, dateString) => {
    if (dateString.length === 0) {
      await this.setState({ birthday8: null });
    } else {
      await this.setState({ birthday8: dateString });
    }
  };
  login = async (e) => {
    aut
      .signInWithEmailAndPassword(
        this.state.emailSignIN,
        this.state.passwordSignIN
      )
      .then((response) => {
        this.setState({
          currentUser: response.user,
          slogin: false,
          emailSignIN: null,
          passwordSignIN: null,
        });
        message.success(`เข้าสู่ระบบสําเร็จ`);
      })
      .catch((error) => {
        this.setState({
          message: error.message,
        });
        message.error(`เข้าสู่ระบบล้มเหลว`);
      });
  };
  logout = async (e) => {
    auth.signOut().then((response) => {
      this.setState({
        currentUser: null,
        slogout: false,
      });
    });
  };
  showlogin = async (e) => {
    this.setState({
      slogin: true,
    });
  };
  showlogout = async (e) => {
    this.setState({
      slogout: !this.state.slogout,
    });
  };
  filterId = (user) => {
    let tmp = this.state.subject.filter((i) => i.idSubject === user);
    if (tmp.length > 0) {
      return tmp[0].nameSubject
    }
  };
  onCSO10 = async (value) => {
  await  this.setState({term10:Number(value.substring(0,1)),
    year10:Number(value.substring(2,value.length)),seTY10:value,gs10:null, show7:0});
    let dataT = [];
    for (let iex = 0; iex <= this.state.settingRoom.length-1; iex++) {
      if (this.state.settingRoom[iex].year === this.state.year10) {
        for (let index = 1; index <= this.state.settingRoom[iex].level1; index++) {
          dataT.push("1/" + index)
        }
        for (let index = 1; index <= this.state.settingRoom[iex].level2; index++) {
          dataT.push("2/" + index)
        }
        for (let index = 1; index <= this.state.settingRoom[iex].level3; index++) {
          dataT.push("3/" + index)
        }
        for (let index = 1; index <= this.state.settingRoom[iex].level4; index++) {
          dataT.push("4/" + index)
        }
        for (let index = 1; index <= this.state.settingRoom[iex].level5; index++) {
          dataT.push("5/" + index)
        }
        for (let index = 1; index <= this.state.settingRoom[iex].level6; index++) {
          dataT.push("6/" + index)
        }
      }
    }
    await this.setState({allclass10:dataT})
  };
  onCGs10 = async (value) => {
    await  this.setState({gs10:value,show7:0,is1: null,
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
      it45: null,});
    await this.filterIDSub10();
    await this.setState({show7:1})
  };
  filterIds10 = (user,se) => {
    let tmp = [];
    for (let index = 0; index <= this.state.classSchedule.length-1; index++) {
      if (this.state.classSchedule[index].year === this.state.year10 && 
        this.state.term10 === this.state.classSchedule[index].term && 
        this.state.gs10 === this.state.classSchedule[index].groupStudent &&
        this.state.classSchedule[index].time.length !== 0) {
          for (let iex = 0; iex <= this.state.classSchedule[index].time.length-1; iex++) {
            if (this.state.classSchedule[index].time[iex].time === user ) {
              tmp.push(this.state.classSchedule[index].time[iex])
            }
          }
      }
    }
    if (tmp.length > 0 && tmp[0].idSubject === "พักกลางวัน" ) {
      return "พักกลางวัน"
            }
    if (tmp.length > 0 && tmp[0].idSubject !== "พักกลางวัน") {
    let all = []
    for (let index = 0; index <= this.state.course.length - 1; index++) {
      if (this.state.course[index].idSubject === tmp[0].idSubject) {
        all.push(this.state.course[index].all)
      }
    }
    if (all.length !== 0 && all[0] === "ไม่เรียนรวม" ) {
      if (tmp.length > 0 && se === 1) {
      return tmp[0].idSubject
    }
    if (tmp.length > 0 && se === 2) {
            let name = [];
            for (
              let index = 0;
              index <= this.state.teacher.length - 1;
              index++
            ) {
              if (Number(this.state.teacher[index].idteacher) === Number(tmp[0].idteacher)) {
                name.push(this.state.teacher[index].fName);
              }
            }
      return "อ."+name
    }
    if (tmp.length > 0 && se === 3) {
      return tmp[0].nameRoom
    }
    }
    if (all.length !== 0 && all[0] === "เรียนรวม") {
        for (let ix = 0; ix <= this.state.subject.length-1; ix++) {
          if (this.state.subject[ix].idSubject === tmp[0].idSubject ) {
            return this.state.subject[ix].nameSubject
          }
        }
    }
  }
  };
  onCSO9 = async (value) => {
    await  this.setState({term9:Number(value.substring(0,1)),
      year9:Number(value.substring(2,value.length)),seTY9:value,idtea9:null ,show7:0});
      let dataT = [];
      for (let iex = 0; iex <= this.state.teacher.length-1; iex++) {
        dataT.push(this.state.teacher[iex])
      }
      await this.setState({alltea9:dataT})
    };
    onCTea9 = async (value) => {
      await  this.setState({idtea9:value,show7:0,is1: null,
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
        it45: null,});
      await this.filterIDSub9();
      await this.setState({show7:1})
    };
    filterIds9 = (user,se) => {
      let tmp = [];
      for (let index = 0; index <= this.state.teacherSchedule.length-1; index++) {
        if (this.state.teacherSchedule[index].year === this.state.year9 && 
          this.state.term9 === this.state.teacherSchedule[index].term && 
          this.state.idtea9 === this.state.teacherSchedule[index].idteacher &&
          this.state.teacherSchedule[index].time.length !== 0) {
            for (let iex = 0; iex <= this.state.teacherSchedule[index].time.length-1; iex++) {
              if (this.state.teacherSchedule[index].time[iex].time === user ) {
                tmp.push(this.state.teacherSchedule[index].time[iex])
              }
            }
        }
      }
      if (tmp.length > 0 && tmp[0].idSubject !== "พักกลางวัน") {
      let all = []
      for (let index = 0; index <= this.state.course.length - 1; index++) {
        if (this.state.course[index].idSubject === tmp[0].idSubject) {
          all.push(this.state.course[index].all)
        }
      }
      if (all.length !== 0 && all[0] === "ไม่เรียนรวม" ) {
        if (tmp.length > 0 && se === 1) {
        return tmp[0].idSubject
      }
      if (tmp.length > 0 && se === 2) {
        return tmp[0].groupStudent
      }
      if (tmp.length > 0 && se === 3) {
        return tmp[0].nameRoom
      }
      }
      if (all.length !== 0 && all[0] === "เรียนรวม") {
          for (let ix = 0; ix <= this.state.subject.length-1; ix++) {
            if (this.state.subject[ix].idSubject === tmp[0].idSubject ) {
              return this.state.subject[ix].nameSubject
            }
          }
      }
    }
    };
    filtername9 = (user) => {
      let tmp = this.state.teacher.filter((i) => i.idteacher === this.state.idtea9);
      if (tmp.length > 0 && user === 1) {
        return tmp[0].fName
      }
      if (tmp.length > 0 && user === 2) {
        return tmp[0].lName
      }
    };
    onCSO11 = async (value) => {
      await  this.setState({term11:Number(value.substring(0,1)),
        year11:Number(value.substring(2,value.length)),seTY11:value,cR11:null ,show7:0});
        let dataT = [];
        for (let iex = 0; iex <= this.state.classroom.length-1; iex++) {
          dataT.push(this.state.classroom[iex])
        }
        await this.setState({allCR11:dataT})
      };
      onCCR11 = async (value) => {
        await  this.setState({cR11:value,show7:0,is1: null,
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
          it45: null,});
        await this.filterIDSub11();
        await this.setState({show7:1})
      };
      filterIds11 = (user,se) => {
        let tmp = [];
        for (let index = 0; index <= this.state.classroomSchedule.length-1; index++) {
          if (this.state.classroomSchedule[index].year === this.state.year11 && 
            this.state.term11 === this.state.classroomSchedule[index].term && 
            this.state.cR11 === this.state.classroomSchedule[index].nameRoom &&
            this.state.classroomSchedule[index].time.length !== 0) {
              for (let iex = 0; iex <= this.state.classroomSchedule[index].time.length-1; iex++) {
                if (this.state.classroomSchedule[index].time[iex].time === user ) {
                  tmp.push(this.state.classroomSchedule[index].time[iex])
                }
              }
          }
        }
        console.log(tmp);
        if (tmp.length > 0 && tmp[0].idSubject !== "พักกลางวัน") {
        let all = []
        for (let index = 0; index <= this.state.course.length - 1; index++) {
          if (this.state.course[index].idSubject === tmp[0].idSubject) {
            all.push(this.state.course[index].all)
          }
        }
        if (all.length !== 0 && all[0] === "ไม่เรียนรวม" ) {
          if (tmp.length > 0 && se === 1) {
          return tmp[0].idSubject
        }
        if (tmp.length > 0 && se === 2) {
          return tmp[0].groupStudent
        }
        if (tmp.length > 0 && se === 3) {
          let name = [];
          for (
            let index = 0;
            index <= this.state.teacher.length - 1;
            index++
          ) {
            if (Number(this.state.teacher[index].idteacher) === Number(tmp[0].idteacher)) {
              name.push(this.state.teacher[index].fName);
            }
          }
    return "อ."+name
        }
        }
        if (all.length !== 0 && all[0] === "เรียนรวม") {
            for (let ix = 0; ix <= this.state.subject.length-1; ix++) {
              if (this.state.subject[ix].idSubject === tmp[0].idSubject ) {
                return this.state.subject[ix].nameSubject
              }
            }
        }
      }
      };
  render() {
    const { Column } = Table;
    const { loadings, visible, setVisible, slogin } = this.state;
    let subjact = this.state.selectCos.map((data) => (
      <Option key={data.idSubject} value={data.idSubject}>
        {data.idSubject+" "+data.nameSubject}
      </Option>
    ));
    let deltime = this.state.delTime.map((data) => (
      <Option key={data} value={data}>
        {data === 1
          ? "วันจันทร์ คาบที่1"
          : data === 2
          ? "วันจันทร์ คาบที่2"
          : data === 3
          ? "วันจันทร์ คาบที่3"
          : data === 4
          ? "วันจันทร์ คาบที่4"
          : data === 5
          ? "วันจันทร์ คาบที่5"
          : data === 6
          ? "วันจันทร์ คาบที่6"
          : data === 7
          ? "วันจันทร์ คาบที่7"
          : data === 8
          ? "วันจันทร์ คาบที่8"
          : data === 9
          ? "วันจันทร์ คาบที่9"
          : data === 10
          ? "วันอังคาร คาบที่1"
          : data === 11
          ? "วันอังคาร คาบที่2"
          : data === 12
          ? "วันอังคาร คาบที่3"
          : data === 13
          ? "วันอังคาร คาบที่4"
          : data === 14
          ? "วันอังคาร คาบที่5"
          : data === 15
          ? "วันอังคาร คาบที่6"
          : data === 16
          ? "วันอังคาร คาบที่7"
          : data === 17
          ? "วันอังคาร คาบที่8"
          : data === 18
          ? "วันอังคาร คาบที่9"
          : data === 19
          ? "วันพุธ คาบที่1"
          : data === 20
          ? "วันพุธ คาบที่2"
          : data === 21
          ? "วันพุธ คาบที่3"
          : data === 22
          ? "วันพุธ คาบที่4"
          : data === 23
          ? "วันพุธ คาบที่5"
          : data === 24
          ? "วันพุธ คาบที่6"
          : data === 25
          ? "วันพุธ คาบที่7"
          : data === 26
          ? "วันพุธ คาบที่8"
          : data === 27
          ? "วันพุธ คาบที่9"
          : data === 28
          ? "วันพฤหัสบดี คาบที่1"
          : data === 29
          ? "วันพฤหัสบดี คาบที่2"
          : data === 30
          ? "วันพฤหัสบดี คาบที่3"
          : data === 31
          ? "วันพฤหัสบดี คาบที่4"
          : data === 32
          ? "วันพฤหัสบดี คาบที่5"
          : data === 33
          ? "วันพฤหัสบดี คาบที่6"
          : data === 34
          ? "วันพฤหัสบดี คาบที่7"
          : data === 35
          ? "วันพฤหัสบดี คาบที่8"
          : data === 36
          ? "วันพฤหัสบดี คาบที่9"
          : data === 37
          ? "วันศุกร์ คาบที่1"
          : data === 38
          ? "วันศุกร์ คาบที่2"
          : data === 39
          ? "วันศุกร์ คาบที่3"
          : data === 40
          ? "วันศุกร์ คาบที่4"
          : data === 41
          ? "วันศุกร์ คาบที่5"
          : data === 42
          ? "วันศุกร์ คาบที่6"
          : data === 43
          ? "วันศุกร์ คาบที่7"
          : data === 44
          ? "วันศุกร์ คาบที่8"
          : data === 45
          ? "วันศุกร์ คาบที่9"
          : null}
        {}
      </Option>
    ));
    let teacherF = this.state.selectTeaF.map((data) => (
      <Option key={data.id} value={data.id}>
        {data.name}
      </Option>
    ));
    let teacherS = this.state.selectTeaS.map((data) => (
      <Option key={data.id} value={data.id}>
        {data.name}
      </Option>
    ));
    let tsp = this.state.tsp.map((data) => (
      <Option key={data} value={data}>
        {data}
      </Option>
    ));
    let mainRoom = this.state.mainRoomG.map((data) => (
      <Option key={data} value={data}>
        {data}
      </Option>
    ));
    let secRoom = this.state.secRoomG.map((data) => (
      <Option key={data} value={data}>
        {data}
      </Option>
    ));
    let time = this.state.allTime.map((data) => (
      <Option key={data} value={data}>
        {data === 1
          ? "วันจันทร์ คาบที่1"
          : data === 2
          ? "วันจันทร์ คาบที่2"
          : data === 3
          ? "วันจันทร์ คาบที่3"
          : data === 4
          ? "วันจันทร์ คาบที่4"
          : data === 5
          ? "วันจันทร์ คาบที่5"
          : data === 6
          ? "วันจันทร์ คาบที่6"
          : data === 7
          ? "วันจันทร์ คาบที่7"
          : data === 8
          ? "วันจันทร์ คาบที่8"
          : data === 9
          ? "วันจันทร์ คาบที่9"
          : data === 10
          ? "วันอังคาร คาบที่1"
          : data === 11
          ? "วันอังคาร คาบที่2"
          : data === 12
          ? "วันอังคาร คาบที่3"
          : data === 13
          ? "วันอังคาร คาบที่4"
          : data === 14
          ? "วันอังคาร คาบที่5"
          : data === 15
          ? "วันอังคาร คาบที่6"
          : data === 16
          ? "วันอังคาร คาบที่7"
          : data === 17
          ? "วันอังคาร คาบที่8"
          : data === 18
          ? "วันอังคาร คาบที่9"
          : data === 19
          ? "วันพุธ คาบที่1"
          : data === 20
          ? "วันพุธ คาบที่2"
          : data === 21
          ? "วันพุธ คาบที่3"
          : data === 22
          ? "วันพุธ คาบที่4"
          : data === 23
          ? "วันพุธ คาบที่5"
          : data === 24
          ? "วันพุธ คาบที่6"
          : data === 25
          ? "วันพุธ คาบที่7"
          : data === 26
          ? "วันพุธ คาบที่8"
          : data === 27
          ? "วันพุธ คาบที่9"
          : data === 28
          ? "วันพฤหัสบดี คาบที่1"
          : data === 29
          ? "วันพฤหัสบดี คาบที่2"
          : data === 30
          ? "วันพฤหัสบดี คาบที่3"
          : data === 31
          ? "วันพฤหัสบดี คาบที่4"
          : data === 32
          ? "วันพฤหัสบดี คาบที่5"
          : data === 33
          ? "วันพฤหัสบดี คาบที่6"
          : data === 34
          ? "วันพฤหัสบดี คาบที่7"
          : data === 35
          ? "วันพฤหัสบดี คาบที่8"
          : data === 36
          ? "วันพฤหัสบดี คาบที่9"
          : data === 37
          ? "วันศุกร์ คาบที่1"
          : data === 38
          ? "วันศุกร์ คาบที่2"
          : data === 39
          ? "วันศุกร์ คาบที่3"
          : data === 40
          ? "วันศุกร์ คาบที่4"
          : data === 41
          ? "วันศุกร์ คาบที่5"
          : data === 42
          ? "วันศุกร์ คาบที่6"
          : data === 43
          ? "วันศุกร์ คาบที่7"
          : data === 44
          ? "วันศุกร์ คาบที่8"
          : data === 45
          ? "วันศุกร์ คาบที่9"
          : null}
        {}
      </Option>
    ));
    let course2 = this.state.subject.map((data) => (
      <Option key={data.idSubject} value={data.idSubject}>
        {data.idSubject + " " + data.nameSubject}
      </Option>
    ));
    let selectTermYear = this.state.selectTermYear.map((data) => (
      <Option key={data} value={data}>
        {data}
      </Option>
    ));
    let allclass10 = this.state.allclass10.map((data) => (
      <Option key={data} value={data}>
        {data}
      </Option>
    ));
    let cR11 = this.state.allCR11.map((data) => (
      <Option key={data.nameRoom} value={data.nameRoom}>
        {data.nameRoom}
      </Option>
    ));
    let alltea9 = this.state.alltea9.map((data) => (
      <Option key={data.idteacher} value={data.idteacher}>
        {data.idteacher+" "+data.fName}
      </Option>
    ));
    const columns4 = [
      {
        title: "ปีการศึกษา",
        dataIndex: "year",
        key: "year",
        width: "11%",
        sorter: (a, b) => a.year - b.year,
        ...this.getColumnSearchProps("year"),
      },
      {
        title: "กลุ่มเรียน",
        dataIndex: "groupStudent",
        key: "groupStudent",
        width: "11%",
        ...this.getColumnSearchProps("groupStudent"),
      },
      {
        title: "สายการเรียน",
        dataIndex: "program",
        key: "program",
        sorter: (a, b) => a.program.length - b.program.length,
        ellipsis: true,
        width: "11%",
        filters: [
          {
            text: "วิทยาศาสตร์-คณิตศาสตร์",
            value: "วิทยาศาสตร์-คณิตศาสตร์",
          },
          {
            text: "ภาษาอังกฤษ-ภาษาไทย-สังคมศึกษา",
            value: "ภาษาอังกฤษ-ภาษาไทย-สังคมศึกษา",
          },
          ,
          {
            text: "ภาษาอังกฤษ-คณิตศาสตร์",
            value: "ภาษาอังกฤษ-คณิตศาสตร์",
          },
          ,
          {
            text: "ภาษาอังกฤษ-ภาษาจีน",
            value: "ภาษาอังกฤษ-ภาษาจีน",
          },
        ],
        filterMultiple: false,
        onFilter: (value, record) => record.program.indexOf(value) === 0,
      },
      {
        width: "5%",
        value: this.state.pg4,
        title: "Action",
        key: "idSubject",
        render: (text, idSubject) => (
          <Space size="middle">
            <a
              onClick={async (e) => {
                await this.setState({ id4: idSubject.id }, this.showdata4);
              }}
            >
              แก้ไข{" "}
            </a>
            {/* <Popconfirm
                              title="ยืนยันการลบอีกครั้ง"
                              onConfirm={async (e) => {
                                await this.setState(
                                  { id4: idSubject.id },
                                  this.onDel3
                                );
                              }}
                              okText="ยืนยัน"
                              cancelText="ยกเลิก"
                            >
                              <a>ลบ</a>
                            </Popconfirm> */}
          </Space>
        ),
      },
    ];
    let main5 = this.state.main5.map((data) => (
      <Option key={data.idSubject} value={data.idSubject}>
        {data.idSubject}
      </Option>
    ));
    let main6 = this.state.subject.map((data) => (
      <Option key={data.idSubject} value={data.idSubject}>
        {data.idSubject}
      </Option>
    ));
    let sec5 = this.state.sec5.map((data) => (
      <Option key={data.idSubject} value={data.idSubject}>
        {data.idSubject}
      </Option>
    ));
    const dateFormatList = ["DD/MM/YYYY"];
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" onClick={this.onSel}>
          <Menu.Item key="20"icon={<HomeOutlined />} >
                  หน้าหลัก
                </Menu.Item>
            {this.state.currentUser === null ? null : (
              <SubMenu
                key="sub1"
                icon={<ReadOutlined />}
                title="จัดการรายวิชา/หลักสูตร"
              >
                <Menu.Item key="1" disabled={this.state.loadpage === true ? true : false} onClick={this.load1}>
                  จัดการรายวิชา
                </Menu.Item>
                <Menu.Item key="2" disabled={this.state.loadpage === true ? true : false} onClick={this.load2}>
                  จัดการหลักสูตร
                </Menu.Item>
              </SubMenu>
            )}
            {this.state.currentUser === null ? null : (
              <SubMenu
                key="sub2"
                icon={<SettingFilled />}
                title="จัดการห้องเรียน/กำหนดโปรแกรมการเรียน"
              >
                <Menu.Item key="3" disabled={this.state.loadpage === true ? true : false} onClick={this.load3}>
                  ตั้งค่าจำนานห้องเรียน
                </Menu.Item>
                <Menu.Item key="4" disabled={this.state.loadpage === true ? true : false} onClick={this.load4}>
                  กำหนดโปรแกรมการเรียน
                </Menu.Item>
              </SubMenu>
            )}
            {this.state.currentUser === null ? null : (
              <SubMenu key="sub4" icon={<TeamOutlined />} title="จัดการทะเบียน">
                <Menu.Item key="5" disabled={this.state.loadpage === true ? true : false} onClick={this.load5}>
                  จัดการทะเบียนครู
                </Menu.Item>
                <Menu.Item key="8" disabled={this.state.loadpage === true ? true : false} onClick={this.load8}>
                  จัดการทะเบียนนักเรียน
                </Menu.Item>
              </SubMenu>
            )}
            {this.state.currentUser === null ? null : (
              <Menu.Item key="6" disabled={this.state.loadpage === true ? true : false} onClick={this.load6} icon={<BankOutlined />}>
                จัดการห้องที่ใช้สอน
              </Menu.Item>
            )}
            {this.state.currentUser === null ? null : (
              <Menu.Item
                key="7"
                icon={<AppstoreAddOutlined />}
                onClick={this.load7}
                disabled={this.state.loadpage === true ? true : false}
              >
                จัดตารางเรียน
              </Menu.Item>
            )}

            <SubMenu key="sub3" icon={<TableOutlined />} title="รวมตาราง">
              <Menu.Item key="9"disabled={this.state.loadpage === true ? true : false} onClick={this.load9}>
                ตารางสอนของครู
              </Menu.Item>
              <Menu.Item key="10" disabled={this.state.loadpage === true ? true : false} onClick={this.load10}>
                ตารางเรียนของนักเรียน
              </Menu.Item>
              <Menu.Item key="11" disabled={this.state.loadpage === true ? true : false} onClick={this.load11}>
                ตารางการใช้ห้องสำหรับการเรียน
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="12" icon={<UserOutlined />}  disabled={this.state.loadpage === true ? true : false} onClick={this.load8}>
                  ทะเบียนนักเรียน
                </Menu.Item>
            {this.state.currentUser === null ? (
              <Menu.Item
                key="login"
                onClick={this.showlogin}
                icon={<LoginOutlined />}
              >
                เข้าสู่ระบบ
              </Menu.Item>
            ) : null}
            {this.state.currentUser === null ? null : (
              <Menu.Item
                key="logout"
                onClick={this.showlogout}
                icon={<LogoutOutlined />}
              >
                ออกจากระบบ
              </Menu.Item>
            )}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "0 16px" }}>
            {this.state.loadpage === true ? (
              <Spin spinning={true} tip="กำลังโหลดข้อมูล..." delay={500}>
                <div>
                  <Breadcrumb style={{ margin: "16px 0" }}>
                    <Breadcrumb.Item></Breadcrumb.Item>
                  </Breadcrumb>
                  <div
                    className="site-layout-background"
                    style={{ padding: 24, minHeight: 360 }}
                  ></div>
                </div>
              </Spin>
            ) : null}
            {this.state.line === 20 ? (
              <div>
                <Breadcrumb style={{ margin: "16px 0" ,
                textAlign: "center",fontSize: "20px"}}>
                  <Breadcrumb.Item>ยินดีต้อนรับ เข้าสู่ ระบบการจัดตารางสอนและตารางเรียน</Breadcrumb.Item>
                </Breadcrumb>
                <Breadcrumb style={{ margin: "16px 0" ,
                textAlign: "center",fontSize: "20px"}}>
                  <Breadcrumb.Item>กรณีศึกษาโรงเรียนเตรียมอุดมศึกษาพัฒนาการเขลางค์นคร</Breadcrumb.Item>
                </Breadcrumb>
                <div
                  className="site-layout-background"
                  style={{ padding: 24, minHeight: 360 }}
                >
                  <Row gutter={24}>
                        <Col className="gutter-row" span={1}>
                        </Col>
                        <Col className="gutter-row" span={23}>
                          <label style={{ fontSize: "20px"}}>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;โรงเรียนเตรียมอุดมศึกษาพัฒนาการเขลางค์นคร เดิมชื่อ โรงเรียนเขลางค์นคร ตั้งอยู่ ณเลขที่ 249 หมู่ 12 ตำบลบ่อแฮ้ว อำเภอเมืองลำปาง จังหวัดลำปาง เป็นมัธยมศึกษาขนาดกลาง แบบสหศึกษา เปิดสอนในระดับชั้นมัธยมศึกษาตอนต้น-มัธยมศึกษาตอนปลาย โดยแต่ละชั้นปีมีจำนวน 7 ห้องข้อมูลพื้นฐานของโรงเรียน ประกอบด้วย บุคลากรรวมทั้งสิ้นจำนวน 85 คน จำแนกเป็นครูผู้สอน 66 คนและเจ้าหน้าที่จำนวน 19 คน ส่วนสถานที่สำหรับจัดการเรียนการสอนจำนวน 72 ห้องเรียน มีนักเรียนประมาณการ 1,169 คน การดำเนินการของโรงเรียนถือกำเนิดจากความต้องการการศึกษาในระดับมัธยมศึกษาสายสามัญในเขตเมืองลำปาง โรงเรียนเขลางค์นคร ได้รับอนุญาตให้เปลี่ยนชื่อจากโรงเรียนเขลางค์นคร เป็น “โรงเรียนเตรียมอุดมศึกษาพัฒนาการ เขลางค์นคร” และได้รับพระบรมราชานุญาติให้ใช้ “พระเกี้ยว” เป็นตราสัญลักษณ์ของโรงเรียน เมื่อวันที่ 29 กรกฎาคม พ.ศ. 2557 และเป็นโรงเรียนในเครือเตรียมอุดมศึกษาพัฒนาการ ในลำดับที่ 14 โรงเรียนเตรียมอุดมศึกษาพัฒนาการเขลางค์นคร</label>
                        </Col>
                      </Row>
                      <Row gutter={24}>
                        <Col className="gutter-row" span={1}>
                        </Col>
                        <Col className="gutter-row" span={23}>
                          <label style={{ fontSize: "20px"}}>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;ในปัจจุบันงานด้านสนับสนุนเชิงวิชาการของเจ้าหน้าที่วิชาการของโรงเรียนเตรียมอุดมศึกษาพัฒนาการเขลางค์นคร พบปัญหาจากการดำเนินงานที่ล่าช้า โดยเฉพาะการจัดตารางสอน และตารางเรียนเนื่องจากจำนวนครูผู้สอน จำนวนห้องเรียน และจำนวนชั้นเรียนของนักเรียนมีจำนวนมาก ประกอบกับเครื่องมือที่ใช้ไม่เหมาะสม ส่งผลให้เกิดการจัดการเรียนการสอน ทับซ้อนกันระหว่างคาบเรียน เกิดความสับสนแก่นักเรียนและทำให้เสียเวลาการเรียนการสอน เกิดความล้าช้าเพราะต้องหาห้องเรียนใหม่ที่จะใช้สอนแทนในกรณีเกิดปัญหา</label>
                        </Col>
                      </Row>
                      <Row gutter={24}>
                        <Col className="gutter-row" span={1}>
                        </Col>
                        <Col className="gutter-row" span={23}>
                          <label style={{fontSize: "20px"}}>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;ดังนั้น ผู้พัฒนาจึงเล็งเห็นว่าควรพัฒนาระบบการจัดตารางสอนและตารางเรียน แก่โรงเรียนเตรียมอุดมศึกษาพัฒนาการเขลางค์นคร ขึ้น เพื่อสนับสนุนการบริหารจัดการ อำนวยความสะดวก และวางแผนการตารางสอนอย่างเป็นระบบมากขึ้น โดยใช้เครื่องมือด้านเทคโนโลยีสารสนเทศ ในการพัฒนาด้วยโปรแกรม visual studio code ใช้ภาษา java script และใช้ firebase ในการเก็บรวบรวมข้อมูลและออกแบบฐานข้อมูล</label>
                        </Col>
                      </Row>  
                </div>
              </div>
            ) : this.state.line === 8 && this.state.loadpage === false ? (
              <div>
                <Breadcrumb style={{ margin: "16px 0" }}>
                  <Breadcrumb.Item>ทะเบียนนักเรียน</Breadcrumb.Item>
                </Breadcrumb>
                <div
                  className="site-layout-background"
                  style={{ padding: 24, minHeight: 360 }}
                >
                  <Divider orientation="left">ทะเบียนนักเรียน</Divider>
                  <Button
                    type="dashed"
                    style={{ float: "right" }}
                    icon={<PlusCircleOutlined />}
                    onClick={async () => await this.setState({ visible: true })}
                  >
                    เพิ่ม
                  </Button>
                  <Modal
                    title={this.state.id8 === null?"เพิ่มทะเบียนนักเรียน" : "แก้ไขทะเบียนนักเรียน"}
                    centered
                    visible={visible}
                    onOk={this.onsave8}
                    onCancel={async () =>
                      await this.setState({
                        visible: false,
                        id8: null,
                        idStudent8: null,
                        no8: null,
                        pName8: null,
                        fName8: null,
                        lName8: null,
                        level8: null,
                        roomOfLevel8: null,
                        birthday8: null,
                        address8: null,
                        tel8: null,
                        status8: null,
                      })
                    }
                    footer={[
                      <Button
                        key="back"
                        onClick={async () =>
                          await this.setState({
                            visible: false,
                            id8: null,
                            idStudent8: null,
                            no8: null,
                            pName8: null,
                            fName8: null,
                            lName8: null,
                            level8: null,
                            roomOfLevel8: null,
                            birthday8: null,
                            address8: null,
                            tel8: null,
                            status8: null,
                          })
                        }
                      >
                        ยกเลิก
                      </Button>,
                      <Button
                        key="submit"
                        type="primary"
                        loading={this.state.loading}
                        onClick={this.onsave8}
                        disabled={
                          this.state.idStudent8 !== null &&
                          this.state.idStudent8 !== "" &&
                          this.state.no8 !== null &&
                          this.state.no8 !== "" &&
                          this.state.pName8 !== null &&
                          this.state.pName8 !== "" &&
                          this.state.fName8 !== null &&
                          this.state.fName8 !== "" &&
                          this.state.lName8 !== null &&
                          this.state.lName8 !== "" &&
                          this.state.level8 !== null &&
                          this.state.level8 !== "" &&
                          this.state.roomOfLevel8 !== null &&
                          this.state.roomOfLevel8 !== "" &&
                          this.state.birthday8 !== null &&
                          this.state.birthday8 !== "" &&
                          this.state.address8 !== null &&
                          this.state.address8 !== "" &&
                          this.state.status8 !== null &&
                          this.state.status8 !== "" 
                            ? 
                            this.state.idStudent8.length === 5 ? 
                            this.state.tel8 === "" || 
                            this.state.tel8 == null ?
                            false : this.state.tel8.length !== 10 ? true : false : true
                            : true
                        }
                      >
                        {this.state.id8 === null ? "บันทึก" : "แก้ไข"}
                      </Button>,
                    ]}
                    width={1000}
                  >
                    <p>รหัสนักเรียน</p>{" "}
                    <Input
                      maxLength="5"
                      disabled={this.state.id8 === null ? false : true}
                      style={{ bottom: "10px" }}
                      value={this.state.idStudent8}
                      onChange={async (e) =>
                        await this.setState({ idStudent8: e.target.value })
                      }
                      onKeyDown={(evt) => this.pushnumber(evt)}
                      placeholder="กรอกรหัสนักเรียน"
                    />
                    <p>คำนำหน้าชื่อ</p>
                    <Select
                      showSearch
                      style={{
                        width: "-webkit-fill-available",
                        bottom: "10px",
                      }}
                      placeholder="เลือกคำนำหน้าชื่อ"
                      optionFilterProp="children"
                      onChange={async (e) => await this.setState({ pName8: e })}
                      onSearch={this.onSearch}
                      value={this.state.pName8}
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Option value="ด.ช.">ด.ช.</Option>
                      <Option value="ด.ญ.">ด.ญ.</Option>
                      <Option value="นาย">นาย</Option>
                      <Option value="นาง">นาง</Option>
                      <Option value="นางสาว">นางสาว</Option>
                    </Select>
                    <p>ชื่อ</p>{" "}
                    <Input
                      maxLength="100"
                      style={{ bottom: "10px" }}
                      value={this.state.fName8}
                      onChange={async (e) =>
                        await this.setState({ fName8: e.target.value })
                      }
                      onKeyDown={(evt) => this.pushthaiNotNum(evt)}
                      placeholder="กรอกชื่อ"
                    />
                    <p>นามสกุล</p>{" "}
                    <Input
                      maxLength="100"
                      style={{ bottom: "10px" }}
                      value={this.state.lName8}
                      onChange={async (e) =>
                        await this.setState({ lName8: e.target.value })
                      }
                      onKeyDown={(evt) => this.pushthaiNotNum(evt)}
                      placeholder="กรอกนามสกุล"
                    />
                    <p>ชั้นปี</p>{" "}
                    <Select
                      showSearch
                      style={{
                        width: "-webkit-fill-available",
                        bottom: "10px",
                      }}
                      placeholder="เลือกชั้นปี"
                      optionFilterProp="children"
                      onChange={async (e) => await this.setState({ level8: e })}
                      onSearch={this.onSearch}
                      value={this.state.level8}
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Option value="1">1</Option>
                      <Option value="2">2</Option>
                      <Option value="3">3</Option>
                      <Option value="4">4</Option>
                      <Option value="5">5</Option>
                      <Option value="6">6</Option>
                    </Select>
                    <p>ห้อง</p>
                    <Select
                      showSearch
                      style={{
                        width: "-webkit-fill-available",
                        bottom: "10px",
                      }}
                      placeholder="เลือกห้อง"
                      optionFilterProp="children"
                      onChange={async (e) =>
                        await this.setState({ roomOfLevel8: e })
                      }
                      onSearch={this.onSearch}
                      value={this.state.roomOfLevel8}
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Option key={1} value={1}>
                        1
                      </Option>
                      <Option key={2} value={2}>
                        2
                      </Option>
                      <Option key={3} value={3}>
                        3
                      </Option>
                      <Option key={4} value={4}>
                        4
                      </Option>
                      <Option key={5} value={5}>
                        5
                      </Option>
                      <Option key={6} value={6}>
                        6
                      </Option>
                      <Option key={7} value={7}>
                        7
                      </Option>
                      <Option key={8} value={8}>
                        8
                      </Option>
                      <Option key={9} value={9}>
                        9
                      </Option>
                      <Option key={10} value={10}>
                        10
                      </Option>
                      <Option key={11} value={11}>
                        11
                      </Option>
                      <Option key={12} value={12}>
                        12
                      </Option>
                      <Option key={13} value={13}>
                        13
                      </Option>
                      <Option key={14} value={14}>
                        14
                      </Option>
                      <Option key={15} value={15}>
                        15
                      </Option>
                      <Option key={16} value={16}>
                        16
                      </Option>
                      <Option key={17} value={17}>
                        17
                      </Option>
                      <Option key={18} value={18}>
                        18
                      </Option>
                      <Option key={19} value={19}>
                        19
                      </Option>
                      <Option key={20} value={20}>
                        20
                      </Option>
                    </Select>
                    <p>เลขที่</p>{" "}
                    <Input
                      maxLength="2"
                      style={{ bottom: "10px" }}
                      value={this.state.no8}
                      onChange={async (e) =>
                        await this.setState({ no8: e.target.value })
                      }
                      onKeyDown={(evt) => this.pushnumber(evt)}
                      placeholder="กรอกเลขที่"
                    />
                    <p>วัน/เดือน/ปีเกิด(ค.ศ)</p>{" "}
                    <DatePicker
                      placeholder="ตัวอย่าง 01/01/1997"
                      style={{
                        width: "-webkit-fill-available",
                        bottom: "10px",
                      }}
                      onChange={this.onChangeDate}
                      value={
                        this.state.birthday8 === null
                          ? null
                          : moment(this.state.birthday8, dateFormatList[0])
                      }
                      format={dateFormatList}
                    />
                    <p>ที่อยู่</p>{" "}
                    <Input
                    maxLength="255"
                      style={{ bottom: "10px" }}
                      value={this.state.address8}
                      onChange={async (e) =>
                        await this.setState({ address8: e.target.value })
                      }
                      onKeyDown={(evt) => this.pushthaiENGass(evt)}
                      placeholder="กรอกที่อยู่"
                    />
                    <p>เบอร์โทรศัพท์</p>{" "}
                    <Input
                      maxLength="10"
                      style={{ bottom: "10px" }}
                      value={this.state.tel8}
                      onChange={async (e) =>
                        await this.setState({ tel8: e.target.value })
                      }
                      onKeyDown={(evt) => this.pushnumber(evt)}
                      placeholder="กรอกเบอร์โทรศัพท์"
                    />
                    <p>สถานะของการศึกษา</p>{" "}
                    <Select
                      showSearch
                      style={{
                        width: "-webkit-fill-available",
                        bottom: "10px",
                      }}
                      placeholder="เลือกสถานะของการศึกษา"
                      optionFilterProp="children"
                      onChange={async (e) =>
                        await this.setState({ status8: e })
                      }
                      onSearch={this.onSearch}
                      value={this.state.status8}
                      filterOption={(input, option) =>
                        option.children
                          .toLowerCase()
                          .indexOf(input.toLowerCase()) >= 0
                      }
                    >
                      <Option value="คงสภาพนักเรียน">คงสภาพนักเรียน</Option>
                      <Option value="พ้นสภาพนักเรียน">พ้นสภาพนักเรียน</Option>
                      <Option value="จบการศึกษา">จบการศึกษา</Option>
                    </Select>
                  </Modal>
                  <br></br>
                  <Table dataSource={this.state.student}>
                    <Column
                      title="รหัสนักเรียน"
                      dataIndex="idStudent"
                      key="idStudent"
                      width="6%"
                      {...this.getColumnSearchProps("idStudent")}
                    />
                    <Column
                      title="คำนำหน้า"
                      dataIndex="pName"
                      key="pName"
                      width="6%"
                      {...this.getColumnSearchProps("pName")}
                    />
                    <Column
                      title="ชื่อ"
                      dataIndex="fName"
                      key="fName"
                      width="15%"
                      {...this.getColumnSearchProps("fName")}
                    />
                    <Column
                      title="สกุล"
                      dataIndex="lName"
                      key="lName"
                      width="15%"
                      {...this.getColumnSearchProps("lName")}
                    />
                    <Column
                      title="ชั้น"
                      dataIndex="level"
                      key="level"
                      width="3%"
                      filters={[
                        {
                          text: "1",
                          value: 1,
                        },
                        {
                          text: "2",
                          value: 2,
                        },
                        {
                          text: "3",
                          value: 3,
                        },
                        {
                          text: "4",
                          value: 4,
                        },
                        {
                          text: "5",
                          value: 5,
                        },
                        {
                          text: "6",
                          value: 6,
                        },
                      ]}
                      filterMultiple={false}
                      onFilter={(value, record) =>
                        record.level.indexOf(value) === 0
                      }
                    />
                    <Column
                      title="ห้อง"
                      dataIndex="roomOfLevel"
                      key="roomOfLevel"
                      width="3%"
                      {...this.getColumnSearchProps("roomOfLevel")}
                    />
                    <Column
                      title="สถานะ"
                      dataIndex="status"
                      key="status"
                      width="10%"
                      filters={[
                        {
                          text: "คงสภาพนักเรียน",
                          value: "คงสภาพนักเรียน",
                        },
                        {
                          text: "พ้นสภาพนักเรียน",
                          value: "พ้นสภาพนักเรียน",
                        },
                        {
                          text: "จบการศึกษา",
                          value: "จบการศึกษา",
                        },
                      ]}
                      filterMultiple={false}
                      onFilter={(value, record) =>
                        record.status.indexOf(value) === 0
                      }
                    />
                    <Column
                      width="7%"
                      title="Action"
                      key="id"
                      render={(text, id) => (
                        <Space size="middle">
                          <a
                            onClick={async (e) => {
                              await this.setState(
                                { id8: id.id },
                                this.showdata8
                              );
                            }}
                          >
                            แก้ไข{" "}
                          </a>
                          <Popconfirm
                            title="ยืนยันการลบอีกครั้ง"
                            onConfirm={async (e) => {
                              await this.setState({ id8: id.id }, this.onDel8);
                            }}
                            okText="ยืนยัน"
                            cancelText="ยกเลิก"
                          >
                            <a>ลบ</a>
                          </Popconfirm>
                        </Space>
                      )}
                    />
                  </Table>
                </div>
              </div>
            ) : this.state.line === 12 && this.state.loadpage === false ? (
              <div>
                <Breadcrumb style={{ margin: "16px 0" }}>
                  <Breadcrumb.Item>ทะเบียนนักเรียน</Breadcrumb.Item>
                </Breadcrumb>
                <div
                  className="site-layout-background"
                  style={{ padding: 24, minHeight: 360 }}
                >
                  <Divider orientation="left">ทะเบียนนักเรียน</Divider>
                  <Modal
                    title="ข้อมูลนักเรียน"
                    centered
                    visible={visible}
                    onOk={this.onsave8}
                    onCancel={async () =>
                      await this.setState({
                        visible: false,
                        id8: null,
                        idStudent8: null,
                        no8: null,
                        pName8: null,
                        fName8: null,
                        lName8: null,
                        level8: null,
                        roomOfLevel8: null,
                        birthday8: null,
                        address8: null,
                        tel8: null,
                        status8: null,
                      })
                    }
                    footer={[
                      <Button
                        key="back"
                        onClick={async () =>
                          await this.setState({
                            visible: false,
                            id8: null,
                            idStudent8: null,
                            no8: null,
                            pName8: null,
                            fName8: null,
                            lName8: null,
                            level8: null,
                            roomOfLevel8: null,
                            birthday8: null,
                            address8: null,
                            tel8: null,
                            status8: null,
                          })
                        }
                      >
                        ปิด
                      </Button>
                    ]}
                    width={1000}
                  >
                    <p>รหัสนักเรียน : {this.state.idStudent8}</p>{" "}
                    <p>ชื่อ-สกุล : {this.state.pName8}{this.state.fName8} {this.state.lName8}</p>
                    <p>ชั้นปี {this.state.level8} ห้อง {this.state.roomOfLevel8} เลขที่ {this.state.no8}</p>{" "}
                  <p>วัน/เดือน/ปีเกิด(ค.ศ) : {this.state.birthday8}</p>{" "}
                    <p>ที่อยู่ : {this.state.address8}</p>{" "}
                    <p>เบอร์โทรศัพท์ : {this.state.tel8 === null?"-":this.state.tel8}</p>{" "}
                    <p>สถานะของการศึกษา : {this.state.status8}</p>{" "}
                  </Modal>
                  <br></br>
                  <Table dataSource={this.state.student}>
                    <Column
                      title="รหัสนักเรียน"
                      dataIndex="idStudent"
                      key="idStudent"
                      width="6%"
                      {...this.getColumnSearchProps("idStudent")}
                    />
                    <Column
                      title="คำนำหน้า"
                      dataIndex="pName"
                      key="pName"
                      width="6%"
                      {...this.getColumnSearchProps("pName")}
                    />
                    <Column
                      title="ชื่อ"
                      dataIndex="fName"
                      key="fName"
                      width="15%"
                      {...this.getColumnSearchProps("fName")}
                    />
                    <Column
                      title="สกุล"
                      dataIndex="lName"
                      key="lName"
                      width="15%"
                      {...this.getColumnSearchProps("lName")}
                    />
                    <Column
                      title="ชั้น"
                      dataIndex="level"
                      key="level"
                      width="3%"
                      filters={[
                        {
                          text: "1",
                          value: 1,
                        },
                        {
                          text: "2",
                          value: 2,
                        },
                        {
                          text: "3",
                          value: 3,
                        },
                        {
                          text: "4",
                          value: 4,
                        },
                        {
                          text: "5",
                          value: 5,
                        },
                        {
                          text: "6",
                          value: 6,
                        },
                      ]}
                      filterMultiple={false}
                      onFilter={(value, record) =>
                        record.level.indexOf(value) === 0
                      }
                    />
                    <Column
                      title="ห้อง"
                      dataIndex="roomOfLevel"
                      key="roomOfLevel"
                      width="3%"
                      {...this.getColumnSearchProps("roomOfLevel")}
                    />
                    <Column
                      title="สถานะ"
                      dataIndex="status"
                      key="status"
                      width="10%"
                      filters={[
                        {
                          text: "คงสภาพนักเรียน",
                          value: "คงสภาพนักเรียน",
                        },
                        {
                          text: "พ้นสภาพนักเรียน",
                          value: "พ้นสภาพนักเรียน",
                        },
                        {
                          text: "จบการศึกษา",
                          value: "จบการศึกษา",
                        },
                      ]}
                      filterMultiple={false}
                      onFilter={(value, record) =>
                        record.status.indexOf(value) === 0
                      }
                    />
                    <Column
                      width="7%"
                      title="Action"
                      key="id"
                      render={(text, id) => (
                        <Space size="middle">
                          <a
                            onClick={async (e) => {
                              await this.setState(
                                { id8: id.id },
                                this.showdata8
                              );
                            }}
                          >
                            ดู{" "}
                          </a>
                        </Space>
                      )}
                    />
                  </Table>
                </div>
              </div>
            ) : this.state.line === 5 && this.state.loadpage === false ? (
              <div>
                <Breadcrumb style={{ margin: "16px 0" }}>
                  <Breadcrumb.Item>ทะเบียนครู</Breadcrumb.Item>
                </Breadcrumb>
                <div
                  className="site-layout-background"
                  style={{ padding: 24, minHeight: 360 }}
                >
                  <div>
                    <Divider orientation="left">ทะเบียนครู</Divider>
                    <Button
                      type="dashed"
                      style={{ float: "right" }}
                      icon={<PlusCircleOutlined />}
                      onClick={async () =>
                        await this.setState({ visible: true })
                      }
                    >
                      เพิ่ม
                    </Button>
                    <Modal
                      title={this.state.id5 === null?"เพิ่มทะเบียนครู" : "แก้ไขทะเบียนครู"}
                      centered
                      visible={visible}
                      onOk={this.onsave5}
                      onCancel={async () =>
                        await this.setState({
                          visible: false,
                          fnameT5: null,
                          hourT5: null,
                          idT5: null,
                          lnameT5: null,
                          mT5: [],
                          seGL5: null,
                          pnameT5: null,
                          sT5: [],
                          id5: null,
                        })
                      }
                      footer={[
                        <Button
                          key="back"
                          onClick={async () =>
                            await this.setState({
                              visible: false,
                              fnameT5: null,
                              hourT5: null,
                              idT5: null,
                              lnameT5: null,
                              mT5: [],
                              seGL5: null,
                              pnameT5: null,
                              sT5: [],
                              id5: null,
                            })
                          }
                        >
                          ยกเลิก
                        </Button>,
                        <Button
                          key="submit"
                          type="primary"
                          loading={this.state.loading}
                          onClick={this.onsave5}
                          disabled={
                            this.state.fnameT5 !== null &&
                            this.state.fnameT5 !== "" &&
                            this.state.hourT5 !== null &&
                            this.state.hourT5 !== "" &&
                            this.state.idT5 !== null &&
                            this.state.idT5 !== "" &&
                            this.state.pnameT5 !== null &&
                            this.state.pnameT5 !== "" &&
                            this.state.lnameT5 !== null &&
                            this.state.lnameT5 !== ""
                              ? false
                              : true
                          }
                        >
                          {this.state.id5 === null ? "บันทึก" : "แก้ไข"}
                        </Button>,
                      ]}
                      width={1000}
                    >
                      <p>รหัสครู</p>{" "}
                      <Input
                        maxLength="10"
                        disabled={this.state.id5 === null ? false : true}
                        style={{ bottom: "10px" }}
                        value={this.state.idT5}
                        onChange={async (e) =>
                          await this.setState({ idT5: e.target.value })
                        }
                        onKeyDown={(evt) => this.pushnumber(evt)}
                        placeholder="กรอกรหัสครู"
                      />
                      <p>คำนำหน้าชื่อ</p>
                      <Select
                        showSearch
                        style={{
                          width: "-webkit-fill-available",
                          bottom: "10px",
                        }}
                        placeholder="เลือกคำนำหน้าชื่อ"
                        optionFilterProp="children"
                        onChange={async (e) =>
                          await this.setState({ pnameT5: e })
                        }
                        onSearch={this.onSearch}
                        value={this.state.pnameT5}
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        <Option value="นาย">นาย</Option>
                        <Option value="นาง">นาง</Option>
                        <Option value="นางสาว">นางสาว</Option>
                        <Option value="Mr.">Mr.</Option>
                        <Option value="Mrs.">Mrs.</Option>
                        <Option value="Miss">Miss</Option>
                      </Select>
                      <p>ชื่อ</p>{" "}
                      <Input
                        maxLength="100"
                        style={{ bottom: "10px" }}
                        value={this.state.fnameT5}
                        onChange={async (e) =>
                          await this.setState({ fnameT5: e.target.value })
                        }
                        onKeyDown={(evt) => this.pushthaiENGNotNum(evt)}
                        placeholder="กรอกชื่อ"
                      />
                      <p>นามสกุล</p>{" "}
                      <Input
                        maxLength="100"
                        style={{ bottom: "10px" }}
                        value={this.state.lnameT5}
                        onChange={async (e) =>
                          await this.setState({ lnameT5: e.target.value })
                        }
                        onKeyDown={(evt) => this.pushthaiENGNotNum(evt)}
                        placeholder="กรอกนามสกุล"
                      />
                      <p>ชั่วโมงสอน/สัปดาห์</p>{" "}
                      <Input
                        maxLength="2"
                        style={{ bottom: "10px" }}
                        value={this.state.hourT5}
                        onChange={async (e) =>
                          await this.setState({ hourT5: e.target.value })
                        }
                        onKeyDown={(evt) => this.pushnumber(evt)}
                        placeholder="กรอกชั่วโมงสอน/สัปดาห์"
                      />
                      <p>กลุ่มสาระการเรียนรู้ที่สอนหลัก</p>
                      <Select
                        showSearch
                        style={{
                          width: "-webkit-fill-available",
                          bottom: "10px",
                        }}
                        placeholder="เลือกกลุ่มสาระการเรียนรู้"
                        optionFilterProp="children"
                        onChange={this.onCGL5}
                        onSearch={this.onSearch}
                        value={this.state.seGL5}
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        <Option value="กลุ่มสาระการเรียนรู้ภาษาไทย">
                          กลุ่มสาระการเรียนรู้ภาษาไทย
                        </Option>
                        <Option value="กลุ่มสาระการเรียนรู้ศิลปะ">
                          กลุ่มสาระการเรียนรู้ศิลปะ
                        </Option>
                        <Option value="กลุ่มสาระการเรียนรู้ภาษาต่างประเทศ">
                          กลุ่มสาระการเรียนรู้ภาษาต่างประเทศ
                        </Option>
                        <Option value="กลุ่มสาระการเรียนรู้สุขศึกษาและพลศึกษา">
                          กลุ่มสาระการเรียนรู้สุขศึกษาและพลศึกษา
                        </Option>
                        <Option value="กลุ่มสาระการเรียนรู้การงานอาชีพและเทคโนโลยี">
                          กลุ่มสาระการเรียนรู้การงานอาชีพและเทคโนโลยี
                        </Option>
                        <Option value="กลุ่มสาระการเรียนรู้สังคมศึกษา">
                          กลุ่มสาระการเรียนรู้สังคมศึกษา
                        </Option>
                        <Option value="กลุ่มสาระการเรียนรู้คณิตศาสตร์">
                          กลุ่มสาระการเรียนรู้คณิตศาสตร์
                        </Option>
                        <Option value="กลุ่มสาระการเรียนรู้วิทยาศาสตร์">
                          กลุ่มสาระการเรียนรู้วิทยาศาสตร์
                        </Option>
                        <Option value="กิจกรรมพัฒนาผู้เรียน">
                          กิจกรรมพัฒนาผู้เรียน
                        </Option>
                      </Select>
                      {this.state.seGL5 === null ? null : <p>วิชาหลักที่สอน</p>}
                      {this.state.seGL5 === null ? null : (
                        <Select
                          mode="multiple"
                          style={{ width: "100%", bottom: "5px" }}
                          placeholder="เลือกรายวิชาหลักที่สอน"
                          onChange={async (e) =>
                            await this.setState({ mT5: e })
                          }
                          value={this.state.mT5}
                        >
                          {main5}
                        </Select>
                      )}
                      {this.state.seGL5 === null ? null : <p>วิชารองที่สอน</p>}
                      {this.state.seGL5 === null ? null : (
                        <Select
                          mode="multiple"
                          style={{ width: "100%", bottom: "10px" }}
                          placeholder="เลือกรายวิชารองที่สอน"
                          onChange={async (e) =>
                            await this.setState({ sT5: e })
                          }
                          value={this.state.sT5}
                        >
                          {sec5}
                        </Select>
                      )}
                    </Modal>
                    <br></br>
                    <Table dataSource={this.state.teacher}>
                      <Column
                        title="รหัสครู"
                        dataIndex="idteacher"
                        key="idteacher"
                        width="10%"
                        {...this.getColumnSearchProps("idteacher")}
                      />
                      <Column
                        title="คำนำหน้า"
                        dataIndex="pName"
                        key="pName"
                        width="10%"
                        {...this.getColumnSearchProps("pName")}
                      />
                      <Column
                        title="ชื่อ"
                        dataIndex="fName"
                        key="fName"
                        width="10%"
                        {...this.getColumnSearchProps("fName")}
                      />
                      <Column
                        title="สกุล"
                        dataIndex="lName"
                        key="lName"
                        width="10%"
                        {...this.getColumnSearchProps("lName")}
                      />
                      <Column
                        width="20%"
                        title="วิชาหลักที่สอน"
                        dataIndex="mainGroupLearning"
                        key="mainGroupLearning"
                        {...this.getColumnSearchProps("mainGroupLearning")}
                        render={(mainGroupLearning) => (
                          <>
                            {mainGroupLearning.length > 0
                              ? mainGroupLearning.map((mainGroupLearning) => (
                                  <Tag color="blue" key={mainGroupLearning}>
                                    {mainGroupLearning}
                                  </Tag>
                                ))
                              : null}
                          </>
                        )}
                      />
                      <Column
                        {...this.getColumnSearchProps("secondaryGroupLearning")}
                        width="20%"
                        title="วิชารองที่สอน"
                        dataIndex="secondaryGroupLearning"
                        key="secondaryGroupLearning"
                        render={(secondaryGroupLearning) => (
                          <>
                            {secondaryGroupLearning.length > 0
                              ? secondaryGroupLearning.map(
                                  (secondaryGroupLearning) => (
                                    <Tag
                                      color="blue"
                                      key={secondaryGroupLearning}
                                    >
                                      {secondaryGroupLearning}
                                    </Tag>
                                  )
                                )
                              : null}
                          </>
                        )}
                      />
                      <Column
                        width="10%"
                        title="Action"
                        key="id"
                        render={(text, id) => (
                          <Space size="middle">
                            <a
                              onClick={async (e) => {
                                await this.setState(
                                  { id5: id.id },
                                  this.showdata5
                                );
                              }}
                            >
                              แก้ไข{" "}
                            </a>
                            <Popconfirm
                              title="ยืนยันการลบอีกครั้ง"
                              onConfirm={async (e) => {
                                await this.setState(
                                  { id5: id.id },
                                  this.onDel5
                                );
                              }}
                              okText="ยืนยัน"
                              cancelText="ยกเลิก"
                            >
                              <a>ลบ</a>
                            </Popconfirm>
                          </Space>
                        )}
                      />
                    </Table>
                  </div>
                </div>
              </div>
            ) : this.state.line === 1 && this.state.loadpage === false ? (
              <div>
                <Breadcrumb style={{ margin: "16px 0" }}>
                  <Breadcrumb.Item>จัดการรายวิชา</Breadcrumb.Item>
                </Breadcrumb>
                <div
                  className="site-layout-background"
                  style={{ padding: 24, minHeight: 360 }}
                >
                  <div>
                    <Divider orientation="left">จัดการรายวิชา</Divider>
                    <Button
                      type="dashed"
                      style={{ float: "right" }}
                      icon={<PlusCircleOutlined />}
                      onClick={async () =>
                        await this.setState({ visible: true })
                      }
                    >
                      เพิ่ม
                    </Button>
                    <Modal
                      title={this.state.id1 === null?"เพิ่มวิชาเรียน" : "แก้ไขวิชาเรียน"}
                      centered
                      visible={visible}
                      onOk={this.onsave1}
                      onCancel={async () =>
                        await this.setState({
                          visible: false,
                          seCreditSub1: null,
                          seIdSub1: null,
                          seNameSub1: null,
                          seGL1: null,
                          id1: null,
                        })
                      }
                      footer={[
                        <Button
                          key="back"
                          onClick={async () =>
                            await this.setState({
                              visible: false,
                              seCreditSub1: null,
                              seIdSub1: null,
                              seNameSub1: null,
                              seGL1: null,
                            })
                          }
                        >
                          ยกเลิก
                        </Button>,
                        <Button
                          key="submit"
                          type="primary"
                          loading={this.state.loading}
                          onClick={this.onsave1}
                          disabled={
                            this.state.seCreditSub1 === null ||
                            this.state.seCreditSub1 === undefined ||
                            this.state.seCreditSub1 === "" ||
                            this.state.seIdSub1 === null ||
                            this.state.seIdSub1 === undefined ||
                            this.state.seIdSub1 === "" ||
                            this.state.seNameSub1 === null ||
                            this.state.seNameSub1 === undefined ||
                            this.state.seNameSub1 === "" ||
                            this.state.seGL1 === null ||
                            this.state.seGL1 === undefined ||
                            this.state.seGL1 === ""
                              ? true
                              : false
                          }
                        >
                          {this.state.id1 !== null ? "แก้ไข" : "เพิ่ม"}
                        </Button>,
                      ]}
                      width={1000}
                    >
                      <p>รหัสวิชา</p>
                      <Input
                        style={{ bottom: "10px" }}
                        maxLength="10"
                        value={this.state.seIdSub1}
                        disabled={this.state.id1 !== null ? true : false}
                        onChange={(e) =>
                          this.setState({ seIdSub1: e.target.value })
                        }
                        onKeyDown={(evt) => this.pushthai(evt)}
                        placeholder="กรอกรหัสวิชา"
                      />
                      <p>ชื่อรายวิชา</p>
                      <Input
                      maxLength="100"
                        style={{ bottom: "10px" }}
                        value={this.state.seNameSub1}
                        onChange={(e) =>
                          this.setState({ seNameSub1: e.target.value })
                        }
                        onKeyDown={(evt) => this.pushthaiENGsub(evt)}
                        placeholder="กรอกรายชื่อวิชา"
                      />
                      <p>หน่วยกิต</p>
                      <Select
                        showSearch
                        style={{ width: "-webkit-fill-available" }}
                        placeholder="เลือกจำนวนหน่วยกิต"
                        optionFilterProp="children"
                        onChange={this.onCC1}
                        onSearch={this.onSearch}
                        value={this.state.seCreditSub1}
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        <Option value={0.5}>0.5</Option>
                        <Option value={1}>1</Option>
                        <Option value={1.5}>1.5</Option>
                        <Option value={2}>2</Option>
                        <Option value={2.5}>2.5</Option>
                        <Option value={3}>3</Option>
                        <Option value={3.5}>3.5</Option>
                        <Option value={4}>4</Option>
                        <Option value={4.5}>4.5</Option>
                        <Option value={5}>5</Option>
                        <Option value={5.5}>5.5</Option>
                        <Option value={6}>6</Option>
                        <Option value={6.5}>6.5</Option>
                        <Option value={7}>7</Option>
                        <Option value={7.5}>7.5</Option>
                        <Option value={8}>8</Option>
                      </Select>
                      <p>กลุ่มสาระการเรียนรู้</p>{" "}
                      <Select
                        style={{ width: "-webkit-fill-available" }}
                        placeholder="เลือกกลุ่มสาระการเรียนรู้"
                        optionFilterProp="children"
                        onChange={this.onCGL1}
                        value={this.state.seGL1}
                      >
                        <Option value="กลุ่มสาระการเรียนรู้ภาษาไทย">
                          กลุ่มสาระการเรียนรู้ภาษาไทย
                        </Option>
                        <Option value="กลุ่มสาระการเรียนรู้ศิลปะ">
                          กลุ่มสาระการเรียนรู้ศิลปะ
                        </Option>
                        <Option value="กลุ่มสาระการเรียนรู้ภาษาต่างประเทศ">
                          กลุ่มสาระการเรียนรู้ภาษาต่างประเทศ
                        </Option>
                        <Option value="กลุ่มสาระการเรียนรู้สุขศึกษาและพลศึกษา">
                          กลุ่มสาระการเรียนรู้สุขศึกษาและพลศึกษา
                        </Option>
                        <Option value="กลุ่มสาระการเรียนรู้การงานอาชีพและเทคโนโลยี">
                          กลุ่มสาระการเรียนรู้การงานอาชีพและเทคโนโลยี
                        </Option>
                        <Option value="กลุ่มสาระการเรียนรู้สังคมศึกษา">
                          กลุ่มสาระการเรียนรู้สังคมศึกษา{" "}
                        </Option>
                        <Option value="กลุ่มสาระการเรียนรู้คณิตศาสตร์">
                          กลุ่มสาระการเรียนรู้คณิตศาสตร์
                        </Option>
                        <Option value="กลุ่มสาระการเรียนรู้วิทยาศาสตร์">
                          กลุ่มสาระการเรียนรู้วิทยาศาสตร์
                        </Option>
                        <Option value="กิจกรรมพัฒนาผู้เรียน">
                          กิจกรรมพัฒนาผู้เรียน
                        </Option>
                      </Select>
                    </Modal>
                    <br></br>
                    <Table dataSource={this.state.subject}>
                      <Column
                        title="รหัสวิชา"
                        dataIndex="idSubject"
                        key="idSubject"
                        width="10%"
                        {...this.getColumnSearchProps("idSubject")}
                      />
                      <Column
                        title="ชื่อรายวิชา"
                        dataIndex="nameSubject"
                        key="nameSubject"
                        width="10%"
                        {...this.getColumnSearchProps("nameSubject")}
                      />
                      <Column
                        title="หน่วยกิต"
                        dataIndex="creditSubject"
                        key="creditSubject"
                        width="10%"
                        {...this.getColumnSearchProps("creditSubject")}
                      />
                      <Column
                        title="กลุ่มสาระการเรียนรู้"
                        dataIndex="groupLearning"
                        key="groupLearning"
                        width="10%"
                        filters={[
                          {
                            text: "กลุ่มสาระการเรียนรู้ภาษาไทย",
                            value: "กลุ่มสาระการเรียนรู้ภาษาไทย",
                          },
                          {
                            text: "กลุ่มสาระการเรียนรู้ศิลปะ",
                            value: "กลุ่มสาระการเรียนรู้ศิลปะ",
                          },
                          {
                            text: "กลุ่มสาระการเรียนรู้ภาษาต่างประเทศ",
                            value: "กลุ่มสาระการเรียนรู้ภาษาต่างประเทศ",
                          },
                          {
                            text: "กลุ่มสาระการเรียนรู้สุขศึกษาและพลศึกษา",
                            value: "กลุ่มสาระการเรียนรู้สุขศึกษาและพลศึกษา",
                          },
                          {
                            text: "กลุ่มสาระการเรียนรู้การงานอาชีพและเทคโนโลยี",
                            value:
                              "กลุ่มสาระการเรียนรู้การงานอาชีพและเทคโนโลยี",
                          },
                          {
                            text: "กลุ่มสาระการเรียนรู้สังคมศึกษา",
                            value: "กลุ่มสาระการเรียนรู้สังคมศึกษา",
                          },
                          {
                            text: "กลุ่มสาระการเรียนรู้คณิตศาสตร์",
                            value: "กลุ่มสาระการเรียนรู้คณิตศาสตร์",
                          },
                          {
                            text: "กลุ่มสาระการเรียนรู้วิทยาศาสตร์",
                            value: "กลุ่มสาระการเรียนรู้วิทยาศาสตร์",
                          },
                          {
                            text: "กิจกรรมพัฒนาผู้เรียน",
                            value: "กิจกรรมพัฒนาผู้เรียน",
                          },
                        ]}
                        filterMultiple={false}
                        onFilter={(value, record) =>
                          record.groupLearning.indexOf(value) === 0
                        }
                      />
                      <Column
                        width="10%"
                        title="Action"
                        key="idSubject"
                        render={(text, idSubject) => (
                          <Space size="middle">
                            <a
                              onClick={async (e) => {
                                await this.setState(
                                  { id1: idSubject.id },
                                  this.showdata1
                                );
                              }}
                            >
                              แก้ไข{" "}
                            </a>
                            <Popconfirm
                              title="ยืนยันการลบอีกครั้ง"
                              onConfirm={async (e) => {
                                await this.setState(
                                  { id1: idSubject.id },
                                  this.onDel1
                                );
                              }}
                              okText="ยืนยัน"
                              cancelText="ยกเลิก"
                            >
                              <a>ลบ</a>
                            </Popconfirm>
                          </Space>
                        )}
                      />
                    </Table>
                  </div>
                </div>
              </div>
            ) : this.state.line === 2 && this.state.loadpage === false ? (
              <div>
                <Breadcrumb style={{ margin: "16px 0" }}>
                  <Breadcrumb.Item>จัดการหลักสูตร</Breadcrumb.Item>
                </Breadcrumb>
                <div
                  className="site-layout-background"
                  style={{ padding: 24, minHeight: 360 }}
                >
                  <div>
                    <Divider orientation="left">จัดการหลักสูตร</Divider>
                    <Button
                      type="dashed"
                      style={{ float: "right" }}
                      icon={<PlusCircleOutlined />}
                      onClick={async () =>
                        await this.setState({ visible: true })
                      }
                    >
                      เพิ่ม
                    </Button>
                    <Modal
                      title={this.state.id2 === null?"เพิ่มหลักสูตร" : "แก้ไขหลักสูตร"}
                      centered
                      visible={visible}
                      onOk={this.onsave2}
                      onCancel={async () =>
                        await this.setState({
                          visible: false,
                          idSub2: null,
                          lavel2: null,
                          year2: null,
                          GL2: null,
                          term2: null,
                          id2: null,
                        })
                      }
                      footer={[
                        <Button
                          key="back"
                          onClick={async () =>
                            await this.setState({
                              visible: false,
                              idSub2: null,
                              lavel2: null,
                              year2: null,
                              GL2: null,
                              term2: null,
                              id2: null,
                            })
                          }
                        >
                          ยกเลิก
                        </Button>,
                        <Button
                          key="submit"
                          type="primary"
                          loading={this.state.loading}
                          onClick={this.onsave2}
                          disabled={
                            this.state.idSub2 === null ||
                            this.state.idSub2 === undefined ||
                            this.state.idSub2 === "" ||
                            this.state.lavel2 === null ||
                            this.state.lavel2 === undefined ||
                            this.state.lavel2 === "" ||
                            this.state.GL2 === null ||
                            this.state.GL2 === undefined ||
                            this.state.GL2 === "" ||
                            this.state.year2 === null ||
                            this.state.year2 === undefined ||
                            this.state.year2 === "" ||
                            this.state.term2 === null ||
                            this.state.term2 === undefined ||
                            this.state.term2 === ""
                              ? true
                              : this.state.year2.length === 4
                              ? false
                              : true
                          }
                        >
                          {this.state.id2 !== null ? "แก้ไข" : "เพิ่ม"}
                        </Button>,
                      ]}
                      width={1000}
                    >
                      <p>รหัสวิชา</p>
                      <Select
                        showSearch
                        style={{
                          width: "-webkit-fill-available",
                          bottom: "10px",
                        }}
                        placeholder="เลือกรหัสวิชา"
                        optionFilterProp="children"
                        onChange={this.onCS2}
                        onSearch={this.onSearch}
                        value={this.state.idSub2}
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        {course2}
                      </Select>
                      <p>ชั้นปี</p>
                      <Select
                        showSearch
                        style={{
                          width: "-webkit-fill-available",
                          bottom: "10px",
                        }}
                        placeholder="เลือกชั้นปี"
                        optionFilterProp="children"
                        onChange={this.onCL2}
                        onSearch={this.onSearch}
                        value={this.state.lavel2}
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        <Option key={1} value={1}>
                          1
                        </Option>
                        <Option key={2} value={2}>
                          2
                        </Option>
                        <Option key={3} value={3}>
                          3
                        </Option>
                        <Option key={4} value={4}>
                          4
                        </Option>
                        <Option key={5} value={5}>
                          5
                        </Option>
                        <Option key={6} value={6}>
                          6
                        </Option>
                      </Select>
                      <p>สายการเรียน</p>
                      <Select
                        showSearch
                        style={{
                          width: "-webkit-fill-available",
                          bottom: "10px",
                        }}
                        placeholder="เลือกสายการเรียน"
                        optionFilterProp="children"
                        disabled={
                          this.state.lavel2 === 1 ||
                          this.state.lavel2 === 2 ||
                          this.state.lavel2 === 3
                            ? true
                            : false
                        }
                        onChange={this.onCGL2}
                        onSearch={this.onSearch}
                        value={this.state.GL2}
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        {this.state.lavel2 === 1 ? (
                          <Option key={1} value="ทั่วไป">
                            ทั่วไป
                          </Option>
                        ) : null}
                        {this.state.lavel2 !== 1 ? (
                          <Option
                            key="วิทยาศาสตร์-คณิตศาสตร์"
                            value="วิทยาศาสตร์-คณิตศาสตร์"
                          >
                            วิทยาศาสตร์-คณิตศาสตร์
                          </Option>
                        ) : null}
                        {this.state.lavel2 !== 1 ? (
                          <Option
                            key="ภาษาอังกฤษ-ภาษาไทย-สังคมศึกษา"
                            value="ภาษาอังกฤษ-ภาษาไทย-สังคมศึกษา"
                          >
                            ภาษาอังกฤษ-ภาษาไทย-สังคมศึกษา
                          </Option>
                        ) : null}
                        {this.state.lavel2 !== 1 ? (
                          <Option
                            key="ภาษาอังกฤษ-คณิตศาสตร์"
                            value="ภาษาอังกฤษ-คณิตศาสตร์"
                          >
                            ภาษาอังกฤษ-คณิตศาสตร์
                          </Option>
                        ) : null}
                        {this.state.lavel2 !== 1 ? (
                          <Option
                            key="ภาษาอังกฤษ-ภาษาจีน"
                            value="ภาษาอังกฤษ-ภาษาจีน"
                          >
                            ภาษาอังกฤษ-ภาษาจีน
                          </Option>
                        ) : null}
                      </Select>
                      <p>ปีการศึกษา</p>{" "}
                      <Input
                        maxLength="4"
                        style={{ bottom: "10px" }}
                        value={this.state.year2}
                        onChange={async (e) =>
                          await this.setState({ year2: e.target.value })
                        }
                        onKeyDown={(evt) => this.pushnumber(evt)}
                        placeholder="กรอกปีการศึกษา"
                      />
                      <p>เทอม</p>{" "}
                      <Select
                        showSearch
                        style={{
                          width: "-webkit-fill-available",
                          bottom: "10px",
                        }}
                        placeholder="เลือกเทอม"
                        optionFilterProp="children"
                        onChange={this.onCT2}
                        onSearch={this.onSearch}
                        value={this.state.term2}
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        <Option key={1} value={1}>
                          1
                        </Option>
                        <Option key={2} value={2}>
                          2
                        </Option>
                      </Select>
                      <p>เรียนรวม</p>
                      <Select
                        showSearch
                        style={{
                          width: "-webkit-fill-available",
                          bottom: "10px",
                        }}
                        placeholder="เลือกเรียนรวมหรือไม่เรียนรวม"
                        optionFilterProp="children"
                        onChange={this.onCAll2}
                        onSearch={this.onSearch}
                        value={this.state.all2}
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        <Option key="ไม่เรียนรวม" value="ไม่เรียนรวม">
                          ไม่เรียนรวม
                        </Option>
                        <Option key="เรียนรวม" value="เรียนรวม">
                          เรียนรวม
                        </Option>
                      </Select>
                    </Modal>
                    <br></br>
                    <Table dataSource={this.state.course}>
                      <Column
                        title="รหัสวิชา"
                        dataIndex="idSubject"
                        key="idSubject"
                        width="7%"
                        {...this.getColumnSearchProps("idSubject")}
                      />
                      <Column
                        title="สายการเรียน"
                        dataIndex="program"
                        key="program"
                        width="10%"
                        {...this.getColumnSearchProps("program")}
                      />
                      <Column
                        title="ชั่วโมง/สัปดาห์"
                        dataIndex="hours"
                        key="hours"
                        width="10%"
                        {...this.getColumnSearchProps("hours")}
                      />
                      <Column
                        title="กลุ่มสาระการเรียนรู้"
                        dataIndex="groupLearning"
                        key="groupLearning"
                        width="20%"
                        {...this.getColumnSearchProps("groupLearning")}
                      />
                      <Column
                        title="เรียนรวม"
                        dataIndex="all"
                        key="all"
                        width="7%"
                        {...this.getColumnSearchProps("all")}
                      />
                      <Column
                        title="ชั้นปี"
                        dataIndex="level"
                        key="level"
                        width="5%"
                        {...this.getColumnSearchProps("level")}
                      />
                      <Column
                        title="ปีการศึกษา"
                        dataIndex="year"
                        key="year"
                        width="7%"
                        {...this.getColumnSearchProps("year")}
                      />
                      <Column
                        title="เทอม"
                        dataIndex="term"
                        key="term"
                        width="5%"
                        {...this.getColumnSearchProps("term")}
                      />
                      <Column
                        width="7%"
                        title="Action"
                        key="idSubject"
                        render={(text, idSubject) => (
                          <Space size="middle">
                            <Popconfirm
                              title="ยืนยันการลบอีกครั้ง"
                              onConfirm={async (e) => {
                                await this.setState(
                                  { id2: idSubject.id },
                                  this.onDel2
                                );
                              }}
                              okText="ยืนยัน"
                              cancelText="ยกเลิก"
                            >
                              <a>ลบ</a>
                            </Popconfirm>
                          </Space>
                        )}
                      />
                    </Table>
                  </div>
                </div>
              </div>
            ) : this.state.line === 3 && this.state.loadpage === false ? (
              <div>
                <Breadcrumb style={{ margin: "16px 0" }}>
                  <Breadcrumb.Item>ตั้งค่าจำนานห้องเรียน</Breadcrumb.Item>
                </Breadcrumb>
                <div
                  className="site-layout-background"
                  style={{ padding: 24, minHeight: 360 }}
                >
                  <div>
                    <Divider orientation="left">ตั้งค่าจำนานห้องเรียน</Divider>
                    <Button
                      type="dashed"
                      style={{ float: "right" }}
                      icon={<PlusCircleOutlined />}
                      onClick={async () =>
                        await this.setState({ visible: true })
                      }
                    >
                      กำหนดจำนานห้องเรียนแต่ละปี
                    </Button>
                    <Modal
                      title="กำหนดจำนานห้องเรียนแต่ละปี"
                      centered
                      visible={visible}
                      onOk={this.onsave3}
                      onCancel={async () =>
                        await this.setState({
                          visible: false,
                          lavel13: null,
                          lavel23: null,
                          lavel33: null,
                          lavel43: null,
                          lavel53: null,
                          lavel63: null,
                          year3: null,
                          id3: null,
                        })
                      }
                      footer={[
                        <Button
                          key="back"
                          onClick={async () =>
                            await this.setState({
                              visible: false,
                              lavel13: null,
                              lavel23: null,
                              lavel33: null,
                              lavel43: null,
                              lavel53: null,
                              year3: null,
                              lavel63: null,
                              id3: null,
                            })
                          }
                        >
                          ยกเลิก
                        </Button>,
                        <Button
                          key="submit"
                          type="primary"
                          loading={this.state.loading}
                          onClick={this.onsave3}
                          disabled={
                            this.state.lavel13 === null ||
                            this.state.lavel23 === null ||
                            this.state.lavel33 === null ||
                            this.state.lavel43 === null ||
                            this.state.lavel53 === null ||
                            this.state.lavel63 === null ||
                            this.state.year3 === null
                              ? true
                              : this.state.year3.length === 4
                              ? false
                              : true
                          }
                        >
                          {this.state.id3 !== null ? "แก้ไข" : "เพิ่ม"}
                        </Button>,
                      ]}
                      width={1000}
                    >
                      <p>ปีการศึกษา</p>{" "}
                      <Input
                      disabled={this.state.id3 === null ? false:true}
                        maxLength="4"
                        style={{ bottom: "10px" }}
                        value={this.state.year3}
                        onChange={async (e) =>
                          await this.setState({ year3: e.target.value })
                        }
                        onKeyDown={(evt) => this.pushnumber(evt)}
                        placeholder="กรอกปีการศึกษา"
                      />
                      <p>มัธยมศึกษาปีที่ 1</p>
                      <Select
                        showSearch
                        style={{
                          width: "-webkit-fill-available",
                          bottom: "10px",
                        }}
                        placeholder="เลือกจำนวนห้องเรียน"
                        optionFilterProp="children"
                        onChange={async (e) =>
                          await this.setState({
                            lavel13: e,
                          })
                        }
                        onSearch={this.onSearch}
                        value={this.state.lavel13}
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        <Option key={1} value={1}>
                          1
                        </Option>
                        <Option key={2} value={2}>
                          2
                        </Option>
                        <Option key={3} value={3}>
                          3
                        </Option>
                        <Option key={4} value={4}>
                          4
                        </Option>
                        <Option key={5} value={5}>
                          5
                        </Option>
                        <Option key={6} value={6}>
                          6
                        </Option>
                        <Option key={7} value={7}>
                          7
                        </Option>
                        <Option key={8} value={8}>
                          8
                        </Option>
                        <Option key={9} value={9}>
                          9
                        </Option>
                        <Option key={10} value={10}>
                          10
                        </Option>
                        <Option key={11} value={11}>
                          11
                        </Option>
                        <Option key={12} value={12}>
                          12
                        </Option>
                        <Option key={13} value={13}>
                          13
                        </Option>
                        <Option key={14} value={14}>
                          14
                        </Option>
                        <Option key={15} value={15}>
                          15
                        </Option>
                        <Option key={16} value={16}>
                          16
                        </Option>
                        <Option key={17} value={17}>
                          17
                        </Option>
                        <Option key={18} value={18}>
                          18
                        </Option>
                        <Option key={19} value={19}>
                          19
                        </Option>
                        <Option key={20} value={20}>
                          20
                        </Option>
                      </Select>
                      <p>มัธยมศึกษาปีที่ 2</p>
                      <Select
                        showSearch
                        style={{
                          width: "-webkit-fill-available",
                          bottom: "10px",
                        }}
                        placeholder="เลือกจำนวนห้องเรียน"
                        optionFilterProp="children"
                        onChange={async (e) =>
                          await this.setState({
                            lavel23: e,
                          })
                        }
                        onSearch={this.onSearch}
                        value={this.state.lavel23}
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        <Option key={1} value={1}>
                          1
                        </Option>
                        <Option key={2} value={2}>
                          2
                        </Option>
                        <Option key={3} value={3}>
                          3
                        </Option>
                        <Option key={4} value={4}>
                          4
                        </Option>
                        <Option key={5} value={5}>
                          5
                        </Option>
                        <Option key={6} value={6}>
                          6
                        </Option>
                        <Option key={7} value={7}>
                          7
                        </Option>
                        <Option key={8} value={8}>
                          8
                        </Option>
                        <Option key={9} value={9}>
                          9
                        </Option>
                        <Option key={10} value={10}>
                          10
                        </Option>
                        <Option key={11} value={11}>
                          11
                        </Option>
                        <Option key={12} value={12}>
                          12
                        </Option>
                        <Option key={13} value={13}>
                          13
                        </Option>
                        <Option key={14} value={14}>
                          14
                        </Option>
                        <Option key={15} value={15}>
                          15
                        </Option>
                        <Option key={16} value={16}>
                          16
                        </Option>
                        <Option key={17} value={17}>
                          17
                        </Option>
                        <Option key={18} value={18}>
                          18
                        </Option>
                        <Option key={19} value={19}>
                          19
                        </Option>
                        <Option key={20} value={20}>
                          20
                        </Option>
                      </Select>
                      <p>มัธยมศึกษาปีที่ 3</p>
                      <Select
                        showSearch
                        style={{
                          width: "-webkit-fill-available",
                          bottom: "10px",
                        }}
                        placeholder="เลือกจำนวนห้องเรียน"
                        optionFilterProp="children"
                        onChange={async (e) =>
                          await this.setState({
                            lavel33: e,
                          })
                        }
                        onSearch={this.onSearch}
                        value={this.state.lavel33}
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        <Option key={1} value={1}>
                          1
                        </Option>
                        <Option key={2} value={2}>
                          2
                        </Option>
                        <Option key={3} value={3}>
                          3
                        </Option>
                        <Option key={4} value={4}>
                          4
                        </Option>
                        <Option key={5} value={5}>
                          5
                        </Option>
                        <Option key={6} value={6}>
                          6
                        </Option>
                        <Option key={7} value={7}>
                          7
                        </Option>
                        <Option key={8} value={8}>
                          8
                        </Option>
                        <Option key={9} value={9}>
                          9
                        </Option>
                        <Option key={10} value={10}>
                          10
                        </Option>
                        <Option key={11} value={11}>
                          11
                        </Option>
                        <Option key={12} value={12}>
                          12
                        </Option>
                        <Option key={13} value={13}>
                          13
                        </Option>
                        <Option key={14} value={14}>
                          14
                        </Option>
                        <Option key={15} value={15}>
                          15
                        </Option>
                        <Option key={16} value={16}>
                          16
                        </Option>
                        <Option key={17} value={17}>
                          17
                        </Option>
                        <Option key={18} value={18}>
                          18
                        </Option>
                        <Option key={19} value={19}>
                          19
                        </Option>
                        <Option key={20} value={20}>
                          20
                        </Option>
                      </Select>
                      <p>มัธยมศึกษาปีที่ 4</p>
                      <Select
                        showSearch
                        style={{
                          width: "-webkit-fill-available",
                          bottom: "10px",
                        }}
                        placeholder="เลือกจำนวนห้องเรียน"
                        optionFilterProp="children"
                        onChange={async (e) =>
                          await this.setState({
                            lavel43: e,
                          })
                        }
                        onSearch={this.onSearch}
                        value={this.state.lavel43}
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        <Option key={1} value={1}>
                          1
                        </Option>
                        <Option key={2} value={2}>
                          2
                        </Option>
                        <Option key={3} value={3}>
                          3
                        </Option>
                        <Option key={4} value={4}>
                          4
                        </Option>
                        <Option key={5} value={5}>
                          5
                        </Option>
                        <Option key={6} value={6}>
                          6
                        </Option>
                        <Option key={7} value={7}>
                          7
                        </Option>
                        <Option key={8} value={8}>
                          8
                        </Option>
                        <Option key={9} value={9}>
                          9
                        </Option>
                        <Option key={10} value={10}>
                          10
                        </Option>
                        <Option key={11} value={11}>
                          11
                        </Option>
                        <Option key={12} value={12}>
                          12
                        </Option>
                        <Option key={13} value={13}>
                          13
                        </Option>
                        <Option key={14} value={14}>
                          14
                        </Option>
                        <Option key={15} value={15}>
                          15
                        </Option>
                        <Option key={16} value={16}>
                          16
                        </Option>
                        <Option key={17} value={17}>
                          17
                        </Option>
                        <Option key={18} value={18}>
                          18
                        </Option>
                        <Option key={19} value={19}>
                          19
                        </Option>
                        <Option key={20} value={20}>
                          20
                        </Option>
                      </Select>
                      <p>มัธยมศึกษาปีที่ 5</p>
                      <Select
                        showSearch
                        style={{
                          width: "-webkit-fill-available",
                          bottom: "10px",
                        }}
                        placeholder="เลือกจำนวนห้องเรียน"
                        optionFilterProp="children"
                        onChange={async (e) =>
                          await this.setState({
                            lavel53: e,
                          })
                        }
                        onSearch={this.onSearch}
                        value={this.state.lavel53}
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        <Option key={1} value={1}>
                          1
                        </Option>
                        <Option key={2} value={2}>
                          2
                        </Option>
                        <Option key={3} value={3}>
                          3
                        </Option>
                        <Option key={4} value={4}>
                          4
                        </Option>
                        <Option key={5} value={5}>
                          5
                        </Option>
                        <Option key={6} value={6}>
                          6
                        </Option>
                        <Option key={7} value={7}>
                          7
                        </Option>
                        <Option key={8} value={8}>
                          8
                        </Option>
                        <Option key={9} value={9}>
                          9
                        </Option>
                        <Option key={10} value={10}>
                          10
                        </Option>
                        <Option key={11} value={11}>
                          11
                        </Option>
                        <Option key={12} value={12}>
                          12
                        </Option>
                        <Option key={13} value={13}>
                          13
                        </Option>
                        <Option key={14} value={14}>
                          14
                        </Option>
                        <Option key={15} value={15}>
                          15
                        </Option>
                        <Option key={16} value={16}>
                          16
                        </Option>
                        <Option key={17} value={17}>
                          17
                        </Option>
                        <Option key={18} value={18}>
                          18
                        </Option>
                        <Option key={19} value={19}>
                          19
                        </Option>
                        <Option key={20} value={20}>
                          20
                        </Option>
                      </Select>
                      <p>มัธยมศึกษาปีที่ 6</p>
                      <Select
                        showSearch
                        style={{
                          width: "-webkit-fill-available",
                          bottom: "10px",
                        }}
                        placeholder="เลือกจำนวนห้องเรียน"
                        optionFilterProp="children"
                        onChange={async (e) =>
                          await this.setState({
                            lavel63: e,
                          })
                        }
                        onSearch={this.onSearch}
                        value={this.state.lavel63}
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        <Option key={1} value={1}>
                          1
                        </Option>
                        <Option key={2} value={2}>
                          2
                        </Option>
                        <Option key={3} value={3}>
                          3
                        </Option>
                        <Option key={4} value={4}>
                          4
                        </Option>
                        <Option key={5} value={5}>
                          5
                        </Option>
                        <Option key={6} value={6}>
                          6
                        </Option>
                        <Option key={7} value={7}>
                          7
                        </Option>
                        <Option key={8} value={8}>
                          8
                        </Option>
                        <Option key={9} value={9}>
                          9
                        </Option>
                        <Option key={10} value={10}>
                          10
                        </Option>
                        <Option key={11} value={11}>
                          11
                        </Option>
                        <Option key={12} value={12}>
                          12
                        </Option>
                        <Option key={13} value={13}>
                          13
                        </Option>
                        <Option key={14} value={14}>
                          14
                        </Option>
                        <Option key={15} value={15}>
                          15
                        </Option>
                        <Option key={16} value={16}>
                          16
                        </Option>
                        <Option key={17} value={17}>
                          17
                        </Option>
                        <Option key={18} value={18}>
                          18
                        </Option>
                        <Option key={19} value={19}>
                          19
                        </Option>
                        <Option key={20} value={20}>
                          20
                        </Option>
                      </Select>
                    </Modal>
                    <br></br>
                    <Table dataSource={this.state.settingRoom}>
                      <Column
                        title="ปีการศึกษา"
                        dataIndex="year"
                        key="year"
                        width="10%"
                        {...this.getColumnSearchProps("year")}
                      />
                      <Column
                        title="มัธยมศึกษาปีที่ 1"
                        dataIndex="level1"
                        key="level1"
                        width="11%"
                        {...this.getColumnSearchProps("level1")}
                      />
                      <Column
                        title="มัธยมศึกษาปีที่ 2"
                        dataIndex="level2"
                        key="level2"
                        width="11%"
                        {...this.getColumnSearchProps("level2")}
                      />
                      <Column
                        title="มัธยมศึกษาปีที่ 3"
                        dataIndex="level3"
                        key="level3"
                        width="11%"
                        {...this.getColumnSearchProps("level3")}
                      />
                      <Column
                        title="มัธยมศึกษาปีที่ 4"
                        dataIndex="level4"
                        key="level4"
                        width="11%"
                        {...this.getColumnSearchProps("level4")}
                      />
                      <Column
                        title="มัธยมศึกษาปีที่ 5"
                        dataIndex="level5"
                        key="level5"
                        width="11%"
                        {...this.getColumnSearchProps("level5")}
                      />
                      <Column
                        title="มัธยมศึกษาปีที่ 6"
                        dataIndex="level6"
                        key="level6"
                        width="11%"
                        {...this.getColumnSearchProps("level6")}
                      />
                      <Column
                        width="5%"
                        title="Action"
                        key="idSubject"
                        render={(text, idSubject) => (
                          <Space size="middle">
                            <a
                              onClick={async (e) => {
                                await this.setState(
                                  { id3: idSubject.id },
                                  this.showdata3
                                );
                              }}
                            >
                              แก้ไข{" "}
                            </a>
                            <Popconfirm
                              title="ยืนยันการลบอีกครั้ง"
                              onConfirm={async (e) => {
                                await this.setState(
                                  { id3: idSubject.id },
                                  this.onDel3
                                );
                              }}
                              okText="ยืนยัน"
                              cancelText="ยกเลิก"
                            >
                              <a>ลบ</a>
                            </Popconfirm>
                          </Space>
                        )}
                      />
                    </Table>
                  </div>
                </div>
              </div>
            ) : this.state.line === 4 && this.state.loadpage === false ? (
              <div>
                <Breadcrumb style={{ margin: "16px 0" }}>
                  <Breadcrumb.Item>กำหนดโปรแกรมการเรียน</Breadcrumb.Item>
                </Breadcrumb>
                <div
                  className="site-layout-background"
                  style={{ padding: 24, minHeight: 360 }}
                >
                  <div>
                    <Divider orientation="left">กำหนดโปรแกรมการเรียน</Divider>
                    <Modal
                      title="กำหนดโปรแกรมการเรียน"
                      centered
                      visible={visible}
                      onOk={this.onsave4}
                      onCancel={async () =>
                        await this.setState({
                          visible: false,
                          pg4: null,
                          gs4: null,
                          id4: null,
                        })
                      }
                      footer={[
                        <Button
                          key="back"
                          onClick={async () =>
                            await this.setState({
                              visible: false,
                              pg4: null,
                              gs4: null,
                              id4: null,
                            })
                          }
                        >
                          ยกเลิก
                        </Button>,
                        <Button
                          key="submit"
                          type="primary"
                          loading={this.state.loading}
                          onClick={this.onsave4}
                          disabled={
                            this.state.pg4 !== null && this.state.pg4 !== ""
                              ? false
                              : true
                          }
                        >
                          แก้ไข
                        </Button>,
                      ]}
                      width={1000}
                    >
                      <p>ปีการศึกษา</p>{" "}
                      <Input
                        maxLength="4"
                        disabled
                        style={{ bottom: "10px" }}
                        value={this.state.year4}
                        onChange={async (e) =>
                          await this.setState({ year4: e.target.value })
                        }
                        onKeyDown={(evt) => this.pushnumber(evt)}
                        placeholder="กรอกปีการศึกษา"
                      />
                      <p>กลุ่มเรียน</p>{" "}
                      <Input
                        disabled
                        style={{ bottom: "10px" }}
                        value={this.state.gs4}
                        onChange={async (e) =>
                          await this.setState({ year4: e.target.value })
                        }
                        onKeyDown={(evt) => this.pushnumber(evt)}
                        placeholder="กรอกปีการศึกษา"
                      />
                      <p>สายการเรียน</p>
                      <Select
                        showSearch
                        style={{
                          width: "-webkit-fill-available",
                          bottom: "10px",
                        }}
                        placeholder="เลือกสายการเรียน"
                        optionFilterProp="children"
                        onChange={this.onCPG4}
                        onSearch={this.onSearch}
                        value={this.state.pg4}
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        <Option
                          key="วิทยาศาสตร์-คณิตศาสตร์"
                          value="วิทยาศาสตร์-คณิตศาสตร์"
                        >
                          วิทยาศาสตร์-คณิตศาสตร์
                        </Option>
                        <Option
                          key="ภาษาอังกฤษ-ภาษาไทย-สังคมศึกษา"
                          value="ภาษาอังกฤษ-ภาษาไทย-สังคมศึกษา"
                        >
                          ภาษาอังกฤษ-ภาษาไทย-สังคมศึกษา
                        </Option>
                        <Option
                          key="ภาษาอังกฤษ-คณิตศาสตร์"
                          value="ภาษาอังกฤษ-คณิตศาสตร์"
                        >
                          ภาษาอังกฤษ-คณิตศาสตร์
                        </Option>
                        <Option
                          key="ภาษาอังกฤษ-ภาษาจีน"
                          value="ภาษาอังกฤษ-ภาษาจีน"
                        >
                          ภาษาอังกฤษ-ภาษาจีน
                        </Option>
                      </Select>
                    </Modal>
                    <br></br>
                    <Table
                      dataSource={this.state.allclass4}
                      columns={columns4}
                    ></Table>
                  </div>
                </div>
              </div>
            ) : this.state.line === 6 && this.state.loadpage === false ? (
              <div>
                <Breadcrumb style={{ margin: "16px 0" }}>
                  <Breadcrumb.Item>จัดการห้องที่ใช้สอน</Breadcrumb.Item>
                </Breadcrumb>
                <div
                  className="site-layout-background"
                  style={{ padding: 24, minHeight: 360 }}
                >
                  <div>
                    <Divider orientation="left">จัดการห้องที่ใช้สอน</Divider>
                    <Button
                      type="dashed"
                      style={{ float: "right" }}
                      icon={<PlusCircleOutlined />}
                      onClick={async () =>
                        await this.setState({ visible: true })
                      }
                    >
                      เพิ่มห้องที่ใช้สอน
                    </Button>
                    <Modal
                      title={this.state.id6 === null?"เพิ่มห้องที่ใช้สอน" : "แก้ไขห้องที่ใช้สอน"}
                      centered
                      visible={visible}
                      onOk={this.onsave6}
                      onCancel={async () =>
                        await this.setState({
                          visible: false,
                          tsp6: [],
                          nameroom6: null,
                          seGL6: null,
                          id6: null,
                        })
                      }
                      footer={[
                        <Button
                          key="back"
                          onClick={async () =>
                            await this.setState({
                              visible: false,
                              nameroom6: null,
                              tsp6: [],
                              seGL6: null,
                              id6: null,
                            })
                          }
                        >
                          ยกเลิก
                        </Button>,
                        <Button
                          key="submit"
                          type="primary"
                          loading={this.state.loading}
                          onClick={this.onsave6}
                          disabled={
                            this.state.nameroom6 !== null &&
                            this.state.nameroom6 !== "" &&
                            this.state.seGL6 !== null &&
                            this.state.seGL6 !== ""
                              ? false
                              : true
                          }
                        >
                          {this.state.id6 === null ? "บันทึก" : "แก้ไข"}
                        </Button>,
                      ]}
                      width={1000}
                    >
                      <p>ชื่อห้อง</p>{" "}
                      <Input
                        maxLength="30"
                        disabled={this.state.id6 === null ? false : true}
                        style={{ bottom: "10px" }}
                        value={this.state.nameroom6}
                        onChange={async (e) =>
                          await this.setState({ nameroom6: e.target.value })
                        }
                        onKeyDown={(evt) => this.pushthaiENG(evt)}
                        placeholder="กรอกชื่อห้อง"
                      />
                      <p>กลุ่มสาระการเรียนรู้</p>
                      <Select
                        showSearch
                        style={{
                          width: "-webkit-fill-available",
                          bottom: "10px",
                        }}
                        placeholder="เลือกกลุ่มสาระการเรียนรู้"
                        optionFilterProp="children"
                        onChange={this.onCGL6}
                        onSearch={this.onSearch}
                        value={this.state.seGL6}
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        <Option value="กลุ่มสาระการเรียนรู้ภาษาไทย">
                          กลุ่มสาระการเรียนรู้ภาษาไทย
                        </Option>
                        <Option value="กลุ่มสาระการเรียนรู้ศิลปะ">
                          กลุ่มสาระการเรียนรู้ศิลปะ
                        </Option>
                        <Option value="กลุ่มสาระการเรียนรู้ภาษาต่างประเทศ">
                          กลุ่มสาระการเรียนรู้ภาษาต่างประเทศ
                        </Option>
                        <Option value="กลุ่มสาระการเรียนรู้สุขศึกษาและพลศึกษา">
                          กลุ่มสาระการเรียนรู้สุขศึกษาและพลศึกษา
                        </Option>
                        <Option value="กลุ่มสาระการเรียนรู้การงานอาชีพและเทคโนโลยี">
                          กลุ่มสาระการเรียนรู้การงานอาชีพและเทคโนโลยี
                        </Option>
                        <Option value="กลุ่มสาระการเรียนรู้สังคมศึกษา">
                          กลุ่มสาระการเรียนรู้สังคมศึกษา
                        </Option>
                        <Option value="กลุ่มสาระการเรียนรู้คณิตศาสตร์">
                          กลุ่มสาระการเรียนรู้คณิตศาสตร์
                        </Option>
                        <Option value="กลุ่มสาระการเรียนรู้วิทยาศาสตร์">
                          กลุ่มสาระการเรียนรู้วิทยาศาสตร์
                        </Option>
                        <Option value="กิจกรรมพัฒนาผู้เรียน">
                          กิจกรรมพัฒนาผู้เรียน
                        </Option>
                      </Select>
                      <p>สอนเฉพาะวิชา</p>
                      <Select
                        mode="multiple"
                        style={{ width: "100%", bottom: "5px" }}
                        placeholder="เลือกรายวิชา"
                        onChange={async (e) => await this.setState({ tsp6: e })}
                        value={this.state.tsp6}
                      >
                        {main6}
                      </Select>
                    </Modal>
                    <br></br>
                    <Table dataSource={this.state.classroom}>
                      <Column
                        title="ชื่อห้อง"
                        dataIndex="nameRoom"
                        key="nameRoom"
                        width="20%"
                        {...this.getColumnSearchProps("nameRoom")}
                      />
                      <Column
                        title="กลุ่มสาระ"
                        dataIndex="groupLearning"
                        key="groupLearning"
                        width="30%"
                        filters={[
                          {
                            text: "กลุ่มสาระการเรียนรู้ภาษาไทย",
                            value: "กลุ่มสาระการเรียนรู้ภาษาไทย",
                          },
                          {
                            text: "กลุ่มสาระการเรียนรู้ศิลปะ",
                            value: "กลุ่มสาระการเรียนรู้ศิลปะ",
                          },
                          {
                            text: "กลุ่มสาระการเรียนรู้ภาษาต่างประเทศ",
                            value: "กลุ่มสาระการเรียนรู้ภาษาต่างประเทศ",
                          },
                          {
                            text: "กลุ่มสาระการเรียนรู้สุขศึกษาและพลศึกษา",
                            value: "กลุ่มสาระการเรียนรู้สุขศึกษาและพลศึกษา",
                          },
                          {
                            text: "กลุ่มสาระการเรียนรู้การงานอาชีพและเทคโนโลยี",
                            value:
                              "กลุ่มสาระการเรียนรู้การงานอาชีพและเทคโนโลยี",
                          },
                          {
                            text: "กลุ่มสาระการเรียนรู้สังคมศึกษา",
                            value: "กลุ่มสาระการเรียนรู้สังคมศึกษา",
                          },
                          {
                            text: "กลุ่มสาระการเรียนรู้คณิตศาสตร์",
                            value: "กลุ่มสาระการเรียนรู้คณิตศาสตร์",
                          },
                          {
                            text: "กลุ่มสาระการเรียนรู้วิทยาศาสตร์",
                            value: "กลุ่มสาระการเรียนรู้วิทยาศาสตร์",
                          },
                          {
                            text: "กิจกรรมพัฒนาผู้เรียน",
                            value: "กิจกรรมพัฒนาผู้เรียน",
                          },
                        ]}
                        filterMultiple={false}
                        onFilter={(value, record) =>
                          record.groupLearning.indexOf(value) === 0
                        }
                      />
                      <Column
                        width="40%"
                        title="สอนเฉพาะวิชา"
                        dataIndex="TsP"
                        key="TsP"
                        {...this.getColumnSearchProps("TsP")}
                        render={(TsP) => (
                          <>
                            {TsP.length > 0
                              ? TsP.map((TsP) => (
                                  <Tag color="blue" key={TsP}>
                                    {TsP}
                                  </Tag>
                                ))
                              : null}
                          </>
                        )}
                      />
                      <Column
                        width="10%"
                        title="Action"
                        key="id"
                        render={(text, id) => (
                          <Space size="middle">
                            <a
                              onClick={async (e) => {
                                await this.setState(
                                  { id6: id.id },
                                  this.showdata6
                                );
                              }}
                            >
                              แก้ไข{" "}
                            </a>
                            <Popconfirm
                              title="ยืนยันการลบอีกครั้ง"
                              onConfirm={async (e) => {
                                await this.setState(
                                  { id6: id.id },
                                  this.onDel6
                                );
                              }}
                              okText="ยืนยัน"
                              cancelText="ยกเลิก"
                            >
                              <a>ลบ</a>
                            </Popconfirm>
                          </Space>
                        )}
                      />
                    </Table>
                  </div>
                </div>
              </div>
            ) : this.state.line === 7 && this.state.loadpage === false ? (
              <div>
                <Breadcrumb style={{ margin: "16px 0" }}>
                  <Breadcrumb.Item>
                    {this.state.year7 === null ? (
                      <label>จัดตารางเรียน</label>
                    ) : (
                      <a onClick={this.onCS7}>จัดตารางเรียน</a>
                    )}
                  </Breadcrumb.Item>
                  {this.state.year7 != null ? (
                    <Breadcrumb.Item>
                      {this.state.class7 === null ? (
                        <label>ปีการศึกษา {this.state.year7}</label>
                      ) : (
                        <a onClick={this.onCY7}>
                          ปีการศึกษา {this.state.year7}
                        </a>
                      )}
                    </Breadcrumb.Item>
                  ) : null}
                  {this.state.class7 != null ? (
                    <Breadcrumb.Item>
                      {this.state.term7 === null ? (
                        <label>กลุ่มเรียน {this.state.class7}</label>
                      ) : (
                        <a onClick={this.onCC7}>
                          กลุ่มเรียน {this.state.class7}
                        </a>
                      )}
                    </Breadcrumb.Item>
                  ) : null}
                  {this.state.term7 != null ? (
                    <Breadcrumb.Item>เทอม {this.state.term7}</Breadcrumb.Item>
                  ) : null}
                </Breadcrumb>
                <div
                  className="site-layout-background"
                  style={{ padding: 24, minHeight: 360 }}
                >
                  {this.state.year7 === null ? (
                    <div>
                      <Divider orientation="left">ปีการศึกษา</Divider>
                      <Row gutter={16}>
                        <Col className="gutter-row" span={4}>
                          {this.state.cutyear.map((listValue, index) => {
                            return (
                              <tr key={index}>
                                <a
                                  onClick={async (a) => {
                                    await this.setState({ year7: listValue });
                                    await this.cutC7();
                                    await this.lclass();
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
                          *หากไม่ได้กำหนดโปรแกรมการเรียนในปีนั้นอย่างน้อย1กลุ่มเรียนจะไม่แสดงขึ้นมาให้เลือก
                        </label>
                      </Footer>
                    </div>
                  ) : this.state.class7 === null ? (
                    <div>
                      <Divider orientation="left">กลุ่มเรียน</Divider>
                      <Row gutter={16}>
                        <Col className="gutter-row" span={4}>
                          <div style={style}>กลุ่มเรียนที่1 </div>
                          {this.state.namelv1.map((listValue, index) => {
                            return (
                              <tr key={index}>
                                <a
                                  onClick={async (a) => {
                                    await this.setState({
                                      class7: listValue,
                                    });
                                  }}
                                >
                                  {listValue}
                                </a>
                              </tr>
                            );
                          })}
                        </Col>
                        <Col className="gutter-row" span={4}>
                          <div style={style}>กลุ่มเรียนที่2 </div>
                          {this.state.namelv2.map((listValue, index) => {
                            return (
                              <tr key={index}>
                                <a
                                  onClick={async (a) => {
                                    await this.setState({
                                      class7: listValue,
                                    });
                                  }}
                                >
                                  {listValue}
                                </a>
                              </tr>
                            );
                          })}
                        </Col>
                        <Col className="gutter-row" span={4}>
                          <div style={style}>กลุ่มเรียนที่3 </div>
                          {this.state.namelv3.map((listValue, index) => {
                            return (
                              <tr key={index}>
                                <a
                                  onClick={async (a) => {
                                    await this.setState({
                                      class7: listValue,
                                    });
                                  }}
                                >
                                  {listValue}
                                </a>
                              </tr>
                            );
                          })}
                        </Col>
                        <Col className="gutter-row" span={4}>
                          <div style={style}>กลุ่มเรียนที่4 </div>
                          {this.state.namelv4.map((listValue, index) => {
                            return (
                              <tr key={index}>
                                <a
                                  onClick={async (a) => {
                                    await this.setState({
                                      class7: listValue,
                                    });
                                  }}
                                >
                                  {listValue}
                                </a>
                              </tr>
                            );
                          })}
                        </Col>
                        <Col className="gutter-row" span={4}>
                          <div style={style}>กลุ่มเรียนที่5 </div>
                          {this.state.namelv5.map((listValue, index) => {
                            return (
                              <tr key={index}>
                                <a
                                  onClick={async (a) => {
                                    await this.setState({
                                      class7: listValue,
                                    });
                                  }}
                                >
                                  {listValue}
                                </a>
                              </tr>
                            );
                          })}
                        </Col>
                        <Col className="gutter-row" span={4}>
                          <div style={style}>กลุ่มเรียนที่6 </div>
                          {this.state.namelv6.map((listValue, index) => {
                            return (
                              <tr key={index}>
                                <a
                                  onClick={async (a) => {
                                    await this.setState({
                                      class7: listValue,
                                    });
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
                          *หากไม่ได้กำหนดโปรแกรมการเรียนจะไม่แสดงขึ้นมาให้เลือก
                        </label>
                      </Footer>
                    </div>
                  ) : this.state.term7 == null ? (
                    <div>
                      <Divider orientation="left">เทอม</Divider>
                      <Row gutter={16}>
                      <Col className="gutter-row" span={4}>
                      <Button type="primary" onClick={async (a) => {
                                await this.setState({ term7: 1 });
                                await this.filterIDSub();
                                await this.selectDataCos();
                              }}>เทอม 1</Button>
                        </Col>
                        <Col className="gutter-row" span={4}>
                        <Button type="primary" onClick={async (a) => {
                                await this.setState({ term7: 2 });
                                await this.filterIDSub();
                                await this.selectDataCos();
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
                          <label>ครูผู้สอน</label>
                        </Col>
                        <Col className="gutter-row" span={4}>
                          <label>ห้องที่ใช้สอน</label>
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
                            dropdownMatchSelectWidth={false}
                            placeholder="เลือกรายวิชา"
                            optionFilterProp="children"
                            onChange={this.เปลี่ยนรายวิชา7}
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
                            // showSearch
                            allowClear
                            disabled={
                              this.state.selectTeaF.length > 0 ||
                              this.state.selectTeaS.length > 0
                                ? this.state.lock7 === 1
                                  ? this.state.lockTea7 === 1
                                    ? false
                                    : true
                                  : true
                                : true
                            }
                            style={{ width: 190 }}
                            placeholder="เลือกครูผู้สอน"
                            optionFilterProp="children"
                            dropdownMatchSelectWidth={false}
                            onChange={this.เปลี่ยนครู7}
                            value={this.state.seTea}
                            // onSearch={this.onSearch}
                            // filterOption={(input, option) =>
                            //   option.children
                            //     .toLowerCase()
                            //     .indexOf(input.toLowerCase()) >= 0
                            // }
                          >
                            {this.state.selectTeaF.length > 0 ? (
                              <OptGroup label="ครูผู้สอนหลัก">
                                {teacherF}
                              </OptGroup>
                            ) : null}
                            {this.state.selectTeaS.length > 0 ? (
                              <OptGroup label="ครูผู้สอนรอง">
                                {teacherS}
                              </OptGroup>
                            ) : null}
                          </Select>
                        </Col>
                        <Col className="gutter-row" span={4}>
                          <Select
                            // showSearch
                            allowClear
                            disabled={
                              this.state.tsp.length > 0 ||
                              this.state.secRoomG.length > 0 ||
                              this.state.mainRoomG.length > 0
                                ? this.state.lock7 === 1
                                  ? false
                                  : true
                                : true
                            }
                            style={{ width: 190 }}
                            placeholder="เลือกห้องที่ใช้สอน"
                            optionFilterProp="children"
                            onChange={this.เปลี่ยนห้อง7}
                            value={this.state.seRoom}
                            // onSearch={this.onSearch}
                            // filterOption={(input, option) =>
                            //   option.children
                            //     .toLowerCase()
                            //     .indexOf(input.toLowerCase()) >= 0
                            // }
                          >
                            {this.state.tsp.length > 0 ? (
                              <OptGroup label="ห้องเฉพาะรายวิชา">
                                {tsp}
                              </OptGroup>
                            ) : null}
                            {this.state.mainRoomG.length > 0 ? (
                              <OptGroup label="ห้องสอนประจำกลุ่มสาระ">
                                {mainRoom}
                              </OptGroup>
                            ) : null}
                            {this.state.secRoomG.length > 0 ? (
                              <OptGroup label="ห้องอื่นๆ">{secRoom}</OptGroup>
                            ) : null}
                          </Select>
                        </Col>
                        <Col className="gutter-row" span={4}>
                          <Select
                            showSearch
                            allowClear
                            disabled={
                              this.state.allTime.length > 0 ||
                              this.state.seCos === "พักกลางวัน"
                                ? this.state.lock7 === 1
                                  ? false
                                  : true
                                : true
                            }
                            style={{ width: 190 }}
                            placeholder="เลือกช่วงเวลา"
                            optionFilterProp="children"
                            onChange={this.เปลี่ยนเวลา7}
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
                          {this.state.seCos !== "พักกลางวัน" ? this.state.chackall === false ?(
                            <Button
                              disabled={
                                this.state.seRoom !== null &&
                                this.state.seRoom !== undefined &&
                                this.state.seTea !== null &&
                                this.state.seTea !== undefined &&
                                this.state.seTime !== null &&
                                this.state.seTime !== undefined &&
                                this.state.seCos !== null &&
                                this.state.seCos !== undefined
                                  ? false
                                  : true
                              }
                              type="primary"
                              loading={this.state.loading}
                              onClick={this.enterLoading}
                            >
                              จัดลงตาราง
                            </Button>
                          ) : (
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
                              onClick={this.enterLoading}
                            >
                              จัดลงตาราง
                            </Button>
                          ) : (
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
                              onClick={this.enterLoading2}
                            >
                              จัดลงตาราง
                            </Button>
                          )}
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
                          <label>ช่วงเวลาที่ต้องการลบ</label>
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
                            placeholder="เลือกช่วงเวลาที่ต้องการลบ"
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
                            onClick={this.state.chackall === false ?this.enterLoadingDel7:this.enterLoadingDel72}
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
                                <th>กลุ่มเรียน {this.state.class7}</th>
                                <th>ภาคเรียนที่</th>
                                <th
                                  style={{
                                    textAlign: "left",
                                  }}
                                >
                                  {this.state.term7}/{this.state.year7}
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
                                      <label>{this.state.is1 === "พักกลางวัน" ? "พักกลางวัน":
                                      this.filterId(this.state.is1) }</label>
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
                                      <label>{this.state.is2=== "พักกลางวัน" ? "พักกลางวัน":
                                      this.filterId(this.state.is2)}</label>
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
                                      <label>{this.state.is3 === "พักกลางวัน" ? "พักกลางวัน":
                                      this.filterId(this.state.is3) }</label>
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
                                      <label>{this.state.is4=== "พักกลางวัน" ? "พักกลางวัน":
                                      this.filterId(this.state.is4)}</label>
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
                                      <label>{this.state.is5=== "พักกลางวัน" ? "พักกลางวัน":
                                      this.filterId(this.state.is5)}</label>
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
                                      <label>{this.state.is6=== "พักกลางวัน" ? "พักกลางวัน":
                                      this.filterId(this.state.is6)}</label>
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
                                      <label>{this.state.is7=== "พักกลางวัน" ? "พักกลางวัน":
                                      this.filterId(this.state.is7)}</label>
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
                                      <label>{this.state.is8=== "พักกลางวัน" ? "พักกลางวัน":
                                      this.filterId(this.state.is8)}</label>
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
                                      <label>{this.state.is9=== "พักกลางวัน" ? "พักกลางวัน":
                                      this.filterId(this.state.is9)}</label>
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
                                      <label>{this.state.is10=== "พักกลางวัน" ? "พักกลางวัน":
                                      this.filterId(this.state.is10)}</label>
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
                                      <label>{this.state.is11=== "พักกลางวัน" ? "พักกลางวัน":
                                      this.filterId(this.state.is11)}</label>
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
                                      <label>{this.state.is12=== "พักกลางวัน" ? "พักกลางวัน":
                                      this.filterId(this.state.is12)}</label>
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
                                      <label>{this.state.is13=== "พักกลางวัน" ? "พักกลางวัน":
                                      this.filterId(this.state.is13)}</label>
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
                                      <label>{this.state.is14=== "พักกลางวัน" ? "พักกลางวัน":
                                      this.filterId(this.state.is14)}</label>
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
                                      <label>{this.state.is15=== "พักกลางวัน" ? "พักกลางวัน":
                                      this.filterId(this.state.is15)}</label>
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
                                      <label>{this.state.is16=== "พักกลางวัน" ? "พักกลางวัน":
                                      this.filterId(this.state.is16)}</label>
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
                                      <label>{this.state.is17=== "พักกลางวัน" ? "พักกลางวัน":
                                      this.filterId(this.state.is17)}</label>
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
                                      <label>{this.state.is18=== "พักกลางวัน" ? "พักกลางวัน":
                                      this.filterId(this.state.is18)}</label>
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
                                      <label>{this.state.is19=== "พักกลางวัน" ? "พักกลางวัน":
                                      this.filterId(this.state.is19)}</label>
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
                                      <label>{this.state.is20=== "พักกลางวัน" ? "พักกลางวัน":
                                      this.filterId(this.state.is20)}</label>
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
                                      <label>{this.state.is21=== "พักกลางวัน" ? "พักกลางวัน":
                                      this.filterId(this.state.is21)}</label>
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
                                      <label>{this.state.is22=== "พักกลางวัน" ? "พักกลางวัน":
                                      this.filterId(this.state.is22)}</label>
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
                                      <label>{this.state.is23=== "พักกลางวัน" ? "พักกลางวัน":
                                      this.filterId(this.state.is23)}</label>
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
                                      <label>{this.state.is24=== "พักกลางวัน" ? "พักกลางวัน":
                                      this.filterId(this.state.is24)}</label>
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
                                      <label>{this.state.is25=== "พักกลางวัน" ? "พักกลางวัน":
                                      this.filterId(this.state.is25)}</label>
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
                                      <label>{this.state.is26=== "พักกลางวัน" ? "พักกลางวัน":
                                      this.filterId(this.state.is26)}</label>
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
                                      <label>{this.state.is27=== "พักกลางวัน" ? "พักกลางวัน":
                                      this.filterId(this.state.is27)}</label>
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
                                      <label>{this.state.is28=== "พักกลางวัน" ? "พักกลางวัน":
                                      this.filterId(this.state.is28)}</label>
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
                                      <label>{this.state.is29=== "พักกลางวัน" ? "พักกลางวัน":
                                      this.filterId(this.state.is29)}</label>
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
                                      <label>{this.state.is30=== "พักกลางวัน" ? "พักกลางวัน":
                                      this.filterId(this.state.is30)}</label>
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
                                      <label>{this.state.is31=== "พักกลางวัน" ? "พักกลางวัน":
                                      this.filterId(this.state.is31)}</label>
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
                                      <label>{this.state.is32=== "พักกลางวัน" ? "พักกลางวัน":
                                      this.filterId(this.state.is32)}</label>
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
                                      <label>{this.state.is33=== "พักกลางวัน" ? "พักกลางวัน":
                                      this.filterId(this.state.is33)}</label>
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
                                      <label>{this.state.is34=== "พักกลางวัน" ? "พักกลางวัน":
                                      this.filterId(this.state.is34)}</label>
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
                                      <label>{this.state.is35=== "พักกลางวัน" ? "พักกลางวัน":
                                      this.filterId(this.state.is35)}</label>
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
                                      <label>{this.state.is36=== "พักกลางวัน" ? "พักกลางวัน":
                                      this.filterId(this.state.is36)}</label>
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
                                      <label>{this.state.is37=== "พักกลางวัน" ? "พักกลางวัน":
                                      this.filterId(this.state.is37)}</label>
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
                                      <label>{this.state.is38=== "พักกลางวัน" ? "พักกลางวัน":
                                      this.filterId(this.state.is38)}</label>
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
                                      <label>{this.state.is39=== "พักกลางวัน" ? "พักกลางวัน":
                                      this.filterId(this.state.is39)}</label>
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
                                      <label>{this.state.is40=== "พักกลางวัน" ? "พักกลางวัน":
                                      this.filterId(this.state.is40)}</label>
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
                                      <label>{this.state.is41=== "พักกลางวัน" ? "พักกลางวัน":
                                      this.filterId(this.state.is41)}</label>
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
                                      <label>{this.state.is42=== "พักกลางวัน" ? "พักกลางวัน":
                                      this.filterId(this.state.is42)}</label>
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
                                      <label>{this.state.is43=== "พักกลางวัน" ? "พักกลางวัน":
                                      this.filterId(this.state.is43)}</label>
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
                                      <label>{this.state.is44=== "พักกลางวัน" ? "พักกลางวัน":
                                      this.filterId(this.state.is44)}</label>
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
                                      <label>{this.state.is45=== "พักกลางวัน" ? "พักกลางวัน":
                                      this.filterId(this.state.is45)}</label>
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
            ) : this.state.line === 10 && this.state.loadpage === false ? (
              <div>
                <Breadcrumb style={{ margin: "16px 0" }}>
                  <Breadcrumb.Item>
                      <label>ตารางเรียน</label>
                  </Breadcrumb.Item>
                </Breadcrumb>
                <div
                  className="site-layout-background"
                  style={{ padding: 24, minHeight: 360 }}
                >
                      <Divider orientation="left">ตารางเรียน</Divider>
                      <Row gutter={24}>
                        <Col className="gutter-row" span={4}>
                          <label>เทอม/ปีการศึกษา</label>
                        </Col>
                        <Col className="gutter-row" span={4}>
                          <label>กลุ่มเรียน</label>
                        </Col>
                      </Row>
                      <Row gutter={24}>
                        <Col className="gutter-row" span={4}>
                          <Select
                            showSearch
                            style={{ width: 190 }}
                            dropdownMatchSelectWidth={false}
                            placeholder="เลือกเทอม/ปีการศึกษา"
                            optionFilterProp="children"
                            onChange={this.onCSO10}
                            value={this.state.seTY10}
                            onSearch={this.onSearch}
                            filterOption={(input, option) =>
                              option.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                            }
                          >
                            {selectTermYear}
                          </Select>
                        </Col>
                        <Col className="gutter-row" span={4}>
                          <Select
                            showSearch
                            disabled={this.state.seTY10 === null ? true : false}
                            style={{ width: 190 }}
                            dropdownMatchSelectWidth={false}
                            placeholder="เลือกกลุ่มเรียน"
                            optionFilterProp="children"
                            onChange={this.onCGs10}
                            value={this.state.gs10}
                            onSearch={this.onSearch}
                            filterOption={(input, option) =>
                              option.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                            }
                          >
                            {allclass10}
                          </Select>
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
                                <th>กลุ่มเรียน {this.state.gs10}</th>
                                <th>ภาคเรียนที่</th>
                                <th
                                  style={{
                                    textAlign: "left",
                                  }}
                                >
                                  {this.state.term10}/{this.state.year10}
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
                                      <label>{this.filterIds10(1,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds10(1,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(1,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(1,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is2!== null && this.state.it2 === null && 
                                  this.state.ic2 === null  ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds10(2,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds10(2,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(2,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(2,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is3!== null && this.state.it3 === null && 
                                  this.state.ic3 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds10(3,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds10(3,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(3,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(3,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is4!== null && this.state.it4 === null && 
                                  this.state.ic4 === null  ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds10(4,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds10(4,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(4,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(4,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is5!== null && this.state.it5 === null && 
                                  this.state.ic5 === null  ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds10(5,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds10(5,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(5,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(5,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is6!== null && this.state.it6 === null && 
                                  this.state.ic6 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds10(6,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds10(6,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(6,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(6,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is7!== null && this.state.it7 === null && 
                                  this.state.ic7 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds10(7,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds10(7,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(7,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(7,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is8!== null && this.state.it8 === null && 
                                  this.state.ic8 === null  ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds10(8,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds10(8,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(8,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(8,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is9!== null && this.state.it9 === null && 
                                  this.state.ic9 === null  ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds10(9,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds10(9,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(9,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(9,3)}</label>
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
                                      <label>{this.filterIds10(10,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds10(10,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(10,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(10,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is11!== null && this.state.it11 === null && 
                                  this.state.ic11 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds10(11,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds10(11,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(11,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(11,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is12!== null && this.state.it12 === null && 
                                  this.state.ic12 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds10(12,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds10(12,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(12,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(12,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is13!== null && this.state.it13 === null && 
                                  this.state.ic13 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds10(13,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds10(13,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(13,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(13,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is14!== null && this.state.it14 === null && 
                                  this.state.ic14 === null  ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds10(14,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds10(14,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(14,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(14,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is15!== null && this.state.it15 === null && 
                                  this.state.ic15 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds10(15,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds10(15,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(15,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(15,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is16!== null && this.state.it16 === null && 
                                  this.state.ic16 === null  ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds10(16,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds10(16,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(16,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(16,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is17 !== null && this.state.it17 === null && 
                                  this.state.ic17 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds10(17,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds10(17,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(17,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(17,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is18 !== null && this.state.it18 === null && 
                                  this.state.ic18 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds10(18,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds10(18,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(18,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(18,3)}</label>
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
                                      <label>{this.filterIds10(19,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds10(19,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(19,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(19,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is20 !== null && this.state.it20 === null && 
                                  this.state.ic20 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds10(20,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds10(20,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(20,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(20,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is21 !== null && this.state.it21 === null && 
                                  this.state.ic21 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds10(21,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds10(21,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(21,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(21,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is22 !== null && this.state.it22 === null && 
                                  this.state.ic22 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds10(22,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds10(22,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(22,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(22,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is23 !== null && this.state.it23 === null && 
                                  this.state.ic23 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds10(23,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds10(23,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(23,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(23,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is24 !== null && this.state.it24 === null && 
                                  this.state.ic24 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds10(24,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds10(24,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(24,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(24,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is25 !== null && this.state.it25 === null && 
                                  this.state.ic25 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds10(25,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds10(25,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(25,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(25,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is26 !== null && this.state.it26 === null && 
                                  this.state.ic26 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds10(26,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds10(26,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(26,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(26,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is27 !== null && this.state.it27 === null && 
                                  this.state.ic27 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds10(27,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds10(27,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(27,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(27,3)}</label>
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
                                      <label>{this.filterIds10(28,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds10(28,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(28,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(28,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is29 !== null && this.state.it29 === null && 
                                  this.state.ic29 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds10(29,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds10(29,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(29,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(29,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is30 !== null && this.state.it30 === null && 
                                  this.state.ic30 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds10(30,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds10(30,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(30,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(30,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is31 !== null && this.state.it31 === null && 
                                  this.state.ic31 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds10(31,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds10(31,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(31,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(31,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is32 !== null && this.state.it32 === null && 
                                  this.state.ic32 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds10(32,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds10(32,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(32,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(32,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is33 !== null && this.state.it33 === null && 
                                  this.state.ic33 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds10(33,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds10(33,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(33,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(33,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is34 !== null && this.state.it34 === null && 
                                  this.state.ic34 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds10(34,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds10(34,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(34,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(34,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is35 !== null && this.state.it35 === null && 
                                  this.state.ic35 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds10(35,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds10(35,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(35,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(35,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is36 !== null && this.state.it36 === null && 
                                  this.state.ic36 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds10(36,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds10(36,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(36,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(36,3)}</label>
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
                                      <label>{this.filterIds10(37,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds10(37,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(37,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(37,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is38 !== null && this.state.it38 === null && 
                                  this.state.ic38 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds10(38,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds10(38,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(38,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(38,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is39 !== null && this.state.it39 === null && 
                                  this.state.ic39 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds10(39,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds10(39,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(39,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(39,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is40 !== null && this.state.it40 === null && 
                                  this.state.ic40 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds10(40,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds10(40,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(40,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(40,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is41 !== null && this.state.it41 === null && 
                                  this.state.ic41 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds10(41,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds10(41,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(41,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(41,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is42 !== null && this.state.it42 === null && 
                                  this.state.ic42 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds10(42,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds10(42,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(42,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(42,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is43 !== null && this.state.it43 === null && 
                                  this.state.ic43=== null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds10(43,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds10(43,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(43,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(43,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is44 !== null && this.state.it44 === null && 
                                  this.state.ic44 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds10(44,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds10(44,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(44,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(44,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is45 !== null && this.state.it45 === null && 
                                  this.state.ic45 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds10(45,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds10(45,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(45,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds10(45,3)}</label>
                                    </div>
                                  )}
                                </th>
                              </tr>
                            </table>
                          </Col>
                        </Row>
                      ) : null}
                </div>
              </div>
            ) : this.state.line === 9 && this.state.loadpage === false ? (
              <div>
                <Breadcrumb style={{ margin: "16px 0" }}>
                  <Breadcrumb.Item>
                      <label>ตารางสอน</label>
                  </Breadcrumb.Item>
                </Breadcrumb>
                <div
                  className="site-layout-background"
                  style={{ padding: 24, minHeight: 360 }}
                >
                      <Divider orientation="left">ตารางสอน</Divider>
                      <Row gutter={24}>
                        <Col className="gutter-row" span={4}>
                          <label>เทอม/ปีการศึกษา</label>
                        </Col>
                        <Col className="gutter-row" span={4}>
                          <label>รหัสครู</label>
                        </Col>
                      </Row>
                      <Row gutter={24}>
                        <Col className="gutter-row" span={4}>
                          <Select
                            showSearch
                            style={{ width: 190 }}
                            dropdownMatchSelectWidth={false}
                            placeholder="เลือกเทอม/ปีการศึกษา"
                            optionFilterProp="children"
                            onChange={this.onCSO9}
                            value={this.state.seTY9}
                            onSearch={this.onSearch}
                            filterOption={(input, option) =>
                              option.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                            }
                          >
                            {selectTermYear}
                          </Select>
                        </Col>
                        <Col className="gutter-row" span={4}>
                          <Select
                            showSearch
                            disabled={this.state.seTY9 === null ? true : false}
                            style={{ width: 190 }}
                            dropdownMatchSelectWidth={false}
                            placeholder="เลือกรหัสครู"
                            optionFilterProp="children"
                            onChange={this.onCTea9}
                            value={this.state.idtea9}
                            onSearch={this.onSearch}
                            filterOption={(input, option) =>
                              option.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                            }
                          >
                            {alltea9}
                          </Select>
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
                                <th style={{
                                    textAlign: "right",
                                  }}> รหัส</th>
                                <th style={{
                                    textAlign: "left",
                                  }}>{this.state.idtea9}</th>
                                <th>{this.filtername9(1)}</th>
                                <th>{this.filtername9(2)}</th>
                                <th>ปีการศึกษา</th>
                                <th
                                  style={{
                                    textAlign: "left",
                                  }}
                                >
                                  {this.state.term9}/{this.state.year9}
                                </th>
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
                                      <label>{this.filterIds9(1,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds9(1,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(1,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(1,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is2!== null && this.state.it2 === null && 
                                  this.state.ic2 === null  ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds9(2,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds9(2,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(2,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(2,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is3!== null && this.state.it3 === null && 
                                  this.state.ic3 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds9(3,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds9(3,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(3,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(3,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is4!== null && this.state.it4 === null && 
                                  this.state.ic4 === null  ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds9(4,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds9(4,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(4,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(4,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is5!== null && this.state.it5 === null && 
                                  this.state.ic5 === null  ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds9(5,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds9(5,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(5,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(5,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is6!== null && this.state.it6 === null && 
                                  this.state.ic6 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds9(6,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds9(6,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(6,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(6,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is7!== null && this.state.it7 === null && 
                                  this.state.ic7 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds9(7,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds9(7,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(7,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(7,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is8!== null && this.state.it8 === null && 
                                  this.state.ic8 === null  ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds9(8,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds9(8,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(8,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(8,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is9!== null && this.state.it9 === null && 
                                  this.state.ic9 === null  ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds9(9,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds9(9,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(9,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(9,3)}</label>
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
                                      <label>{this.filterIds9(10,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds9(10,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(10,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(10,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is11!== null && this.state.it11 === null && 
                                  this.state.ic11 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds9(11,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds9(11,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(11,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(11,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is12!== null && this.state.it12 === null && 
                                  this.state.ic12 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds9(12,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds9(12,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(12,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(12,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is13!== null && this.state.it13 === null && 
                                  this.state.ic13 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds9(13,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds9(13,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(13,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(13,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is14!== null && this.state.it14 === null && 
                                  this.state.ic14 === null  ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds9(14,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds9(14,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(14,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(14,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is15!== null && this.state.it15 === null && 
                                  this.state.ic15 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds9(15,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds9(15,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(15,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(15,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is16!== null && this.state.it16 === null && 
                                  this.state.ic16 === null  ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds9(16,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds9(16,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(16,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(16,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is17 !== null && this.state.it17 === null && 
                                  this.state.ic17 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds9(17,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds9(17,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(17,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(17,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is18 !== null && this.state.it18 === null && 
                                  this.state.ic18 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds9(18,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds9(18,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(18,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(18,3)}</label>
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
                                      <label>{this.filterIds9(19,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds9(19,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(19,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(19,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is20 !== null && this.state.it20 === null && 
                                  this.state.ic20 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds9(20,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds9(20,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(20,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(20,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is21 !== null && this.state.it21 === null && 
                                  this.state.ic21 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds9(21,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds9(21,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(21,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(21,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is22 !== null && this.state.it22 === null && 
                                  this.state.ic22 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds9(22,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds9(22,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(22,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(22,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is23 !== null && this.state.it23 === null && 
                                  this.state.ic23 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds9(23,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds9(23,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(23,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(23,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is24 !== null && this.state.it24 === null && 
                                  this.state.ic24 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds9(24,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds9(24,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(24,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(24,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is25 !== null && this.state.it25 === null && 
                                  this.state.ic25 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds9(25,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds9(25,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(25,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(25,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is26 !== null && this.state.it26 === null && 
                                  this.state.ic26 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds9(26,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds9(26,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(26,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(26,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is27 !== null && this.state.it27 === null && 
                                  this.state.ic27 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds9(27,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds9(27,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(27,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(27,3)}</label>
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
                                      <label>{this.filterIds9(28,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds9(28,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(28,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(28,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is29 !== null && this.state.it29 === null && 
                                  this.state.ic29 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds9(29,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds9(29,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(29,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(29,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is30 !== null && this.state.it30 === null && 
                                  this.state.ic30 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds9(30,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds9(30,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(30,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(30,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is31 !== null && this.state.it31 === null && 
                                  this.state.ic31 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds9(31,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds9(31,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(31,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(31,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is32 !== null && this.state.it32 === null && 
                                  this.state.ic32 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds9(32,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds9(32,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(32,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(32,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is33 !== null && this.state.it33 === null && 
                                  this.state.ic33 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds9(33,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds9(33,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(33,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(33,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is34 !== null && this.state.it34 === null && 
                                  this.state.ic34 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds9(34,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds9(34,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(34,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(34,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is35 !== null && this.state.it35 === null && 
                                  this.state.ic35 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds9(35,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds9(35,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(35,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(35,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is36 !== null && this.state.it36 === null && 
                                  this.state.ic36 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds9(36,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds9(36,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(36,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(36,3)}</label>
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
                                      <label>{this.filterIds9(37,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds9(37,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(37,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(37,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is38 !== null && this.state.it38 === null && 
                                  this.state.ic38 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds9(38,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds9(38,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(38,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(38,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is39 !== null && this.state.it39 === null && 
                                  this.state.ic39 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds9(39,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds9(39,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(39,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(39,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is40 !== null && this.state.it40 === null && 
                                  this.state.ic40 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds9(40,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds9(40,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(40,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(40,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is41 !== null && this.state.it41 === null && 
                                  this.state.ic41 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds9(41,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds9(41,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(41,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(41,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is42 !== null && this.state.it42 === null && 
                                  this.state.ic42 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds9(42,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds9(42,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(42,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(42,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is43 !== null && this.state.it43 === null && 
                                  this.state.ic43=== null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds9(43,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds9(43,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(43,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(43,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is44 !== null && this.state.it44 === null && 
                                  this.state.ic44 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds9(44,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds9(44,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(44,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(44,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is45 !== null && this.state.it45 === null && 
                                  this.state.ic45 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds9(45,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds9(45,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(45,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds9(45,3)}</label>
                                    </div>
                                  )}
                                </th>
                              </tr>
                            </table>
                          </Col>
                        </Row>
                      ) : null}
                </div>
              </div>
            ) : this.state.line === 11 && this.state.loadpage === false ? (
              <div>
                <Breadcrumb style={{ margin: "16px 0" }}>
                  <Breadcrumb.Item>
                      <label>ตารางการใช้ห้อง</label>
                  </Breadcrumb.Item>
                </Breadcrumb>
                <div
                  className="site-layout-background"
                  style={{ padding: 24, minHeight: 360 }}
                >
                      <Divider orientation="left">ตารางการใช้ห้อง</Divider>
                      <Row gutter={24}>
                        <Col className="gutter-row" span={4}>
                          <label>เทอม/ปีการศึกษา</label>
                        </Col>
                        <Col className="gutter-row" span={4}>
                          <label>ห้องที่ใช้สอน</label>
                        </Col>
                      </Row>
                      <Row gutter={24}>
                        <Col className="gutter-row" span={4}>
                          <Select
                            showSearch
                            style={{ width: 190 }}
                            dropdownMatchSelectWidth={false}
                            placeholder="เลือกเทอม/ปีการศึกษา"
                            optionFilterProp="children"
                            onChange={this.onCSO11}
                            value={this.state.seTY11}
                            onSearch={this.onSearch}
                            filterOption={(input, option) =>
                              option.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                            }
                          >
                            {selectTermYear}
                          </Select>
                        </Col>
                        <Col className="gutter-row" span={4}>
                          <Select
                            showSearch
                            disabled={this.state.seTY11 === null ? true : false}
                            style={{ width: 190 }}
                            dropdownMatchSelectWidth={false}
                            placeholder="เลือกห้องที่ใช้สอน"
                            optionFilterProp="children"
                            onChange={this.onCCR11}
                            value={this.state.cR11}
                            onSearch={this.onSearch}
                            filterOption={(input, option) =>
                              option.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                            }
                          >
                            {cR11}
                          </Select>
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
                                <th>ห้อง {this.state.cR11}</th>
                                <th>ภาคเรียนที่</th>
                                <th
                                  style={{
                                    textAlign: "left",
                                  }}
                                >
                                  {this.state.term11}/{this.state.year11}
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
                                      <label>{this.filterIds11(1,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds11(1,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(1,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(1,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is2!== null && this.state.it2 === null && 
                                  this.state.ic2 === null  ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds11(2,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds11(2,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(2,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(2,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is3!== null && this.state.it3 === null && 
                                  this.state.ic3 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds11(3,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds11(3,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(3,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(3,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is4!== null && this.state.it4 === null && 
                                  this.state.ic4 === null  ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds11(4,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds11(4,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(4,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(4,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is5!== null && this.state.it5 === null && 
                                  this.state.ic5 === null  ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds11(5,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds11(5,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(5,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(5,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is6!== null && this.state.it6 === null && 
                                  this.state.ic6 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds11(6,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds11(6,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(6,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(6,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is7!== null && this.state.it7 === null && 
                                  this.state.ic7 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds11(7,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds11(7,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(7,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(7,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is8!== null && this.state.it8 === null && 
                                  this.state.ic8 === null  ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds11(8,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds11(8,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(8,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(8,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is9!== null && this.state.it9 === null && 
                                  this.state.ic9 === null  ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds11(9,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds11(9,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(9,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(9,3)}</label>
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
                                      <label>{this.filterIds11(10,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds11(10,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(10,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(10,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is11!== null && this.state.it11 === null && 
                                  this.state.ic11 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds11(11,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds11(11,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(11,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(11,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is12!== null && this.state.it12 === null && 
                                  this.state.ic12 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds11(12,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds11(12,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(12,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(12,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is13!== null && this.state.it13 === null && 
                                  this.state.ic13 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds11(13,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds11(13,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(13,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(13,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is14!== null && this.state.it14 === null && 
                                  this.state.ic14 === null  ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds11(14,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds11(14,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(14,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(14,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is15!== null && this.state.it15 === null && 
                                  this.state.ic15 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds11(15,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds11(15,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(15,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(15,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is16!== null && this.state.it16 === null && 
                                  this.state.ic16 === null  ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds11(16,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds11(16,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(16,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(16,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is17 !== null && this.state.it17 === null && 
                                  this.state.ic17 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds11(17,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds11(17,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(17,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(17,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is18 !== null && this.state.it18 === null && 
                                  this.state.ic18 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds11(18,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds11(18,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(18,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(18,3)}</label>
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
                                      <label>{this.filterIds11(19,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds11(19,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(19,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(19,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is20 !== null && this.state.it20 === null && 
                                  this.state.ic20 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds11(20,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds11(20,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(20,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(20,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is21 !== null && this.state.it21 === null && 
                                  this.state.ic21 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds11(21,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds11(21,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(21,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(21,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is22 !== null && this.state.it22 === null && 
                                  this.state.ic22 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds11(22,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds11(22,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(22,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(22,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is23 !== null && this.state.it23 === null && 
                                  this.state.ic23 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds11(23,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds11(23,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(23,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(23,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is24 !== null && this.state.it24 === null && 
                                  this.state.ic24 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds11(24,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds11(24,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(24,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(24,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is25 !== null && this.state.it25 === null && 
                                  this.state.ic25 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds11(25,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds11(25,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(25,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(25,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is26 !== null && this.state.it26 === null && 
                                  this.state.ic26 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds11(26,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds11(26,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(26,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(26,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is27 !== null && this.state.it27 === null && 
                                  this.state.ic27 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds11(27,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds11(27,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(27,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(27,3)}</label>
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
                                      <label>{this.filterIds11(28,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds11(28,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(28,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(28,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is29 !== null && this.state.it29 === null && 
                                  this.state.ic29 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds11(29,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds11(29,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(29,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(29,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is30 !== null && this.state.it30 === null && 
                                  this.state.ic30 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds11(30,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds11(30,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(30,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(30,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is31 !== null && this.state.it31 === null && 
                                  this.state.ic31 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds11(31,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds11(31,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(31,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(31,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is32 !== null && this.state.it32 === null && 
                                  this.state.ic32 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds11(32,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds11(32,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(32,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(32,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is33 !== null && this.state.it33 === null && 
                                  this.state.ic33 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds11(33,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds11(33,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(33,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(33,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is34 !== null && this.state.it34 === null && 
                                  this.state.ic34 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds11(34,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds11(34,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(34,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(34,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is35 !== null && this.state.it35 === null && 
                                  this.state.ic35 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds11(35,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds11(35,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(35,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(35,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is36 !== null && this.state.it36 === null && 
                                  this.state.ic36 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds11(36,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds11(36,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(36,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(36,3)}</label>
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
                                      <label>{this.filterIds11(37,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds11(37,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(37,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(37,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is38 !== null && this.state.it38 === null && 
                                  this.state.ic38 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds11(38,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds11(38,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(38,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(38,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is39 !== null && this.state.it39 === null && 
                                  this.state.ic39 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds11(39,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds11(39,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(39,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(39,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is40 !== null && this.state.it40 === null && 
                                  this.state.ic40 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds11(40,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds11(40,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(40,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(40,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is41 !== null && this.state.it41 === null && 
                                  this.state.ic41 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds11(41,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds11(41,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(41,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(41,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is42 !== null && this.state.it42 === null && 
                                  this.state.ic42 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds11(42,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds11(42,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(42,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(42,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is43 !== null && this.state.it43 === null && 
                                  this.state.ic43=== null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds11(43,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds11(43,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(43,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(43,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is44 !== null && this.state.it44 === null && 
                                  this.state.ic44 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds11(44,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds11(44,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(44,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(44,3)}</label>
                                    </div>
                                  )}
                                </th>
                                <th style={taTime}>
                                  {this.state.is45 !== null && this.state.it45 === null && 
                                  this.state.ic45 === null ? (
                                    <div>
                                      <label></label>
                                      <label>{this.filterIds11(45,1)}</label>
                                      <br></br>
                                      <label></label>
                                    </div>
                                  ) : (
                                    <div>
                                      <label>{this.filterIds11(45,1)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(45,2)}</label>
                                      <br></br>
                                      <label>{this.filterIds11(45,3)}</label>
                                    </div>
                                  )}
                                </th>
                              </tr>
                            </table>
                          </Col>
                        </Row>
                      ) : null}
                </div>
              </div>
            ) :
            null}
            <Modal
              title="เข้าสู่ระบบ"
              centered
              visible={slogin}
              onOk={this.login}
              onCancel={async () =>
                await this.setState({
                  slogin: false,
                  emailSignIN: null,
                  passwordSignIN: null,
                })
              }
              footer={[
                <Button
                  key="back"
                  onClick={async () =>
                    await this.setState({
                      slogin: false,
                      emailSignIN: null,
                      passwordSignIN: null,
                    })
                  }
                >
                  ยกเลิก
                </Button>,
                <Button
                  key="submit"
                  type="primary"
                  loading={this.state.loading}
                  onClick={this.login}
                  disabled={
                    this.state.emailSignIN !== null &&
                    this.state.emailSignIN !== "" &&
                    this.state.passwordSignIN !== null &&
                    this.state.passwordSignIN !== ""
                      ? false
                      : true
                  }
                >
                  เข้าสู่ระบบ
                </Button>,
              ]}
              width={1000}
            >
              <p>E-mail</p>{" "}
              <Input
                type="email"
                style={{ bottom: "10px" }}
                value={this.state.emailSignIN}
                onChange={async (e) =>
                  await this.setState({ emailSignIN: e.target.value })
                }
                placeholder="กรอก E-mail"
              />
              <p>Password</p>{" "}
              <Input
                type="password"
                style={{ bottom: "10px" }}
                value={this.state.passwordSignIN}
                onChange={async (e) =>
                  await this.setState({ passwordSignIN: e.target.value })
                }
                placeholder="กรอก Password"
              />
            </Modal>
            <Modal
              title="ออะจากระบบ"
              visible={this.state.slogout}
              onOk={this.logout}
              onCancel={this.showlogout}
              icon={<ExclamationCircleOutlined />}
              okText="ใช่"
              cancelText="ไม่ใช่"
            >
              <p>คุณต้องการออกจากระบบหรือไม่</p>
            </Modal>
          </Content>
          <Footer style={{ textAlign: "center" }}></Footer>
        </Layout>
      </Layout>
    );
  }
}
export default TimeTable;
