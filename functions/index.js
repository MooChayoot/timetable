const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});
var db = admin.firestore();
// const cors = require("cors")({
//   origin: true,
// });

exports.addSettingRoom = functions.firestore
  .document("settingRoom/{userid}")
  .onCreate(async (snap, context) => {
    for (let id = 1; id <= 2; id++) {
      for (let index = 1; index <= snap.data().level1; index++) {
        db.collection("classSchedule").add({
          year: snap.data().year,
          term: id,
          groupStudent: "1/" + index,
          program: "ทั่วไป",
          time: [],
        });
      }
      for (let index = 1; index <= snap.data().level2; index++) {
        db.collection("classSchedule").add({
          year: snap.data().year,
          term: id,
          groupStudent: "2/" + index,
          program: "ทั่วไป",
          time: [],
        });
      }
      for (let index = 1; index <= snap.data().level3; index++) {
        db.collection("classSchedule").add({
          year: snap.data().year,
          term: id,
          groupStudent: "3/" + index,
          program: "ทั่วไป",
          time: [],
        });
      }
      for (let index = 1; index <= snap.data().level4; index++) {
        db.collection("classSchedule").add({
          year: snap.data().year,
          term: id,
          groupStudent: "4/" + index,
          program: null,
          time: [],
        });
      }
      for (let index = 1; index <= snap.data().level5; index++) {
        db.collection("classSchedule").add({
          year: snap.data().year,
          term: id,
          groupStudent: "5/" + index,
          program: null,
          time: [],
        });
      }
      for (let index = 1; index <= snap.data().level6; index++) {
        db.collection("classSchedule").add({
          year: snap.data().year,
          term: id,
          groupStudent: "6/" + index,
          program: null,
          time: [],
        });
      }
      await db
        .collection("teacher")
        .get()
        .then((snapshot) => {
          if (snapshot.docs.length > 0) {
            snapshot.forEach(async function (doc) {
              db.collection("teacherSchedule").add({
                term: id,
                year: snap.data().year,
                time: [],
                hours: doc.data().hours,
                idteacher: doc.data().idteacher,
              });
            });
          }
        });
      await db
        .collection("classroom")
        .get()
        .then((snapshot) => {
          if (snapshot.docs.length > 0) {
            snapshot.forEach(async function (doc) {
              db.collection("classroomSchedule").add({
                term: id,
                year: snap.data().year,
                time: [],
                nameRoom: doc.data().nameRoom,
              });
            });
          }
        });
    }
  });
exports.editSettingRoom = functions.firestore
  .document("settingRoom/{userid}")
  .onUpdate(async (snap, context) => {
    let before1 = snap.before.data().level1;
    let before2 = snap.before.data().level2;
    let before3 = snap.before.data().level3;
    let before4 = snap.before.data().level4;
    let before5 = snap.before.data().level5;
    let before6 = snap.before.data().level6;
    let beforeyear = snap.before.data().year;
    let after1 = snap.after.data().level1;
    let after2 = snap.after.data().level2;
    let after3 = snap.after.data().level3;
    let after4 = snap.after.data().level4;
    let after5 = snap.after.data().level5;
    let after6 = snap.after.data().level6;
    let lv1 = Number(after1) - Number(before1);
    let lv2 = Number(after2) - Number(before2);
    let lv3 = Number(after3) - Number(before3);
    let lv4 = Number(after4) - Number(before4);
    let lv5 = Number(after5) - Number(before5);
    let lv6 = Number(after6) - Number(before6);
    if (Number(lv1) !== 0 && Number(lv1) > 0) {
      for (let id = 1; id <= 2; id++) {
        for (let index = 0; index <= lv1 - 1; index++) {
          let sum = Number(after1) - Number(index);
          await db.collection("classSchedule").add({
            year: beforeyear,
            term: id,
            groupStudent: "1/" + sum,
            program: "ทั่วไป",
            time: [],
          });
        }
      }
    }
    if (Number(lv1) !== 0 && Number(lv1) < 0) {
      for (let id = 1; id <= 2; id++) {
        await db
          .collection("classSchedule")
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach(async (doc) => {
              let gs = doc.data().groupStudent;
              let year = doc.data().year;
              let term = doc.data().term;
              if (
                Number(gs.substring(2, gs.length)) > Number(after1) &&
                year === beforeyear &&
                term === id &&
                Number(gs.substring(0, 1)) === 1
              ) {
                await db
                  .collection("classSchedule")
                  .doc(doc.id)
                  .delete()
                  .then(async () => {
                    await db
                      .collection("teacherSchedule")
                      .get()
                      .then((sn) => {
                        sn.forEach((d) => {
                          if (
                            d.data().year === beforeyear &&
                            d.data().term === id &&
                            d.data().time.length !== 0
                          ) {
                            let dataTea = [];
                            let h = [];
                            for (
                              let index = 0;
                              index <= d.data().time.length - 1;
                              index++
                            ) {
                              if (d.data().time[index].groupStudent !== gs) {
                                dataTea.push(d.data().time[index]);
                              } else {
                                h.push("a");
                              }
                            }
                            let hour =
                              Number(d.data().hours) + Number(h.length);
                            db.collection("teacherSchedule")
                              .doc(d.id)
                              .update({
                                time: dataTea,
                                hours: Number(hour),
                              });
                          }
                        });
                      });
                    await db
                      .collection("classroomSchedule")
                      .get()
                      .then((sn) => {
                        sn.forEach((d) => {
                          if (
                            d.data().year === beforeyear &&
                            d.data().term === id &&
                            d.data().time.length !== 0
                          ) {
                            let dataTea = [];
                            for (
                              let index = 0;
                              index <= d.data().time.length - 1;
                              index++
                            ) {
                              if (d.data().time[index].groupStudent !== gs) {
                                dataTea.push(d.data().time[index]);
                              }
                            }
                            db.collection("classroomSchedule")
                              .doc(d.id)
                              .update({
                                time: dataTea,
                              });
                          }
                        });
                      });
                  });
              }
            });
          });
      }
    }
    if (Number(lv2) !== 0 && Number(lv2) > 0) {
      for (let id = 1; id <= 2; id++) {
        for (let index = 0; index <= lv2 - 1; index++) {
          let sum = Number(after2) - Number(index);
          await db.collection("classSchedule").add({
            year: beforeyear,
            term: id,
            groupStudent: "2/" + sum,
            program: "ทั่วไป",
            time: [],
          });
        }
      }
    }
    if (Number(lv2) !== 0 && Number(lv2) < 0) {
      for (let id = 1; id <= 2; id++) {
        await db
          .collection("classSchedule")
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach(async (doc) => {
              let gs = doc.data().groupStudent;
              let year = doc.data().year;
              let term = doc.data().term;
              if (
                Number(gs.substring(2, gs.length)) > Number(after2) &&
                year === beforeyear &&
                term === id &&
                Number(gs.substring(0, 1)) === 1
              ) {
                await db
                  .collection("classSchedule")
                  .doc(doc.id)
                  .delete()
                  .then(async () => {
                    await db
                      .collection("teacherSchedule")
                      .get()
                      .then((sn) => {
                        sn.forEach((d) => {
                          if (
                            d.data().year === beforeyear &&
                            d.data().term === id &&
                            d.data().time.length !== 0
                          ) {
                            let dataTea = [];
                            let h = [];
                            for (
                              let index = 0;
                              index <= d.data().time.length - 1;
                              index++
                            ) {
                              if (d.data().time[index].groupStudent !== gs) {
                                dataTea.push(d.data().time[index]);
                              } else {
                                h.push("a");
                              }
                            }
                            let hour =
                              Number(d.data().hours) + Number(h.length);
                            db.collection("teacherSchedule")
                              .doc(d.id)
                              .update({
                                time: dataTea,
                                hours: Number(hour),
                              });
                          }
                        });
                      });
                    await db
                      .collection("classroomSchedule")
                      .get()
                      .then((sn) => {
                        sn.forEach((d) => {
                          if (
                            d.data().year === beforeyear &&
                            d.data().term === id &&
                            d.data().time.length !== 0
                          ) {
                            let dataTea = [];
                            for (
                              let index = 0;
                              index <= d.data().time.length - 1;
                              index++
                            ) {
                              if (d.data().time[index].groupStudent !== gs) {
                                dataTea.push(d.data().time[index]);
                              }
                            }
                            db.collection("classroomSchedule")
                              .doc(d.id)
                              .update({
                                time: dataTea,
                              });
                          }
                        });
                      });
                  });
              }
            });
          });
      }
    }
    if (Number(lv3) !== 0 && Number(lv3) > 0) {
      for (let id = 1; id <= 2; id++) {
        for (let index = 0; index <= lv3 - 1; index++) {
          let sum = Number(after3) - Number(index);
          await db.collection("classSchedule").add({
            year: beforeyear,
            term: id,
            groupStudent: "3/" + sum,
            program: "ทั่วไป",
            time: [],
          });
        }
      }
    }
    if (Number(lv3) !== 0 && Number(lv3) < 0) {
      for (let id = 1; id <= 2; id++) {
        await db
          .collection("classSchedule")
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach(async (doc) => {
              let gs = doc.data().groupStudent;
              let year = doc.data().year;
              let term = doc.data().term;
              if (
                Number(gs.substring(2, gs.length)) > Number(after3) &&
                year === beforeyear &&
                term === id &&
                Number(gs.substring(0, 1)) === 1
              ) {
                await db
                  .collection("classSchedule")
                  .doc(doc.id)
                  .delete()
                  .then(async () => {
                    await db
                      .collection("teacherSchedule")
                      .get()
                      .then((sn) => {
                        sn.forEach((d) => {
                          if (
                            d.data().year === beforeyear &&
                            d.data().term === id &&
                            d.data().time.length !== 0
                          ) {
                            let dataTea = [];
                            let h = [];
                            for (
                              let index = 0;
                              index <= d.data().time.length - 1;
                              index++
                            ) {
                              if (d.data().time[index].groupStudent !== gs) {
                                dataTea.push(d.data().time[index]);
                              } else {
                                h.push("a");
                              }
                            }
                            let hour =
                              Number(d.data().hours) + Number(h.length);
                            db.collection("teacherSchedule")
                              .doc(d.id)
                              .update({
                                time: dataTea,
                                hours: Number(hour),
                              });
                          }
                        });
                      });
                    await db
                      .collection("classroomSchedule")
                      .get()
                      .then((sn) => {
                        sn.forEach((d) => {
                          if (
                            d.data().year === beforeyear &&
                            d.data().term === id &&
                            d.data().time.length !== 0
                          ) {
                            let dataTea = [];
                            for (
                              let index = 0;
                              index <= d.data().time.length - 1;
                              index++
                            ) {
                              if (d.data().time[index].groupStudent !== gs) {
                                dataTea.push(d.data().time[index]);
                              }
                            }
                            db.collection("classroomSchedule")
                              .doc(d.id)
                              .update({
                                time: dataTea,
                              });
                          }
                        });
                      });
                  });
              }
            });
          });
      }
    }
    if (Number(lv4) !== 0 && Number(lv4) > 0) {
      for (let id = 1; id <= 2; id++) {
        for (let index = 0; index <= lv4 - 1; index++) {
          let sum = Number(after4) - Number(index);
          await db.collection("classSchedule").add({
            year: beforeyear,
            term: id,
            groupStudent: "4/" + sum,
            program: null,
            time: [],
          });
        }
      }
    }
    if (Number(lv4) !== 0 && Number(lv4) < 0) {
      for (let id = 1; id <= 2; id++) {
        await db
          .collection("classSchedule")
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach(async (doc) => {
              let gs = doc.data().groupStudent;
              let year = doc.data().year;
              let term = doc.data().term;
              if (
                Number(gs.substring(2, gs.length)) > Number(after4) &&
                year === beforeyear &&
                term === id &&
                Number(gs.substring(0, 1)) === 1
              ) {
                await db
                  .collection("classSchedule")
                  .doc(doc.id)
                  .delete()
                  .then(async () => {
                    await db
                      .collection("teacherSchedule")
                      .get()
                      .then((sn) => {
                        sn.forEach((d) => {
                          if (
                            d.data().year === beforeyear &&
                            d.data().term === id &&
                            d.data().time.length !== 0
                          ) {
                            let dataTea = [];
                            let h = [];
                            for (
                              let index = 0;
                              index <= d.data().time.length - 1;
                              index++
                            ) {
                              if (d.data().time[index].groupStudent !== gs) {
                                dataTea.push(d.data().time[index]);
                              } else {
                                h.push("a");
                              }
                            }
                            let hour =
                              Number(d.data().hours) + Number(h.length);
                            db.collection("teacherSchedule")
                              .doc(d.id)
                              .update({
                                time: dataTea,
                                hours: Number(hour),
                              });
                          }
                        });
                      });
                    await db
                      .collection("classroomSchedule")
                      .get()
                      .then((sn) => {
                        sn.forEach((d) => {
                          if (
                            d.data().year === beforeyear &&
                            d.data().term === id &&
                            d.data().time.length !== 0
                          ) {
                            let dataTea = [];
                            for (
                              let index = 0;
                              index <= d.data().time.length - 1;
                              index++
                            ) {
                              if (d.data().time[index].groupStudent !== gs) {
                                dataTea.push(d.data().time[index]);
                              }
                            }
                            db.collection("classroomSchedule")
                              .doc(d.id)
                              .update({
                                time: dataTea,
                              });
                          }
                        });
                      });
                  });
              }
            });
          });
      }
    }
    if (Number(lv5) !== 0 && Number(lv5) > 0) {
      for (let id = 1; id <= 2; id++) {
        for (let index = 0; index <= lv5 - 1; index++) {
          let sum = Number(after5) - Number(index);
          await db.collection("classSchedule").add({
            year: beforeyear,
            term: id,
            groupStudent: "5/" + sum,
            program: null,
            time: [],
          });
        }
      }
    }
    if (Number(lv5) !== 0 && Number(lv5) < 0) {
      for (let id = 1; id <= 2; id++) {
        await db
          .collection("classSchedule")
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach(async (doc) => {
              let gs = doc.data().groupStudent;
              let year = doc.data().year;
              let term = doc.data().term;
              if (
                Number(gs.substring(2, gs.length)) > Number(after5) &&
                year === beforeyear &&
                term === id &&
                Number(gs.substring(0, 1)) === 1
              ) {
                await db
                  .collection("classSchedule")
                  .doc(doc.id)
                  .delete()
                  .then(async () => {
                    await db
                      .collection("teacherSchedule")
                      .get()
                      .then((sn) => {
                        sn.forEach((d) => {
                          if (
                            d.data().year === beforeyear &&
                            d.data().term === id &&
                            d.data().time.length !== 0
                          ) {
                            let dataTea = [];
                            let h = [];
                            for (
                              let index = 0;
                              index <= d.data().time.length - 1;
                              index++
                            ) {
                              if (d.data().time[index].groupStudent !== gs) {
                                dataTea.push(d.data().time[index]);
                              } else {
                                h.push("a");
                              }
                            }
                            let hour =
                              Number(d.data().hours) + Number(h.length);
                            db.collection("teacherSchedule")
                              .doc(d.id)
                              .update({
                                time: dataTea,
                                hours: Number(hour),
                              });
                          }
                        });
                      });
                    await db
                      .collection("classroomSchedule")
                      .get()
                      .then((sn) => {
                        sn.forEach((d) => {
                          if (
                            d.data().year === beforeyear &&
                            d.data().term === id &&
                            d.data().time.length !== 0
                          ) {
                            let dataTea = [];
                            for (
                              let index = 0;
                              index <= d.data().time.length - 1;
                              index++
                            ) {
                              if (d.data().time[index].groupStudent !== gs) {
                                dataTea.push(d.data().time[index]);
                              }
                            }
                            db.collection("classroomSchedule")
                              .doc(d.id)
                              .update({
                                time: dataTea,
                              });
                          }
                        });
                      });
                  });
              }
            });
          });
      }
    }
    if (Number(lv6) !== 0 && Number(lv6) > 0) {
      for (let id = 1; id <= 2; id++) {
        for (let index = 0; index <= lv6 - 1; index++) {
          let sum = Number(after6) - Number(index);
          await db.collection("classSchedule").add({
            year: beforeyear,
            term: id,
            groupStudent: "6/" + sum,
            program: null,
            time: [],
          });
        }
      }
    }
    if (Number(lv6) !== 0 && Number(lv6) < 0) {
      for (let id = 1; id <= 2; id++) {
        await db
          .collection("classSchedule")
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach(async (doc) => {
              let gs = doc.data().groupStudent;
              let year = doc.data().year;
              let term = doc.data().term;
              if (
                Number(gs.substring(2, gs.length)) > Number(after6) &&
                year === beforeyear &&
                term === id &&
                Number(gs.substring(0, 1)) === 1
              ) {
                await db
                  .collection("classSchedule")
                  .doc(doc.id)
                  .delete()
                  .then(async () => {
                    await db
                      .collection("teacherSchedule")
                      .get()
                      .then((sn) => {
                        sn.forEach((d) => {
                          if (
                            d.data().year === beforeyear &&
                            d.data().term === id &&
                            d.data().time.length !== 0
                          ) {
                            let dataTea = [];
                            let h = [];
                            for (
                              let index = 0;
                              index <= d.data().time.length - 1;
                              index++
                            ) {
                              if (d.data().time[index].groupStudent !== gs) {
                                dataTea.push(d.data().time[index]);
                              } else {
                                h.push("a");
                              }
                            }
                            let hour =
                              Number(d.data().hours) + Number(h.length);
                            db.collection("teacherSchedule")
                              .doc(d.id)
                              .update({
                                time: dataTea,
                                hours: Number(hour),
                              });
                          }
                        });
                      });
                    await db
                      .collection("classroomSchedule")
                      .get()
                      .then((sn) => {
                        sn.forEach((d) => {
                          if (
                            d.data().year === beforeyear &&
                            d.data().term === id &&
                            d.data().time.length !== 0
                          ) {
                            let dataTea = [];
                            for (
                              let index = 0;
                              index <= d.data().time.length - 1;
                              index++
                            ) {
                              if (d.data().time[index].groupStudent !== gs) {
                                dataTea.push(d.data().time[index]);
                              }
                            }
                            db.collection("classroomSchedule")
                              .doc(d.id)
                              .update({
                                time: dataTea,
                              });
                          }
                        });
                      });
                  });
              }
            });
          });
      }
    }
  });
exports.delSettingRoom = functions.firestore
  .document("settingRoom/{userid}")
  .onDelete(async (snap, context) => {
    let year = snap.data().year;
    await db
      .collection("teacherSchedule")
      .get()
      .then((sn) => {
        sn.forEach(async (d) => {
          if (d.data().year === year) {
            await db.collection("teacherSchedule").doc(d.id).delete();
          }
        });
      });
    await db
      .collection("classSchedule")
      .get()
      .then((sn) => {
        sn.forEach(async (d) => {
          if (d.data().year === year) {
            await db.collection("classSchedule").doc(d.id).delete();
          }
        });
      });
    await db
      .collection("classroomSchedule")
      .get()
      .then((sn) => {
        sn.forEach(async (d) => {
          if (d.data().year === year) {
            await db.collection("classroomSchedule").doc(d.id).delete();
          }
        });
      });
  });

exports.addTeacher = functions.firestore
  .document("teacher/{userid}")
  .onCreate(async (snap, context) => {
    await db
      .collection("settingRoom")
      .get()
      .then((sn) => {
        if (sn.docs.length > 0) {
          sn.forEach(async (d) => {
            for (let id = 1; id <= 2; id++) {
              db.collection("teacherSchedule").add({
                term: id,
                year: d.data().year,
                time: [],
                hours: snap.data().hours,
                idteacher: snap.data().idteacher,
              });
            }
          });
        }
      });
  });
exports.delTeacher = functions.firestore
  .document("teacher/{userid}")
  .onDelete(async (snap, context) => {
    await db
      .collection("teacherSchedule")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(async (doc) => {
          if (doc.data().idteacher === snap.data().idteacher) {
            await db
              .collection("teacherSchedule")
              .doc(doc.id)
              .delete()
              .then(async () => {
                await db
                  .collection("classroomSchedule")
                  .get()
                  .then((sn) => {
                    sn.forEach((d) => {
                      if (d.data().time.length !== 0) {
                        let dataChange = [];
                        for (
                          let index = 0;
                          index < d.data().time.length - 1;
                          index++
                        ) {
                          if (
                            d.data().time[index].idteacher !==
                            snap.data().idteacher
                          ) {
                            dataChange.push(d.data().time[index]);
                          }
                        }
                        if (d.data().time.length !== dataChange.length) {
                          db.collection("classroomSchedule").doc(d.id).update({
                            time: dataChange,
                          });
                        }
                      }
                    });
                  });
                await db
                  .collection("classSchedule")
                  .get()
                  .then((sn) => {
                    sn.forEach((d) => {
                      if (d.data().time.length !== 0) {
                        let dataChange = [];
                        for (
                          let index = 0;
                          index < d.data().time.length - 1;
                          index++
                        ) {
                          if (
                            d.data().time[index].idteacher !==
                            snap.data().idteacher
                          ) {
                            dataChange.push(d.data().time[index]);
                          }
                        }
                        if (d.data().time.length !== dataChange.length) {
                          db.collection("classSchedule").doc(d.id).update({
                            time: dataChange,
                          });
                        }
                      }
                    });
                  });
              });
          }
        });
      });
  });
exports.editTeacher = functions.firestore
  .document("teacher/{userid}")
  .onUpdate(async (snap, context) => {
    let aC = snap.after.data().hours;
    let bC = snap.before.data().hours;
    let aM = snap.after.data().mainGroupLearning;
    let bM = snap.before.data().mainGroupLearning;
    let aS = snap.after.data().secondaryGroupLearning;
    let bS = snap.before.data().secondaryGroupLearning;
    let idteacher = snap.after.data().idteacher;
    let sumSnap = aC - bC;
    if (aC !== bC) {
      await db
        .collection("teacherSchedule")
        .get()
        .then((sn) => {
          sn.forEach((d) => {
            if (d.data().idteacher === idteacher) {
              let h = d.data().hours;
              let sumH = sumSnap + h;
              if (sumH > 0) {
                db.collection("teacherSchedule")
                  .doc(d.id)
                  .update({
                    hours: Number(sumH),
                  });
              } else {
                db.collection("teacherSchedule").doc(d.id).update({
                  hours: 0,
                });
              }
            }
          });
        });
    }
    if (aM.length !== bM.length && aM.length !== 0) {
      let newsub = [];
      let del = [];
      for (let index = 0; index <= aM.length-1; index++) {
        let haveSub = [];
        for (let idex = 0; idex <= bM.length-1; idex++) {
          if (aM[index] === bM[idex]) {
            haveSub.push(aM[index])
          }
        }
        if (haveSub.length === 0) {
          newsub.push(aM[index])
        }
      }
      for (let index = 0; index <= bM.length-1; index++) {
        let haveSub = [];
        for (let idex = 0; idex <= aM.length-1; idex++) {
          if (bM[index] === aM[idex]) {
            haveSub.push(bM[index])
          }
        }
        if (haveSub.length === 0) {
          del.push(bM[index])
        }
      }
      
    }
    if (aS.length !== bS.length && aS.length !== 0) {
      
    }
  });

exports.addClassroom = functions.firestore
  .document("classroom/{userid}")
  .onCreate(async (snap, context) => {
    await db
      .collection("settingRoom")
      .get()
      .then((sn) => {
        if (sn.docs.length > 0) {
          sn.forEach(async (d) => {
            for (let id = 1; id <= 2; id++) {
              db.collection("classroomSchedule").add({
                term: id,
                year: d.data().year,
                time: [],
                nameRoom: snap.data().nameRoom,
              });
            }
          });
        }
      });
  });
exports.delClassroom = functions.firestore
  .document("classroom/{userid}")
  .onDelete(async (snap, context) => {
    await db
      .collection("classroomSchedule")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(async (doc) => {
          if (doc.data().nameRoom === snap.data().nameRoom) {
            await db
              .collection("classroomSchedule")
              .doc(doc.id)
              .delete()
              .then(async () => {
                await db
                  .collection("teacherSchedule")
                  .get()
                  .then((sn) => {
                    sn.forEach((d) => {
                      if (d.data().time.length !== 0) {
                        let dataChange = [];
                        for (
                          let index = 0;
                          index < d.data().time.length - 1;
                          index++
                        ) {
                          if (
                            d.data().time[index].idteacher !==
                            snap.data().idteacher
                          ) {
                            dataChange.push(d.data().time[index]);
                          }
                        }
                        let h = d.data().time.length - dataChange.length;
                        let sunH = Number(h) + Number(d.data().hours);
                        if (d.data().time.length !== dataChange.length) {
                          db.collection("teacherSchedule")
                            .doc(d.id)
                            .update({
                              hours: Number(sunH),
                              time: dataChange,
                            });
                        }
                      }
                    });
                  });
                await db
                  .collection("classSchedule")
                  .get()
                  .then((sn) => {
                    sn.forEach((d) => {
                      if (d.data().time.length !== 0) {
                        let dataChange = [];
                        for (
                          let index = 0;
                          index < d.data().time.length - 1;
                          index++
                        ) {
                          if (
                            d.data().time[index].idteacher !==
                            snap.data().idteacher
                          ) {
                            dataChange.push(d.data().time[index]);
                          }
                        }
                        if (d.data().time.length !== dataChange.length) {
                          db.collection("classSchedule").doc(d.id).update({
                            time: dataChange,
                          });
                        }
                      }
                    });
                  });
              });
          }
        });
      });
  });

exports.editCourse = functions.firestore
  .document("course/{userid}")
  .onUpdate(async (snap, context) => {
    let aC = snap.after.data().hours;
    let bC = snap.before.data().hours;
    let sum = bC - aC;
    let idSubject = snap.after.data().idSubject;
    if (aC !== bC) {
      await db
        .collection("teacherSchedule")
        .get()
        .then((sn) => {
          if (sn.docs.length !== 0) {
            sn.forEach((d) => {
              let havecos = [];
              for (let index = 0; index <= d.data().time.length - 1; index++) {
                if (d.data().time[index].idSubject === idSubject) {
                  havecos.push("s");
                }
              }
              if (havecos.length > 0) {
                let sumH = d.data().hours - sum;
              if (sumH <1 ) {
                db.collection("teacherSchedule")
                .doc(d.id)
                .update({
                  hours: 0,
                });
              } else {
                db.collection("teacherSchedule")
                .doc(d.id)
                .update({
                  hours: Number(sumH),
                });
              }
              }
            });
          }
        });
    }
  });
exports.delCourse = functions.firestore
  .document("course/{userid}")
  .onDelete(async (snap, context) => {
    let idSubject = snap.data().idSubject;
    let hours = snap.data().hours;
    await db
      .collection("teacherSchedule")
      .get()
      .then((sn) => {
        sn.forEach((d) => {
          if (d.data().time.length !== 0) {
            let dataChange = [];
            let havecos = [];
            for (let index = 0; index < d.data().time.length - 1; index++) {
              if (d.data().time[index].idSubject !== idSubject) {
                dataChange.push(d.data().time[index]);
              } else {
                havecos.push("a");
              }
            }
            let sunH = Number(hours) + Number(d.data().hours);
            if (d.data().time.length !== dataChange.length) {
              db.collection("teacherSchedule")
                .doc(d.id)
                .update({
                  hours: Number(sunH),
                  time: dataChange,
                });
            }
          }
        });
      });
    await db
      .collection("classSchedule")
      .get()
      .then((sn) => {
        sn.forEach((d) => {
          if (d.data().time.length !== 0) {
            let dataChange = [];
            for (let index = 0; index < d.data().time.length - 1; index++) {
              if (d.data().time[index].idSubject !== idSubject) {
                dataChange.push(d.data().time[index]);
              }
            }
            if (d.data().time.length !== dataChange.length) {
              db.collection("classSchedule").doc(d.id).update({
                time: dataChange,
              });
            }
          }
        });
      });
    await db
      .collection("classroomSchedule")
      .get()
      .then((sn) => {
        sn.forEach((d) => {
          if (d.data().time.length !== 0) {
            let dataChange = [];
            for (let index = 0; index < d.data().time.length - 1; index++) {
              if (d.data().time[index].idSubject !== idSubject) {
                dataChange.push(d.data().time[index]);
              }
            }
            if (d.data().time.length !== dataChange.length) {
              db.collection("classroomSchedule").doc(d.id).update({
                time: dataChange,
              });
            }
          }
        });
      });
  });

exports.editSubject = functions.firestore
  .document("subject/{userid}")
  .onUpdate(async (snap, context) => {
    let aC = snap.after.data().creditSubject;
    let bC = snap.before.data().creditSubject;
    let idSubject = snap.after.data().idSubject;
    if (aC !== bC) {
      await db
        .collection("course")
        .get()
        .then((sn) => {
          sn.forEach((d) => {
            if (d.data().idSubject === idSubject) {
              let sumH = aC * 2;
              db.collection("course")
                .doc(d.id)
                .update({
                  hours: Number(sumH),
                });
            }
          });
        });
    }
  });
exports.delSubject = functions.firestore
  .document("subject/{userid}")
  .onDelete(async (snap, context) => {
    let idSubject = snap.data().idSubject;
    await db
      .collection("course")
      .get()
      .then((sn) => {
        if (sn.docs.length !== 0) {
          sn.forEach(async (d) => {
            if (d.data().idSubject === idSubject) {
              await db.collection("course").doc(d.id).delete();
            }
          });
        }
      });
    await db
      .collection("teacher")
      .get()
      .then((sn) => {
        if (sn.docs.length !== 0) {
          sn.forEach((d) => {
            let main = [];
            let sec = [];
            if (d.data().mainGroupLearning.length !== 0) {
              for (let index = 0; index <= d.data().mainGroupLearning.length-1; index++) {
                if (d.data().mainGroupLearning[index] !== idSubject) {
                  main.push(d.data().mainGroupLearning[index])
                }
              }
            }
            if (d.data().secondaryGroupLearning.length !== 0) {
              for (let index = 0; index <= d.data().secondaryGroupLearning.length-1; index++) {
                if (d.data().secondaryGroupLearning[index] !== idSubject) {
                  sec.push(d.data().secondaryGroupLearning[index])
                }
              }
            }
            db.collection("teacher")
                .doc(d.id)
                .update({
                  mainGroupLearning: main,
                  secondaryGroupLearning: sec,
                });
          });
        }
      });
  });
