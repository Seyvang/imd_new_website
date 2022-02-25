import React, { useEffect } from "react";
import { members } from "../../data/members";
import { Container } from "react-bootstrap";
import Link from 'next/link'

function MemberID({ member, memberIndex }) {
  // useEffect(async () => {
  //   const response = await fetch(`/api/members/${memberIndex}`);
  //   // , {
  //   //   method: 'POST',
  //   //   memberid: memberIndex
  //   // }
  //   // const data = await response.json()
  // }, []);

  return (
    <Container className="bg-light">
      <h1>{member.name}</h1>
      <Link href={`/assets/CVs/${member.name}.pdf`}>
        <a>CV</a>
      </Link>
      <p>
        Cillum cupidatat voluptate veniam et quis pariatur tempor eu eiusmod
        dolore et ea consequat. Cupidatat do fugiat dolore fugiat in mollit qui.
        Dolore nulla officia aute pariatur velit ex sint laboris sunt.
      </p>
    </Container>
  );
}

export default MemberID;

export async function getStaticProps(context) {
  const { params } = context;
  const { memberid } = params;

  return {
    props: {
      member: members[memberid - 1],
      memberIndex: memberid,
    },
  };
}

export async function getStaticPaths() {
  let totalList = [];
  const NumMembers = members.length;
  for (let i = 1; i <= NumMembers; i++) {
    totalList.push({
      params: { memberid: `${i}` },
    });
  }
  // console.log(totalList)
  return {
    paths: totalList,
    fallback: false,
  };
}
