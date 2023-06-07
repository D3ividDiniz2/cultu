import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Arrow9Icon } from './Arrow9Icon.js';
import classes from './Home_desktop_cadastrado.module.css';
import { User__fotoIcon } from './User__fotoIcon.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 1:20 */
export const Home_desktop_cadastrado: FC<Props> = memo(function Home_desktop_cadastrado(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rodape}>
        <div className={classes.arrow9}>
          <Arrow9Icon className={classes.icon} />
        </div>
        <div className={classes.voltarAoTopo}>Voltar ao topo</div>
        <div className={classes.Copyright20002022GerminareComu}>
          <div className={classes.textBlock}>© Copyright 2000-2022 Germinare Comunicações</div>
          <div className={classes.textBlock2}>Feito pelo time da PicPay</div>
        </div>
        <div className={classes.vector}>
          <VectorIcon className={classes.icon2} />
        </div>
        <div className={classes.germinare}>Germinare</div>
      </div>
      <div className={classes.reportagemdestaque}>
        <div className={classes.rectangle29}></div>
        <div className={classes.rectangle31}></div>
        <div className={classes._2642022}>26/04/2022</div>
        <div className={classes.raulSanchesDiretorDaAcademiaOr}>
          Raul Sanches, diretor da academia Original é promovido, acompanhe detalhes.
        </div>
        <div className={classes.rectangle292}></div>
        <div className={classes.rectangle312}></div>
        <div className={classes._2782022}>27/08/2022</div>
        <div className={classes.alunosDo1AnoAPicPayFazemWebSit}>
          Alunos do 1° ano A PicPay Fazem web-site do Gazeta, veja como foi nos bastidores
        </div>
        <div className={classes.rectangle293}></div>
        <div className={classes.rectangle313}></div>
        <div className={classes._1562022}>15/06/2022</div>
        <div className={classes.AlunosDo7AnoTemPalestraComDire}>
          “Alunos do 7º ano tem palestra com diretoria da Seara.”
        </div>
      </div>
      <div className={classes.reportagemdestaque2}>
        <div className={classes.joesleyPropoeCompeticaoDePingP}>
          Joesley propõe competição de ping-pong para alunos do 6° ano.
        </div>
        <div className={classes.loremIpsumDolorSitAmetConsecte}>
          <div className={classes.textBlock3}>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis
            tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit
            sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.
          </div>
          <div className={classes.textBlock4}>
            {' '}
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor
            purus luctus enim egestas, ac scelerisque ante pulvinar, sed dignissim, metus nec fringilla accumsan, risus
            sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas ege.
          </div>
        </div>
        <div className={classes.rectangle9}></div>
        <div className={classes._27820222}>27/08/2022</div>
        <div className={classes.entretenimento}>Entretenimento</div>
      </div>
      <div className={classes.hall__container}>
        <div className={classes.alunosDoInstitutoVisitamFEBRAB}>
          Alunos do Instituto visitam FEBRABAN, Federação Brasileira de Bancos
        </div>
        <div className={classes.alunosDeTodosOsAnosForamConvid}>
          Alunos de todos os anos foram convidados para visitar o maior evento bancário da américa latina.
        </div>
        <div className={classes.instituto}>Instituto</div>
        <div className={classes._27820223}>27/08/2022</div>
        <div className={classes.rectangle294}></div>
        <div className={classes.rectangle314}></div>
        <div className={classes._27820224}>27/08/2022</div>
        <div className={classes.EstamosProntosParaDarOProximoP}>“Estamos prontos para dar o próximo passo.”</div>
        <div className={classes.rectangle295}></div>
        <div className={classes.rectangle315}></div>
        <div className={classes._15620222}>15/06/2022</div>
        <div className={classes.entrevistaComNovoProfessorDePi}>
          Entrevista com novo professor de ping-pong do Instituto.
        </div>
      </div>
      <div className={classes.header}>
        <div className={classes.user__foto}>
          <User__fotoIcon className={classes.icon3} />
        </div>
        <div className={classes.deividDiniz}>Deivid Diniz </div>
        <div className={classes.nounMenu10185801}></div>
        <div className={classes.picPayCultural}>
          <p className={classes.labelWrapper}>
            <span className={classes.label}>PicPay</span>
            <span className={classes.label2}> Cultural</span>
          </p>
        </div>
      </div>
    </div>
  );
});
